// Serenya Website - Main JavaScript
// Basic functionality for mobile menu and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileMenuToggle && navbarNav) {
        mobileMenuToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('mobile-nav-open');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                if (q.nextElementSibling) {
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            if (!isActive) {
                this.classList.add('active');
                if (answer) {
                    answer.classList.add('active');
                }
            }
        });
    });
    
    // Smart CTA routing - detect mobile vs desktop
    const smartCTAs = document.querySelectorAll('[data-smart-cta]');
    
    smartCTAs.forEach(cta => {
        // Check if user is on mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Detect iOS vs Android
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const isAndroid = /Android/.test(navigator.userAgent);
            
            if (isIOS) {
                cta.href = 'https://apps.apple.com/app/serenya/[app-id]';
            } else if (isAndroid) {
                cta.href = 'https://play.google.com/store/apps/details?id=com.serenya.app';
            } else {
                // Fallback to download page
                cta.href = 'pages/download.html';
            }
        } else {
            // Desktop users go to download page
            cta.href = 'pages/download.html';
        }
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                const value = field.value.trim();
                const errorElement = field.parentElement.querySelector('.field-error');
                
                // Remove existing error states
                field.classList.remove('error');
                if (errorElement) {
                    errorElement.remove();
                }
                
                // Basic validation
                if (!value) {
                    isValid = false;
                    showFieldError(field, 'This field is required');
                } else if (field.type === 'email' && !isValidEmail(value)) {
                    isValid = false;
                    showFieldError(field, 'Please enter a valid email address');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Helper function to show field errors
    function showFieldError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentElement.appendChild(errorElement);
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add loading state to form submission (only if form exists and is valid)
    const submitButton = contactForm?.querySelector('button[type="submit"]');
    
    if (submitButton && contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Only add loading state if form passes validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                submitButton.classList.add('btn-loading');
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
        });
    }
    
    // Analytics tracking for CTAs (placeholder for actual analytics)
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonHref = this.href || this.getAttribute('data-href');
            
            // Placeholder for analytics tracking
            console.log('CTA clicked:', {
                text: buttonText,
                href: buttonHref,
                timestamp: new Date().toISOString()
            });
            
            // Replace with actual analytics code:
            // gtag('event', 'click', {
            //     event_category: 'CTA',
            //     event_label: buttonText,
            //     value: 1
            // });
        });
    });
    
    // Intersection Observer for animations (optional enhancement)
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe cards and feature elements
        const animatedElements = document.querySelectorAll('.card, .feature-card, .privacy-feature');
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});

// Add fade-in animation styles (keeping these dynamic since they're enhancement)
const animationStyles = `
.fade-in {
    animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Inject animation styles for progressive enhancement
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);