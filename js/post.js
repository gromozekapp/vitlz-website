/* VITLZ Article page renderer */
(function() {
    const container = document.getElementById('post-container');
    if (!container) return;

    function getParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function getImagePath(index) {
        const num = String(index + 1).padStart(2, '0');
        return `images/bank/bank-${num}.jpg`;
    }

    function getCurrentLang() {
        return (window.I18N && window.I18N.current) || 'en';
    }

    function cloneContent(list) {
        return Array.isArray(list) ? list.slice() : [];
    }

    function cloneArticle(item) {
        if (!item || typeof item !== 'object') return {};
        const copy = { ...item };
        if (Array.isArray(item.content)) {
            copy.content = cloneContent(item.content);
        }
        if (typeof item.contentHtml === 'string') {
            copy.contentHtml = String(item.contentHtml);
        }
        return copy;
    }

    function getTranslationsFor(lang) {
        if (!lang) return null;
        const dict = (window.__BANK_TRANSLATIONS__ && window.__BANK_TRANSLATIONS__[lang]) || null;
        return dict || null;
    }

    function applyTranslation(item, index, lang) {
        const localized = cloneArticle(item);
        const translations = getTranslationsFor(lang);
        const translation = translations && translations[index];
        if (!translation) return localized;
        if (typeof translation.title === 'string') localized.title = translation.title;
        if (typeof translation.summary === 'string') localized.summary = translation.summary;
        if (typeof translation.date === 'string') localized.date = translation.date;
        if (typeof translation.contentHtml === 'string') {
            localized.contentHtml = translation.contentHtml;
            delete localized.content;
        } else if (Array.isArray(translation.content)) {
            localized.content = cloneContent(translation.content);
            delete localized.contentHtml;
        }
        return localized;
    }

    let preloadedCache = null;
    let fallbackCache = null;
    let jsonCache = null;

    function getPreloadedItems() {
        if (Array.isArray(preloadedCache) && preloadedCache.length) {
            return preloadedCache.map(cloneArticle);
        }
        try {
            if (window.__BANK_DATA__ && Array.isArray(window.__BANK_DATA__.items) && window.__BANK_DATA__.items.length) {
                preloadedCache = window.__BANK_DATA__.items.map(cloneArticle);
                return preloadedCache.map(cloneArticle);
            }
        } catch (e) {}
        return null;
    }

    function getFallbackItems() {
        if (Array.isArray(fallbackCache)) {
            return fallbackCache.map(cloneArticle);
        }
        if (Array.isArray(window.__BANK_BASE_EN__)) {
            fallbackCache = window.__BANK_BASE_EN__.map(cloneArticle);
            return fallbackCache.map(cloneArticle);
        }
        fallbackCache = [];
        return [];
    }

    async function fetchJsonItems() {
        if (Array.isArray(jsonCache) && jsonCache.length) {
            return jsonCache.map(cloneArticle);
        }
        try {
            const res = await fetch(new URL('./data/bank.json', window.location.href).href, { cache: 'no-store' });
            if (!res.ok) throw new Error(String(res.status));
            const data = await res.json();
            if (!data || !Array.isArray(data.items) || !data.items.length) throw new Error('empty');
            jsonCache = data.items.map(cloneArticle);
            return jsonCache.map(cloneArticle);
        } catch (e) {
            return null;
        }
    }

    async function loadArticlesForLang(lang) {
        const targetLang = lang || 'en';
        let base = null;
        if (targetLang === 'ru') {
            base = await fetchJsonItems();
        }
        if (!Array.isArray(base) || !base.length) {
            const preloaded = getPreloadedItems();
            if (Array.isArray(preloaded) && preloaded.length) {
                base = preloaded;
            } else if (targetLang !== 'ru') {
                const fallback = getFallbackItems();
                if (Array.isArray(fallback) && fallback.length) {
                    base = fallback;
                }
            }
        }
        if (!Array.isArray(base) || !base.length) {
            const json = await fetchJsonItems();
            if (Array.isArray(json) && json.length) {
                base = json;
            }
        }
        if (!Array.isArray(base) || !base.length) {
            base = getFallbackItems();
        }
        return base.map((item, idx) => applyTranslation(item, idx, targetLang));
    }

    let langRenderToken = 0;
    let articleId = NaN;

    function renderNotFound() {
        const titleText = (window.__t && __t('post.not_found.title')) || 'Article not found';
        const messageText = (window.__t && __t('post.not_found.text')) || 'The requested article could not be found.';
        const backLinkText = (window.__t && __t('post.back.link')) || 'Back to Vitamins Bank';
        container.innerHTML = `
            <h1 class="entry-title" data-i18n="post.not_found.title">${escapeHtml(titleText)}</h1>
            <p data-i18n="post.not_found.text">${escapeHtml(messageText)}</p>
            <p><a class="story-link" href="bank.html" data-i18n="post.back.link">${escapeHtml(backLinkText)}</a></p>
        `;
    }

    function renderArticle(article, index) {
        const html = sanitizeDomain(article.contentHtml || (article.content || []).map(p => `<p>${escapeHtml(p)}</p>`).join(''));
        const backText = (window.__t && __t('post.back')) || '← Back to Vitamins Bank';
        container.innerHTML = `
            <p><a class="story-link" href="bank.html" data-i18n="post.back">${escapeHtml(backText)}</a></p>
            <div class="post-thumbnail">
                <img src="${getImagePath(index)}" alt="${escapeHtml(article.title)}" onerror="this.remove()" />
            </div>
            <h1 class="entry-title">${escapeHtml(article.title)}</h1>
            <div class="entry-meta"><span>${escapeHtml(article.date)}</span></div>
            <div class="entry-content">
                ${html}
            </div>
        `;
    }

    function sanitizeDomain(html) {
        if (!html) return '';
        const pattern = /https?:\/\/(?:www\.)?healthis\.ru\/?/gi;
        return String(html).replace(pattern, '');
    }

    async function renderForLanguage(lang) {
        const token = ++langRenderToken;
        const items = await loadArticlesForLang(lang);
        if (token !== langRenderToken) return;
        if (!Number.isFinite(articleId) || articleId < 0 || articleId >= items.length) {
            renderNotFound();
            return;
        }
        renderArticle(items[articleId], articleId);
    }

    async function init() {
        const idRaw = getParam('id');
        articleId = idRaw ? parseInt(idRaw, 10) : NaN;
        if (!Number.isFinite(articleId) || articleId < 0) {
            renderNotFound();
            return;
        }
        await renderForLanguage(getCurrentLang());
        window.addEventListener('i18n:change', (event) => {
            const lang = event && event.detail && event.detail.lang;
            if (!lang) return;
            renderForLanguage(lang);
        });
    }

    init().catch(() => renderNotFound());
})();


