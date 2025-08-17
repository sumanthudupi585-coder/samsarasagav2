/**
 * QuestSystem.js
 * 
 * This module manages quests, missions, and objectives in the Samsara Saga game.
 * It tracks quest progress and provides rewards upon completion.
 */

class QuestSystem {
    constructor(gameStateManager, progressionSystem) {
        this.gameStateManager = gameStateManager;
        this.progressionSystem = progressionSystem;
        
        // Initialize quest data if it doesn't exist
        if (!this.gameStateManager.playerState.quests) {
            this.initQuestData();
        }
        
        // Define quest templates
        this.questTemplates = {
            // Act 1 Quests
            purify_river: {
                id: "purify_river",
                title: "Purify the Sacred River",
                description: "The village's sacred river has been polluted. Find a way to purify it.",
                act: 1,
                objectives: [
                    {
                        id: "find_source",
                        description: "Find the source of pollution",
                        completionFlag: "pollution_source_found"
                    },
                    {
                        id: "gather_herbs",
                        description: "Gather purification herbs",
                        completionFlag: "purification_herbs_collected"
                    },
                    {
                        id: "perform_ritual",
                        description: "Perform the purification ritual",
                        completionFlag: "purification_ritual_performed"
                    }
                ],
                rewards: {
                    xp: 50,
                    karma: 15,
                    items: ["Water Blessing"],
                    dharmicProfile: {
                        dharma: 2,
                        moksha: 1
                    }
                },
                completionFlag: "river_purified"
            },
            
            help_merchant: {
                id: "help_merchant",
                title: "The Merchant's Dilemma",
                description: "A traveling merchant seeks your help with a moral dilemma.",
                act: 1,
                objectives: [
                    {
                        id: "hear_story",
                        description: "Listen to the merchant's story",
                        completionFlag: "merchant_story_heard"
                    },
                    {
                        id: "investigate_claims",
                        description: "Investigate the competing claims",
                        completionFlag: "claims_investigated"
                    },
                    {
                        id: "resolve_dispute",
                        description: "Help resolve the dispute",
                        completionFlag: "dispute_resolved"
                    }
                ],
                rewards: {
                    xp: 40,
                    karma: 10,
                    items: ["Merchant's Gratitude"],
                    dharmicProfile: {
                        artha: 2,
                        dharma: 1
                    }
                },
                completionFlag: "merchant_helped"
            },
            
            // Act 2 Quests
            temple_restoration: {
                id: "temple_restoration",
                title: "Restore the Ancient Temple",
                description: "An ancient temple lies in ruins. Help restore it to its former glory.",
                act: 2,
                objectives: [
                    {
                        id: "clear_debris",
                        description: "Clear the debris from the temple grounds",
                        completionFlag: "temple_debris_cleared"
                    },
                    {
                        id: "find_artifacts",
                        description: "Recover the lost sacred artifacts",
                        completionFlag: "temple_artifacts_found"
                    },
                    {
                        id: "restore_shrine",
                        description: "Restore the central shrine",
                        completionFlag: "temple_shrine_restored"
                    },
                    {
                        id: "perform_consecration",
                        description: "Perform the consecration ceremony",
                        completionFlag: "temple_consecrated"
                    }
                ],
                rewards: {
                    xp: 75,
                    karma: 20,
                    items: ["Temple Blessing", "Sacred Relic"],
                    dharmicProfile: {
                        dharma: 3,
                        moksha: 2
                    }
                },
                completionFlag: "temple_restored"
            },
            
            royal_intrigue: {
                id: "royal_intrigue",
                title: "Royal Court Intrigue",
                description: "Navigate the dangerous politics of the royal court to prevent a war.",
                act: 2,
                objectives: [
                    {
                        id: "gain_audience",
                        description: "Gain an audience with the royal advisor",
                        completionFlag: "royal_audience_gained"
                    },
                    {
                        id: "uncover_plot",
                        description: "Uncover the conspiracy against the kingdom",
                        completionFlag: "conspiracy_uncovered"
                    },
                    {
                        id: "gather_evidence",
                        description: "Gather evidence of the plot",
                        completionFlag: "conspiracy_evidence_gathered"
                    },
                    {
                        id: "present_case",
                        description: "Present your case to the ruler",
                        completionFlag: "case_presented"
                    }
                ],
                rewards: {
                    xp: 80,
                    karma: 15,
                    items: ["Royal Favor", "Court Insignia"],
                    dharmicProfile: {
                        artha: 2,
                        kama: 2,
                        dharma: 1
                    }
                },
                completionFlag: "royal_intrigue_resolved"
            },
            
            // Act 3 Quests
            spiritual_journey: {
                id: "spiritual_journey",
                title: "The Path to Enlightenment",
                description: "Embark on a spiritual journey to discover your true purpose.",
                act: 3,
                objectives: [
                    {
                        id: "meet_guru",
                        description: "Seek out the enlightened guru",
                        completionFlag: "guru_found"
                    },
                    {
                        id: "complete_trials",
                        description: "Complete the guru's three trials",
                        completionFlag: "guru_trials_completed"
                    },
                    {
                        id: "face_shadow",
                        description: "Confront your inner shadow",
                        completionFlag: "shadow_confronted"
                    },
                    {
                        id: "achieve_insight",
                        description: "Achieve spiritual insight",
                        completionFlag: "spiritual_insight_achieved"
                    }
                ],
                rewards: {
                    xp: 100,
                    karma: 25,
                    items: ["Enlightened Mind", "Inner Light"],
                    dharmicProfile: {
                        moksha: 4,
                        dharma: 2
                    }
                },
                completionFlag: "spiritual_journey_completed"
            },
            
            cosmic_balance: {
                id: "cosmic_balance",
                title: "Restore the Cosmic Balance",
                description: "The balance between worlds is threatened. You must restore harmony.",
                act: 3,
                objectives: [
                    {
                        id: "find_breach",
                        description: "Locate the breach between worlds",
                        completionFlag: "cosmic_breach_found"
                    },
                    {
                        id: "gather_elements",
                        description: "Gather the five elemental essences",
                        completionFlag: "elements_gathered"
                    },
                    {
                        id: "perform_ritual",
                        description: "Perform the cosmic balancing ritual",
                        completionFlag: "cosmic_ritual_performed"
                    },
                    {
                        id: "seal_breach",
                        description: "Seal the breach between worlds",
                        completionFlag: "cosmic_breach_sealed"
                    }
                ],
                rewards: {
                    xp: 120,
                    karma: 30,
                    items: ["Cosmic Harmony", "Universal Key"],
                    dharmicProfile: {
                        moksha: 3,
                        dharma: 3,
                        artha: 1,
                        kama: 1
                    }
                },
                completionFlag: "cosmic_balance_restored"
            }
        };
    }

