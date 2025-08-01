/* ===== ROMANTIC WEBSITE INTERACTIONS ===== */

// Memory modal data
const memoryData = {
    funny: {
        title: "Our Funny Moments 😂",
        content: `
            <div class="memory-content">
                <img src="cute1.jpg" alt="Funny moment" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <p>Those silly faces we make, the inside jokes only we understand, the way you laugh at my terrible puns... Every giggle, every smile, every moment of pure joy we share makes my heart so full. You make even the ordinary moments extraordinary just by being you.</p>
                <div class="memory-hearts">💕 💖 💕</div>
            </div>
        `
    },
    screenshots: {
        title: "Cute Screenshots 📱",
        content: `
            <div class="memory-content">
                <img src="cute2.jpg" alt="Screenshots" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <p>All those late-night conversations, the sweet good morning texts, the random photos we send each other throughout the day... Each screenshot is a little piece of our love story, captured forever in pixels and preserved in my heart.</p>
                <div class="memory-hearts">📱 💕 📱</div>
            </div>
        `
    },
    petnames: {
        title: "Our Names 💕",
        content: `
            <div class="memory-content">
                <div class="pet-names-grid">
                    <div class="pet-name">Baby 👶</div>
                    <div class="pet-name">Habibi 💖</div>
                    <div class="pet-name">My Everything 🌟</div>
                    <div class="pet-name">Chaba Ta3iiiii 🌹</div>
                    <div class="pet-name">My Heart 💗</div>
                    <div class="pet-name">My Queen 👑</div>
                </div>
                <p>Every name I call you carries all my love. You're not just my girlfriend - you're my baby, my habibi, my everything. Each word is a promise, a prayer, a piece of my soul reaching out to yours.</p>
            </div>
        `
    },
    dreams: {
        title: "Our Shared Dreams ✨",
        content: `
            <div class="memory-content">
                <img src="cute3.jpg" alt="Dreams" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <p>The future we paint together in whispered conversations, the plans we make, the dreams we share... Building a life together, traveling the world, creating memories that will last forever. With you, every dream feels possible.</p>
                <div class="memory-hearts">🌟 💫 ✨</div>
            </div>
        `
    },
    favorites: {
        title: "Things You Love 🎀",
        content: `
            <div class="memory-content">
                <div class="favorites-list">
                    <div class="favorite-item">🥰 Cute dates under the stars</div>
                    <div class="favorite-item">👫 Matching outfits and accessories</div>
                    <div class="favorite-item">🎁 Sweet little surprises</div>
                    <div class="favorite-item">🌹 Romantic gestures</div>
                    <div class="favorite-item">📸 Taking photos together</div>
                    <div class="favorite-item">💕 Being spoiled with love</div>
                </div>
                <p>I love learning all the little things that make you smile. Your happiness is my mission, your joy is my reward. Every favorite thing of yours becomes my favorite way to love you.</p>
            </div>
        `
    },
    more: {
        title: "More Beautiful Memories 💖",
        content: `
            <div class="memory-content">
                <img src="cute4.jpg" alt="More memories" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <p>Every day with you creates new memories to treasure. The way you look when you're concentrating, your sleepy voice in the morning, how you dance when you think no one's watching... I collect these moments like precious gems.</p>
                <div class="memory-hearts">💎 💖 💎</div>
            </div>
        `
    }
};

