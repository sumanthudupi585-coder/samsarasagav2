/**
 * UIController.js
 * 
 * This module is the renderer. It is responsible for all DOM manipulation
 * and knows nothing about game rules. It simply displays what the other
 * engines tell it to.
 */

class UIController {
    constructor(storyEngine, gameStateManager, puzzleEngine, progressionSystem, questSystem, visualEffects, audioManager) {
        this.storyEngine = storyEngine;
        this.gameStateManager = gameStateManager;
        this.puzzleEngine = puzzleEngine;
        this.progressionSystem = progressionSystem;
        this.questSystem = questSystem;
        this.visualEffects = visualEffects;
        this.audioManager = audioManager;
        
        // DOM element references
        this.elements = {
            sceneTitle: document.getElementById('scene-title'),
            sceneText: document.getElementById('scene-text'),
            choicesContainer: document.getElementById('choices-container'),
            puzzleContainer: document.getElementById('puzzle-container'),
            karmaDisplay: document.getElementById('karma-display'),
            inventoryDisplay: document.getElementById('inventory-display'),
            actDisplay: document.getElementById('act-display'),
            dharmicProfileDisplay: document.getElementById('dharmic-profile'),
            // New UI elements
            levelDisplay: document.getElementById('level-display'),
            xpDisplay: document.getElementById('xp-display'),
            questLogButton: document.getElementById('quest-log-button'),
            achievementsButton: document.getElementById('achievements-button'),
            meditateButton: document.getElementById('meditate-button'),
            settingsButton: document.getElementById('settings-button'),
            playerAvatar: document.getElementById('player-avatar'),
            notificationArea: document.getElementById('notification-area')
        };
        
        // Bind methods to ensure 'this' refers to the UIController instance
        this.render = this.render.bind(this);
        this.renderPuzzle = this.renderPuzzle.bind(this);
        this.updateStatusDisplay = this.updateStatusDisplay.bind(this);
        
        // Initialize UI
        this.initUI();
    }

    /**
     * Initialize UI elements that might not exist in the HTML
     */
    initUI() {
        // Create UI elements if they don't exist
        this.createUIElements();
        
        // Initialize visual effects
        if (this.visualEffects) {
            this.visualEffects.init();
        }
        
        // Initialize audio manager
        if (this.audioManager) {
            this.audioManager.init();
            this.audioManager.addUIEventListeners();
        }
    }

    /**
     * Create UI elements that don't exist in the HTML
     */
    createUIElements() {
        // Create game header elements
        const gameHeader = document.getElementById('game-header');
        if (gameHeader) {
            const statusDisplay = document.getElementById('status-display');
            
            // Create level display if it doesn't exist
            if (!this.elements.levelDisplay && statusDisplay) {
                const levelDisplay = document.createElement('div');
                levelDisplay.id = 'level-display';
                levelDisplay.className = 'status-item';
                statusDisplay.appendChild(levelDisplay);
                this.elements.levelDisplay = levelDisplay;
            }
            
            // Create XP display if it doesn't exist
            if (!this.elements.xpDisplay && statusDisplay) {
                const xpContainer = document.createElement('div');
                xpContainer.id = 'xp-container';
                xpContainer.className = 'status-item';
                
                const xpBar = document.createElement('div');
                xpBar.id = 'xp-bar';
                xpBar.className = 'progress-bar';
                
                const xpFill = document.createElement('div');
                xpFill.id = 'xp-fill';
                xpFill.className = 'progress-fill';
                
                const xpText = document.createElement('div');
                xpText.id = 'xp-display';
                xpText.className = 'progress-text';
                
                xpBar.appendChild(xpFill);
                xpBar.appendChild(xpText);
                xpContainer.appendChild(xpBar);
                statusDisplay.appendChild(xpContainer);
                
                this.elements.xpDisplay = xpText;
            }
        }
        
        // Create game sidebar elements
        const gameSidebar = document.getElementById('game-sidebar');
        if (gameSidebar) {
            // Create player avatar if it doesn't exist
            if (!this.elements.playerAvatar) {
                const avatarContainer = document.createElement('div');
                avatarContainer.id = 'avatar-container';
                
                const playerAvatar = document.createElement('div');
                playerAvatar.id = 'player-avatar';
                
                const avatarImage = document.createElement('img');
                avatarImage.id = 'avatar-image';
                avatarImage.alt = 'Player Avatar';
                
                playerAvatar.appendChild(avatarImage);
                avatarContainer.appendChild(playerAvatar);
                
                // Insert at the beginning of sidebar
                gameSidebar.insertBefore(avatarContainer, gameSidebar.firstChild);
                
                this.elements.playerAvatar = playerAvatar;
            }
            
            // Create action buttons container if it doesn't exist
            let actionButtons = document.getElementById('action-buttons');
            if (!actionButtons) {
                actionButtons = document.createElement('div');
                actionButtons.id = 'action-buttons';
                gameSidebar.appendChild(actionButtons);
            }
            
            // Create quest log button if it doesn't exist
            if (!this.elements.questLogButton) {
                const questLogButton = document.createElement('button');
                questLogButton.id = 'quest-log-button';
                questLogButton.className = 'action-button';
                questLogButton.innerHTML = '<span class="icon">📜</span> Quest Log';
                questLogButton.addEventListener('click', () => this.showQuestLog());
                
                actionButtons.appendChild(questLogButton);
                this.elements.questLogButton = questLogButton;
            }
            
            // Create achievements button if it doesn't exist
            if (!this.elements.achievementsButton) {
                const achievementsButton = document.createElement('button');
                achievementsButton.id = 'achievements-button';
                achievementsButton.className = 'action-button';
                achievementsButton.innerHTML = '<span class="icon">🏆</span> Achievements';
                achievementsButton.addEventListener('click', () => this.showAchievements());
                
                actionButtons.appendChild(achievementsButton);
                this.elements.achievementsButton = achievementsButton;
            }
            
            // Create meditate button if it doesn't exist
            if (!this.elements.meditateButton) {
                const meditateButton = document.createElement('button');
                meditateButton.id = 'meditate-button';
                meditateButton.className = 'action-button';
                meditateButton.innerHTML = '<span class="icon">🧘</span> Meditate';
                meditateButton.addEventListener('click', () => this.performMeditation());
                
                actionButtons.appendChild(meditateButton);
                this.elements.meditateButton = meditateButton;
            }
            
            // Create settings button if it doesn't exist
            if (!this.elements.settingsButton) {
                const settingsButton = document.createElement('button');
                settingsButton.id = 'settings-button';
                settingsButton.className = 'action-button';
                settingsButton.innerHTML = '<span class="icon">⚙️</span> Settings';
                settingsButton.addEventListener('click', () => this.showSettings());
                
                actionButtons.appendChild(settingsButton);
                this.elements.settingsButton = settingsButton;
            }
        }
        
        // Create notification area if it doesn't exist
        if (!this.elements.notificationArea) {
            const notificationArea = document.createElement('div');
            notificationArea.id = 'notification-area';
            document.body.appendChild(notificationArea);
            this.elements.notificationArea = notificationArea;
        }
    }

