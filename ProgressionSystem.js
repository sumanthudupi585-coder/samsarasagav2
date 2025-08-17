/**
 * ProgressionSystem.js
 * 
 * This module handles player progression, experience points, levels,
 * abilities, and achievements in the Samsara Saga game.
 */

class ProgressionSystem {
    constructor(gameStateManager) {
        this.gameStateManager = gameStateManager;
        
        // Initialize progression data if it doesn't exist
        if (!this.gameStateManager.playerState.progression) {
            this.initProgressionData();
        }
        
        // Define level thresholds
        this.levelThresholds = [
            0,      // Level 1
            100,    // Level 2
            250,    // Level 3
            450,    // Level 4
            700,    // Level 5
            1000,   // Level 6
            1400,   // Level 7
            1900,   // Level 8
            2500,   // Level 9
            3200    // Level 10
        ];
        
        // Define achievements
        this.achievements = {
            karma_saint: {
                id: "karma_saint",
                title: "Karma Saint",
                description: "Reach 100 positive karma points",
                icon: "🌟",
                condition: (gameState) => gameState.playerState.karma >= 100,
                reward: {
                    xp: 50,
                    abilities: ["karma_shield"]
                }
            },
            collector: {
                id: "collector",
                title: "Collector",
                description: "Collect 10 different items",
                icon: "🎒",
                condition: (gameState) => gameState.playerState.inventory.length >= 10,
                reward: {
                    xp: 30,
                    abilities: ["extra_inventory"]
                }
            },
            dharma_master: {
                id: "dharma_master",
                title: "Dharma Master",
                description: "Reach level 5 in all dharmic aspects",
                icon: "🔱",
                condition: (gameState) => {
                    const profile = gameState.playerState.dharmicProfile;
                    return profile.dharma >= 5 && 
                           profile.artha >= 5 && 
                           profile.kama >= 5 && 
                           profile.moksha >= 5;
                },
                reward: {
                    xp: 100,
                    abilities: ["dharmic_insight"]
                }
            },
            puzzle_solver: {
                id: "puzzle_solver",
                title: "Puzzle Solver",
                description: "Solve 5 puzzles successfully",
                icon: "🧩",
                condition: (gameState) => gameState.playerState.progression.puzzlesSolved >= 5,
                reward: {
                    xp: 40,
                    abilities: ["puzzle_hint"]
                }
            },
            spiritual_seeker: {
                id: "spiritual_seeker",
                title: "Spiritual Seeker",
                description: "Complete Act 1",
                icon: "🔮",
                condition: (gameState) => gameState.playerState.currentAct >= 2,
                reward: {
                    xp: 75,
                    abilities: ["meditation"]
                }
            }
        };
        
        // Define abilities
        this.abilities = {
            karma_shield: {
                id: "karma_shield",
                name: "Karma Shield",
                description: "Protects against negative karma once per act",
                usageLimit: 1,
                effect: (gameState) => {
                    // Implementation will be in the StoryEngine
                }
            },
            extra_inventory: {
                id: "extra_inventory",
                name: "Extra Inventory",
                description: "Allows carrying one additional special item",
                passive: true
            },
            dharmic_insight: {
                id: "dharmic_insight",
                name: "Dharmic Insight",
                description: "Reveals hidden choices aligned with your dharma",
                passive: true
            },
            puzzle_hint: {
                id: "puzzle_hint",
                name: "Puzzle Hint",
                description: "Provides a hint for difficult puzzles",
                usageLimit: 3,
                effect: (gameState, puzzleId) => {
                    // Implementation will be in the PuzzleEngine
                }
            },
            meditation: {
                id: "meditation",
                name: "Meditation",
                description: "Gain spiritual insights and small karma boosts",
                cooldown: 3, // scenes
                effect: (gameState) => {
                    // Implementation will be in the StoryEngine
                    return {
                        karma: Math.floor(Math.random() * 5) + 1,
                        insight: this.getRandomInsight()
                    };
                }
            }
        };
        
        // Nakshatra-specific abilities
        this.nakshatraAbilities = {
            "Ashwini": "quick_healing",
            "Bharani": "spirit_sight",
            "Krittika": "inner_fire",
            "Rohini": "earth_bond",
            "Mrigashira": "animal_speech",
            "Ardra": "storm_caller",
            "Punarvasu": "second_chance",
            "Pushya": "nurturing_touch",
            "Ashlesha": "serpent_wisdom",
            "Magha": "royal_presence",
            "Purva Phalguni": "artistic_inspiration",
            "Uttara Phalguni": "truth_vision",
            "Hasta": "skilled_hands",
            "Chitra": "illusion_weaver",
            "Swati": "wind_whisper",
            "Vishakha": "dual_strength",
            "Anuradha": "friendship_bond",
            "Jyeshtha": "elder_wisdom",
            "Mula": "root_knowledge",
            "Purva Ashadha": "water_affinity",
            "Uttara Ashadha": "victory_blessing",
            "Shravana": "divine_hearing",
            "Dhanishta": "abundance_draw",
            "Shatabhisha": "healing_waters",
            "Purva Bhadrapada": "spiritual_sight",
            "Uttara Bhadrapada": "deep_wisdom",
            "Revati": "dream_walker"
        };
    }