// Dream modal data
const dreamData = {
    home: {
        title: "Our Dream Home 🏠",
        content: `
            <div class="dream-content">
                <div class="dream-visual">🏡✨</div>
                <p>A cozy place where we can be completely ourselves. A kitchen where we cook together, a living room where we cuddle and watch movies, a garden where we can sit under the stars. Our own little sanctuary of love.</p>
                <div class="dream-promise">I promise to make it the most loving home for us 💕</div>
            </div>
        `
    },
    marriage: {
        title: "Our Wedding Day 💍",
        content: `
            <div class="dream-content">
                <div class="dream-visual">👰‍♀️💒🤵‍♂️</div>
                <p>The day I get to call you my wife, when we promise forever in front of everyone we love. Your dress, my nervous smile, happy tears, and the beginning of our always. The most beautiful day of our lives.</p>
                <div class="dream-promise">I can't wait to marry habibti my love my best friend my everything 💍</div>
            </div>
        `
    },
    kids: {
        title: "HI Family 👶",
        content: `
            <div class="dream-content">
                <div class="dream-visual">👨‍👩‍👧‍👦💕</div>
                <p>Little ones with your beautiful eyes and my stubborn smile. Teaching them to love like we do, watching them grow, being the parents we dreamed of being. Our love multiplied in the most beautiful way.</p>
                <div class="dream-promise">You'll be the most amazing mama 🥰</div>
            </div>
        `
    },
    travel: {
        title: "Adventures Together ✈️",
        content: `
            <div class="dream-content">
                <div class="dream-visual">🌍✈️🗺️</div>
                <p>Exploring the world hand in hand. Paris sunsets, Tokyo streets, beach walks in Bali, mountain hikes in Switzerland. Every destination made perfect because we're together. Collecting passport stamps and memories.</p>
                <div class="dream-promise">The world is waiting for us, my love 🌟</div>
            </div>
        `
    },
    cooking: {
        title: "Cooking Together 👩‍🍳",
        content: `
            <div class="dream-content">
                <div class="dream-visual">👨‍🍳❤️👩‍🍳</div>
                <p>Sunday morning pancakes, trying new recipes, making a mess and laughing about it. You teaching me your favorite dishes, me surprising you with mine. The kitchen filled with love, laughter, and the best ingredients - us.</p>
                <div class="dream-promise">Every meal will be seasoned with love 🥰</div>
            </div>
        `
    },
    old: {
        title: "Growing Old Together 👴👵",
        content: `
            <div class="dream-content">
                <div class="dream-visual">👴💕👵</div>
                <p>Gray hair, wrinkled hands still intertwined, stories to tell our grandchildren, rocking chairs on the porch. Still choosing each other every day, still finding new reasons to fall in love, still being each other's everything.</p>
                <div class="dream-promise">Forever and always, my darling 💖</div>
            </div>
        `
    }
};

// Open memory modal
function openMemory(memoryType) {
    const modal = document.getElementById('memoryModal');
    const modalBody = document.getElementById('modalBody');
    
    if (memoryData[memoryType]) {
        modalBody.innerHTML = `
            <h3>${memoryData[memoryType].title}</h3>
            ${memoryData[memoryType].content}
        `;
        modal.style.display = 'block';
        
        // Add entrance animation
        setTimeout(() => {
            modal.querySelector('.modal-content').style.animation = 'zoomIn 0.3s ease forwards';
        }, 10);
        
        // Create sparkle effect
        if (window.romanticParticles) {
            window.romanticParticles.createSparkles(modal, 10);
        }
    }
}