    /**
     * Initialize quest data for a new game
     */
    initQuestData() {
        this.gameStateManager.playerState.quests = {
            active: [],
            completed: [],
            failed: []
        };
    }

    /**
     * Start a new quest by ID
     */
    startQuest(questId) {
        // Check if quest template exists
        const questTemplate = this.questTemplates[questId];
        if (!questTemplate) {
            console.error(`Quest template with ID "${questId}" not found`);
            return false;
        }
        
        // Check if quest is already active or completed
        const quests = this.gameStateManager.playerState.quests;
        if (quests.active.some(q => q.id === questId) || 
            quests.completed.some(q => q.id === questId) ||
            quests.failed.some(q => q.id === questId)) {
            console.log(`Quest "${questId}" is already active, completed, or failed`);
            return false;
        }
        
        // Create new quest instance from template
        const newQuest = {
            id: questTemplate.id,
            title: questTemplate.title,
            description: questTemplate.description,
            act: questTemplate.act,
            objectives: questTemplate.objectives.map(obj => ({
                ...obj,
                completed: false
            })),
            rewards: questTemplate.rewards,
            completionFlag: questTemplate.completionFlag,
            startTime: Date.now(),
            progress: 0
        };
        
        // Add to active quests
        quests.active.push(newQuest);
        
        return {
            success: true,
            quest: newQuest
        };
    }

    /**
     * Update quest progress based on world state changes
     */
    updateQuestProgress() {
        const worldState = this.gameStateManager.worldState;
        const quests = this.gameStateManager.playerState.quests;
        const updatedQuests = [];
        
        // Check active quests for progress
        quests.active.forEach(quest => {
            let objectivesCompleted = 0;
            let totalObjectives = quest.objectives.length;
            let questUpdated = false;
            
            // Check each objective
            quest.objectives.forEach(objective => {
                if (!objective.completed && worldState[objective.completionFlag]) {
                    objective.completed = true;
                    questUpdated = true;
                }
                
                if (objective.completed) {
                    objectivesCompleted++;
                }
            });
            
            // Update progress percentage
            const newProgress = Math.floor((objectivesCompleted / totalObjectives) * 100);
            if (quest.progress !== newProgress) {
                quest.progress = newProgress;
                questUpdated = true;
            }
            
            // Check if quest is completed
            if (objectivesCompleted === totalObjectives || worldState[quest.completionFlag]) {
                this.completeQuest(quest.id);
                questUpdated = true;
            }
            
            if (questUpdated) {
                updatedQuests.push(quest);
            }
        });
        
        return updatedQuests;
    }

