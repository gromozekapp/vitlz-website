/* VITLZ Blog listing */
(function () {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function getCurrentLang() {
        return (window.I18N && window.I18N.current) || 'en';
    }

    function localizePost(item, lang) {
        const copy = { ...item };
        const overlay = item.translations && item.translations[lang];
        if (overlay) {
            if (overlay.title) copy.title = overlay.title;
            if (overlay.summary) copy.summary = overlay.summary;
        }
        return copy;
    }

    function items() {
        const list = window.__BLOG_DATA__ && window.__BLOG_DATA__.items;
        return Array.isArray(list) ? list : [];
    }

    function createCard(item) {
        const el = document.createElement('article');
        el.className = 'card';
        const summaryLabel = (window.__t && __t('blog.summary')) || 'Summary:';
        const readLabel = (window.__t && __t('blog.read')) || 'Read article';
        el.innerHTML = `
            <img class="bank-thumb" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.remove()" />
            <h3>${escapeHtml(item.title)}</h3>
            <p><strong data-i18n="blog.summary">${summaryLabel}</strong> ${escapeHtml(item.summary || '')}</p>
            <p class="blog-card-meta">${escapeHtml(item.date || '')}</p>
            <p><a class="story-link" href="${escapeHtml(item.href)}">${escapeHtml(readLabel)}</a></p>
        `;
        el.style.cursor = 'pointer';
        el.addEventListener('click', (ev) => {
            const a = ev.target && ev.target.closest && ev.target.closest('a');
            if (a) return;
            window.location.href = item.href;
        });
        return el;
    }

    function render() {
        const lang = getCurrentLang();
        grid.innerHTML = '';
        items().forEach((item) => grid.appendChild(createCard(localizePost(item, lang))));
    }

    render();
    window.addEventListener('i18n:change', render);
})();
