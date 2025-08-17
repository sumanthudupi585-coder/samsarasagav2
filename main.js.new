/**
 * main.js
 * 
 * This is the entry point for the Samsara Saga game.
 * It initializes all game components and sets up the game loop.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize game components
    initGame();
});

function initGame() {
    console.log("Initializing Samsara Saga...");
    
    // Create instances of all game engines
    const gameStateManager = window.gameStateManager || new GameStateManager();
    const progressionSystem = new ProgressionSystem(gameStateManager);
    const storyEngine = new StoryEngine(gameStateManager);
    const puzzleEngine = new PuzzleEngine(gameStateManager, storyEngine);
    const questSystem = new QuestSystem(gameStateManager, progressionSystem);
    const visualEffects = new VisualEffects();
    const audioManager = new AudioManager();
    const uiController = new UIController(
        storyEngine, 
        gameStateManager, 
        puzzleEngine, 
        progressionSystem, 
        questSystem, 
        visualEffects, 
        audioManager
    );
    
    // Make instances available globally for debugging
    window.gameStateManager = gameStateManager;
    window.progressionSystem = progressionSystem;
    window.storyEngine = storyEngine;
    window.puzzleEngine = puzzleEngine;
    window.questSystem = questSystem;
    window.visualEffects = visualEffects;
    window.audioManager = audioManager;
    window.uiController = uiController;
    
    // Set up game menu callbacks
    const menuCallbacks = {
        newGame: () => startNewGame(gameStateManager, uiController, progressionSystem, questSystem, audioManager),
        loadGame: () => loadSavedGame(gameStateManager, uiController, progressionSystem, questSystem, audioManager),
        about: () => showAboutScreen(uiController, audioManager)
    };
    
    // Show the game menu
    uiController.showGameMenu(menuCallbacks);
    
    // Set up save game button if it exists
    const saveButton = document.getElementById('save-game');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const saved = gameStateManager.saveGame();
            if (saved) {
                // Show success notification
                uiController.showNotification('Game saved successfully!', 'success');
                
                // Play success sound
                if (audioManager) {
                    audioManager.playSound('click');
                }
            } else {
                // Show error notification
                uiController.showNotification('Failed to save game.', 'error');
            }
        });
    }
    
    // Set up keyboard shortcuts
    setupKeyboardShortcuts(gameStateManager, uiController, audioManager);
}

/**
 * Start a new game
 */
