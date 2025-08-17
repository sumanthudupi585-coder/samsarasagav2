/**
 * VisualEffects.js
 * 
 * This module handles visual effects, animations, and UI enhancements
 * to make the game more visually engaging.
 */

class VisualEffects {
    constructor() {
        // Store references to animation timers for cleanup
        this.animationTimers = [];
        
        // Define particle colors for different effects
        this.particleColors = {
            karma_positive: ['#4caf50', '#8bc34a', '#cddc39', '#ffeb3b'],
            karma_negative: ['#f44336', '#e91e63', '#9c27b0', '#673ab7'],
            level_up: ['#ffc107', '#ff9800', '#ff5722', '#ffeb3b'],
            achievement: ['#2196f3', '#03a9f4', '#00bcd4', '#009688'],
            meditation: ['#9c27b0', '#673ab7', '#3f51b5', '#2196f3'],
            quest_complete: ['#ffc107', '#ff9800', '#ff5722', '#f44336']
        };
    }

    /**
     * Initialize visual effects system
     */
    init() {
        // Create container for visual effects if it doesn't exist
        if (!document.getElementById('visual-effects-container')) {
            const container = document.createElement('div');
            container.id = 'visual-effects-container';
            container.style.position = 'absolute';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.pointerEvents = 'none';
            container.style.zIndex = '1000';
            container.style.overflow = 'hidden';
            document.body.appendChild(container);
        }
    }

    /**
     * Clean up all animations
     */
    cleanup() {
        // Clear all animation timers
        this.animationTimers.forEach(timer => clearTimeout(timer));
        this.animationTimers = [];
        
        // Remove all particles
        const container = document.getElementById('visual-effects-container');
        if (container) {
            container.innerHTML = '';
        }
    }

    /**
     * Create a particle effect
     */
    createParticleEffect(x, y, type = 'karma_positive', count = 30, duration = 2000) {
        const container = document.getElementById('visual-effects-container');
        if (!container) return;
        
        const colors = this.particleColors[type] || this.particleColors.karma_positive;
        
        for (let i = 0; i < count; i++) {
            // Create particle
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.opacity = '0.8';
            particle.style.transform = 'scale(1)';
            particle.style.transition = `all ${duration}ms ease-out`;
            
            // Set initial position
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            // Add to container
            container.appendChild(particle);
            
            // Animate particle
            setTimeout(() => {
                // Random direction and distance
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                
                particle.style.transform = 'scale(0)';
                particle.style.opacity = '0';
                particle.style.left = `${x + Math.cos(angle) * distance}px`;
                particle.style.top = `${y + Math.sin(angle) * distance}px`;
            }, 10);
            
            // Remove particle after animation
            const timer = setTimeout(() => {
                if (container.contains(particle)) {
                    container.removeChild(particle);
                }
            }, duration);
            
            this.animationTimers.push(timer);
        }
    }

    /**
     * Create a karma change effect
     */
    karmaChangeEffect(amount) {
        // Get karma display element position
        const karmaDisplay = document.getElementById('karma-display');
        if (!karmaDisplay) return;
        
        const rect = karmaDisplay.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Create floating text
        this.createFloatingText(
            x, 
            y, 
            amount > 0 ? `+${amount} Karma` : `${amount} Karma`,
            amount > 0 ? 'positive' : 'negative'
        );
        
        // Create particle effect
        this.createParticleEffect(
            x,
            y,
            amount > 0 ? 'karma_positive' : 'karma_negative',
            Math.abs(amount) * 3 + 10
        );
        
        // Highlight karma display
        karmaDisplay.classList.add(amount > 0 ? 'karma-increase' : 'karma-decrease');
        setTimeout(() => {
            karmaDisplay.classList.remove('karma-increase', 'karma-decrease');
        }, 1000);
    }

