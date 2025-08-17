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
    const storyEngine = new StoryEngine(gameStateManager);
    const puzzleEngine = new PuzzleEngine(gameStateManager, storyEngine);
    const uiController = new UIController(storyEngine, gameStateManager, puzzleEngine);
    
    // Make instances available globally for debugging
    window.gameStateManager = gameStateManager;
    window.storyEngine = storyEngine;
    window.puzzleEngine = puzzleEngine;
    window.uiController = uiController;
    
    // Set up game menu callbacks
    const menuCallbacks = {
        newGame: () => startNewGame(gameStateManager, uiController),
        loadGame: () => loadSavedGame(gameStateManager, uiController),
        about: () => showAboutScreen(uiController)
    };
    
    // Show the game menu
    uiController.showGameMenu(menuCallbacks);
    
    // Set up save game button if it exists
    const saveButton = document.getElementById('save-game');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const saved = gameStateManager.saveGame();
            if (saved) {
                alert('Game saved successfully!');
            } else {
                alert('Failed to save game.');
            }
        });
    }
}

/**
 * Start a new game
 */
function startNewGame(gameStateManager, uiController) {
    // Initialize a new game state
    gameStateManager.init();
    
    // Load nakshatra data for character creation
    const nakshatraData = window.NAKSHATRA_ATTRIBUTES || [];
    
    // Show character creation screen
    uiController.initCharacterCreation(nakshatraData, (selectedNakshatra) => {
        // Set up player profile with selected nakshatra
        gameStateManager.setupPlayerProfile(selectedNakshatra);
        
        // Start the game with the first scene
        uiController.render();
    });
}

/**
 * Load a saved game
 */
function loadSavedGame(gameStateManager, uiController) {
    const loaded = gameStateManager.loadGame();
    
    if (loaded) {
        // Render the game with loaded state
        uiController.render();
    } else {
        // Show error message if no save found
        alert('No saved game found.');
        uiController.showGameMenu({
            newGame: () => startNewGame(gameStateManager, uiController),
            loadGame: () => loadSavedGame(gameStateManager, uiController),
            about: () => showAboutScreen(uiController)
        });
    }
}

/**
 * Show the about screen
 */
function showAboutScreen(uiController) {
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
                <ul>
                    <li><strong>Nakshatra:</strong> Your birth star that determines your innate qualities</li>
                    <li><strong>Karma:</strong> The cosmic principle of cause and effect</li>
                    <li><strong>Dharma:</strong> Your spiritual duty and righteous path</li>
                    <li><strong>Gunas:</strong> The three qualities that make up all of existence (Sattva, Rajas, Tamas)</li>
                </ul>
                <p>Your journey will take you through challenges, puzzles, and moral dilemmas that test your understanding of these concepts.</p>
            </div>
        `;
    }
    
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        const backButton = document.createElement('button');
        backButton.className = 'choice-button';
        backButton.innerText = 'Back to Menu';
        backButton.addEventListener('click', () => {
            uiController.showGameMenu({
                newGame: () => startNewGame(uiController.gameStateManager, uiController),
                loadGame: () => loadSavedGame(uiController.gameStateManager, uiController),
                about: () => showAboutScreen(uiController)
            });
        });
        choicesContainer.appendChild(backButton);
    }
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
        
        // Create save game button
        const saveButton = document.createElement('button');
        saveButton.id = 'save-game';
        saveButton.innerText = 'Save Game';
        sidebar.appendChild(saveButton);
        
        container.appendChild(sidebar);
        
        // Add to document body
        document.body.appendChild(container);
    }
}

// Call createGameStructure on load to ensure HTML structure exists
window.addEventListener('load', createGameStructure);