function startNewGame(gameStateManager, uiController, progressionSystem, questSystem, audioManager) {
    // Initialize a new game state
    gameStateManager.init();
    
    // Load nakshatra data for character creation
    const nakshatraData = window.NAKSHATRA_ATTRIBUTES || [];
    
    // Enhance nakshatra data with abilities
    nakshatraData.forEach(nakshatra => {
        // Add ability descriptions based on nakshatra
        switch (nakshatra.name) {
            case 'Ashwini':
                nakshatra.ability = 'Quick Healing: Recover from negative karma effects faster';
                break;
            case 'Bharani':
                nakshatra.ability = 'Spirit Sight: Can see hidden spiritual connections';
                break;
            case 'Krittika':
                nakshatra.ability = 'Inner Fire: Gain extra karma from positive actions';
                break;
            case 'Rohini':
                nakshatra.ability = 'Earth Bond: Special connection with natural elements';
                break;
            case 'Mrigashira':
                nakshatra.ability = 'Animal Speech: Can understand animal messages';
                break;
            case 'Ardra':
                nakshatra.ability = 'Storm Caller: Harness the power of emotional intensity';
                break;
            case 'Punarvasu':
                nakshatra.ability = 'Second Chance: Once per act, retry a failed choice';
                break;
            case 'Pushya':
                nakshatra.ability = 'Nurturing Touch: Heal others and gain karma';
                break;
            case 'Ashlesha':
                nakshatra.ability = 'Serpent Wisdom: See through deception';
                break;
            case 'Magha':
                nakshatra.ability = 'Royal Presence: Command respect in social situations';
                break;
            case 'Purva Phalguni':
                nakshatra.ability = 'Artistic Inspiration: Create beauty from ordinary things';
                break;
            case 'Uttara Phalguni':
                nakshatra.ability = 'Truth Vision: Discern truth from falsehood';
                break;
            case 'Hasta':
                nakshatra.ability = 'Skilled Hands: Craft and repair with exceptional skill';
                break;
            case 'Chitra':
                nakshatra.ability = 'Illusion Weaver: Create convincing illusions';
                break;
            case 'Swati':
                nakshatra.ability = 'Wind Whisper: Hear messages carried on the wind';
                break;
            case 'Vishakha':
                nakshatra.ability = 'Dual Strength: Draw power from opposing forces';
                break;
            case 'Anuradha':
                nakshatra.ability = 'Friendship Bond: Form deep connections quickly';
                break;
            case 'Jyeshtha':
                nakshatra.ability = 'Elder Wisdom: Access ancestral knowledge';
                break;
            case 'Mula':
                nakshatra.ability = 'Root Knowledge: Understand the core of problems';
                break;
            case 'Purva Ashadha':
                nakshatra.ability = 'Water Affinity: Navigate water obstacles with ease';
                break;
            case 'Uttara Ashadha':
                nakshatra.ability = 'Victory Blessing: Increased chance of success in challenges';
                break;
            case 'Shravana':
                nakshatra.ability = 'Divine Hearing: Hear whispers from the divine realm';
                break;
            case 'Dhanishta':
                nakshatra.ability = 'Abundance Draw: Find valuable items more often';
                break;
            case 'Shatabhisha':
                nakshatra.ability = 'Healing Waters: Use water for healing rituals';
                break;
            case 'Purva Bhadrapada':
                nakshatra.ability = 'Spiritual Sight: See into the spiritual realm';
                break;
            case 'Uttara Bhadrapada':
                nakshatra.ability = 'Deep Wisdom: Gain insights from meditation';
                break;
            case 'Revati':
                nakshatra.ability = 'Dream Walker: Receive guidance through dreams';
                break;
            default:
                nakshatra.ability = 'Spiritual Insight: Gain deeper understanding of karma';
        }
    });
    
    // Show character creation screen
    uiController.initCharacterCreation(nakshatraData, (selectedNakshatra) => {
        // Set up player profile with selected nakshatra
        gameStateManager.setupPlayerProfile(selectedNakshatra);
        
        // Initialize progression system
        if (progressionSystem) {
            progressionSystem.initProgressionData();
        }
        
        // Start quests for Act 1
        if (questSystem) {
            questSystem.autoStartQuestsForCurrentAct();
        }
        
        // Play act 1 music
        if (audioManager) {
            audioManager.playActMusic(1);
        }
        
        // Start the game with the first scene
        uiController.render();
        
        // Show welcome notification
        uiController.showNotification(`Welcome, traveler! Your journey as ${selectedNakshatra} begins.`, 'info');
    });
}

/**
 * Load a saved game
 */
function loadSavedGame(gameStateManager, uiController, progressionSystem, questSystem, audioManager) {
    const loaded = gameStateManager.loadGame();
    
    if (loaded) {
        // Play appropriate music for the current act
        if (audioManager) {
            audioManager.playActMusic(gameStateManager.playerState.currentAct);
        }
        
        // Render the game with loaded state
        uiController.render();
        
        // Show welcome back notification
        uiController.showNotification('Game loaded successfully. Welcome back!', 'success');
    } else {
        // Show error notification
        uiController.showNotification('No saved game found.', 'error');
        
        // Return to menu
        uiController.showGameMenu({
            newGame: () => startNewGame(gameStateManager, uiController, progressionSystem, questSystem, audioManager),
            loadGame: () => loadSavedGame(gameStateManager, uiController, progressionSystem, questSystem, audioManager),
            about: () => showAboutScreen(uiController, audioManager)
        });
    }
}

/**
 * Show the about screen
 */