    /**
     * Create a level up effect
     */
    levelUpEffect(level) {
        // Create centered effect
        const container = document.getElementById('game-container');
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create level up overlay
        const overlay = document.createElement('div');
        overlay.className = 'level-up-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '2000';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.5s ease-in-out';
        
        // Create level up text
        const levelUpText = document.createElement('div');
        levelUpText.className = 'level-up-text';
        levelUpText.textContent = 'LEVEL UP!';
        levelUpText.style.color = '#ffc107';
        levelUpText.style.fontSize = '3rem';
        levelUpText.style.fontWeight = 'bold';
        levelUpText.style.textShadow = '0 0 10px #ff9800';
        levelUpText.style.marginBottom = '1rem';
        levelUpText.style.transform = 'scale(0)';
        levelUpText.style.transition = 'transform 0.5s ease-out';
        
        // Create level number
        const levelNumber = document.createElement('div');
        levelNumber.className = 'level-number';
        levelNumber.textContent = `Level ${level}`;
        levelNumber.style.color = '#ffffff';
        levelNumber.style.fontSize = '2rem';
        levelNumber.style.fontWeight = 'bold';
        levelNumber.style.opacity = '0';
        levelNumber.style.transition = 'opacity 0.5s ease-out 0.5s';
        
        // Create continue button
        const continueButton = document.createElement('button');
        continueButton.className = 'continue-button';
        continueButton.textContent = 'Continue';
        continueButton.style.marginTop = '2rem';
        continueButton.style.padding = '0.75rem 1.5rem';
        continueButton.style.backgroundColor = '#4caf50';
        continueButton.style.color = 'white';
        continueButton.style.border = 'none';
        continueButton.style.borderRadius = '4px';
        continueButton.style.fontSize = '1rem';
        continueButton.style.cursor = 'pointer';
        continueButton.style.opacity = '0';
        continueButton.style.transition = 'opacity 0.5s ease-out 1s, background-color 0.2s';
        
        continueButton.addEventListener('mouseover', () => {
            continueButton.style.backgroundColor = '#388e3c';
        });
        
        continueButton.addEventListener('mouseout', () => {
            continueButton.style.backgroundColor = '#4caf50';
        });
        
        continueButton.addEventListener('click', () => {
            // Fade out overlay
            overlay.style.opacity = '0';
            
            // Remove overlay after fade out
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 500);
        });
        
        // Add elements to overlay
        overlay.appendChild(levelUpText);
        overlay.appendChild(levelNumber);
        overlay.appendChild(continueButton);
        
        // Add overlay to body
        document.body.appendChild(overlay);
        
        // Create particle effect
        this.createParticleEffect(centerX, centerY, 'level_up', 100, 3000);
        
        // Animate overlay
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Animate level up text
        setTimeout(() => {
            levelUpText.style.transform = 'scale(1)';
        }, 500);
        
        // Animate level number
        setTimeout(() => {
            levelNumber.style.opacity = '1';
        }, 1000);
        