    /**
     * Complete a quest and award rewards
     */
    completeQuest(questId) {
        const quests = this.gameStateManager.playerState.quests;
        const questIndex = quests.active.findIndex(q => q.id === questId);
        
        if (questIndex === -1) {
            console.error(`Cannot complete quest: Quest with ID "${questId}" not found in active quests`);
            return false;
        }
        
        // Get the quest
        const quest = quests.active[questIndex];
        
        // Award rewards
        if (quest.rewards) {
            // Award XP
            let levelUpInfo = null;
            if (quest.rewards.xp) {
                levelUpInfo = this.progressionSystem.awardXP(quest.rewards.xp);
            }
            
            // Award karma
            if (quest.rewards.karma) {
                this.gameStateManager.updateKarma(quest.rewards.karma);
            }
            
            // Award items
            if (quest.rewards.items && Array.isArray(quest.rewards.items)) {
                quest.rewards.items.forEach(item => {
                    this.gameStateManager.addToInventory(item);
                });
            }
            
            // Update dharmic profile
            if (quest.rewards.dharmicProfile) {
                Object.entries(quest.rewards.dharmicProfile).forEach(([aspect, value]) => {
                    this.gameStateManager.updateDharmicProfile(aspect, value);
                });
            }
            
            // Set completion time
            quest.completionTime = Date.now();
            
            // Move from active to completed
            quests.active.splice(questIndex, 1);
            quests.completed.push(quest);
            
            // Track quest completion in progression system
            this.gameStateManager.playerState.progression.questsCompleted += 1;
            
            return {
                success: true,
                quest: quest,
                rewards: quest.rewards,
                levelUp: levelUpInfo && levelUpInfo.levelUp ? levelUpInfo : null
            };
        }
        
        return false;
    }

    /**
     * Fail a quest
     */
    failQuest(questId) {
        const quests = this.gameStateManager.playerState.quests;
        const questIndex = quests.active.findIndex(q => q.id === questId);
        
        if (questIndex === -1) {
            console.error(`Cannot fail quest: Quest with ID "${questId}" not found in active quests`);
            return false;
        }
        
        // Get the quest
        const quest = quests.active[questIndex];
        
        // Set failure time
        quest.failureTime = Date.now();
        
        // Move from active to failed
        quests.active.splice(questIndex, 1);
        quests.failed.push(quest);
        
        return {
            success: true,
            quest: quest
        };
    }

    /**
     * Get all active quests
     */
    getActiveQuests() {
        return this.gameStateManager.playerState.quests.active;
    }

    /**
     * Get all completed quests
     */
    getCompletedQuests() {
        return this.gameStateManager.playerState.quests.completed;
    }

    /**
     * Get all failed quests
     */
    getFailedQuests() {
        return this.gameStateManager.playerState.quests.failed;
    }

    /**
     * Get a specific quest by ID (from any category)
     */
    getQuestById(questId) {
        const quests = this.gameStateManager.playerState.quests;
        
        // Check active quests
        const activeQuest = quests.active.find(q => q.id === questId);
        if (activeQuest) return { status: 'active', quest: activeQuest };
        
        // Check completed quests
        const completedQuest = quests.completed.find(q => q.id === questId);
        if (completedQuest) return { status: 'completed', quest: completedQuest };
        
        // Check failed quests
        const failedQuest = quests.failed.find(q => q.id === questId);
        if (failedQuest) return { status: 'failed', quest: failedQuest };
        
        return null;
    }

    /**
     * Get available quests for the current act
     */
    getAvailableQuestsForCurrentAct() {
        const currentAct = this.gameStateManager.playerState.currentAct;
        const allQuests = this.gameStateManager.playerState.quests;
        
        // Get all quest templates for the current act
        const availableQuests = Object.values(this.questTemplates)
            .filter(template => template.act === currentAct)
            .filter(template => {
                // Filter out quests that are already active, completed, or failed
                return !allQuests.active.some(q => q.id === template.id) &&
                       !allQuests.completed.some(q => q.id === template.id) &&
                       !allQuests.failed.some(q => q.id === template.id);
            });
        
        return availableQuests;
    }

    /**
     * Auto-start quests for the current act
     * This can be called when entering a new act
     */
    autoStartQuestsForCurrentAct() {
        const availableQuests = this.getAvailableQuestsForCurrentAct();
        const startedQuests = [];
        
        availableQuests.forEach(questTemplate => {
            const result = this.startQuest(questTemplate.id);
            if (result && result.success) {
                startedQuests.push(result.quest);
            }
        });
        
        return startedQuests;
    }
}

// Export the QuestSystem class