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

    async function loadData() {
        // Prefer global data (works with file://)
        if (window.__BANK_DATA__ && Array.isArray(window.__BANK_DATA__.items) && window.__BANK_DATA__.items.length) {
            return window.__BANK_DATA__.items;
        }
        // Fallback to JSON fetch
        try {
            const res = await fetch(new URL('./data/bank.json', window.location.href).href, { cache: 'no-store' });
            if (!res.ok) throw new Error(String(res.status));
            const data = await res.json();
            if (data && Array.isArray(data.items)) return data.items;
        } catch {}
        return [];
    }

    function renderNotFound() {
        container.innerHTML = `
            <h1 class="entry-title">Article not found</h1>
            <p><a class="story-link" href="bank.html">Back to Vitamins Bank</a></p>
        `;
    }

    function renderArticle(article, index) {
        const html = sanitizeDomain(article.contentHtml || (article.content || []).map(p => `<p>${escapeHtml(p)}</p>`).join(''));
        container.innerHTML = `
            <p><a class="story-link" href="bank.html">← Back to Vitamins Bank</a></p>
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

    async function init() {
        const idRaw = getParam('id');
        const id = idRaw ? parseInt(idRaw, 10) : NaN;
        const items = await loadData();
        if (!Number.isFinite(id) || id < 0 || id >= items.length) {
            renderNotFound();
            return;
        }
        renderArticle(items[id], id);
    }

    init();
})();


