// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact buttons functionality
document.addEventListener('DOMContentLoaded', function() {
    const phoneBtn = document.querySelector('a[href^="tel:"]');
    const emailBtn = document.querySelector('a[href^="mailto:"]');
    
    if (phoneBtn) {
        phoneBtn.addEventListener('click', function(e) {
            console.log('Phone button clicked');
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            console.log('Email button clicked');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Fallback for email clients that might not work
            setTimeout(() => {
                const email = 'mpdoor1@gmail.com';
                const subject = 'Piano Tuning Service Inquiry';
                const body = 'Hello,\n\nI would like to schedule a piano tuning appointment.\n\nMy piano details:\n- Piano type: \n- Location: \n- Preferred date/time: \n\nThank you!';
                
                // Show a helpful message if the email client doesn't open
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #DC143C;
                    color: white;
                    padding: 15px;
                    border-radius: 5px;
                    z-index: 10000;
                    max-width: 350px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                `;
                notification.innerHTML = `
                    <strong>Email Client Not Opening?</strong><br>
                    Please email me directly at: <strong>${email}</strong><br>
                    <small>Subject: ${subject}</small>
                    <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; color: white; font-size: 16px; cursor: pointer;">×</button>
                `;
                
                document.body.appendChild(notification);
                
                // Auto remove after 8 seconds
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 8000);
                
            }, 2000); // Wait 2 seconds to see if email client opens
        });
    }
});

// Enhanced button interactions
function addButtonRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const size = Math.max(this.offsetWidth, this.offsetHeight);
            const x = e.offsetX - size / 2;
            const y = e.offsetY - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .about-content, .contact-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for the hero section
window.addEventListener('load', function() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .piano-illustration');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Count up animation for stats
function animateCountUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target.toString().includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else if (target.toString().includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger count up animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            // Handle each stat differently
            statNumbers.forEach((stat, index) => {
                if (index === 0) {
                    // Pianos tuned - animate from 0 to 500+
                    let currentValue = 0;
                    const timer = setInterval(() => {
                        currentValue += 25;
                        if (currentValue >= 500) {
                            stat.textContent = '500+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = currentValue.toString();
                        }
                    }, 50);
                } else if (index === 1) {
                    // Years experience - animate from 0 to 10+
                    let currentValue = 0;
                    const timer = setInterval(() => {
                        currentValue += 1;
                        if (currentValue >= 10) {
                            stat.textContent = '10+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = currentValue.toString();
                        }
                    }, 100);
                } else if (index === 2) {
                    // Satisfaction rate - set directly to 100% (no animation to avoid issues)
                    stat.textContent = '100%';
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Initialize button ripple effects
    addButtonRippleEffect();
    
    // Immediate fallback to ensure satisfaction rate shows correctly
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        // Set satisfaction rate immediately, no animation
        statNumbers[2].textContent = '100%';  // Satisfaction rate
    }
    
    // Additional fallback after a short delay
    setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = '500+';  // Pianos tuned
            statNumbers[1].textContent = '10+';   // Years experience  
            statNumbers[2].textContent = '100%';  // Satisfaction rate
        }
    }, 3000); // After 3 seconds, ensure all correct values are shown
}); 