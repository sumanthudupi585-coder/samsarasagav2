/**
 * GameStateManager.js
 * 
 * This module is the game's memory. It holds all player and world data
 * but does not know about the story itself. Its logic is focused on
 * state manipulation and persistence.
 */

class GameStateManager {
    constructor() {
        // Immutable data set at character creation
        this.playerProfile = {
            nakshatra: null,
            gana: null,
            shakti: null,
            gunas: {
                sattva: 0,
                rajas: 0,
                tamas: 0
            }
        };

        // Dynamic data that changes during play
        this.playerState = {
            currentAct: 1,
            currentSceneId: "JOURNEY_START",
            karma: 0,
            dharmicProfile: {
                dharma: 0,
                artha: 0,
                kama: 0,
                moksha: 0
            },
            inventory: []
        };

        // Story flags and keys
        this.worldState = {};
    }

    /**
     * Initialize a new game with default values
     */
    init(nakshatraChoice = null) {
        this.playerState.currentAct = 1;
        this.playerState.currentSceneId = "JOURNEY_START";
        this.playerState.karma = 0;
        this.playerState.inventory = [];
        this.worldState = {};

        // If nakshatra is provided, set up the player profile
        if (nakshatraChoice) {
            this.setupPlayerProfile(nakshatraChoice);
        }
    }

    /**
     * Set up the player profile based on nakshatra choice
     */
    setupPlayerProfile(nakshatraChoice) {
        // This would typically load from NakshatraAttribute.json
        const nakshatraData = window.NAKSHATRA_ATTRIBUTES.find(
            n => n.name.toLowerCase() === nakshatraChoice.toLowerCase()
        );

        if (nakshatraData) {
            this.playerProfile.nakshatra = nakshatraData.name;
            this.playerProfile.gana = nakshatraData.gana;
            this.playerProfile.shakti = nakshatraData.shakti;
            this.playerProfile.gunas = {
                sattva: nakshatraData.gunas.sattva,
                rajas: nakshatraData.gunas.rajas,
                tamas: nakshatraData.gunas.tamas
            };
        } else {
            console.error(`Nakshatra "${nakshatraChoice}" not found in data.`);
        }
    }

    /**
     * Save the current game state to localStorage
     */
    saveGame() {
        const saveData = {
            playerProfile: this.playerProfile,
            playerState: this.playerState,
            worldState: this.worldState
        };

        try {
            localStorage.setItem('samsaraSagaSave', JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error("Failed to save game:", error);
            return false;
        }
    }

    /**
     * Load a saved game from localStorage
     */
    loadGame() {
        try {
            const saveData = localStorage.getItem('samsaraSagaSave');
            
            if (!saveData) {
                return false;
            }

            const parsedData = JSON.parse(saveData);
            
            // Restore player profile
            if (parsedData.playerProfile) {
                this.playerProfile = parsedData.playerProfile;
            }
            
            // Restore player state
            if (parsedData.playerState) {
                this.playerState = parsedData.playerState;
            }
            
            // Restore world state
            if (parsedData.worldState) {
                this.worldState = parsedData.worldState;
            }
            
            return true;
        } catch (error) {
            console.error("Failed to load game:", error);
            return false;
        }
    }

    /**
     * Update a state value in either playerState or worldState
     */
    updateState(key, value) {
        // Check if the key exists in playerState
        if (key in this.playerState) {
            this.playerState[key] = value;
        } 
        // Check if it's a nested property in playerState (e.g., dharmicProfile.dharma)
        else if (key.includes('.')) {
            const [parentKey, childKey] = key.split('.');
            if (parentKey in this.playerState && typeof this.playerState[parentKey] === 'object') {
                this.playerState[parentKey][childKey] = value;
            } else {
                // If not in playerState, add it to worldState
                this.worldState[key] = value;
            }
        } 
        // If not in playerState, add it to worldState
        else {
            this.worldState[key] = value;
        }
    }

    /**
     * Add an item to the player's inventory
     */
    addToInventory(item) {
        if (!this.playerState.inventory.includes(item)) {
            this.playerState.inventory.push(item);
        }
    }

    /**
     * Remove an item from the player's inventory
     */
    removeFromInventory(item) {
        const index = this.playerState.inventory.indexOf(item);
        if (index !== -1) {
            this.playerState.inventory.splice(index, 1);
        }
    }

    /**
     * Check if the player has a specific item in their inventory
     */
    hasItem(item) {
        return this.playerState.inventory.includes(item);
    }

    /**
     * Update karma value
     */
    updateKarma(amount) {
        this.playerState.karma += amount;
    }

    /**
     * Update a dharmic profile value
     */
    updateDharmicProfile(aspect, amount) {
        if (aspect in this.playerState.dharmicProfile) {
            this.playerState.dharmicProfile[aspect] += amount;
        }
    }

    /**
     * Get the complete game state
     */
    getState() {
        return {
            playerProfile: { ...this.playerProfile },
            playerState: { ...this.playerState },
            worldState: { ...this.worldState }
        };
    }
}

// Export as a singleton
const gameStateManager = new GameStateManager();