/* ===== ROMANTIC PARTICLES CONFIGURATION ===== */

// Initialize particles.js with romantic heart and sparkle effects
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#FFB6C1", "#E6E6FA", "#F5DEB3", "#FF69B4", "#DDA0DD"]
                },
                "shape": {
                    "type": ["circle", "heart", "star"],
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#FFB6C1",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 100,
                        "size": 8,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Create custom heart particles for special moments
function createHeartParticles(element, count = 10) {
    const container = element || document.body;
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.opacity = '0.8';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out forwards`;
        
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
}

// Create sparkle effect
function createSparkles(element, count = 15) {
    const container = element || document.body;
    const sparkleEmojis = ['✨', '⭐', '💫', '🌟', '💖'];
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 15 + 10 + 'px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.opacity = '0';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = `sparkleIn ${Math.random() * 2 + 1}s ease-out forwards`;
        
        container.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }
}

// Floating hearts animation for special sections
function addFloatingHearts(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts-bg';
    heartsContainer.style.position = 'absolute';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '1';
    
    section.appendChild(heartsContainer);
    
    // Create continuous floating hearts
    setInterval(() => {
        if (isElementInViewport(section)) {
            createFloatingHeart(heartsContainer);
        }
    }, 2000);
}

// Create individual floating heart
function createFloatingHeart(container) {
    const hearts = ['💖', '💕', '💗', '💝', '💘'];
    const heart = document.createElement('div');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.pointerEvents = 'none';
    heart.style.animation = `floatUpSlow ${Math.random() * 5 + 8}s linear forwards`;
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 13000);
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add CSS animations for particles
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes sparkleIn {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatUpSlow {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) translateX(50px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .floating-hearts-bg {
        overflow: hidden;
    }
`;
document.head.appendChild(particleStyles);

// Initialize floating hearts for specific sections
document.addEventListener('DOMContentLoaded', function() {
    // Add floating hearts to romantic sections
    setTimeout(() => {
        addFloatingHearts('opening');
        addFloatingHearts('our-universe');
        addFloatingHearts('finale');
    }, 1000);
});

// Particle burst effect for interactions
function createParticleBurst(x, y, type = 'heart') {
    const particles = type === 'heart' ? ['💖', '💕', '💗'] : ['✨', '⭐', '💫'];
    const count = 8;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        const angle = (360 / count) * i;
        const velocity = 100;
        const radian = angle * (Math.PI / 180);
        const vx = Math.cos(radian) * velocity;
        const vy = Math.sin(radian) * velocity;
        
        particle.style.animation = `burstParticle 1s ease-out forwards`;
        particle.style.setProperty('--vx', vx + 'px');
        particle.style.setProperty('--vy', vy + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Add burst particle animation
const burstStyles = document.createElement('style');
burstStyles.textContent = `
    @keyframes burstParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyles);

// Export functions for use in other scripts
window.romanticParticles = {
    createHeartParticles,
    createSparkles,
    createParticleBurst,
    addFloatingHearts
};