/**
 * UIController.js
 * 
 * This module is the renderer. It is responsible for all DOM manipulation
 * and knows nothing about game rules. It simply displays what the other
 * engines tell it to.
 */

class UIController {
    constructor(storyEngine, gameStateManager, puzzleEngine) {
        this.storyEngine = storyEngine;
        this.gameStateManager = gameStateManager;
        this.puzzleEngine = puzzleEngine;
        
        // DOM element references
        this.elements = {
            sceneTitle: document.getElementById('scene-title'),
            sceneText: document.getElementById('scene-text'),
            choicesContainer: document.getElementById('choices-container'),
            puzzleContainer: document.getElementById('puzzle-container'),
            karmaDisplay: document.getElementById('karma-display'),
            inventoryDisplay: document.getElementById('inventory-display'),
            actDisplay: document.getElementById('act-display'),
            dharmicProfileDisplay: document.getElementById('dharmic-profile')
        };
        
        // Bind methods to ensure 'this' refers to the UIController instance
        this.render = this.render.bind(this);
        this.renderPuzzle = this.renderPuzzle.bind(this);
        this.updateStatusDisplay = this.updateStatusDisplay.bind(this);
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
                
                button.addEventListener('click', () => {
                    this.storyEngine.processChoice(choice.id);
                    this.render();
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
        
        // Create puzzle description
        const puzzleDescription = document.createElement('div');
        puzzleDescription.className = 'puzzle-description';
        puzzleDescription.innerHTML = puzzleData.description;
        this.elements.puzzleContainer.appendChild(puzzleDescription);
        
        // Create solution options
        if (puzzleData.solutions && Array.isArray(puzzleData.solutions)) {
            const solutionsContainer = document.createElement('div');
            solutionsContainer.className = 'puzzle-solutions';
            
            puzzleData.solutions.forEach(solution => {
                const button = document.createElement('button');
                button.className = 'puzzle-solution-button';
                button.innerText = solution.text;
                
                button.addEventListener('click', () => {
                    this.puzzleEngine.solvePuzzle(puzzleData.puzzleId, solution);
                    this.render();
                });
                
                solutionsContainer.appendChild(button);
            });
            
            this.elements.puzzleContainer.appendChild(solutionsContainer);
        }
    }

    /**
     * Update status displays (karma, inventory, act, dharmic profile)
     */
    updateStatusDisplay() {
        const gameState = this.gameStateManager.getState();
        
        // Update karma display
        if (this.elements.karmaDisplay) {
            this.elements.karmaDisplay.innerText = `Karma: ${gameState.playerState.karma}`;
        }
        
        // Update inventory display
        if (this.elements.inventoryDisplay) {
            this.elements.inventoryDisplay.innerHTML = '';
            
            if (gameState.playerState.inventory.length > 0) {
                const inventoryList = document.createElement('ul');
                
                gameState.playerState.inventory.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.innerText = item;
                    inventoryList.appendChild(listItem);
                });
                
                this.elements.inventoryDisplay.appendChild(inventoryList);
            } else {
                this.elements.inventoryDisplay.innerText = 'Inventory: Empty';
            }
        }
        
        // Update act display
        if (this.elements.actDisplay) {
            this.elements.actDisplay.innerText = `Act ${gameState.playerState.currentAct}`;
        }
        
        // Update dharmic profile display
        if (this.elements.dharmicProfileDisplay) {
            this.elements.dharmicProfileDisplay.innerHTML = '';
            
            const dharmicProfile = gameState.playerState.dharmicProfile;
            const profileList = document.createElement('ul');
            
            Object.entries(dharmicProfile).forEach(([aspect, value]) => {
                const listItem = document.createElement('li');
                listItem.innerText = `${aspect.charAt(0).toUpperCase() + aspect.slice(1)}: ${value}`;
                profileList.appendChild(listItem);
            });
            
            this.elements.dharmicProfileDisplay.appendChild(profileList);
        }
    }

    /**
     * Initialize character creation UI
     */
    initCharacterCreation(nakshatraData, onComplete) {
        // Clear main containers
        if (this.elements.sceneText) this.elements.sceneText.innerHTML = '';
        if (this.elements.choicesContainer) this.elements.choicesContainer.innerHTML = '';
        
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
            nakshatraCard.innerHTML = `
                <h3>${nakshatra.name}</h3>
                <p><strong>Gana:</strong> ${nakshatra.gana}</p>
                <p><strong>Shakti:</strong> ${nakshatra.shakti}</p>
                <p><strong>Gunas:</strong> Sattva: ${nakshatra.gunas.sattva}, 
                                      Rajas: ${nakshatra.gunas.rajas}, 
                                      Tamas: ${nakshatra.gunas.tamas}</p>
                <p>${nakshatra.description}</p>
            `;
            
            nakshatraCard.addEventListener('click', () => {
                onComplete(nakshatra.name);
            });
            
            nakshatraSelection.appendChild(nakshatraCard);
        });
        
        characterCreationContainer.appendChild(nakshatraSelection);
        
        // Add to scene text area
        if (this.elements.sceneText) {
            this.elements.sceneText.appendChild(characterCreationContainer);
        }
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
        
        // Create menu container
        const menuContainer = document.createElement('div');
        menuContainer.className = 'game-menu';
        
        // Create menu options
        const options = [
            { text: 'New Game', callback: callbacks.newGame },
            { text: 'Load Game', callback: callbacks.loadGame },
            { text: 'About', callback: callbacks.about }
        ];
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'menu-button';
            button.innerText = option.text;
            button.addEventListener('click', option.callback);
            menuContainer.appendChild(button);
        });
        
        // Add to scene text area
        if (this.elements.sceneText) {
            this.elements.sceneText.appendChild(menuContainer);
        }
    }
}

// Export the UIController class