// Close memory modal
function closeModal() {
    const modal = document.getElementById('memoryModal');
    modal.querySelector('.modal-content').style.animation = 'zoomOut 0.3s ease forwards';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Open dream modal
function openDream(dreamType) {
    const modal = document.getElementById('dreamModal');
    const modalBody = document.getElementById('dreamModalBody');
    
    if (dreamData[dreamType]) {
        modalBody.innerHTML = `
            <h3>${dreamData[dreamType].title}</h3>
            ${dreamData[dreamType].content}
        `;
        modal.style.display = 'block';
        
        // Add entrance animation
        setTimeout(() => {
            modal.querySelector('.modal-content').style.animation = 'zoomIn 0.3s ease forwards';
        }, 10);
        
        // Create heart particles
        if (window.romanticParticles) {
            window.romanticParticles.createHeartParticles(modal, 8);
        }
    }
}

// Close dream modal
function closeDreamModal() {
    const modal = document.getElementById('dreamModal');
    modal.querySelector('.modal-content').style.animation = 'zoomOut 0.3s ease forwards';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Secret room unlock functionality
function unlockSecret() {
    const lock = document.getElementById('secretLock');
    const secretContent = document.getElementById('secretContent');
    
    // Add unlocked class to lock
    lock.classList.add('unlocked');
    
    // Create magical unlock effect
    if (window.romanticParticles) {
        window.romanticParticles.createSparkles(lock, 20);
    }
    
    // Show secret content with delay
    setTimeout(() => {
        secretContent.classList.add('revealed');
        
        // Initialize AOS for secret content
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
        
        // Add floating hearts
        setTimeout(() => {
            if (window.romanticParticles) {
                window.romanticParticles.createHeartParticles(secretContent, 15);
            }
        }, 1000);
    }, 1000);
    
    // Disable further clicks
    lock.style.pointerEvents = 'none';
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enter our world function
function enterOurWorld() {
    // Create magical transition effect
    const button = event.target.closest('.enter-btn');
    
    // Add click effect
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Create particle burst
    if (window.romanticParticles) {
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        window.romanticParticles.createParticleBurst(x, y, 'heart');
    }
    
    // Smooth scroll to story section
    setTimeout(() => {
        scrollToSection('our-story');
    }, 500);
}

// Replay magic function
function replayMagic() {
    // Create celebration effect
    const button = event.target.closest('.replay-btn');
    
    if (window.romanticParticles) {
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        window.romanticParticles.createParticleBurst(x, y, 'sparkle');
    }
    
    // Scroll back to top
    setTimeout(() => {
        scrollToSection('opening');
        
        // Reset secret room if it was unlocked
        setTimeout(() => {
            const lock = document.getElementById('secretLock');
            const secretContent = document.getElementById('secretContent');
            
            if (lock && secretContent) {
                lock.classList.remove('unlocked');
                lock.style.pointerEvents = 'auto';
                secretContent.classList.remove('revealed');
            }
        }, 1000);
    }, 500);
}

// Add modal styles
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    @keyframes zoomIn {
        0% {
            transform: scale(0.3);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes zoomOut {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0.3);
            opacity: 0;
        }
    }
    
    .memory-content {
        text-align: center;
    }
    
    .memory-hearts {
        font-size: 1.5rem;
        margin-top: 1rem;
        animation: heartbeat 1.5s ease-in-out infinite;
    }
    
    .pet-names-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
    }
    
    .pet-name {
        background: var(--gradient-romantic);
        padding: 0.8rem;
        border-radius: 20px;
        font-weight: 500;
        color: var(--text-purple);
        animation: pulse 2s ease-in-out infinite;
    }
    
    .favorites-list {
        text-align: left;
        margin: 1.5rem 0;
    }
    
    .favorite-item {
        padding: 0.5rem 0;
        font-size: 1.1rem;
        border-bottom: 1px solid var(--primary-pink);
        margin-bottom: 0.5rem;
    }
    
    .dream-content {
        text-align: center;
    }
    
    .dream-visual {
        font-size: 3rem;
        margin-bottom: 1rem;
        animation: bounce 2s ease-in-out infinite;
    }
    
    .dream-promise {
        background: var(--gradient-romantic);
        padding: 1rem;
        border-radius: 15px;
        margin-top: 1.5rem;
        font-weight: 500;
        color: var(--text-purple);
        font-style: italic;
    }
`;
document.head.appendChild(modalStyles);

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const memoryModal = document.getElementById('memoryModal');
    const dreamModal = document.getElementById('dreamModal');
    
    if (event.target === memoryModal) {
        closeModal();
    }
    
    if (event.target === dreamModal) {
        closeDreamModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const memoryModal = document.getElementById('memoryModal');
        const dreamModal = document.getElementById('dreamModal');
        
        if (memoryModal.style.display === 'block') {
            closeModal();
        }
        
        if (dreamModal.style.display === 'block') {
            closeDreamModal();
        }
    }
});

// Add click effects to interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click effects to memory bubbles
    const memoryBubbles = document.querySelectorAll('.memory-bubble');
    memoryBubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add click effects to dream stars
    const dreamStars = document.querySelectorAll('.dream-star');
    dreamStars.forEach(star => {
        star.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add hover effects for desktop
    if (window.matchMedia('(hover: hover)').matches) {
        memoryBubbles.forEach(bubble => {
            bubble.addEventListener('mouseenter', function() {
                if (window.romanticParticles) {
                    window.romanticParticles.createSparkles(this, 3);
                }
            });
        });
        
        dreamStars.forEach(star => {
            star.addEventListener('mouseenter', function() {
                if (window.romanticParticles) {
                    window.romanticParticles.createHeartParticles(this, 2);
                }
            });
        });
    }
});

// Export functions for global access
window.openMemory = openMemory;
window.closeModal = closeModal;
window.openDream = openDream;
window.closeDreamModal = closeDreamModal;
window.unlockSecret = unlockSecret;
window.enterOurWorld = enterOurWorld;
window.replayMagic = replayMagic;