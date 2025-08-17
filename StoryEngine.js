/**
 * StoryEngine.js
 * 
 * This module is the game's narrator and rule-keeper. It connects the player's state
 * to the story data to figure out what should happen next.
 */

class StoryEngine {
    constructor(gameStateManager) {
        this.gameStateManager = gameStateManager;
        
        // An object that holds the imported story data, mapped by act number
        this.allActs = {
            1: window.ACT1_STORY_DATA,
            2: window.ACT2_STORY_DATA,
            3: window.ACT3_STORY_DATA
        };
    }

    /**
     * Gets the story data for the current act
     */
    getActiveStoryData() {
        const currentAct = this.gameStateManager.playerState.currentAct;
        return this.allActs[currentAct];
    }

    /**
     * Gets the current scene based on the currentSceneId in gameStateManager
     */
    getCurrentScene() {
        const storyData = this.getActiveStoryData();
        const currentSceneId = this.gameStateManager.playerState.currentSceneId;
        
        // Find the scene in the current act's data
        const scene = storyData.scenes.find(scene => scene.id === currentSceneId);
        
        if (!scene) {
            console.error(`Scene with ID "${currentSceneId}" not found in Act ${this.gameStateManager.playerState.currentAct}`);
            return null;
        }
        
        return scene;
    }

    /**
     * Gets all available choices for the current scene based on conditions
     */
    getAvailableChoices() {
        const scene = this.getCurrentScene();
        if (!scene) return [];
        
        const gameState = this.gameStateManager.getState();
        const validChoices = [];
        
        // Process regular choices
        if (scene.choices && Array.isArray(scene.choices)) {
            scene.choices.forEach(choice => {
                let isValid = true;
                
                // Check if the choice has a condition function
                if (choice.condition) {
                    // Convert string condition to function if needed
                    const conditionFunc = typeof choice.condition === 'string' 
                        ? new Function('gameState', `return ${choice.condition}`)
                        : choice.condition;
                    
                    isValid = conditionFunc(gameState);
                }
                
                // Check if the choice requires an item
                if (isValid && choice.requiresItem) {
                    isValid = this.gameStateManager.hasItem(choice.requiresItem);
                }
                
                if (isValid) {
                    validChoices.push(choice);
                }
            });
        }
        
        // Process interactions (which are also choices but might have different structure)
        if (scene.interactions && Array.isArray(scene.interactions)) {
            scene.interactions.forEach(interaction => {
                let isValid = true;
                
                if (interaction.condition) {
                    // Convert string condition to function if needed
                    const conditionFunc = typeof interaction.condition === 'string' 
                        ? new Function('gameState', `return ${interaction.condition}`)
                        : interaction.condition;
                    
                    isValid = conditionFunc(gameState);
                }
                
                if (isValid) {
                    validChoices.push(interaction);
                }
            });
        }
        
        return validChoices;
    }

    /**
     * Process a player's choice and update the game state accordingly
     */
    processChoice(choiceId) {
        const scene = this.getCurrentScene();
        if (!scene) return false;
        
        // Find the choice in either choices or interactions array
        let choice = null;
        
        if (scene.choices) {
            choice = scene.choices.find(c => c.id === choiceId);
        }
        
        if (!choice && scene.interactions) {
            choice = scene.interactions.find(i => i.id === choiceId);
        }
        
        if (!choice) {
            console.error(`Choice with ID "${choiceId}" not found in current scene`);
            return false;
        }
        
        // Act Transition Logic
        if (choice.transitionToAct !== undefined) {
            this.gameStateManager.updateState('currentAct', choice.transitionToAct);
        }
        
        // State Trigger Logic
        if (choice.worldStateTriggers) {
            Object.entries(choice.worldStateTriggers).forEach(([key, value]) => {
                this.gameStateManager.updateState(key, value);
            });
        }
        
        // Effects Logic
        if (choice.effects) {
            if (choice.effects.karma !== undefined) {
                this.gameStateManager.updateKarma(choice.effects.karma);
            }
            
            if (choice.effects.inventory) {
                if (choice.effects.inventory.add) {
                    choice.effects.inventory.add.forEach(item => {
                        this.gameStateManager.addToInventory(item);
                    });
                }
                
                if (choice.effects.inventory.remove) {
                    choice.effects.inventory.remove.forEach(item => {
                        this.gameStateManager.removeFromInventory(item);
                    });
                }
            }
            
            if (choice.effects.dharmicProfile) {
                Object.entries(choice.effects.dharmicProfile).forEach(([aspect, value]) => {
                    this.gameStateManager.updateDharmicProfile(aspect, value);
                });
            }
        }
        
        // Scene Transition Logic
        if (choice.nextScene) {
            this.gameStateManager.updateState('currentSceneId', choice.nextScene);
        }
        
        return true;
    }

    /**
     * Get puzzle data for the current scene if it exists
     */
    getCurrentPuzzle() {
        const scene = this.getCurrentScene();
        return scene && scene.puzzle ? scene.puzzle : null;
    }
}

// Export the StoryEngine class