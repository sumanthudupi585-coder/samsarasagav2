/**
 * PuzzleEngine.js
 * 
 * This module is the puzzle master. It contains the specific logic for
 * evaluating every puzzle in the game.
 */

class PuzzleEngine {
    constructor(gameStateManager, storyEngine) {
        this.gameStateManager = gameStateManager;
        this.storyEngine = storyEngine;
        
        // Load puzzle data from the global puzzles object
        this.puzzleData = window.PUZZLES || {};
    }

    /**
     * Solve a puzzle with the chosen solution
     */
    solvePuzzle(puzzleId, chosenSolution) {
        const gameState = this.gameStateManager.getState();
        let isSuccess = true;
        
        // Get the current scene's puzzle data
        const currentPuzzle = this.storyEngine.getCurrentPuzzle();
        if (!currentPuzzle || currentPuzzle.puzzleId !== puzzleId) {
            console.error(`Puzzle with ID "${puzzleId}" not found in current scene`);
            return false;
        }
        
        // Evaluation Logic
        // Check if the solution has a condition function
        if (chosenSolution.condition) {
            // Convert string condition to function if needed
            const conditionFunc = typeof chosenSolution.condition === 'string' 
                ? new Function('gameState', `return ${chosenSolution.condition}`)
                : chosenSolution.condition;
            
            isSuccess = conditionFunc(gameState);
        }
        
        // Check if the solution requires an item
        if (isSuccess && chosenSolution.requiresItem) {
            isSuccess = this.gameStateManager.hasItem(chosenSolution.requiresItem);
        }
        
        // Outcome Logic
        if (isSuccess) {
            // Process success effects
            if (chosenSolution.effects) {
                this.processEffects(chosenSolution.effects);
            }
            
            // Process world state triggers
            if (chosenSolution.worldStateTriggers) {
                Object.entries(chosenSolution.worldStateTriggers).forEach(([key, value]) => {
                    this.gameStateManager.updateState(key, value);
                });
            }
            
            // Move to success scene
            if (chosenSolution.successScene) {
                this.gameStateManager.updateState('currentSceneId', chosenSolution.successScene);
                return true;
            }
        } else {
            // Process failure
            const defaultFailure = currentPuzzle.defaultFailure;
            
            if (defaultFailure) {
                // Apply failure effects
                if (defaultFailure.effects) {
                    this.processEffects(defaultFailure.effects);
                }
                
                // Move to failure scene
                if (defaultFailure.nextScene) {
                    this.gameStateManager.updateState('currentSceneId', defaultFailure.nextScene);
                }
            }
        }
        
        return isSuccess;
    }

    /**
     * Process effects from puzzle solutions
     */
    processEffects(effects) {
        // Process karma effects
        if (effects.karma !== undefined) {
            this.gameStateManager.updateKarma(effects.karma);
        }
        
        // Process inventory effects
        if (effects.inventory) {
            if (effects.inventory.add) {
                effects.inventory.add.forEach(item => {
                    this.gameStateManager.addToInventory(item);
                });
            }
            
            if (effects.inventory.remove) {
                effects.inventory.remove.forEach(item => {
                    this.gameStateManager.removeFromInventory(item);
                });
            }
        }
        
        // Process dharmic profile effects
        if (effects.dharmicProfile) {
            Object.entries(effects.dharmicProfile).forEach(([aspect, value]) => {
                this.gameStateManager.updateDharmicProfile(aspect, value);
            });
        }
    }

    /**
     * Get puzzle data by ID
     */
    getPuzzleById(puzzleId) {
        return this.puzzleData[puzzleId];
    }

    /**
     * Check if a puzzle is solved based on world state
     */
    isPuzzleSolved(puzzleId) {
        const puzzle = this.getPuzzleById(puzzleId);
        if (!puzzle || !puzzle.solvedFlag) {
            return false;
        }
        
        return !!this.gameStateManager.worldState[puzzle.solvedFlag];
    }
}

// Export the PuzzleEngine class