    /**
     * Main render function, called every time the game state changes
     */
    render() {
        const scene = this.storyEngine.getCurrentScene();
        if (!scene) {
            console.error("Cannot render: No current scene found");
            return;
        }
        
        // Play appropriate music for the current act
        if (this.audioManager) {
            this.audioManager.playActMusic(this.gameStateManager.playerState.currentAct);
        }
        
        // Track scene visit
        this.gameStateManager.trackSceneVisit(scene.id);
        
        // Update scene title and text
        if (this.elements.sceneTitle) {
            this.elements.sceneTitle.innerText = scene.title || "Untitled Scene";
        }
        
        if (this.elements.sceneText) {
            // Process text for any dynamic content
            let processedText = this.processSceneText(scene.text);
            this.elements.sceneText.innerHTML = processedText;
        }
        
        // Clear and update choices
        if (this.elements.choicesContainer) {
            this.elements.choicesContainer.innerHTML = '';
            
            const choices = this.storyEngine.getAvailableChoices();
            
            choices.forEach(choice => {
                const button = document.createElement('button');
                button.className = 'choice-button';
                button.innerText = choice.text;
                button.dataset.choiceId = choice.id;
                
                // Add special styling for choices that affect karma
                if (choice.effects && choice.effects.karma) {
                    if (choice.effects.karma > 0) {
                        button.classList.add('positive-karma-choice');
                    } else if (choice.effects.karma < 0) {
                        button.classList.add('negative-karma-choice');
                    }
                }
                
                button.addEventListener('click', () => {
                    // Play click sound
                    if (this.audioManager) {
                        this.audioManager.playClickSound();
                    }
                    
                    // Process the choice
                    const karmaChange = choice.effects && choice.effects.karma ? choice.effects.karma : 0;
                    const result = this.storyEngine.processChoice(choice.id);
                    
                    // Track choice made
                    this.gameStateManager.trackChoiceMade();
                    
                    // Track choice in progression system
                    if (this.progressionSystem) {
                        const xpResult = this.progressionSystem.trackChoiceMade(karmaChange);
                        
                        // Check for level up
                        if (xpResult && xpResult.levelUp) {
                            // Play level up sound
                            if (this.audioManager) {
                                this.audioManager.playLevelUpSound();
                            }
                            
                            // Show level up effect
                            if (this.visualEffects) {
                                this.visualEffects.levelUpEffect(xpResult.newLevel);
                            }
                            
                            // Track level gained
                            this.gameStateManager.trackLevelGained();
                        }
                    }
                    
                    // Show karma change effect if applicable
                    if (karmaChange !== 0 && this.visualEffects) {
                        this.visualEffects.karmaChangeEffect(karmaChange);
                        
                        // Play karma sound
                        if (this.audioManager) {
                            this.audioManager.playKarmaSound(karmaChange);
                        }
                    }
                    
                    // Check for quest updates
                    if (this.questSystem) {
                        const updatedQuests = this.questSystem.updateQuestProgress();
                        
                        // Show quest completion effects
                        updatedQuests.forEach(quest => {
                            if (quest.progress === 100) {
                                // Play quest complete sound
                                if (this.audioManager) {
                                    this.audioManager.playQuestCompleteSound();
                                }
                                
                                // Show quest complete effect
                                if (this.visualEffects) {
                                    this.visualEffects.questCompletedEffect(quest);
                                }
                                
                                // Track quest completion
                                this.gameStateManager.trackQuestCompleted();
                            }
                        });
                    }
                    
                    // Check for achievements
                    if (this.progressionSystem) {
                        const newAchievements = this.progressionSystem.checkAchievements();
                        
                        // Show achievement effects
                        newAchievements.forEach(achievement => {
                            // Play achievement sound
                            if (this.audioManager) {
                                this.audioManager.playAchievementSound();
                            }
                            
                            // Show achievement effect
                            if (this.visualEffects) {
                                this.visualEffects.achievementUnlockedEffect(achievement);
                            }
                            
                            // Track achievement unlocked
                            this.gameStateManager.trackAchievementUnlocked();
                        });
                    }
                    
                    // Use scene transition effect if available
                    if (this.visualEffects) {
                        this.visualEffects.sceneTransitionEffect(() => {
                            this.render();
                        });
                    } else {
                        this.render();
                    }
                });
                
                this.elements.choicesContainer.appendChild(button);
            });
        }
        
        // Render puzzle if present
        if (scene.puzzle && this.elements.puzzleContainer) {
            this.renderPuzzle(scene.puzzle);
        } else if (this.elements.puzzleContainer) {
            this.elements.puzzleContainer.innerHTML = '';
        }
        
        // Update status displays (karma, inventory, etc.)
        this.updateStatusDisplay();
        
        // Update quest log button notification if there are active quests
        this.updateQuestLogButton();
        
        // Update meditation button state
        this.updateMeditateButton();
        
        // Update player avatar
        this.updatePlayerAvatar();
        
        // Process any pending notifications
        this.processNotifications();
    }

