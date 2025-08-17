/**
 * test-game-mechanics.js
 * 
 * This script tests the new game mechanics systems to ensure they're working properly.
 */

console.log("Testing Samsara Saga Game Mechanics...");

// Test GameStateManager
function testGameStateManager() {
    console.log("\nTesting GameStateManager...");
    
    // Create a new game state
    gameStateManager.init();
    
    // Set up player profile
    gameStateManager.setupPlayerProfile("Ashwini");
    
    // Test inventory functions
    gameStateManager.addToInventory("Test Item");
    console.assert(gameStateManager.hasItem("Test Item"), "Item should be in inventory");
    
    gameStateManager.removeFromInventory("Test Item");
    console.assert(!gameStateManager.hasItem("Test Item"), "Item should be removed from inventory");
    
    // Test special item functions
    const specialItem = {
        id: "test_special_item",
        name: "Test Special Item",
        description: "A test special item",
        icon: "✨",
        effect: "Does something special"
    };
    
    gameStateManager.addSpecialItem(specialItem);
    console.assert(gameStateManager.hasSpecialItem("test_special_item"), "Special item should be added");
    
    gameStateManager.removeSpecialItem("test_special_item");
    console.assert(!gameStateManager.hasSpecialItem("test_special_item"), "Special item should be removed");
    
    // Test karma functions
    const initialKarma = gameStateManager.playerState.karma;
    gameStateManager.updateKarma(10);
    console.assert(gameStateManager.playerState.karma === initialKarma + 10, "Karma should increase by 10");
    
    // Test dharmic profile functions
    const initialDharma = gameStateManager.playerState.dharmicProfile.dharma;
    gameStateManager.updateDharmicProfile("dharma", 5);
    console.assert(gameStateManager.playerState.dharmicProfile.dharma === initialDharma + 5, "Dharma should increase by 5");
    
    console.log("GameStateManager tests completed.");
}

// Test ProgressionSystem
function testProgressionSystem() {
    console.log("\nTesting ProgressionSystem...");
    
    if (!window.progressionSystem) {
        console.error("ProgressionSystem not found!");
        return;
    }
    
    // Initialize progression data
    progressionSystem.initProgressionData();
    
    // Test XP functions
    const initialXP = gameStateManager.playerState.progression.xp;
    const result = progressionSystem.awardXP(50);
    console.assert(gameStateManager.playerState.progression.xp === initialXP + 50, "XP should increase by 50");
    
    // Test ability functions
    const testAbility = "test_ability";
    gameStateManager.playerState.progression.abilities.push(testAbility);
    console.assert(progressionSystem.hasAbility(testAbility), "Should have test ability");
    
    console.log("ProgressionSystem tests completed.");
}

// Test QuestSystem
function testQuestSystem() {
    console.log("\nTesting QuestSystem...");
    
    if (!window.questSystem) {
        console.error("QuestSystem not found!");
        return;
    }
    
    // Initialize quest data
    questSystem.initQuestData();
    
    // Test quest functions
    const availableQuests = questSystem.getAvailableQuestsForCurrentAct();
    console.log(`Available quests for Act ${gameStateManager.playerState.currentAct}: ${availableQuests.length}`);
    
    if (availableQuests.length > 0) {
        const firstQuest = availableQuests[0];
        const result = questSystem.startQuest(firstQuest.id);
        console.assert(result.success, "Quest should start successfully");
        
        const activeQuests = questSystem.getActiveQuests();
        console.assert(activeQuests.length > 0, "Should have active quests");
    }
    
    console.log("QuestSystem tests completed.");
}

// Test VisualEffects
function testVisualEffects() {
    console.log("\nTesting VisualEffects...");
    
    if (!window.visualEffects) {
        console.error("VisualEffects not found!");
        return;
    }
    
    // Initialize visual effects
    visualEffects.init();
    
    console.log("VisualEffects initialized successfully.");
}

// Test AudioManager
function testAudioManager() {
    console.log("\nTesting AudioManager...");
    
    if (!window.audioManager) {
        console.error("AudioManager not found!");
        return;
    }
    
    // Initialize audio manager
    const initialized = audioManager.init();
    console.log(`AudioManager initialized: ${initialized}`);
    
    console.log("AudioManager tests completed.");
}

// Run tests when the page is loaded
window.addEventListener('load', () => {
    // Wait a bit to ensure all components are initialized
    setTimeout(() => {
        try {
            testGameStateManager();
            testProgressionSystem();
            testQuestSystem();
            testVisualEffects();
            testAudioManager();
            
            console.log("\nAll tests completed!");
        } catch (error) {
            console.error("Error during tests:", error);
        }
    }, 1000);
});