function showAboutScreen(uiController, audioManager) {
    // Clear main containers
    const sceneTitle = document.getElementById('scene-title');
    const sceneText = document.getElementById('scene-text');
    const choicesContainer = document.getElementById('choices-container');
    
    if (sceneTitle) sceneTitle.innerText = 'About Samsara Saga';
    
    if (sceneText) {
        sceneText.innerHTML = `
            <div class="about-content">
                <h2>Samsara Saga</h2>
                <p>Samsara Saga is a narrative-driven game based on Hindu/Vedic concepts of karma, dharma, and spiritual evolution.</p>
                <p>In this journey through multiple acts, your choices shape your karma and determine your path through the cycle of rebirth.</p>
                
                <h3>Game Concepts:</h3>
                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-icon">🌟</div>
                        <h4>Nakshatra</h4>
                        <p>Your birth star that determines your innate qualities and special abilities</p>
                    </div>
                    
                    <div class="concept-card">
                        <div class="concept-icon">☯️</div>
                        <h4>Karma</h4>
                        <p>The cosmic principle of cause and effect that shapes your destiny</p>
                    </div>
                    
                    <div class="concept-card">
                        <div class="concept-icon">🔱</div>
                        <h4>Dharma</h4>
                        <p>Your spiritual duty and righteous path in life</p>
                    </div>
                    
                    <div class="concept-card">
                        <div class="concept-icon">🔄</div>
                        <h4>Gunas</h4>
                        <p>The three qualities that make up all of existence (Sattva, Rajas, Tamas)</p>
                    </div>
                </div>
                
                <h3>Game Features:</h3>
                <ul class="feature-list">
                    <li><span class="feature-icon">🎭</span> <strong>Character Development:</strong> Grow and evolve through your choices</li>
                    <li><span class="feature-icon">📈</span> <strong>Level Progression:</strong> Gain XP and unlock new abilities</li>
                    <li><span class="feature-icon">📜</span> <strong>Quest System:</strong> Complete missions to earn rewards</li>
                    <li><span class="feature-icon">🏆</span> <strong>Achievements:</strong> Unlock special accomplishments</li>
                    <li><span class="feature-icon">🧩</span> <strong>Puzzles:</strong> Test your wisdom and problem-solving skills</li>
                    <li><span class="feature-icon">🧘</span> <strong>Meditation:</strong> Gain spiritual insights and karma</li>
                </ul>
                
                <p>Your journey will take you through challenges, puzzles, and moral dilemmas that test your understanding of these concepts.</p>
                
                <div class="credits">
                    <h3>Credits</h3>
                    <p>Samsara Saga is a fictional game created for educational purposes. It draws inspiration from Hindu/Vedic concepts and mythology.</p>
                    <p>Version 2.0 - Enhanced with game mechanics by NinjaTech AI</p>
                </div>
            </div>
        `;
    }
    
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        const backButton = document.createElement('button');
        backButton.className = 'choice-button back-button';
        backButton.innerHTML = '<span class="button-icon">⬅️</span> Back to Menu';
        backButton.addEventListener('click', () => {
            // Play click sound
            if (audioManager) {
                audioManager.playClickSound();
            }
            
            uiController.showGameMenu({
                newGame: () => startNewGame(uiController.gameStateManager, uiController, window.progressionSystem, window.questSystem, audioManager),
                loadGame: () => loadSavedGame(uiController.gameStateManager, uiController, window.progressionSystem, window.questSystem, audioManager),
                about: () => showAboutScreen(uiController, audioManager)
            });
        });
        choicesContainer.appendChild(backButton);
    }
}

/**
 * Set up keyboard shortcuts
 */
function setupKeyboardShortcuts(gameStateManager, uiController, audioManager) {
    document.addEventListener('keydown', (event) => {
        // Save game with Ctrl+S
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            const saved = gameStateManager.saveGame();
            if (saved) {
                uiController.showNotification('Game saved successfully!', 'success');
                if (audioManager) {
                    audioManager.playSound('click');
                }
            } else {
                uiController.showNotification('Failed to save game.', 'error');
            }
        }
        
        // Toggle mute with M key
        if (event.key === 'm') {
            if (audioManager) {
                const muted = audioManager.toggleMute();
                uiController.showNotification(muted ? 'Audio muted' : 'Audio unmuted', 'info');
            }
        }
        
        // Open quest log with Q key
        if (event.key === 'q') {
            uiController.showQuestLog();
        }
        
        // Open achievements with A key
        if (event.key === 'a') {
            uiController.showAchievements();
        }
        
        // Open settings with Escape key
        if (event.key === 'Escape') {
            uiController.showSettings();
        }
    });
}

/**
 * Create HTML structure if it doesn't exist
 */