    /**
     * Process scene text for any dynamic content or variables
     */
    processSceneText(text) {
        if (!text) return "";
        
        const gameState = this.gameStateManager.getState();
        
        // Replace variables in text with format {{variable}}
        return text.replace(/\{\{([^}]+)\}\}/g, (match, variable) => {
            // Split by dots for nested properties
            const props = variable.trim().split('.');
            let value = gameState;
            
            // Navigate through the object properties
            for (const prop of props) {
                if (value && value[prop] !== undefined) {
                    value = value[prop];
                } else {
                    return match; // Return original if property not found
                }
            }
            
            return value;
        });
    }

    /**
     * Render a puzzle interface
     */
    renderPuzzle(puzzleData) {
        if (!this.elements.puzzleContainer) return;
        
        this.elements.puzzleContainer.innerHTML = '';
        
        // Create puzzle container with enhanced styling
        const puzzleBox = document.createElement('div');
        puzzleBox.className = 'puzzle-box';
        
        // Create puzzle header
        const puzzleHeader = document.createElement('div');
        puzzleHeader.className = 'puzzle-header';
        
        const puzzleIcon = document.createElement('span');
        puzzleIcon.className = 'puzzle-icon';
        puzzleIcon.innerHTML = '🧩';
        
        const puzzleTitle = document.createElement('h3');
        puzzleTitle.className = 'puzzle-title';
        puzzleTitle.textContent = 'Puzzle Challenge';
        
        puzzleHeader.appendChild(puzzleIcon);
        puzzleHeader.appendChild(puzzleTitle);
        puzzleBox.appendChild(puzzleHeader);
        
        // Create puzzle description
        const puzzleDescription = document.createElement('div');
        puzzleDescription.className = 'puzzle-description';
        puzzleDescription.innerHTML = puzzleData.description;
        puzzleBox.appendChild(puzzleDescription);
        
        // Create solution options
        if (puzzleData.solutions && Array.isArray(puzzleData.solutions)) {
            const solutionsContainer = document.createElement('div');
            solutionsContainer.className = 'puzzle-solutions';
            
            puzzleData.solutions.forEach(solution => {
                const button = document.createElement('button');
                button.className = 'puzzle-solution-button';
                button.innerText = solution.text;
                
                // Add special styling for solutions requiring items
                if (solution.requiresItem) {
                    if (this.gameStateManager.hasItem(solution.requiresItem)) {
                        button.classList.add('has-required-item');
                        
                        // Add item icon
                        const itemIcon = document.createElement('span');
                        itemIcon.className = 'item-icon';
                        itemIcon.innerHTML = '✓';
                        itemIcon.title = `Using: ${solution.requiresItem}`;
                        button.appendChild(itemIcon);
                    } else {
                        button.classList.add('missing-required-item');
                        button.disabled = true;
                        
                        // Add missing item icon
                        const itemIcon = document.createElement('span');
                        itemIcon.className = 'item-icon missing';
                        itemIcon.innerHTML = '✗';
                        itemIcon.title = `Missing: ${solution.requiresItem}`;
                        button.appendChild(itemIcon);
                    }
                }
                
                button.addEventListener('click', () => {
                    // Play click sound
                    if (this.audioManager) {
                        this.audioManager.playClickSound();
                    }
                    
                    // Solve the puzzle
                    const result = this.puzzleEngine.solvePuzzle(puzzleData.puzzleId, solution);
                    
                    // Play appropriate sound based on result
                    if (this.audioManager) {
                        if (result) {
                            this.audioManager.playPuzzleSolvedSound();
                        } else {
                            this.audioManager.playPuzzleFailedSound();
                        }
                    }
                    
                    // Show visual effect based on result
                    if (this.visualEffects) {
                        const puzzleElement = button.closest('.puzzle-box');
                        if (puzzleElement) {
                            if (result) {
                                this.visualEffects.pulseEffect(puzzleElement, '#4caf50');
                            } else {
                                this.visualEffects.shakeEffect(puzzleElement);
                            }
                        }
                    }
                    
                    // Track puzzle result
                    if (result) {
                        this.gameStateManager.trackPuzzleSolved();
                        
                        // Award XP for solving puzzle
                        if (this.progressionSystem) {
                            const xpResult = this.progressionSystem.trackPuzzleSolved();
                            
                            // Check for level up
                            if (xpResult && xpResult.levelUp) {
                                // Play level up sound
                                if (this.audioManager) {
                                    this.audioManager.playLevelUpSound();
                                }
                                
                                // Show level up effect
                                if (this.visualEffects) {
                                    this.visualEffects.levelUpEffect(xpResult.newLevel);
                                }
                                
                                // Track level gained
                                this.gameStateManager.trackLevelGained();
                            }
                        }
                    } else {
                        this.gameStateManager.trackPuzzleFailed();
                    }
                    
                    // Use scene transition effect if available
                    if (this.visualEffects) {
                        this.visualEffects.sceneTransitionEffect(() => {
                            this.render();
                        });
                    } else {
                        this.render();
                    }
                });
                
                solutionsContainer.appendChild(button);
            });
            
            puzzleBox.appendChild(solutionsContainer);
        }
        
        // Add hint button if player has the puzzle_hint ability
        if (this.progressionSystem && this.progressionSystem.hasAbility('puzzle_hint')) {
            const hintButton = document.createElement('button');
            hintButton.className = 'hint-button';
            hintButton.innerHTML = '<span class="hint-icon">💡</span> Use Hint';
            
            hintButton.addEventListener('click', () => {
                // Play click sound
                if (this.audioManager) {
                    this.audioManager.playClickSound();
                }
                
                // Use the puzzle_hint ability
                const hintResult = this.progressionSystem.useAbility('puzzle_hint', puzzleData.puzzleId);
                
                if (hintResult) {
                    // Create hint display
                    const hintDisplay = document.createElement('div');
                    hintDisplay.className = 'puzzle-hint';
                    hintDisplay.innerHTML = `<strong>Hint:</strong> ${hintResult.hint}`;
                    
                    // Replace hint button with hint display
                    hintButton.parentNode.replaceChild(hintDisplay, hintButton);
                    
                    // Show hint effect
                    if (this.visualEffects) {
                        this.visualEffects.pulseEffect(hintDisplay, '#ffc107');
                    }
                }
            });
            
            puzzleBox.appendChild(hintButton);
        }
        
        this.elements.puzzleContainer.appendChild(puzzleBox);
    }

    /**
     * Update status displays (karma, inventory, level, XP, etc.)
     */
    updateStatusDisplay() {
        const gameState = this.gameStateManager.getState();
        
        // Update karma display
        if (this.elements.karmaDisplay) {
            this.elements.karmaDisplay.innerText = `Karma: ${gameState.playerState.karma}`;
        }
        
        // Update level display
        if (this.elements.levelDisplay) {
            this.elements.levelDisplay.innerText = `Level: ${gameState.playerState.progression.level}`;
        }
        
        // Update XP display and progress bar
        if (this.elements.xpDisplay) {
            const currentXP = gameState.playerState.progression.xp;
            const xpToNextLevel = this.progressionSystem ? 
                this.progressionSystem.getXPToNextLevel(currentXP) : 100;
            const currentLevelXP = this.progressionSystem ? 
                this.progressionSystem.levelThresholds[gameState.playerState.progression.level - 1] || 0 : 0;
            const nextLevelXP = this.progressionSystem ? 
                this.progressionSystem.levelThresholds[gameState.playerState.progression.level] || currentXP + xpToNextLevel : currentXP + 100;
            
            // Calculate progress percentage
            const totalXPForLevel = nextLevelXP - currentLevelXP;
            const currentXPInLevel = currentXP - currentLevelXP;
            const progressPercentage = Math.floor((currentXPInLevel / totalXPForLevel) * 100);
            
            // Update XP text
            this.elements.xpDisplay.innerText = `XP: ${currentXP} / ${nextLevelXP}`;
            
            // Update XP bar
            const xpFill = document.getElementById('xp-fill');
            if (xpFill) {
                xpFill.style.width = `${progressPercentage}%`;
            }
        }
        
        // Update inventory display
        if (this.elements.inventoryDisplay) {
            this.elements.inventoryDisplay.innerHTML = '<h3>Inventory</h3>';
            
            if (gameState.playerState.inventory.length > 0 || gameState.playerState.specialItems.length > 0) {
                const inventoryList = document.createElement('ul');
                inventoryList.className = 'inventory-list';
                
                // Regular items
                gameState.playerState.inventory.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.className = 'inventory-item';
                    listItem.innerText = item;
                    inventoryList.appendChild(listItem);
                });
                
                // Special items with icons and tooltips
                gameState.playerState.specialItems.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.className = 'inventory-item special-item';
                    
                    const itemIcon = document.createElement('span');
                    itemIcon.className = 'item-icon';
                    itemIcon.innerHTML = item.icon || '✨';
                    
                    const itemName = document.createElement('span');
                    itemName.className = 'item-name';
                    itemName.innerText = item.name;
                    
                    // Create tooltip
                    const tooltip = document.createElement('div');
                    tooltip.className = 'item-tooltip';
                    tooltip.innerHTML = `
                        <strong>${item.name}</strong>
                        <p>${item.description}</p>
                        ${item.effect ? `<p class="item-effect">${item.effect}</p>` : ''}
                    `;
                    
                    listItem.appendChild(itemIcon);
                    listItem.appendChild(itemName);
                    listItem.appendChild(tooltip);
                    
                    // Show tooltip on hover
                    listItem.addEventListener('mouseenter', () => {
                        tooltip.style.display = 'block';
                    });
                    
                    listItem.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                    });
                    
                    inventoryList.appendChild(listItem);
                });
                
                this.elements.inventoryDisplay.appendChild(inventoryList);
            } else {
                const emptyText = document.createElement('p');
                emptyText.className = 'empty-inventory';
                emptyText.innerText = 'Inventory: Empty';
                this.elements.inventoryDisplay.appendChild(emptyText);
            }
        }
        
        // Update act display
        if (this.elements.actDisplay) {
            this.elements.actDisplay.innerText = `Act ${gameState.playerState.currentAct}`;
        }
        
        // Update dharmic profile display with progress bars
        if (this.elements.dharmicProfileDisplay) {
            this.elements.dharmicProfileDisplay.innerHTML = '<h3>Dharmic Profile</h3>';
            
            const dharmicProfile = gameState.playerState.dharmicProfile;
            const profileContainer = document.createElement('div');
            profileContainer.className = 'dharmic-profile-container';
            
            Object.entries(dharmicProfile).forEach(([aspect, value]) => {
                const aspectContainer = document.createElement('div');
                aspectContainer.className = 'dharmic-aspect';
                
                const aspectLabel = document.createElement('div');
                aspectLabel.className = 'aspect-label';
                aspectLabel.innerText = `${aspect.charAt(0).toUpperCase() + aspect.slice(1)}`;
                
                const aspectValue = document.createElement('div');
                aspectValue.className = 'aspect-value';
                aspectValue.innerText = value;
                
                const progressBar = document.createElement('div');
                progressBar.className = 'aspect-progress';
                
                const progressFill = document.createElement('div');
                progressFill.className = 'aspect-progress-fill';
                progressFill.style.width = `${Math.min(value * 10, 100)}%`;
                progressFill.style.backgroundColor = this.getAspectColor(aspect);
                
                progressBar.appendChild(progressFill);
                
                aspectContainer.appendChild(aspectLabel);
                aspectContainer.appendChild(aspectValue);
                aspectContainer.appendChild(progressBar);
                
                profileContainer.appendChild(aspectContainer);
            });
            
            this.elements.dharmicProfileDisplay.appendChild(profileContainer);
        }
    }

    /**
     * Get color for dharmic aspect
     */
    getAspectColor(aspect) {
        switch (aspect.toLowerCase()) {
            case 'dharma':
                return '#4caf50'; // Green
            case 'artha':
                return '#ff9800'; // Orange
            case 'kama':
                return '#e91e63'; // Pink
            case 'moksha':
                return '#2196f3'; // Blue
            default:
                return '#9c27b0'; // Purple
        }
    }

    /**
     * Update quest log button to show notification if there are active quests
     */
    updateQuestLogButton() {
        if (!this.elements.questLogButton || !this.questSystem) return;
        
        const activeQuests = this.questSystem.getActiveQuests();
        
        if (activeQuests.length > 0) {
            this.elements.questLogButton.classList.add('has-quests');
            this.elements.questLogButton.innerHTML = `<span class="icon">📜</span> Quest Log <span class="quest-count">${activeQuests.length}</span>`;
        } else {
            this.elements.questLogButton.classList.remove('has-quests');
            this.elements.questLogButton.innerHTML = '<span class="icon">📜</span> Quest Log';
        }
    }

    /**
     * Update meditate button state based on ability availability
     */
    updateMeditateButton() {
        if (!this.elements.meditateButton || !this.progressionSystem) return;
        
        const hasMeditationAbility = this.progressionSystem.hasAbility('meditation');
        
        if (hasMeditationAbility) {
            this.elements.meditateButton.disabled = false;
            this.elements.meditateButton.title = 'Meditate to gain spiritual insights';
        } else {
            this.elements.meditateButton.disabled = true;
            this.elements.meditateButton.title = 'Meditation ability not yet unlocked';
        }
    }

    /**
     * Update player avatar
     */
    updatePlayerAvatar() {
        if (!this.elements.playerAvatar) return;
        
        const avatarImage = document.getElementById('avatar-image');
        if (avatarImage) {
            const avatarPath = this.gameStateManager.playerProfile.avatar || 'images/avatars/default.png';
            avatarImage.src = avatarPath;
            
            // Add nakshatra and level info
            const avatarInfo = document.createElement('div');
            avatarInfo.className = 'avatar-info';
            avatarInfo.innerHTML = `
                <div class="avatar-name">${this.gameStateManager.playerProfile.nakshatra || 'Unknown'}</div>
                <div class="avatar-level">Level ${this.gameStateManager.playerState.progression.level}</div>
            `;
            
            // Replace existing info or add new
            const existingInfo = this.elements.playerAvatar.querySelector('.avatar-info');
            if (existingInfo) {
                this.elements.playerAvatar.replaceChild(avatarInfo, existingInfo);
            } else {
                this.elements.playerAvatar.appendChild(avatarInfo);
            }
        }
    }

    /**
     * Process any pending notifications
     */
    processNotifications() {
        const notifications = this.gameStateManager.getPendingNotifications();
        
        notifications.forEach(notification => {
            this.showNotification(notification.message, notification.type);
        });
    }

    /**
     * Show a notification
     */
    showNotification(message, type = 'info') {
        if (!this.elements.notificationArea) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = message;
        
        // Add close button
        const closeButton = document.createElement('span');
        closeButton.className = 'notification-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            notification.classList.add('hiding');
            setTimeout(() => {
                if (this.elements.notificationArea.contains(notification)) {
                    this.elements.notificationArea.removeChild(notification);
                }
            }, 300);
        });
        
        notification.appendChild(closeButton);
        
        // Add to notification area
        this.elements.notificationArea.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('visible');
        }, 10);
        
        // Auto-remove after delay
        setTimeout(() => {
            notification.classList.add('hiding');
            setTimeout(() => {
                if (this.elements.notificationArea.contains(notification)) {
                    this.elements.notificationArea.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    /**
     * Show quest log
     */
    showQuestLog() {
        if (!this.questSystem) return;
        
        // Play click sound
        if (this.audioManager) {
            this.audioManager.playClickSound();
        }
        
        // Create modal container
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content quest-log';
        
        // Create header
        const header = document.createElement('div');
        header.className = 'modal-header';
        
        const title = document.createElement('h2');
        title.innerText = 'Quest Log';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modalContainer);
        });
        
        header.appendChild(title);
        header.appendChild(closeButton);
        
        // Create tabs
        const tabs = document.createElement('div');
        tabs.className = 'modal-tabs';
        
        const activeTab = document.createElement('button');
        activeTab.className = 'tab-button active';
        activeTab.innerText = 'Active Quests';
        
        const completedTab = document.createElement('button');
        completedTab.className = 'tab-button';
        completedTab.innerText = 'Completed Quests';
        
        const failedTab = document.createElement('button');
        failedTab.className = 'tab-button';
        failedTab.innerText = 'Failed Quests';
        
        tabs.appendChild(activeTab);
        tabs.appendChild(completedTab);
        tabs.appendChild(failedTab);
        
        // Create content area
        const contentArea = document.createElement('div');
        contentArea.className = 'modal-body';
        
        // Function to show active quests
        const showActiveQuests = () => {
            contentArea.innerHTML = '';
            
            const activeQuests = this.questSystem.getActiveQuests();
            
            if (activeQuests.length === 0) {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'empty-message';
                emptyMessage.innerText = 'No active quests.';
                contentArea.appendChild(emptyMessage);
                return;
            }
            
            activeQuests.forEach(quest => {
                const questCard = document.createElement('div');
                questCard.className = 'quest-card';
                
                const questHeader = document.createElement('div');
                questHeader.className = 'quest-header';
                
                const questTitle = document.createElement('h3');
                questTitle.className = 'quest-title';
                questTitle.innerText = quest.title;
                
                const questProgress = document.createElement('div');
                questProgress.className = 'quest-progress';
                questProgress.innerHTML = `${quest.progress}%`;
                
                questHeader.appendChild(questTitle);
                questHeader.appendChild(questProgress);
                
                const questDescription = document.createElement('p');
                questDescription.className = 'quest-description';
                questDescription.innerText = quest.description;
                
                const objectivesList = document.createElement('ul');
                objectivesList.className = 'objectives-list';
                
                quest.objectives.forEach(objective => {
                    const objectiveItem = document.createElement('li');
                    objectiveItem.className = `objective-item ${objective.completed ? 'completed' : ''}`;
                    
                    const objectiveCheck = document.createElement('span');
                    objectiveCheck.className = 'objective-check';
                    objectiveCheck.innerHTML = objective.completed ? '✓' : '○';
                    
                    const objectiveText = document.createElement('span');
                    objectiveText.className = 'objective-text';
                    objectiveText.innerText = objective.description;
                    
                    objectiveItem.appendChild(objectiveCheck);
                    objectiveItem.appendChild(objectiveText);
                    objectivesList.appendChild(objectiveItem);
                });
                
                const progressBar = document.createElement('div');
                progressBar.className = 'quest-progress-bar';
                
                const progressFill = document.createElement('div');
                progressFill.className = 'quest-progress-fill';
                progressFill.style.width = `${quest.progress}%`;
                
                progressBar.appendChild(progressFill);
                
                questCard.appendChild(questHeader);
                questCard.appendChild(questDescription);
                questCard.appendChild(objectivesList);
                questCard.appendChild(progressBar);
                
                contentArea.appendChild(questCard);
            });
        };
        
        // Function to show completed quests
        const showCompletedQuests = () => {
            contentArea.innerHTML = '';
            
            const completedQuests = this.questSystem.getCompletedQuests();
            
            if (completedQuests.length === 0) {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'empty-message';
                emptyMessage.innerText = 'No completed quests.';
                contentArea.appendChild(emptyMessage);
                return;
            }
            
            completedQuests.forEach(quest => {
                const questCard = document.createElement('div');
                questCard.className = 'quest-card completed';
                
                const questHeader = document.createElement('div');
                questHeader.className = 'quest-header';
                
                const questTitle = document.createElement('h3');
                questTitle.className = 'quest-title';
                questTitle.innerText = quest.title;
                
                const questStatus = document.createElement('div');
                questStatus.className = 'quest-status';
                questStatus.innerHTML = 'Completed ✓';
                
                questHeader.appendChild(questTitle);
                questHeader.appendChild(questStatus);
                
                const questDescription = document.createElement('p');
                questDescription.className = 'quest-description';
                questDescription.innerText = quest.description;
                
                const rewardsTitle = document.createElement('h4');
                rewardsTitle.className = 'rewards-title';
                rewardsTitle.innerText = 'Rewards:';
                
                const rewardsList = document.createElement('ul');
                rewardsList.className = 'rewards-list';
                
                if (quest.rewards) {
                    if (quest.rewards.xp) {
                        const xpItem = document.createElement('li');
                        xpItem.innerHTML = `<span class="reward-icon">✨</span> ${quest.rewards.xp} XP`;
                        rewardsList.appendChild(xpItem);
                    }
                    
                    if (quest.rewards.karma) {
                        const karmaItem = document.createElement('li');
                        karmaItem.innerHTML = `<span class="reward-icon">☯️</span> ${quest.rewards.karma} Karma`;
                        rewardsList.appendChild(karmaItem);
                    }
                    
                    if (quest.rewards.items && quest.rewards.items.length > 0) {
                        quest.rewards.items.forEach(item => {
                            const itemItem = document.createElement('li');
                            itemItem.innerHTML = `<span class="reward-icon">🎁</span> ${item}`;
                            rewardsList.appendChild(itemItem);
                        });
                    }
                    
                    if (quest.rewards.dharmicProfile) {
                        Object.entries(quest.rewards.dharmicProfile).forEach(([aspect, value]) => {
                            const aspectItem = document.createElement('li');
                            aspectItem.innerHTML = `<span class="reward-icon">🔱</span> ${aspect.charAt(0).toUpperCase() + aspect.slice(1)}: +${value}`;
                            rewardsList.appendChild(aspectItem);
                        });
                    }
                }
                
                questCard.appendChild(questHeader);
                questCard.appendChild(questDescription);
                questCard.appendChild(rewardsTitle);
                questCard.appendChild(rewardsList);
                
                contentArea.appendChild(questCard);
            });
        };
        
        // Function to show failed quests
        const showFailedQuests = () => {
            contentArea.innerHTML = '';
            
            const failedQuests = this.questSystem.getFailedQuests();
            
            if (failedQuests.length === 0) {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'empty-message';
                emptyMessage.innerText = 'No failed quests.';
                contentArea.appendChild(emptyMessage);
                return;
            }
            
            failedQuests.forEach(quest => {
                const questCard = document.createElement('div');
                questCard.className = 'quest-card failed';
                
                const questHeader = document.createElement('div');
                questHeader.className = 'quest-header';
                
                const questTitle = document.createElement('h3');
                questTitle.className = 'quest-title';
                questTitle.innerText = quest.title;
                
                const questStatus = document.createElement('div');
                questStatus.className = 'quest-status';
                questStatus.innerHTML = 'Failed ✗';
                
                questHeader.appendChild(questTitle);
                questHeader.appendChild(questStatus);
                
                const questDescription = document.createElement('p');
                questDescription.className = 'quest-description';
                questDescription.innerText = quest.description;
                
                questCard.appendChild(questHeader);
                questCard.appendChild(questDescription);
                
                contentArea.appendChild(questCard);
            });
        };
        
        // Set up tab click handlers
        activeTab.addEventListener('click', () => {
            activeTab.classList.add('active');
            completedTab.classList.remove('active');
            failedTab.classList.remove('active');
            showActiveQuests();
        });
        
        completedTab.addEventListener('click', () => {
            activeTab.classList.remove('active');
            completedTab.classList.add('active');
            failedTab.classList.remove('active');
            showCompletedQuests();
        });
        
        failedTab.addEventListener('click', () => {
            activeTab.classList.remove('active');
            completedTab.classList.remove('active');
            failedTab.classList.add('active');
            showFailedQuests();
        });
        
        // Assemble modal
        modalContent.appendChild(header);
        modalContent.appendChild(tabs);
        modalContent.appendChild(contentArea);
        modalContainer.appendChild(modalContent);
        
        // Add to body
        document.body.appendChild(modalContainer);
        
        // Show active quests by default
        showActiveQuests();
    }

    /**
     * Show achievements
     */
    showAchievements() {
        if (!this.progressionSystem) return;
        
        // Play click sound
        if (this.audioManager) {
            this.audioManager.playClickSound();
        }
        
        // Create modal container
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content achievements';
        
        // Create header
        const header = document.createElement('div');
        header.className = 'modal-header';
        
        const title = document.createElement('h2');
        title.innerText = 'Achievements';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modalContainer);
        });
        
        header.appendChild(title);
        header.appendChild(closeButton);
        
        // Create content area
        const contentArea = document.createElement('div');
        contentArea.className = 'modal-body';
        
        // Get player achievements
        const unlockedAchievements = this.progressionSystem.getPlayerAchievements();
        
        // Get all achievements
        const allAchievements = Object.values(this.progressionSystem.achievements);
        
        // Create achievement grid
        const achievementGrid = document.createElement('div');
        achievementGrid.className = 'achievement-grid';
        
        allAchievements.forEach(achievement => {
            const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
            
            const achievementCard = document.createElement('div');
            achievementCard.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            
            const achievementIcon = document.createElement('div');
            achievementIcon.className = 'achievement-icon';
            achievementIcon.innerHTML = isUnlocked ? achievement.icon : '?';
            
            const achievementInfo = document.createElement('div');
            achievementInfo.className = 'achievement-info';
            
            const achievementTitle = document.createElement('h3');
            achievementTitle.className = 'achievement-title';
            achievementTitle.innerText = isUnlocked ? achievement.title : '???';
            
            const achievementDesc = document.createElement('p');
            achievementDesc.className = 'achievement-description';
            achievementDesc.innerText = isUnlocked ? achievement.description : 'Achievement locked';
            
            achievementInfo.appendChild(achievementTitle);
            achievementInfo.appendChild(achievementDesc);
            
            achievementCard.appendChild(achievementIcon);
            achievementCard.appendChild(achievementInfo);
            
            // Add rewards info if unlocked
            if (isUnlocked && achievement.reward) {
                const rewardsInfo = document.createElement('div');
                rewardsInfo.className = 'achievement-rewards';
                
                if (achievement.reward.xp) {
                    const xpReward = document.createElement('div');
                    xpReward.className = 'reward';
                    xpReward.innerHTML = `<span class="reward-icon">✨</span> ${achievement.reward.xp} XP`;
                    rewardsInfo.appendChild(xpReward);
                }
                
                if (achievement.reward.abilities && achievement.reward.abilities.length > 0) {
                    achievement.reward.abilities.forEach(abilityId => {
                        const ability = this.progressionSystem.abilities[abilityId];
                        if (ability) {
                            const abilityReward = document.createElement('div');
                            abilityReward.className = 'reward ability';
                            abilityReward.innerHTML = `<span class="reward-icon">🔮</span> ${ability.name}`;
                            abilityReward.title = ability.description;
                            rewardsInfo.appendChild(abilityReward);
                        }
                    });
                }
                
                achievementCard.appendChild(rewardsInfo);
            }
            
            achievementGrid.appendChild(achievementCard);
        });
        
        contentArea.appendChild(achievementGrid);
        
        // Assemble modal
        modalContent.appendChild(header);
        modalContent.appendChild(contentArea);
        modalContainer.appendChild(modalContent);
        
        // Add to body
        document.body.appendChild(modalContainer);
    }

    /**
     * Perform meditation
     */
    performMeditation() {
        if (!this.progressionSystem) return;
        
        // Play click sound
        if (this.audioManager) {
            this.audioManager.playClickSound();
        }
        
        // Attempt to meditate
        const meditationResult = this.progressionSystem.meditate();
        
        if (!meditationResult.success) {
            // Show error notification
            this.showNotification(meditationResult.message, 'error');
            return;
        }
        
        // Play meditation sound
        if (this.audioManager) {
            this.audioManager.playMeditationSound();
            this.audioManager.playMeditationMusic();
        }
        
        // Show meditation effect
        if (this.visualEffects) {
            this.visualEffects.meditationEffect(meditationResult.insight);
        }
        
        // Track meditation performed
        this.gameStateManager.trackMeditationPerformed();
        
        // Show karma gain effect if applicable
        if (meditationResult.karmaGained > 0 && this.visualEffects) {
            this.visualEffects.karmaChangeEffect(meditationResult.karmaGained);
            
            // Play karma sound
            if (this.audioManager) {
                this.audioManager.playKarmaSound(meditationResult.karmaGained);
            }
        }
        
        // Check for level up
        if (meditationResult.xpGained && meditationResult.xpGained.levelUp) {
            // Play level up sound
            if (this.audioManager) {
                this.audioManager.playLevelUpSound();
            }
            
            // Show level up effect
            if (this.visualEffects) {
                this.visualEffects.levelUpEffect(meditationResult.xpGained.newLevel);
            }
            
            // Track level gained
            this.gameStateManager.trackLevelGained();
        }
        
        // Return to act music after meditation
        setTimeout(() => {
            if (this.audioManager) {
                this.audioManager.playActMusic(this.gameStateManager.playerState.currentAct);
            }
        }, 10000);
    }

    /**
     * Show settings
     */
    showSettings() {
        // Play click sound
        if (this.audioManager) {
            this.audioManager.playClickSound();
        }
        
        // Create modal container
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content settings';
        
        // Create header
        const header = document.createElement('div');
        header.className = 'modal-header';
        
        const title = document.createElement('h2');
        title.innerText = 'Settings';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modalContainer);
        });
        
        header.appendChild(title);
        header.appendChild(closeButton);
        
        // Create content area
        const contentArea = document.createElement('div');
        contentArea.className = 'modal-body';
        
        // Get current settings
        const settings = this.gameStateManager.playerState.settings;
        
        // Create settings form
        const settingsForm = document.createElement('form');
        settingsForm.className = 'settings-form';
        
        // Audio settings
        const audioSettings = document.createElement('div');
        audioSettings.className = 'settings-section';
        
        const audioTitle = document.createElement('h3');
        audioTitle.innerText = 'Audio Settings';
        audioSettings.appendChild(audioTitle);
        
        // Master volume
        const masterVolumeContainer = document.createElement('div');
        masterVolumeContainer.className = 'setting-item';
        
        const masterVolumeLabel = document.createElement('label');
        masterVolumeLabel.htmlFor = 'master-volume';
        masterVolumeLabel.innerText = 'Master Volume';
        
        const masterVolumeSlider = document.createElement('input');
        masterVolumeSlider.type = 'range';
        masterVolumeSlider.id = 'master-volume';
        masterVolumeSlider.min = '0';
        masterVolumeSlider.max = '1';
        masterVolumeSlider.step = '0.1';
        masterVolumeSlider.value = settings.masterVolume;
        
        masterVolumeContainer.appendChild(masterVolumeLabel);
        masterVolumeContainer.appendChild(masterVolumeSlider);
        audioSettings.appendChild(masterVolumeContainer);
        
        // Music volume
        const musicVolumeContainer = document.createElement('div');
        musicVolumeContainer.className = 'setting-item';
        
        const musicVolumeLabel = document.createElement('label');
        musicVolumeLabel.htmlFor = 'music-volume';
        musicVolumeLabel.innerText = 'Music Volume';
        
        const musicVolumeSlider = document.createElement('input');
        musicVolumeSlider.type = 'range';
        musicVolumeSlider.id = 'music-volume';
        musicVolumeSlider.min = '0';
        musicVolumeSlider.max = '1';
        musicVolumeSlider.step = '0.1';
        musicVolumeSlider.value = settings.musicVolume;
        
        musicVolumeContainer.appendChild(musicVolumeLabel);
        musicVolumeContainer.appendChild(musicVolumeSlider);
        audioSettings.appendChild(musicVolumeContainer);
        
        // Effects volume
        const effectsVolumeContainer = document.createElement('div');
        effectsVolumeContainer.className = 'setting-item';
        
        const effectsVolumeLabel = document.createElement('label');
        effectsVolumeLabel.htmlFor = 'effects-volume';
        effectsVolumeLabel.innerText = 'Effects Volume';
        
        const effectsVolumeSlider = document.createElement('input');
        effectsVolumeSlider.type = 'range';
        effectsVolumeSlider.id = 'effects-volume';
        effectsVolumeSlider.min = '0';
        effectsVolumeSlider.max = '1';
        effectsVolumeSlider.step = '0.1';
        effectsVolumeSlider.value = settings.effectsVolume;
        
        effectsVolumeContainer.appendChild(effectsVolumeLabel);
        effectsVolumeContainer.appendChild(effectsVolumeSlider);
        audioSettings.appendChild(effectsVolumeContainer);
        
        // Mute toggle
        const muteContainer = document.createElement('div');
        muteContainer.className = 'setting-item checkbox';
        
        const muteCheckbox = document.createElement('input');
        muteCheckbox.type = 'checkbox';
        muteCheckbox.id = 'mute-audio';
        muteCheckbox.checked = settings.muted;
        
        const muteLabel = document.createElement('label');
        muteLabel.htmlFor = 'mute-audio';
        muteLabel.innerText = 'Mute All Audio';
        
        muteContainer.appendChild(muteCheckbox);
        muteContainer.appendChild(muteLabel);
        audioSettings.appendChild(muteContainer);
        
        // Visual settings
        const visualSettings = document.createElement('div');
        visualSettings.className = 'settings-section';
        
        const visualTitle = document.createElement('h3');
        visualTitle.innerText = 'Visual Settings';
        visualSettings.appendChild(visualTitle);
        
        // Enable animations
        const animationsContainer = document.createElement('div');
        animationsContainer.className = 'setting-item checkbox';
        
        const animationsCheckbox = document.createElement('input');
        animationsCheckbox.type = 'checkbox';
        animationsCheckbox.id = 'enable-animations';
        animationsCheckbox.checked = settings.enableAnimations;
        
        const animationsLabel = document.createElement('label');
        animationsLabel.htmlFor = 'enable-animations';
        animationsLabel.innerText = 'Enable Visual Effects';
        
        animationsContainer.appendChild(animationsCheckbox);
        animationsContainer.appendChild(animationsLabel);
        visualSettings.appendChild(animationsContainer);
        
        // Show tutorials
        const tutorialsContainer = document.createElement('div');
        tutorialsContainer.className = 'setting-item checkbox';
        
        const tutorialsCheckbox = document.createElement('input');
        tutorialsCheckbox.type = 'checkbox';
        tutorialsCheckbox.id = 'show-tutorials';
        tutorialsCheckbox.checked = settings.showTutorials;
        
        const tutorialsLabel = document.createElement('label');
        tutorialsLabel.htmlFor = 'show-tutorials';
        tutorialsLabel.innerText = 'Show Tutorials';
        
        tutorialsContainer.appendChild(tutorialsCheckbox);
        tutorialsContainer.appendChild(tutorialsLabel);
        visualSettings.appendChild(tutorialsContainer);
        
        // Game statistics
        const statsSection = document.createElement('div');
        statsSection.className = 'settings-section';
        
        const statsTitle = document.createElement('h3');
        statsTitle.innerText = 'Game Statistics';
        statsSection.appendChild(statsTitle);
        
        const statsList = document.createElement('div');
        statsList.className = 'stats-list';
        
        const gameStats = this.gameStateManager.gameStats;
        
        // Play time
        const playTimeItem = document.createElement('div');
        playTimeItem.className = 'stat-item';
        playTimeItem.innerHTML = `<span class="stat-label">Play Time:</span> <span class="stat-value">${this.gameStateManager.getFormattedPlayTime()}</span>`;
        statsList.appendChild(playTimeItem);
        
        // Choices made
        const choicesItem = document.createElement('div');
        choicesItem.className = 'stat-item';
        choicesItem.innerHTML = `<span class="stat-label">Choices Made:</span> <span class="stat-value">${gameStats.choicesMade}</span>`;
        statsList.appendChild(choicesItem);
        
        // Puzzles solved
        const puzzlesItem = document.createElement('div');
        puzzlesItem.className = 'stat-item';
        puzzlesItem.innerHTML = `<span class="stat-label">Puzzles Solved:</span> <span class="stat-value">${gameStats.puzzlesSolved}</span>`;
        statsList.appendChild(puzzlesItem);
        
        // Quests completed
        const questsItem = document.createElement('div');
        questsItem.className = 'stat-item';
        questsItem.innerHTML = `<span class="stat-label">Quests Completed:</span> <span class="stat-value">${gameStats.questsCompleted}</span>`;
        statsList.appendChild(questsItem);
        
        // Karma gained/lost
        const karmaItem = document.createElement('div');
        karmaItem.className = 'stat-item';
        karmaItem.innerHTML = `<span class="stat-label">Karma Balance:</span> <span class="stat-value">+${gameStats.karmaGained} / -${gameStats.karmaLost}</span>`;
        statsList.appendChild(karmaItem);
        
        // Items collected
        const itemsItem = document.createElement('div');
        itemsItem.className = 'stat-item';
        itemsItem.innerHTML = `<span class="stat-label">Items Collected:</span> <span class="stat-value">${gameStats.itemsCollected}</span>`;
        statsList.appendChild(itemsItem);
        
        // Achievements unlocked
        const achievementsItem = document.createElement('div');
        achievementsItem.className = 'stat-item';
        achievementsItem.innerHTML = `<span class="stat-label">Achievements:</span> <span class="stat-value">${gameStats.achievementsUnlocked} / ${Object.keys(this.progressionSystem.achievements).length}</span>`;
        statsList.appendChild(achievementsItem);
        
        statsSection.appendChild(statsList);
        
        // Add event listeners for settings changes
        masterVolumeSlider.addEventListener('input', () => {
            if (this.audioManager) {
                this.audioManager.setMasterVolume(parseFloat(masterVolumeSlider.value));
            }
        });
        
        musicVolumeSlider.addEventListener('input', () => {
            if (this.audioManager) {
                this.audioManager.setMusicVolume(parseFloat(musicVolumeSlider.value));
            }
        });
        
        effectsVolumeSlider.addEventListener('input', () => {
            if (this.audioManager) {
                this.audioManager.setEffectsVolume(parseFloat(effectsVolumeSlider.value));
            }
        });
        
        muteCheckbox.addEventListener('change', () => {
            if (this.audioManager) {
                if (muteCheckbox.checked) {
                    this.audioManager.muteAudio();
                } else {
                    this.audioManager.unmuteAudio();
                }
            }
        });
        
        animationsCheckbox.addEventListener('change', () => {
            this.gameStateManager.updateSettings({
                enableAnimations: animationsCheckbox.checked
            });
            
            if (this.visualEffects) {
                if (!animationsCheckbox.checked) {
                    this.visualEffects.cleanup();
                }
            }
        });
        
        tutorialsCheckbox.addEventListener('change', () => {
            this.gameStateManager.updateSettings({
                showTutorials: tutorialsCheckbox.checked
            });
        });
        
        // Add sections to form
        settingsForm.appendChild(audioSettings);
        settingsForm.appendChild(visualSettings);
        settingsForm.appendChild(statsSection);
        
        // Create save button
        const saveButton = document.createElement('button');
        saveButton.className = 'save-settings-button';
        saveButton.innerText = 'Save Settings';
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Save settings
            this.gameStateManager.updateSettings({
                masterVolume: parseFloat(masterVolumeSlider.value),
                musicVolume: parseFloat(musicVolumeSlider.value),
                effectsVolume: parseFloat(effectsVolumeSlider.value),
                muted: muteCheckbox.checked,
                enableAnimations: animationsCheckbox.checked,
                showTutorials: tutorialsCheckbox.checked
            });
            
            // Close modal
            document.body.removeChild(modalContainer);
            
            // Show confirmation
            this.showNotification('Settings saved successfully', 'success');
        });
        
        settingsForm.appendChild(saveButton);
        
        contentArea.appendChild(settingsForm);
        
        // Assemble modal
        modalContent.appendChild(header);
        modalContent.appendChild(contentArea);
        modalContainer.appendChild(modalContent);
        
        // Add to body
        document.body.appendChild(modalContainer);
    }

    /**
     * Initialize character creation UI
     */
    initCharacterCreation(nakshatraData, onComplete) {
        // Clear main containers
        if (this.elements.sceneText) this.elements.sceneText.innerHTML = '';
        if (this.elements.choicesContainer) this.elements.choicesContainer.innerHTML = '';
        
        // Play menu music
        if (this.audioManager) {
            this.audioManager.playMenuMusic();
        }
        
        // Create character creation container
        const characterCreationContainer = document.createElement('div');
        characterCreationContainer.id = 'character-creation';
        
        // Create title
        const title = document.createElement('h2');
        title.innerText = 'Choose Your Nakshatra (Birth Star)';
        characterCreationContainer.appendChild(title);
        
        // Create description
        const description = document.createElement('p');
        description.innerText = 'Your Nakshatra determines your innate qualities and spiritual path in this journey.';
        characterCreationContainer.appendChild(description);
        
        // Create nakshatra selection
        const nakshatraSelection = document.createElement('div');
        nakshatraSelection.className = 'nakshatra-selection';
        
        nakshatraData.forEach(nakshatra => {
            const nakshatraCard = document.createElement('div');
            nakshatraCard.className = 'nakshatra-card';
            
            // Add glow effect based on gana
            nakshatraCard.classList.add(`gana-${nakshatra.gana.toLowerCase()}`);
            
            // Create card header with icon
            const cardHeader = document.createElement('div');
            cardHeader.className = 'nakshatra-card-header';
            
            const nakshatraIcon = document.createElement('div');
            nakshatraIcon.className = 'nakshatra-icon';
            nakshatraIcon.innerHTML = this.getNakshatraIcon(nakshatra.name);
            
            const nakshatraName = document.createElement('h3');
            nakshatraName.innerText = nakshatra.name;
            
            cardHeader.appendChild(nakshatraIcon);
            cardHeader.appendChild(nakshatraName);
            nakshatraCard.appendChild(cardHeader);
            
            // Create card content
            const cardContent = document.createElement('div');
            cardContent.className = 'nakshatra-card-content';
            cardContent.innerHTML = `
                <p><strong>Gana:</strong> ${nakshatra.gana}</p>
                <p><strong>Shakti:</strong> ${nakshatra.shakti}</p>
                <p><strong>Gunas:</strong> 
                    <span class="guna sattva">Sattva: ${nakshatra.gunas.sattva}</span>, 
                    <span class="guna rajas">Rajas: ${nakshatra.gunas.rajas}</span>, 
                    <span class="guna tamas">Tamas: ${nakshatra.gunas.tamas}</span>
                </p>
                <p>${nakshatra.description}</p>
            `;
            nakshatraCard.appendChild(cardContent);
            
            // Create special ability section
            if (nakshatra.ability) {
                const abilitySection = document.createElement('div');
                abilitySection.className = 'nakshatra-ability';
                abilitySection.innerHTML = `
                    <h4>Special Ability</h4>
                    <p>${nakshatra.ability}</p>
                `;
                nakshatraCard.appendChild(abilitySection);
            }
            
            // Create select button
            const selectButton = document.createElement('button');
            selectButton.className = 'select-nakshatra-button';
            selectButton.innerText = 'Choose This Path';
            selectButton.addEventListener('click', () => {
                // Play click sound
                if (this.audioManager) {
                    this.audioManager.playClickSound();
                }
                
                // Use scene transition effect if available
                if (this.visualEffects) {
                    this.visualEffects.sceneTransitionEffect(() => {
                        onComplete(nakshatra.name);
                    });
                } else {
                    onComplete(nakshatra.name);
                }
            });
            nakshatraCard.appendChild(selectButton);
            
            nakshatraSelection.appendChild(nakshatraCard);
        });
        
        characterCreationContainer.appendChild(nakshatraSelection);
        
        // Add to scene text area
        if (this.elements.sceneText) {
            this.elements.sceneText.appendChild(characterCreationContainer);
        }
    }

    /**
     * Get icon for nakshatra
     */
    getNakshatraIcon(nakshatra) {
        // Map nakshatras to icons
        const icons = {
            'Ashwini': '🐎', // Horse
            'Bharani': '🔥', // Fire
            'Krittika': '🔪', // Knife
            'Rohini': '🌱', // Plant
            'Mrigashira': '🦌', // Deer
            'Ardra': '💧', // Water Drop
            'Punarvasu': '🏹', // Bow and Arrow
            'Pushya': '🌼', // Flower
            'Ashlesha': '🐍', // Snake
            'Magha': '👑', // Crown
            'Purva Phalguni': '🎭', // Performing Arts
            'Uttara Phalguni': '⚖️', // Balance
            'Hasta': '✋', // Hand
            'Chitra': '💎', // Gem
            'Swati': '🍃', // Leaf Fluttering
            'Vishakha': '🌟', // Star
            'Anuradha': '🤝', // Handshake
            'Jyeshtha': '🛡️', // Shield
            'Mula': '🌳', // Tree
            'Purva Ashadha': '💦', // Water
            'Uttara Ashadha': '🏆', // Trophy
            'Shravana': '👂', // Ear
            'Dhanishta': '🥁', // Drum
            'Shatabhisha': '⚕️', // Medical Symbol
            'Purva Bhadrapada': '🔮', // Crystal Ball
            'Uttara Bhadrapada': '🐟', // Fish
            'Revati': '✨' // Sparkles
        };
        
        return icons[nakshatra] || '⭐'; // Default star
    }

    /**
     * Show game menu (New Game, Load Game, etc.)
     */
    showGameMenu(callbacks) {
        // Clear main containers
        if (this.elements.sceneTitle) this.elements.sceneTitle.innerText = 'Samsara Saga';
        if (this.elements.sceneText) this.elements.sceneText.innerHTML = '';
        if (this.elements.choicesContainer) this.elements.choicesContainer.innerHTML = '';
        if (this.elements.puzzleContainer) this.elements.puzzleContainer.innerHTML = '';
        
        // Play menu music
        if (this.audioManager) {
            this.audioManager.playMenuMusic();
        }
        
        // Create menu container with enhanced styling
        const menuContainer = document.createElement('div');
        menuContainer.className = 'game-menu';
        
        // Create logo
        const logoContainer = document.createElement('div');
        logoContainer.className = 'game-logo';
        
        const logoImage = document.createElement('div');
        logoImage.className = 'logo-image';
        logoImage.innerHTML = '☸️'; // Dharma wheel
        
        const logoText = document.createElement('h1');
        logoText.className = 'logo-text';
        logoText.innerText = 'Samsara Saga';
        
        logoContainer.appendChild(logoImage);
        logoContainer.appendChild(logoText);
        
        // Create tagline
        const tagline = document.createElement('p');
        tagline.className = 'game-tagline';
        tagline.innerText = 'A Journey Through Karma and Dharma';
        
        // Create menu options
        const options = [
            { text: 'New Game', icon: '🔄', callback: callbacks.newGame },
            { text: 'Load Game', icon: '💾', callback: callbacks.loadGame },
            { text: 'About', icon: 'ℹ️', callback: callbacks.about }
        ];
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'menu-options';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'menu-button';
            
            const buttonIcon = document.createElement('span');
            buttonIcon.className = 'menu-icon';
            buttonIcon.innerHTML = option.icon;
            
            const buttonText = document.createElement('span');
            buttonText.className = 'menu-text';
            buttonText.innerText = option.text;
            
            button.appendChild(buttonIcon);
            button.appendChild(buttonText);
            
            button.addEventListener('click', () => {
                // Play click sound
                if (this.audioManager) {
                    this.audioManager.playClickSound();
                }
                
                // Use scene transition effect if available
                if (this.visualEffects) {
                    this.visualEffects.sceneTransitionEffect(() => {
                        option.callback();
                    });
                } else {
                    option.callback();
                }
            });
            
            // Add hover sound
            button.addEventListener('mouseenter', () => {
                if (this.audioManager) {
                    this.audioManager.playHoverSound();
                }
            });
            
            optionsContainer.appendChild(button);
        });
        
        // Create version info
        const versionInfo = document.createElement('div');
        versionInfo.className = 'version-info';
        versionInfo.innerText = 'Version 2.0';
        
        // Assemble menu
        menuContainer.appendChild(logoContainer);
        menuContainer.appendChild(tagline);
        menuContainer.appendChild(optionsContainer);
        menuContainer.appendChild(versionInfo);
        
        // Add to scene text area
        if (this.elements.sceneText) {
            this.elements.sceneText.appendChild(menuContainer);
        }
    }
}

// Export the UIController class