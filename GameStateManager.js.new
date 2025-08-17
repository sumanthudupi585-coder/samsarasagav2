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
            },
            avatar: null // New: Character avatar path
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
            inventory: [],
            specialItems: [], // New: Special items with powers
            // New progression system data
            progression: {
                xp: 0,
                level: 1,
                abilities: [],
                achievements: [],
                questsCompleted: 0,
                puzzlesSolved: 0,
                choicesMade: 0,
                specialItemsFound: 0,
                meditationPerformed: 0,
                lastMeditationScene: null,
                karmaGained: 0,
                karmaLost: 0
            },
            // New quest system data
            quests: {
                active: [],
                completed: [],
                failed: []
            },
            // New game settings
            settings: {
                musicVolume: 0.5,
                effectsVolume: 0.8,
                masterVolume: 0.7,
                muted: false,
                showTutorials: true,
                enableAnimations: true
            }
        };

        // Story flags and keys
        this.worldState = {};
        
        // Game statistics for achievements and tracking
        this.gameStats = {
            totalPlayTime: 0,
            startTime: Date.now(),
            scenesVisited: {},
            choicesMade: 0,
            karmaGained: 0,
            karmaLost: 0,
            itemsCollected: 0,
            puzzlesSolved: 0,
            puzzlesFailed: 0,
            questsCompleted: 0,
            questsFailed: 0,
            achievementsUnlocked: 0,
            levelsGained: 0,
            meditationsPerformed: 0
        };
        
        // Session data (not saved)
        this.sessionData = {
            lastUpdateTime: Date.now(),
            currentMusic: null,
            activeEffects: [],
            pendingNotifications: []
        };
    }

    /**
     * Initialize a new game with default values
     */
    init(nakshatraChoice = null) {
        this.playerState.currentAct = 1;
        this.playerState.currentSceneId = "JOURNEY_START";
        this.playerState.karma = 0;
        this.playerState.inventory = [];
        this.playerState.specialItems = [];
        this.worldState = {};
        
        // Initialize progression system
        this.playerState.progression = {
            xp: 0,
            level: 1,
            abilities: [],
            achievements: [],
            questsCompleted: 0,
            puzzlesSolved: 0,
            choicesMade: 0,
            specialItemsFound: 0,
            meditationPerformed: 0,
            lastMeditationScene: null,
            karmaGained: 0,
            karmaLost: 0
        };
        
        // Initialize quest system
        this.playerState.quests = {
            active: [],
            completed: [],
            failed: []
        };
        
        // Reset game stats
        this.gameStats = {
            totalPlayTime: 0,
            startTime: Date.now(),
            scenesVisited: {},
            choicesMade: 0,
            karmaGained: 0,
            karmaLost: 0,
            itemsCollected: 0,
            puzzlesSolved: 0,
            puzzlesFailed: 0,
            questsCompleted: 0,
            questsFailed: 0,
            achievementsUnlocked: 0,
            levelsGained: 0,
            meditationsPerformed: 0
        };

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
            
            // Set avatar based on nakshatra
            this.playerProfile.avatar = this.getAvatarForNakshatra(nakshatraData.name);
            
            // Add nakshatra-specific ability if available
            if (nakshatraData.ability) {
                this.playerState.progression.abilities.push(nakshatraData.ability);
            }
        } else {
            console.error(`Nakshatra "${nakshatraChoice}" not found in data.`);
        }
    }

    /**
     * Get avatar image path based on nakshatra
     */
    getAvatarForNakshatra(nakshatra) {
        // Default avatar path
        let avatarPath = 'images/avatars/default.png';
        
        // In a real implementation, this would map each nakshatra to a specific avatar
        // For now, we'll use placeholder logic
        const nakshatraToGana = {
            'Ashwini': 'deva',
            'Bharani': 'manushya',
            'Krittika': 'rakshasa',
            // Add mappings for all 27 nakshatras
        };
        
        const gana = nakshatraToGana[nakshatra] || 'deva';
        
        // Return avatar based on gana type
        switch (gana) {
            case 'deva':
                avatarPath = 'images/avatars/deva.png';
                break;
            case 'manushya':
                avatarPath = 'images/avatars/manushya.png';
                break;
            case 'rakshasa':
                avatarPath = 'images/avatars/rakshasa.png';
                break;
            default:
                avatarPath = 'images/avatars/default.png';
        }
        
        return avatarPath;
    }

    /**
     * Save the current game state to localStorage
     */
    saveGame() {
        // Update total play time before saving
        this.updatePlayTime();
        
        const saveData = {
            playerProfile: this.playerProfile,
            playerState: this.playerState,
            worldState: this.worldState,
            gameStats: this.gameStats,
            saveDate: new Date().toISOString()
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
            
            // Restore game stats
            if (parsedData.gameStats) {
                this.gameStats = parsedData.gameStats;
                // Update start time to current time
                this.gameStats.startTime = Date.now();
            }
            
            // Reset session data
            this.sessionData = {
                lastUpdateTime: Date.now(),
                currentMusic: null,
                activeEffects: [],
                pendingNotifications: []
            };
            
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
            this.gameStats.itemsCollected++;
            return true;
        }
        return false;
    }

    /**
     * Add a special item with powers
     */
    addSpecialItem(item) {
        if (!this.playerState.specialItems.some(i => i.id === item.id)) {
            this.playerState.specialItems.push(item);
            this.playerState.progression.specialItemsFound++;
            this.gameStats.itemsCollected++;
            return true;
        }
        return false;
    }

    /**
     * Remove an item from the player's inventory
     */
    removeFromInventory(item) {
        const index = this.playerState.inventory.indexOf(item);
        if (index !== -1) {
            this.playerState.inventory.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Remove a special item
     */
    removeSpecialItem(itemId) {
        const index = this.playerState.specialItems.findIndex(i => i.id === itemId);
        if (index !== -1) {
            this.playerState.specialItems.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Check if the player has a specific item in their inventory
     */
    hasItem(item) {
        return this.playerState.inventory.includes(item);
    }

    /**
     * Check if the player has a specific special item
     */
    hasSpecialItem(itemId) {
        return this.playerState.specialItems.some(i => i.id === itemId);
    }

    /**
     * Update karma value
     */
    updateKarma(amount) {
        this.playerState.karma += amount;
        
        // Update stats
        if (amount > 0) {
            this.gameStats.karmaGained += amount;
            this.playerState.progression.karmaGained += amount;
        } else if (amount < 0) {
            this.gameStats.karmaLost += Math.abs(amount);
            this.playerState.progression.karmaLost += Math.abs(amount);
        }
        
        return this.playerState.karma;
    }

    /**
     * Update a dharmic profile value
     */
    updateDharmicProfile(aspect, amount) {
        if (aspect in this.playerState.dharmicProfile) {
            this.playerState.dharmicProfile[aspect] += amount;
            return this.playerState.dharmicProfile[aspect];
        }
        return null;
    }

    /**
     * Track a scene visit
     */
    trackSceneVisit(sceneId) {
        if (!this.gameStats.scenesVisited[sceneId]) {
            this.gameStats.scenesVisited[sceneId] = 0;
        }
        this.gameStats.scenesVisited[sceneId]++;
    }

    /**
     * Track a choice made
     */
    trackChoiceMade() {
        this.gameStats.choicesMade++;
        this.playerState.progression.choicesMade++;
    }

    /**
     * Track a puzzle solved
     */
    trackPuzzleSolved() {
        this.gameStats.puzzlesSolved++;
        this.playerState.progression.puzzlesSolved++;
    }

    /**
     * Track a puzzle failed
     */
    trackPuzzleFailed() {
        this.gameStats.puzzlesFailed++;
    }

    /**
     * Track a quest completed
     */
    trackQuestCompleted() {
        this.gameStats.questsCompleted++;
        this.playerState.progression.questsCompleted++;
    }

    /**
     * Track a quest failed
     */
    trackQuestFailed() {
        this.gameStats.questsFailed++;
    }

    /**
     * Track an achievement unlocked
     */
    trackAchievementUnlocked() {
        this.gameStats.achievementsUnlocked++;
    }

    /**
     * Track a level gained
     */
    trackLevelGained() {
        this.gameStats.levelsGained++;
    }

    /**
     * Track a meditation performed
     */
    trackMeditationPerformed() {
        this.gameStats.meditationsPerformed++;
        this.playerState.progression.meditationPerformed++;
    }

    /**
     * Update play time
     */
    updatePlayTime() {
        const now = Date.now();
        const sessionTime = (now - this.sessionData.lastUpdateTime) / 1000; // in seconds
        this.gameStats.totalPlayTime += sessionTime;
        this.sessionData.lastUpdateTime = now;
    }

    /**
     * Get formatted play time
     */
    getFormattedPlayTime() {
        // Update play time first
        this.updatePlayTime();
        
        // Convert total seconds to hours, minutes, seconds
        let totalSeconds = Math.floor(this.gameStats.totalPlayTime);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        // Format as HH:MM:SS
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    /**
     * Add a notification to the queue
     */
    addNotification(notification) {
        this.sessionData.pendingNotifications.push(notification);
    }

    /**
     * Get and clear pending notifications
     */
    getPendingNotifications() {
        const notifications = [...this.sessionData.pendingNotifications];
        this.sessionData.pendingNotifications = [];
        return notifications;
    }

    /**
     * Update game settings
     */
    updateSettings(settings) {
        this.playerState.settings = {
            ...this.playerState.settings,
            ...settings
        };
    }

    /**
     * Get the complete game state
     */
    getState() {
        // Update play time before returning state
        this.updatePlayTime();
        
        return {
            playerProfile: { ...this.playerProfile },
            playerState: { ...this.playerState },
            worldState: { ...this.worldState },
            gameStats: { ...this.gameStats }
        };
    }
}

// Export as a singleton
const gameStateManager = new GameStateManager();