function createGameStructure() {
    const gameContainer = document.getElementById('game-container');
    
    if (!gameContainer) {
        // Create main game container
        const container = document.createElement('div');
        container.id = 'game-container';
        
        // Create game header
        const header = document.createElement('header');
        header.id = 'game-header';
        
        const title = document.createElement('h1');
        title.innerText = 'Samsara Saga';
        header.appendChild(title);
        
        // Create status display
        const statusDisplay = document.createElement('div');
        statusDisplay.id = 'status-display';
        
        const actDisplay = document.createElement('div');
        actDisplay.id = 'act-display';
        statusDisplay.appendChild(actDisplay);
        
        const levelDisplay = document.createElement('div');
        levelDisplay.id = 'level-display';
        statusDisplay.appendChild(levelDisplay);
        
        const xpContainer = document.createElement('div');
        xpContainer.id = 'xp-container';
        
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
        
        const karmaDisplay = document.createElement('div');
        karmaDisplay.id = 'karma-display';
        statusDisplay.appendChild(karmaDisplay);
        
        header.appendChild(statusDisplay);
        container.appendChild(header);
        
        // Create main game area
        const gameArea = document.createElement('div');
        gameArea.id = 'game-area';
        
        // Create scene container
        const sceneContainer = document.createElement('div');
        sceneContainer.id = 'scene-container';
        
        const sceneTitle = document.createElement('h2');
        sceneTitle.id = 'scene-title';
        sceneContainer.appendChild(sceneTitle);
        
        const sceneText = document.createElement('div');
        sceneText.id = 'scene-text';
        sceneContainer.appendChild(sceneText);
        
        gameArea.appendChild(sceneContainer);
        
        // Create choices container
        const choicesContainer = document.createElement('div');
        choicesContainer.id = 'choices-container';
        gameArea.appendChild(choicesContainer);
        
        // Create puzzle container
        const puzzleContainer = document.createElement('div');
        puzzleContainer.id = 'puzzle-container';
        gameArea.appendChild(puzzleContainer);
        
        container.appendChild(gameArea);
        
        // Create sidebar
        const sidebar = document.createElement('div');
        sidebar.id = 'game-sidebar';
        
        // Create avatar container
        const avatarContainer = document.createElement('div');
        avatarContainer.id = 'avatar-container';
        
        const playerAvatar = document.createElement('div');
        playerAvatar.id = 'player-avatar';
        
        const avatarImage = document.createElement('img');
        avatarImage.id = 'avatar-image';
        avatarImage.alt = 'Player Avatar';
        avatarImage.src = 'images/avatars/default.png';
        
        playerAvatar.appendChild(avatarImage);
        avatarContainer.appendChild(playerAvatar);
        sidebar.appendChild(avatarContainer);
        
        // Create inventory display
        const inventoryDisplay = document.createElement('div');
        inventoryDisplay.id = 'inventory-display';
        inventoryDisplay.innerHTML = '<h3>Inventory</h3>';
        sidebar.appendChild(inventoryDisplay);
        
        // Create dharmic profile display
        const dharmicProfileDisplay = document.createElement('div');
        dharmicProfileDisplay.id = 'dharmic-profile';
        dharmicProfileDisplay.innerHTML = '<h3>Dharmic Profile</h3>';
        sidebar.appendChild(dharmicProfileDisplay);
        
        // Create action buttons
        const actionButtons = document.createElement('div');
        actionButtons.id = 'action-buttons';
        
        // Quest log button
        const questLogButton = document.createElement('button');
        questLogButton.id = 'quest-log-button';
        questLogButton.className = 'action-button';
        questLogButton.innerHTML = '<span class="icon">📜</span> Quest Log';
        actionButtons.appendChild(questLogButton);
        
        // Achievements button
        const achievementsButton = document.createElement('button');
        achievementsButton.id = 'achievements-button';
        achievementsButton.className = 'action-button';
        achievementsButton.innerHTML = '<span class="icon">🏆</span> Achievements';
        actionButtons.appendChild(achievementsButton);
        
        // Meditate button
        const meditateButton = document.createElement('button');
        meditateButton.id = 'meditate-button';
        meditateButton.className = 'action-button';
        meditateButton.innerHTML = '<span class="icon">🧘</span> Meditate';
        meditateButton.disabled = true;
        actionButtons.appendChild(meditateButton);
        
        // Settings button
        const settingsButton = document.createElement('button');
        settingsButton.id = 'settings-button';
        settingsButton.className = 'action-button';
        settingsButton.innerHTML = '<span class="icon">⚙️</span> Settings';
        actionButtons.appendChild(settingsButton);
        
        sidebar.appendChild(actionButtons);
        
        // Create save game button
        const saveButton = document.createElement('button');
        saveButton.id = 'save-game';
        saveButton.innerText = 'Save Game';
        sidebar.appendChild(saveButton);
        
        container.appendChild(sidebar);
        
        // Create notification area
        const notificationArea = document.createElement('div');
        notificationArea.id = 'notification-area';
        
        // Add to document body
        document.body.appendChild(container);
        document.body.appendChild(notificationArea);
    }
}

// Call createGameStructure on load to ensure HTML structure exists
window.addEventListener('load', createGameStructure);