    /**
     * Initialize progression data for a new game
     */
    initProgressionData() {
        this.gameStateManager.playerState.progression = {
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
        
        // Add nakshatra-specific ability if player has chosen one
        if (this.gameStateManager.playerProfile.nakshatra) {
            const abilityId = this.nakshatraAbilities[this.gameStateManager.playerProfile.nakshatra];
            if (abilityId) {
                this.gameStateManager.playerState.progression.abilities.push(abilityId);
            }
        }
    }

    /**
     * Award XP to the player and check for level up
     */
    awardXP(amount) {
        const progression = this.gameStateManager.playerState.progression;
        progression.xp += amount;
        
        // Check for level up
        const newLevel = this.calculateLevel(progression.xp);
        
        if (newLevel > progression.level) {
            const levelsGained = newLevel - progression.level;
            progression.level = newLevel;
            
            // Return level up information
            return {
                levelUp: true,
                newLevel: newLevel,
                levelsGained: levelsGained
            };
        }
        
        return {
            levelUp: false,
            currentXP: progression.xp,
            xpToNextLevel: this.getXPToNextLevel(progression.xp)
        };
    }

    /**
     * Calculate level based on XP
     */
    calculateLevel(xp) {
        for (let i = this.levelThresholds.length - 1; i >= 0; i--) {
            if (xp >= this.levelThresholds[i]) {
                return i + 1;
            }
        }
        return 1; // Default to level 1
    }

    /**
     * Get XP required for next level
     */
    getXPToNextLevel(currentXP) {
        const currentLevel = this.calculateLevel(currentXP);
        if (currentLevel >= this.levelThresholds.length) {
            return 0; // Max level reached
        }
        return this.levelThresholds[currentLevel] - currentXP;
    }

    /**
     * Check for new achievements
     */
    checkAchievements() {
        const gameState = this.gameStateManager.getState();
        const progression = gameState.playerState.progression;
        const newAchievements = [];
        
        // Check each achievement
        Object.values(this.achievements).forEach(achievement => {
            // Skip if already achieved
            if (progression.achievements.includes(achievement.id)) {
                return;
            }
            
            // Check if condition is met
            if (achievement.condition(gameState)) {
                // Award the achievement
                progression.achievements.push(achievement.id);
                newAchievements.push(achievement);
                
                // Apply rewards
                if (achievement.reward) {
                    // Award XP
                    if (achievement.reward.xp) {
                        this.awardXP(achievement.reward.xp);
                    }
                    
                    // Grant abilities
                    if (achievement.reward.abilities && Array.isArray(achievement.reward.abilities)) {
                        achievement.reward.abilities.forEach(abilityId => {
                            if (!progression.abilities.includes(abilityId)) {
                                progression.abilities.push(abilityId);
                            }
                        });
                    }
                }
            }
        });
        
        return newAchievements;
    }

    /**
     * Check if player has a specific ability
     */
    hasAbility(abilityId) {
        return this.gameStateManager.playerState.progression.abilities.includes(abilityId);
    }

    /**
     * Use an ability (for non-passive abilities)
     */
    useAbility(abilityId, ...args) {
        const ability = this.abilities[abilityId];
        if (!ability) {
            console.error(`Ability with ID "${abilityId}" not found`);
            return null;
        }
        
        // Check if player has the ability
        if (!this.hasAbility(abilityId)) {
            console.error(`Player does not have ability "${abilityId}"`);
            return null;
        }
        
        // Execute ability effect
        if (ability.effect) {
            return ability.effect(this.gameStateManager.getState(), ...args);
        }
        
        return null;
    }

    /**
     * Track puzzle solved
     */
    trackPuzzleSolved() {
        const progression = this.gameStateManager.playerState.progression;
        progression.puzzlesSolved += 1;
        
        // Award XP for solving puzzles
        return this.awardXP(10);
    }

    /**
     * Track choice made
     */
    trackChoiceMade(karmaChange) {
        const progression = this.gameStateManager.playerState.progression;
        progression.choicesMade += 1;
        
        // Track karma changes
        if (karmaChange > 0) {
            progression.karmaGained += karmaChange;
        } else if (karmaChange < 0) {
            progression.karmaLost += Math.abs(karmaChange);
        }
        
        // Award XP for significant choices (those that affect karma)
        if (karmaChange !== 0) {
            return this.awardXP(5);
        }
        
        return null;
    }

    /**
     * Get random spiritual insight for meditation
     */
    getRandomInsight() {
        const insights = [
            "The path to enlightenment begins with a single step of awareness.",
            "Your true self exists beyond the illusions of the material world.",
            "Karma is not punishment, but the universe teaching through consequence.",
            "The present moment is your most precious possession.",
            "To know others is wisdom; to know yourself is enlightenment.",
            "The mind is everything. What you think, you become.",
            "Peace comes from within. Do not seek it without.",
            "The journey of a thousand miles begins with one step.",
            "Happiness never decreases by being shared.",
            "In the midst of movement and chaos, keep stillness inside of you."
        ];
        
        return insights[Math.floor(Math.random() * insights.length)];
    }

    /**
     * Perform meditation (if ability is available)
     */
    meditate() {
        if (!this.hasAbility("meditation")) {
            return {
                success: false,
                message: "You have not unlocked the meditation ability yet."
            };
        }
        
        const progression = this.gameStateManager.playerState.progression;
        const currentScene = this.gameStateManager.playerState.currentSceneId;
        
        // Check cooldown
        if (progression.lastMeditationScene === currentScene) {
            return {
                success: false,
                message: "You have already meditated in this scene."
            };
        }
        
        // Perform meditation
        progression.meditationPerformed += 1;
        progression.lastMeditationScene = currentScene;
        
        const result = this.useAbility("meditation");
        
        // Apply karma boost
        if (result && result.karma) {
            this.gameStateManager.updateKarma(result.karma);
        }
        
        return {
            success: true,
            insight: result.insight,
            karmaGained: result.karma,
            xpGained: this.awardXP(3)
        };
    }

    /**
     * Get player's current abilities
     */
    getPlayerAbilities() {
        const abilityIds = this.gameStateManager.playerState.progression.abilities;
        return abilityIds.map(id => this.abilities[id]).filter(ability => ability);
    }

    /**
     * Get player's achievements
     */
    getPlayerAchievements() {
        const achievementIds = this.gameStateManager.playerState.progression.achievements;
        return achievementIds.map(id => this.achievements[id]).filter(achievement => achievement);
    }
}

// Export the ProgressionSystem class