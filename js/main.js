/**
 * Pictris Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    initMobileNavPicker();
    function initMobileNavPicker() {
        const pickers = document.querySelectorAll('.mobile-nav-select');
        if (!pickers.length) return;
        pickers.forEach((picker) => {
            picker.addEventListener('change', function() {
                const value = this.value;
                if (!value) return;
                if (value.startsWith('#')) {
                    const target = document.querySelector(value);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    window.location.href = value;
                }
                setTimeout(() => { this.value = ''; }, 250);
            });
        });
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Sending message...', 'info');
            
            // Here you would typically send the data to your server
            setTimeout(() => {
                showNotification('Message sent successfully!', 'success');
                this.reset();
            }, 2000);
        });
    }
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-up class
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const siteNavigation = document.querySelector('.site-navigation');
    
    if (mobileMenuToggle && siteNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            siteNavigation.classList.toggle('active');
            this.classList.toggle('active');
            const expanded = siteNavigation.classList.contains('active') ? 'true' : 'false';
            this.setAttribute('aria-expanded', expanded);
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    // Fallback language switch binding (in case i18n init missed)
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('change', function() {
            if (window.setLanguage) {
                window.setLanguage(this.value || 'en');
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // (removed scroll parallax on entire hero-section to avoid layout gap)
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // -------- Order modal (Buy) ----------
    initOrderModal();
    function initOrderModal() {
        const buyButtons = document.querySelectorAll('.buy-button');
        const modal = document.getElementById('order-modal');
        const dialog = modal ? modal.querySelector('.order-modal__dialog') : null;
        const closeBtn = modal ? modal.querySelector('.order-modal__close') : null;
        const productLabel = modal ? modal.querySelector('#order-modal-product') : null;
        const productInput = modal ? modal.querySelector('#order-product-input') : null;
        const form = modal ? modal.querySelector('#order-form') : null;
        if (!buyButtons.length || !modal || !dialog || !closeBtn || !form) return;

        const emailTo = 'info@vitlz.eu';
        const endpoint = window.FORMSPREE_ENDPOINT || null; // e.g. https://formspree.io/f/xxxx

        function open(productName) {
            if (productLabel) productLabel.textContent = productName || '';
            if (productInput) productInput.value = productName || '';
            modal.classList.add('is-visible');
            try { document.body.style.overflow = 'hidden'; } catch (e) {}
            setTimeout(() => dialog.focus(), 0);
        }
        function close() {
            modal.classList.remove('is-visible');
            try { document.body.style.overflow = ''; } catch (e) {}
        }

        buyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const product = btn.getAttribute('data-product') || 'VITLZ Product';
                open(product);
            });
        });
        closeBtn.addEventListener('click', close);
        modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-visible')) close(); });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = (document.getElementById('order-name') || {}).value || '';
            const email = (document.getElementById('order-email') || {}).value || '';
            const phone = (document.getElementById('order-phone') || {}).value || '';
            const comment = (document.getElementById('order-comment') || {}).value || '';
            const product = (document.getElementById('order-product-input') || {}).value || '';
            if (!name || !email || !phone) {
                showNotification((window.__t && __t('order.required')) || 'Please fill in the required fields', 'error');
                return;
            }
            const payload = { name, email, phone, comment, product, page: window.location.href };
            try {
                if (endpoint) {
                    const res = await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (!res.ok) throw new Error(String(res.status));
                    showNotification((window.__t && __t('order.success')) || 'Request sent. We will contact you soon!', 'success');
                } else {
                    const subject = `Order request: ${product}`;
                    const body =
                        `Product: ${product}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComment: ${comment}\nPage: ${window.location.href}`;
                    const href = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = href;
                    showNotification((window.__t && __t('order.mailto')) || 'Email client opened to send your request', 'info');
                }
                form.reset();
                close();
            } catch (err) {
                showNotification((window.__t && __t('order.failed')) || 'Failed to submit. Please try again later.', 'error');
            }
        });
    }
    
    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.backgroundColor = '#10b981';
                break;
            case 'error':
                notification.style.backgroundColor = '#ef4444';
                break;
            case 'warning':
                notification.style.backgroundColor = '#f59e0b';
                break;
            default:
                notification.style.backgroundColor = '#3b82f6';
        }
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    // Add some interactive effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // (typing effect removed for accessibility)
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // Add back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.cta-button, .submit-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Cookie consent modal + image format upgrade
    initCookieConsent();
    upgradeImagesToModernFormats();
    
    function initCookieConsent() {
        const CONSENT_VERSION = 'v2';
        try {
            const params = new URLSearchParams(window.location.search);
            if (params.get('consent') === 'reset') {
                localStorage.removeItem('cookie_consent');
                localStorage.removeItem('cookie_consent_v');
            }
        } catch (e) {}
        
        try {
            const stored = localStorage.getItem('cookie_consent');
            const ver = localStorage.getItem('cookie_consent_v');
            if (stored && ver === CONSENT_VERSION) return;
        } catch (e) {}
        
        const modal = document.createElement('div');
        modal.className = 'cookie-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Cookie consent');
        modal.innerHTML = `
            <div class="cookie-modal__dialog" tabindex="-1">
                <div class="cookie-modal__title">Cookies</div>
                <div class="cookie-modal__text">
                    We use cookies to improve your experience. See our
                    <a href="https://www.vitlz.eu" target="_blank" rel="noreferrer">Privacy Policy</a>.
                </div>
                <div class="cookie-modal__actions">
                    <button type="button" class="cookie-modal__btn cookie-accept">Accept</button>
                    <button type="button" class="cookie-modal__btn cookie-modal__btn--secondary cookie-decline">Decline</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        const dialog = modal.querySelector('.cookie-modal__dialog');
        const acceptBtn = modal.querySelector('.cookie-accept');
        const declineBtn = modal.querySelector('.cookie-decline');
        const closeModal = () => {
            try { document.body.style.overflow = ''; } catch (e) {}
            modal.remove();
        };
        try { document.body.style.overflow = 'hidden'; } catch (e) {}
        // animate in (bottom sheet)
        requestAnimationFrame(() => {
            modal.classList.add('is-visible');
            if (dialog) dialog.focus();
        });
        acceptBtn.addEventListener('click', () => {
            try {
                localStorage.setItem('cookie_consent', 'accepted');
                localStorage.setItem('cookie_consent_v', CONSENT_VERSION);
            } catch (e) {}
            modal.classList.remove('is-visible');
            setTimeout(closeModal, 250);
        });
        declineBtn.addEventListener('click', () => {
            try {
                localStorage.setItem('cookie_consent', 'declined');
                localStorage.setItem('cookie_consent_v', CONSENT_VERSION);
            } catch (e) {}
            modal.classList.remove('is-visible');
            setTimeout(closeModal, 250);
        });
        // Close on backdrop click or Esc
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                declineBtn.click();
            }
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                declineBtn.click();
            }
        }, { once: true });
    }
    
    function upgradeImagesToModernFormats() {
        const imgs = Array.from(document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]'));
        imgs.forEach((img) => {
            const url = new URL(img.getAttribute('src'), window.location.href);
            const srcNoExt = url.pathname.replace(/\.(jpe?g|png)$/i, '');
            tryFormat(img, `${srcNoExt}.avif`, () => {}, () => {
                tryFormat(img, `${srcNoExt}.webp`);
            });
        });
        function tryFormat(img, candidateSrc, onOk, onFail) {
            const test = new Image();
            test.onload = () => { img.src = candidateSrc; if (onOk) onOk(); };
            test.onerror = () => { if (onFail) onFail(); };
            test.src = candidateSrc;
        }
    }

    // -------- Hero Space Canvas (stars + pills) --------
    initHeroSpaceCanvas();
    function initHeroSpaceCanvas() {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;
        const canvas = document.getElementById('space-bg-hero');
        if (!canvas) return;
        const section = canvas.parentElement;
        if (!section) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let deviceScale = 1;
        let width = 0, height = 0;

        function resize() {
            const rect = section.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));
            deviceScale = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(width * deviceScale);
            canvas.height = Math.floor(height * deviceScale);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
        }
        resize();
        window.addEventListener('resize', () => {
            resize();
            initLayers(); // re-seed based on new size
        });

        const rnd = (a, b) => Math.random() * (b - a) + a;
        const pick = (arr) => arr[(Math.random() * arr.length) | 0];

        const brandPalette = ['#67e8f9', '#a78bfa', '#ff66cc', '#c084fc', '#60a5fa'];

        let mouseX = width / 2;
        let mouseY = height / 2;
        window.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        const layers = [
            { depth: 0.2, stars: [], pills: [], starDensity: 0.06, pillDensity: 0.004 },
            { depth: 0.5, stars: [], pills: [], starDensity: 0.04, pillDensity: 0.003 },
            { depth: 0.9, stars: [], pills: [], starDensity: 0.025, pillDensity: 0.002 }
        ];

        function initLayers() {
            layers.forEach(layer => {
                const area = (width * height) / 10000; // normalize to 100x100 "units"
                const starCount = Math.max(10, Math.floor(area * layer.starDensity * 60));
                const pillCount = Math.max(2, Math.floor(area * layer.pillDensity * 60));
                layer.stars = Array.from({ length: starCount }, () => ({
                    x: rnd(0, width),
                    y: rnd(0, height),
                    r: rnd(0.5, 1.6) * layer.depth,
                    t: rnd(0, Math.PI * 2),
                    tw: rnd(0.015, 0.03) * layer.depth
                }));
                layer.pills = Array.from({ length: pillCount }, () => ({
                    x: rnd(-40, width + 40),
                    y: rnd(-40, height + 40),
                    s: rnd(0.6, 1.2) * layer.depth,
                    rot: rnd(0, Math.PI * 2),
                    rotSpeed: rnd(-0.01, 0.01),
                    vx: rnd(-0.12, 0.12) * layer.depth,
                    vy: rnd(0.05, 0.22) * layer.depth,
                    colorA: pick(brandPalette),
                    colorB: pick(brandPalette),
                    gloss: Math.random() < 0.6
                }));
            });
        }
        initLayers();

        function drawStar(s, layer, px, py) {
            const tw = 0.5 + 0.5 * Math.sin(s.t);
            ctx.fillStyle = `rgba(255,255,255,${0.25 + 0.6 * tw})`;
            ctx.beginPath();
            ctx.arc(px, py, s.r, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawCapsule(cx, cy, w, h, rotation, colorA, colorB, gloss) {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rotation);
            const r = Math.min(w, h) * 0.5;
            const rw = (w - 2 * r);
            const x0 = -w / 2, y0 = -h / 2;

            // body
            const grad = ctx.createLinearGradient(x0, 0, x0 + w, 0);
            grad.addColorStop(0, colorA);
            grad.addColorStop(1, colorB);
            ctx.fillStyle = grad;

            ctx.beginPath();
            // left cap
            ctx.arc(x0 + r, 0, r, Math.PI / 2, Math.PI * 1.5);
            // top edge to right cap
            ctx.lineTo(x0 + r + rw, -h / 2);
            // right cap
            ctx.arc(x0 + r + rw, 0, r, Math.PI * 1.5, Math.PI / 2);
            // bottom edge back
            ctx.closePath();
            ctx.fill();

            // subtle stroke
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // gloss highlight
            if (gloss) {
                ctx.globalAlpha = 0.35;
                ctx.fillStyle = '#ffffff';
                const glossW = w * 0.6;
                const glossH = h * 0.25;
                ctx.beginPath();
                ctx.ellipse(-w * 0.15, -h * 0.15, glossW * 0.35, glossH * 0.35, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            ctx.restore();
        }

        let animationId = null;
        function tick() {
            ctx.clearRect(0, 0, width, height);
            const parX = (mouseX / width - 0.5);
            const parY = (mouseY / height - 0.5);

            layers.forEach(layer => {
                // stars
                for (let i = 0; i < layer.stars.length; i++) {
                    const s = layer.stars[i];
                    s.t += s.tw;
                    const px = s.x + parX * 30 * layer.depth;
                    const py = s.y + parY * 30 * layer.depth;
                    drawStar(s, layer, px, py);
                }
                // pills
                for (let i = 0; i < layer.pills.length; i++) {
                    const p = layer.pills[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.rot += p.rotSpeed;
                    if (p.y > height + 60) { p.y = -60; p.x = rnd(-40, width + 40); }
                    if (p.x < -80) p.x = width + 80;
                    if (p.x > width + 80) p.x = -80;
                    const px = p.x + parX * 60 * layer.depth;
                    const py = p.y + parY * 60 * layer.depth;
                    const base = rnd(28, 44) * p.s; // randomized width on each frame causes flicker; cache it
                    // To avoid flicker, derive dimensions from a stable seed: use rotSpeed
                    const seed = Math.abs(p.rotSpeed) * 1000;
                    const w = (32 + (seed % 12)) * p.s;
                    const h = (12 + (seed % 6)) * p.s;
                    drawCapsule(px, py, w, h, p.rot, p.colorA, p.colorB, p.gloss);
                }
            });
            animationId = requestAnimationFrame(tick);
        }
        tick();

        // Pause when section not in viewport to save battery
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target !== section) return;
                if (entry.isIntersecting) {
                    if (!animationId) tick();
                } else {
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                    }
                }
            });
        }, { threshold: 0.01 });
        io.observe(section);
    }
});