        // Animate continue button
        setTimeout(() => {
            continueButton.style.opacity = '1';
        }, 1500);
    }

    /**
     * Create an achievement unlocked effect
     */
    achievementUnlockedEffect(achievement) {
        // Create achievement notification
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.style.position = 'fixed';
        notification.style.bottom = '-100px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#673ab7';
        notification.style.color = 'white';
        notification.style.padding = '15px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        notification.style.display = 'flex';
        notification.style.alignItems = 'center';
        notification.style.gap = '10px';
        notification.style.zIndex = '3000';
        notification.style.transition = 'bottom 0.5s ease-out';
        
        // Create achievement icon
        const icon = document.createElement('div');
        icon.className = 'achievement-icon';
        icon.textContent = achievement.icon || '🏆';
        icon.style.fontSize = '2rem';
        
        // Create achievement content
        const content = document.createElement('div');
        content.className = 'achievement-content';
        
        // Create achievement title
        const title = document.createElement('div');
        title.className = 'achievement-title';
        title.textContent = 'Achievement Unlocked!';
        title.style.fontSize = '0.9rem';
        title.style.opacity = '0.8';
        
        // Create achievement name
        const name = document.createElement('div');
        name.className = 'achievement-name';
        name.textContent = achievement.title;
        name.style.fontSize = '1.2rem';
        name.style.fontWeight = 'bold';
        
        // Add elements to content
        content.appendChild(title);
        content.appendChild(name);
        
        // Add elements to notification
        notification.appendChild(icon);
        notification.appendChild(content);
        
        // Add notification to body
        document.body.appendChild(notification);
        
        // Animate notification
        setTimeout(() => {
            notification.style.bottom = '20px';
        }, 10);
        
        // Create particle effect around the icon
        setTimeout(() => {
            const rect = icon.getBoundingClientRect();
            this.createParticleEffect(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                'achievement',
                20
            );
        }, 500);
        
        // Remove notification after delay
        const timer = setTimeout(() => {
            notification.style.bottom = '-100px';
            
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500);
        }, 5000);
        
        this.animationTimers.push(timer);
    }

    /**
     * Create a quest completed effect
     */
    questCompletedEffect(quest) {
        // Create centered effect
        const container = document.getElementById('game-container');
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create quest complete banner
        const banner = document.createElement('div');
        banner.className = 'quest-complete-banner';
        banner.style.position = 'fixed';
        banner.style.top = '50px';
        banner.style.left = '50%';
        banner.style.transform = 'translateX(-50%) scale(0)';
        banner.style.backgroundColor = '#ff9800';
        banner.style.color = 'white';
        banner.style.padding = '15px 30px';
        banner.style.borderRadius = '5px';
        banner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        banner.style.textAlign = 'center';
        banner.style.zIndex = '3000';
        banner.style.transition = 'transform 0.5s ease-out';
        
        // Create quest complete text
        const completeText = document.createElement('div');
        completeText.className = 'quest-complete-text';
        completeText.textContent = 'Quest Completed!';
        completeText.style.fontSize = '1.5rem';
        completeText.style.fontWeight = 'bold';
        completeText.style.marginBottom = '5px';
        
        // Create quest title
        const questTitle = document.createElement('div');
        questTitle.className = 'quest-title';
        questTitle.textContent = quest.title;
        questTitle.style.fontSize = '1.2rem';
        
        // Add elements to banner
        banner.appendChild(completeText);
        banner.appendChild(questTitle);
        
        // Add banner to body
        document.body.appendChild(banner);
        
        // Create particle effect
        this.createParticleEffect(centerX, centerY, 'quest_complete', 50, 3000);
        
        // Animate banner
        setTimeout(() => {
            banner.style.transform = 'translateX(-50%) scale(1)';
        }, 10);
        
        // Remove banner after delay
        const timer = setTimeout(() => {
            banner.style.transform = 'translateX(-50%) scale(0)';
            
            setTimeout(() => {
                if (document.body.contains(banner)) {
                    document.body.removeChild(banner);
                }
            }, 500);
        }, 4000);
        
        this.animationTimers.push(timer);
    }

    /**
     * Create a meditation effect
     */
    meditationEffect(insight) {
        // Create centered effect
        const container = document.getElementById('game-container');
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create meditation overlay
        const overlay = document.createElement('div');
        overlay.className = 'meditation-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '2000';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1s ease-in-out';
        
        // Create insight container
        const insightContainer = document.createElement('div');
        insightContainer.className = 'insight-container';
        insightContainer.style.backgroundColor = 'rgba(103, 58, 183, 0.9)';
        insightContainer.style.color = 'white';
        insightContainer.style.padding = '30px';
        insightContainer.style.borderRadius = '10px';
        insightContainer.style.maxWidth = '80%';
        insightContainer.style.textAlign = 'center';
        insightContainer.style.boxShadow = '0 0 20px rgba(103, 58, 183, 0.5)';
        insightContainer.style.transform = 'scale(0.8)';
        insightContainer.style.opacity = '0';
        insightContainer.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        
        // Create meditation title
        const meditationTitle = document.createElement('div');
        meditationTitle.className = 'meditation-title';
        meditationTitle.textContent = 'Spiritual Insight';
        meditationTitle.style.fontSize = '1.5rem';
        meditationTitle.style.fontWeight = 'bold';
        meditationTitle.style.marginBottom = '20px';
        
        // Create insight text
        const insightText = document.createElement('div');
        insightText.className = 'insight-text';
        insightText.textContent = insight;
        insightText.style.fontSize = '1.2rem';
        insightText.style.lineHeight = '1.6';
        insightText.style.fontStyle = 'italic';
        
        // Create continue button
        const continueButton = document.createElement('button');
        continueButton.className = 'continue-button';
        continueButton.textContent = 'Continue';
        continueButton.style.marginTop = '30px';
        continueButton.style.padding = '10px 20px';
        continueButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        continueButton.style.color = 'white';
        continueButton.style.border = '1px solid white';
        continueButton.style.borderRadius = '4px';
        continueButton.style.fontSize = '1rem';
        continueButton.style.cursor = 'pointer';
        continueButton.style.transition = 'background-color 0.3s';
        
        continueButton.addEventListener('mouseover', () => {
            continueButton.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        });
        
        continueButton.addEventListener('mouseout', () => {
            continueButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        });
        
        continueButton.addEventListener('click', () => {
            // Fade out overlay
            overlay.style.opacity = '0';
            insightContainer.style.opacity = '0';
            insightContainer.style.transform = 'scale(0.8)';
            
            // Remove overlay after fade out
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 1000);
        });
        
        // Add elements to insight container
        insightContainer.appendChild(meditationTitle);
        insightContainer.appendChild(insightText);
        insightContainer.appendChild(continueButton);
        
        // Add insight container to overlay
        overlay.appendChild(insightContainer);
        
        // Add overlay to container
        container.appendChild(overlay);
        
        // Create particle effect
        this.createParticleEffect(centerX, centerY, 'meditation', 30, 5000);
        
        // Animate overlay
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Animate insight container
        setTimeout(() => {
            insightContainer.style.opacity = '1';
            insightContainer.style.transform = 'scale(1)';
        }, 500);
    }

    /**
     * Create a floating text effect
     */
    createFloatingText(x, y, text, type = 'neutral') {
        const container = document.getElementById('visual-effects-container');
        if (!container) return;
        
        // Create floating text element
        const floatingText = document.createElement('div');
        floatingText.className = `floating-text ${type}`;
        floatingText.textContent = text;
        floatingText.style.position = 'absolute';
        floatingText.style.left = `${x}px`;
        floatingText.style.top = `${y}px`;
        floatingText.style.transform = 'translate(-50%, -50%)';
        floatingText.style.fontSize = '1.2rem';
        floatingText.style.fontWeight = 'bold';
        floatingText.style.textShadow = '0 0 3px rgba(0, 0, 0, 0.5)';
        floatingText.style.zIndex = '1001';
        floatingText.style.opacity = '0';
        floatingText.style.transition = 'all 1.5s ease-out';
        
        // Set color based on type
        switch (type) {
            case 'positive':
                floatingText.style.color = '#4caf50';
                break;
            case 'negative':
                floatingText.style.color = '#f44336';
                break;
            case 'special':
                floatingText.style.color = '#ff9800';
                break;
            default:
                floatingText.style.color = '#ffffff';
        }
        
        // Add to container
        container.appendChild(floatingText);
        
        // Animate floating text
        setTimeout(() => {
            floatingText.style.opacity = '1';
            floatingText.style.transform = 'translate(-50%, -100px)';
        }, 10);
        
        // Remove floating text after animation
        const timer = setTimeout(() => {
            floatingText.style.opacity = '0';
            
            setTimeout(() => {
                if (container.contains(floatingText)) {
                    container.removeChild(floatingText);
                }
            }, 500);
        }, 1500);
        
        this.animationTimers.push(timer);
    }

    /**
     * Create a scene transition effect
     */
    sceneTransitionEffect(callback) {
        // Create transition overlay
        const overlay = document.createElement('div');
        overlay.className = 'scene-transition-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'black';
        overlay.style.opacity = '0';
        overlay.style.zIndex = '5000';
        overlay.style.transition = 'opacity 0.5s ease-in-out';
        
        // Add to body
        document.body.appendChild(overlay);
        
        // Fade in
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // Execute callback after fade in
        setTimeout(() => {
            if (typeof callback === 'function') {
                callback();
            }
            
            // Fade out
            overlay.style.opacity = '0';
            
            // Remove overlay after fade out
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 500);
        }, 600);
    }

    /**
     * Create a pulse effect on an element
     */
    pulseEffect(element, color = '#4caf50', duration = 1000) {
        if (!element) return;
        
        // Save original styles
        const originalBoxShadow = element.style.boxShadow;
        const originalTransition = element.style.transition;
        
        // Apply pulse effect
        element.style.transition = `all ${duration / 2}ms ease-in-out`;
        element.style.boxShadow = `0 0 20px ${color}`;
        
        // Revert to original state
        setTimeout(() => {
            element.style.boxShadow = originalBoxShadow;
            
            // Restore original transition after effect
            setTimeout(() => {
                element.style.transition = originalTransition;
            }, duration / 2);
        }, duration / 2);
    }

    /**
     * Create a shake effect on an element
     */
    shakeEffect(element, intensity = 5, duration = 500) {
        if (!element) return;
        
        // Save original styles
        const originalTransform = element.style.transform;
        const originalTransition = element.style.transition;
        
        // Apply shake effect
        element.style.transition = 'none';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            if (progress < duration) {
                const x = Math.sin(progress / 10) * intensity;
                element.style.transform = `${originalTransform} translateX(${x}px)`;
                requestAnimationFrame(animate);
            } else {
                // Restore original state
                element.style.transform = originalTransform;
                element.style.transition = originalTransition;
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Export the VisualEffects class