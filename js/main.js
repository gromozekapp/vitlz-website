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
                showNotification('Пожалуйста, заполните все поля', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Пожалуйста, введите корректный email', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Отправляем сообщение...', 'info');
            
            // Here you would typically send the data to your server
            setTimeout(() => {
                showNotification('Сообщение успешно отправлено!', 'success');
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
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
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
        if (dialog) dialog.focus();
        acceptBtn.addEventListener('click', () => {
            try {
                localStorage.setItem('cookie_consent', 'accepted');
                localStorage.setItem('cookie_consent_v', CONSENT_VERSION);
            } catch (e) {}
            closeModal();
        });
        declineBtn.addEventListener('click', () => {
            try {
                localStorage.setItem('cookie_consent', 'declined');
                localStorage.setItem('cookie_consent_v', CONSENT_VERSION);
            } catch (e) {}
            closeModal();
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
});
