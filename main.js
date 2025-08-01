/* ===== ROMANTIC WEBSITE - MAIN FUNCTIONALITY ===== */

// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    initializeAOS();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeParallax();
    initializeTypewriter();
    initializeLazyLoading();
    initializePerformanceOptimizations();
    initializeMobileOptimizations();
    
    // Add welcome effect
    setTimeout(() => {
        showWelcomeEffect();
    }, 500);
}

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100,
            delay: 0,
            anchorPlacement: 'top-bottom'
        });
    }
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('romanticTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add click animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Change theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('romanticTheme', newTheme);
        updateThemeIcon(newTheme);
        
        // Create sparkle effect
        if (window.romanticParticles) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            window.romanticParticles.createParticleBurst(x, y, 'sparkle');
        }
    });
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Scroll effects and smooth scrolling
function initializeScrollEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Handle scroll events
function handleScroll() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Update parallax elements
    updateParallax(scrollY);
    
    // Check for section visibility and trigger effects
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        if (isVisible && !section.classList.contains('section-visible')) {
            section.classList.add('section-visible');
            triggerSectionEffects(section, index);
        }
    });
}

// Initialize parallax effects
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    parallaxElements.forEach(element => {
        element.style.transform = 'translateZ(0)';
        element.style.willChange = 'transform';
    });
}

// Update parallax elements
function updateParallax(scrollY) {
    const parallaxSlow = document.querySelectorAll('.parallax-slow');
    const parallaxMedium = document.querySelectorAll('.parallax-medium');
    const parallaxFast = document.querySelectorAll('.parallax-fast');
    
    parallaxSlow.forEach(element => {
        const speed = 0.2;
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
    
    parallaxMedium.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
    
    parallaxFast.forEach(element => {
        const speed = 0.8;
        element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
}

// Trigger section-specific effects
function triggerSectionEffects(section, index) {
    const sectionId = section.id;
    
    switch (sectionId) {
        case 'opening':
            triggerOpeningEffects();
            break;
        case 'our-story':
            triggerStoryEffects();
            break;
        case 'our-universe':
            triggerUniverseEffects();
            break;
        case 'secret-room':
            triggerSecretEffects();
            break;
        case 'the-future':
            triggerFutureEffects();
            break;
        case 'finale':
            triggerFinaleEffects();
            break;
    }
}

// Section-specific effect functions
function triggerOpeningEffects() {
    // Already handled by particles and CSS animations
}

function triggerStoryEffects() {
    // Add stagger animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('stagger-item');
        }, index * 200);
    });
}

function triggerUniverseEffects() {
    // Add floating effect to memory bubbles
    const memoryBubbles = document.querySelectorAll('.memory-bubble');
    memoryBubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.classList.add('continuous-float');
        }, index * 100);
    });
}

function triggerSecretEffects() {
    // Add mysterious glow to lock
    const lock = document.getElementById('secretLock');
    if (lock && !lock.classList.contains('unlocked')) {
        lock.classList.add('continuous-glow');
    }
}

function triggerFutureEffects() {
    // Add twinkle effect to dream stars
    const dreamStars = document.querySelectorAll('.dream-star .star');
    dreamStars.forEach((star, index) => {
        setTimeout(() => {
            star.classList.add('continuous-twinkle');
        }, index * 150);
    });
}

function triggerFinaleEffects() {
    // Start typewriter effect for love letter
    startTypewriterEffect();
    
    // Create fireworks effect
    setTimeout(() => {
        createFireworks();
    }, 2000);
}

// Initialize typewriter effect
function initializeTypewriter() {
    // This will be triggered when finale section becomes visible
}

// Start typewriter effect for finale
function startTypewriterEffect() {
    const letterLines = document.querySelectorAll('.letter-line');
    
    letterLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '0';
            line.style.animation = `fadeInUp 1s ease ${index * 0.8}s forwards`;
        }, 500);
    });
}

// Create fireworks effect
function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    if (!fireworksContainer) return;
    
    const colors = ['#FFB6C1', '#E6E6FA', '#F5DEB3', '#FF69B4', '#DDA0DD'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFirework(fireworksContainer, colors);
        }, i * 300);
    }
}

// Create individual firework
function createFirework(container, colors) {
    const firework = document.createElement('div');
    firework.style.position = 'absolute';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 100 + '%';
    firework.style.width = '4px';
    firework.style.height = '4px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.borderRadius = '50%';
    firework.style.animation = 'firework 2s ease-out forwards';
    
    container.appendChild(firework);
    
    // Create explosion particles
    setTimeout(() => {
        createExplosion(firework, colors);
    }, 1000);
    
    // Remove firework
    setTimeout(() => {
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 2000);
}

// Create explosion effect
function createExplosion(center, colors) {
    const rect = center.getBoundingClientRect();
    const containerRect = center.parentNode.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = (rect.left - containerRect.left) + 'px';
        particle.style.top = (rect.top - containerRect.top) + 'px';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        
        const angle = (360 / 12) * i;
        const velocity = 50;
        const radian = angle * (Math.PI / 180);
        const vx = Math.cos(radian) * velocity;
        const vy = Math.sin(radian) * velocity;
        
        particle.style.animation = `explodeParticle 1s ease-out forwards`;
        particle.style.setProperty('--vx', vx + 'px');
        particle.style.setProperty('--vy', vy + 'px');
        
        center.parentNode.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Initialize lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize animations for mobile
    if (window.innerWidth <= 768) {
        optimizeForMobile();
    }
    
    // Handle resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            handleResize();
        }, 250);
    });
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'story1.jpg',
        'story2.jpg',
        'cute1.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Optimize for mobile devices
function optimizeForMobile() {
    // Reduce particle count
    if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.number.value = 25;
    }
    
    // Simplify animations
    document.documentElement.style.setProperty('--animation-duration', '0.5s');
}

// Handle resize events
function handleResize() {
    // Refresh AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    // Update parallax calculations
    updateParallax(window.pageYOffset);
    
    // Adjust mobile optimizations
    if (window.innerWidth <= 768) {
        optimizeForMobile();
    }
}

// Show welcome effect
function showWelcomeEffect() {
    const openingSection = document.getElementById('opening');
    if (openingSection && window.romanticParticles) {
        window.romanticParticles.createHeartParticles(openingSection, 20);
    }
}

// Add explosion particle animation
const explosionStyles = document.createElement('style');
explosionStyles.textContent = `
    @keyframes explodeParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
        }
    }
    
    .section-visible {
        /* Add any section visibility styles here */
    }
`;
document.head.appendChild(explosionStyles);

// Error handling
window.addEventListener('error', function(e) {
    console.log('Romantic website error handled gracefully:', e.message);
});

// Prevent context menu on images (optional protection)
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger any post-load effects
    setTimeout(() => {
        if (window.romanticParticles) {
            window.romanticParticles.createSparkles(document.body, 5);
        }
    }, 1000);
});

// Export main functions for debugging
window.romanticWebsite = {
    initializeWebsite,
    triggerSectionEffects,
    createFireworks,
    updateParallax
};