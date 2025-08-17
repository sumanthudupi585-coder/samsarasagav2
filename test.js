/**
 * test.js
 * 
 * This file contains tests to verify that all components of the Samsara Saga game
 * are working correctly.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Running Samsara Saga tests...");
    
    // Test GameStateManager
    testGameStateManager();
    
    // Test StoryEngine
    testStoryEngine();
    
    // Test PuzzleEngine
    testPuzzleEngine();
    
    // Test UIController
    testUIController();
    
    console.log("All tests completed!");
});

function testGameStateManager() {
    console.log("Testing GameStateManager...");
    
    // Create a new instance
    const gameStateManager = new GameStateManager();
    
    // Test initialization
    gameStateManager.init();
    console.assert(gameStateManager.playerState.currentAct === 1, "Initial act should be 1");
    console.assert(gameStateManager.playerState.karma === 0, "Initial karma should be 0");
    
    // Test state updates
    gameStateManager.updateState('karma', 10);
    console.assert(gameStateManager.playerState.karma === 10, "Karma should be updated to 10");
    
    // Test inventory management
    gameStateManager.addToInventory("Sacred Amulet");
    console.assert(gameStateManager.hasItem("Sacred Amulet"), "Item should be in inventory");
    
    gameStateManager.removeFromInventory("Sacred Amulet");
    console.assert(!gameStateManager.hasItem("Sacred Amulet"), "Item should be removed from inventory");
    
    // Test world state
    gameStateManager.updateState('river_purified', true);
    console.assert(gameStateManager.worldState.river_purified === true, "World state should be updated");
    
    // Test save/load (mock implementation)
    const originalState = gameStateManager.getState();
    gameStateManager.updateState('karma', 50);
    gameStateManager.updateState('currentAct', 2);
    
    // Reset to original state (simulating load)
    gameStateManager.playerState = { ...originalState.playerState };
    gameStateManager.worldState = { ...originalState.worldState };
    
    console.assert(gameStateManager.playerState.karma === 10, "Karma should be restored to 10");
    console.assert(gameStateManager.playerState.currentAct === 1, "Act should be restored to 1");
    
    console.log("GameStateManager tests passed!");
}

function testStoryEngine() {
    console.log("Testing StoryEngine...");
    
    // Create dependencies
    const gameStateManager = new GameStateManager();
    gameStateManager.init();
    
    // Create StoryEngine instance
    const storyEngine = new StoryEngine(gameStateManager);
    
    // Test getting active story data
    const storyData = storyEngine.getActiveStoryData();
    console.assert(storyData, "Story data should be retrieved");
    
    // Test getting current scene
    gameStateManager.playerState.currentSceneId = "JOURNEY_START";
    const scene = storyEngine.getCurrentScene();
    console.assert(scene, "Current scene should be retrieved");
    
    console.log("StoryEngine tests passed!");
}

function testPuzzleEngine() {
    console.log("Testing PuzzleEngine...");
    
    // Create dependencies
    const gameStateManager = new GameStateManager();
    gameStateManager.init();
    const storyEngine = new StoryEngine(gameStateManager);
    
    // Create PuzzleEngine instance
    const puzzleEngine = new PuzzleEngine(gameStateManager, storyEngine);
    
    // Test processing effects
    puzzleEngine.processEffects({
        karma: 15,
        inventory: {
            add: ["Sacred Key"]
        },
        dharmicProfile: {
            dharma: 5
        }
    });
    
    console.assert(gameStateManager.playerState.karma === 15, "Karma should be updated to 15");
    console.assert(gameStateManager.hasItem("Sacred Key"), "Item should be added to inventory");
    console.assert(gameStateManager.playerState.dharmicProfile.dharma === 5, "Dharmic profile should be updated");
    
    console.log("PuzzleEngine tests passed!");
}

function testUIController() {
    console.log("Testing UIController...");
    
    // Create dependencies
    const gameStateManager = new GameStateManager();
    gameStateManager.init();
    const storyEngine = new StoryEngine(gameStateManager);
    const puzzleEngine = new PuzzleEngine(gameStateManager, storyEngine);
    
    // Create UIController instance
    const uiController = new UIController(storyEngine, gameStateManager, puzzleEngine);
    
    // Test text processing
    const processedText = uiController.processSceneText("Your karma is {{playerState.karma}}");
    console.assert(processedText === "Your karma is 0", "Text processing should work correctly");
    
    console.log("UIController tests passed!");
}