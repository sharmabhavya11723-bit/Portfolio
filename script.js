// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Enhanced Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 107, 157, 0.15)';
        navbar.style.borderBottom = '1px solid rgba(233, 236, 239, 0.8)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 1)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(233, 236, 239, 0.5)';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Enhanced Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add special effects for different element types
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
            
            if (entry.target.classList.contains('laptop-mockup')) {
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.opacity = '1';
            }
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections with staggered timing
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.animationDelay = `${index * 0.2}s`;
        observer.observe(section);
    });

    // Animate project cards with enhanced effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.animationDelay = `${index * 0.15}s`;
        observer.observe(card);
        
        // Add hover effect listener
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02) rotateZ(1deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
        });
    });

    // Animate education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.classList.add('slide-in-left');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.classList.add('slide-in-right');
        item.style.animationDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // Animate achievement cards with special effects
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate skill bars with enhanced timing
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(bar);
    });

    // Initialize laptop mockup animation
    const laptopMockup = document.querySelector('.laptop-mockup');
    if (laptopMockup) {
        laptopMockup.style.opacity = '0';
        laptopMockup.style.transform = 'translateY(50px) scale(0.9)';
        observer.observe(laptopMockup);
    }
});

// Enhanced Typing Effect for Hero Title
function typeWriter() {
    const text = "Hi, I'm Bhavya Sharma";
    const heroTitle = document.querySelector('.hero-title');
    let index = 0;

    function type() {
        if (index < text.length) {
            heroTitle.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(type, 80);
        } else {
            heroTitle.innerHTML = text + '<span class="cursor">|</span>';
            // Enhanced cursor animation
            const cursor = heroTitle.querySelector('.cursor');
            if (cursor) {
                cursor.style.animation = 'blink 1s infinite';
                setTimeout(() => {
                    cursor.style.opacity = '0';
                }, 3000);
            }
        }
    }

    type();
}

// Enhanced Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroProfile = document.querySelector('.hero-profile');
    const heroBackgroundShape = document.querySelector('.hero-background-shape');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
    
    if (heroProfile) {
        heroProfile.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 - scrolled / 2000})`;
    }
    
    if (heroBackgroundShape) {
        heroBackgroundShape.style.transform = `translateY(${scrolled * 0.1}px) scale(${1 + scrolled / 1000})`;
    }
});

// Enhanced Button Ripple Effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.8s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 800);
    });
});

// Enhanced Social Link Hover Effects
const socialLinksEnhanced = document.querySelectorAll('.social-link');
socialLinksEnhanced.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(15deg) scale(1.1)';
        this.style.boxShadow = '0 8px 25px rgba(0, 102, 255, 0.3)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Enhanced Skill Tag Hover Effects
const skillTagsEnhanced = document.querySelectorAll('.tag');
skillTagsEnhanced.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
        this.style.boxShadow = '0 4px 15px rgba(0, 102, 255, 0.2)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Enhanced Achievement Card Hover Effects
const achievementCardsEnhanced = document.querySelectorAll('.achievement-card');
achievementCardsEnhanced.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) rotateZ(2deg) scale(1.02)';
        const icon = this.querySelector('.achievement-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(15deg)';
            icon.style.boxShadow = '0 8px 25px rgba(0, 102, 255, 0.4)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateZ(0deg) scale(1)';
        const icon = this.querySelector('.achievement-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = 'none';
        }
    });
});

// Enhanced Contact Form Interactions
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Enhanced validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        shakeForm();
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        shakeForm();
        return;
    }
    
    // Enhanced form submission animation
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Form shake animation
function shakeForm() {
    const form = document.getElementById('contactForm');
    form.style.animation = 'shake 0.5s';
    setTimeout(() => {
        form.style.animation = '';
    }, 500);
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Enhanced styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 20px 30px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    // Enhanced background colors
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #ff6b9d, #ff8fab)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Enhanced animation in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 5000);
}

// Initialize all effects when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 800);
    
    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add enhanced CSS animations to head
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    .cursor {
        animation: blink 1s infinite;
    }
`;
document.head.appendChild(enhancedStyles);

// Console Welcome Message
console.log('%c Welcome to Bhavya Sharma\'s Portfolio! ', 'background: linear-gradient(135deg, #ff6b9d, #ff8fab); color: white; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 5px;');
console.log('%c Designed with passion and creativity ', 'color: #ff6b9d; font-size: 12px; font-style: italic;');
