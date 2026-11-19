/* VITLZ Blog article page — apply language overlay on crawlable English HTML */
(function () {
    const titleEl = document.getElementById('blog-post-title');
    const contentEl = document.getElementById('blog-post-content');
    const dateEl = document.getElementById('blog-post-date');
    if (!titleEl || !contentEl) return;

    function getSlug() {
        const path = window.location.pathname || '';
        const file = path.split('/').pop() || '';
        return file.replace(/\.html$/i, '');
    }

    function getCurrentLang() {
        return (window.I18N && window.I18N.current) || 'en';
    }

    function findPost(slug) {
        const list = window.__BLOG_DATA__ && window.__BLOG_DATA__.items;
        if (!Array.isArray(list)) return null;
        return list.find((item) => item.slug === slug) || null;
    }

    function localized(item, lang) {
        if (!item) return null;
        if (lang === 'en' || !item.translations || !item.translations[lang]) {
            return item;
        }
        return { ...item, ...item.translations[lang] };
    }

    function setMeta(name, content, attr) {
        if (!content) return;
        const selector = attr === 'property'
            ? `meta[property="${name}"]`
            : `meta[name="${name}"]`;
        let el = document.head.querySelector(selector);
        if (!el) {
            el = document.createElement('meta');
            el.setAttribute(attr || 'name', name);
            document.head.appendChild(el);
        }
        el.setAttribute('content', content);
    }

    function apply() {
        const post = findPost(getSlug());
        if (!post) return;
        const lang = getCurrentLang();
        const data = localized(post, lang);
        titleEl.textContent = data.title;
        if (dateEl) dateEl.textContent = post.date || '';
        if (data.contentHtml) contentEl.innerHTML = data.contentHtml;
        document.title = data.seoTitle || data.title;
        setMeta('description', data.seoDescription || data.summary);
        setMeta('og:title', data.seoTitle || data.title, 'property');
        setMeta('og:description', data.seoDescription || data.summary, 'property');
    }

    apply();
    window.addEventListener('i18n:change', apply);
})();
