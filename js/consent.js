(function () {
    const CONSENT_VERSION = 'v3';
    const BEACON_SRC = 'https://static.cloudflareinsights.com/beacon.min.js';
    const BEACON_TOKEN = '20be307a45424da09d830e0dfc48ad2b';

    function text(key, fallback) {
        if (window.__t) {
            const value = window.__t(key);
            if (value) return value;
        }
        return fallback;
    }

    function privacyHref() {
        const inBlog = /\/blog\//.test(window.location.pathname);
        return (inBlog ? '../' : '') + 'privacy-policy.html';
    }

    function loadBeacon() {
        if (document.querySelector('script[data-cf-beacon]')) return;
        const script = document.createElement('script');
        script.src = BEACON_SRC;
        script.defer = true;
        script.setAttribute('data-cf-beacon', JSON.stringify({ token: BEACON_TOKEN }));
        document.body.appendChild(script);
    }

    function readChoice() {
        try {
            if (localStorage.getItem('cookie_consent_v') !== CONSENT_VERSION) return null;
            return localStorage.getItem('cookie_consent');
        } catch (e) {
            return null;
        }
    }

    function saveChoice(value) {
        try {
            localStorage.setItem('cookie_consent', value);
            localStorage.setItem('cookie_consent_v', CONSENT_VERSION);
        } catch (e) {}
    }

    function trap(dialog, event) {
        if (event.key !== 'Tab') return;
        const nodes = Array.from(dialog.querySelectorAll('a[href], button:not([disabled])'));
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function openBanner() {
        if (document.querySelector('.cookie-modal')) return;
        const modal = document.createElement('div');
        modal.className = 'cookie-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', text('cookie.title', 'Cookies'));
        modal.innerHTML = `
            <div class="cookie-modal__dialog" tabindex="-1">
                <div class="cookie-modal__title">${text('cookie.title', 'Cookies')}</div>
                <div class="cookie-modal__text">
                    ${text('cookie.text', 'We use cookies to improve your experience. Analytics loads only if you accept. See our')}
                    <a href="${privacyHref()}">${text('footer.privacy', 'Privacy')}</a>.
                </div>
                <div class="cookie-modal__actions">
                    <button type="button" class="cookie-modal__btn cookie-accept">${text('cookie.accept', 'Accept')}</button>
                    <button type="button" class="cookie-modal__btn cookie-modal__btn--secondary cookie-decline">${text('cookie.decline', 'Decline')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const dialog = modal.querySelector('.cookie-modal__dialog');
        const closeModal = () => {
            try { document.body.style.overflow = ''; } catch (e) {}
            modal.remove();
        };
        try { document.body.style.overflow = 'hidden'; } catch (e) {}
        requestAnimationFrame(() => {
            modal.classList.add('is-visible');
            if (dialog) dialog.focus();
        });
        dialog.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') decline();
            trap(dialog, event);
        });
        function accept() {
            saveChoice('accepted');
            loadBeacon();
            modal.classList.remove('is-visible');
            setTimeout(closeModal, 250);
        }
        function decline() {
            saveChoice('declined');
            modal.classList.remove('is-visible');
            setTimeout(closeModal, 250);
        }
        modal.querySelector('.cookie-accept').addEventListener('click', accept);
        modal.querySelector('.cookie-decline').addEventListener('click', decline);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) decline();
        });
    }

    function boot() {
        const choice = readChoice();
        if (choice === 'accepted') loadBeacon();
        else if (choice !== 'declined') openBanner();
    }

    document.addEventListener('click', (event) => {
        const opener = event.target.closest && event.target.closest('[data-consent-open]');
        if (!opener) return;
        event.preventDefault();
        openBanner();
    });

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();
