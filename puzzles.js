/**
 * @file Puzzles.js
 * @description Defines all puzzles for Samsara Saga, including mechanics, solutions, and progression states.
 * @version 2.0.0
 * @license MIT
 */

export const puzzles = {
    /**
     * Act I Puzzles
     */
    
    /**
     * Banyan Tree Harmony Puzzle
     * A puzzle for balancing the energies of the sacred Banyan tree
     */
    "BanyanTreeHarmony": {
        "title": "The Sacred Balance",
        "description": "Balance the spiritual energies of the Banyan tree to resolve the village's dilemma.",
        "difficulty": "Medium",
        "mechanics": {
            "type": "EnergyBalancing",
            "energyTypes": [
                {"name": "Vitality", "currentLevel": 30, "idealLevel": 50, "minLevel": 0, "maxLevel": 100},
                {"name": "Wisdom", "currentLevel": 70, "idealLevel": 50, "minLevel": 0, "maxLevel": 100},
                {"name": "Harmony", "currentLevel": 20, "idealLevel": 50, "minLevel": 0, "maxLevel": 100}
            ],
            "balanceThreshold": 10, // How close to ideal each energy must be
            "adjustmentMethods": [
                {"name": "Meditation", "effect": {"Vitality": 0, "Wisdom": +5, "Harmony": +10}},
                {"name": "Offering", "effect": {"Vitality": +10, "Wisdom": 0, "Harmony": +5}},
                {"name": "Chanting", "effect": {"Vitality": +5, "Wisdom": +10, "Harmony": 0}}
            ],
            "attempts": 0,
            "maxAttempts": 5
        },
        "hints": [
            "The tree requires equal parts of all three energies.",
            "Each adjustment method affects multiple energy types.",
            "Plan your sequence of adjustments to reach balance efficiently."
        ],
        "rewards": {
            "item": "Banyan Leaf Talisman",
            "ability": "Nature Communion",
            "knowledge": "Understanding of natural energy flows"
        },
        "completed": false
    },

    /**
     * Barrier of Negativity Puzzle
     * A puzzle from Act I requiring a pure object to break through a negative energy barrier
     */
    "BarrierOfNegativity": {
        "title": "The Barrier of Spiritual Despair",
        "description": "Break through the barrier of negative energy protecting the corrupted crystal in the Cave of the Rishi.",
        "difficulty": "Medium",
        "mechanics": {
            "type": "PurityAlignment",
            "barrier": {
                "description": "A wall of dense, dark energy that repels all physical objects",
                "weakness": "Objects of pure spiritual intent and composition",
                "resistance": "Objects with mixed or negative energies"
            },
            "solution": {
                "requiresItem": true,
                "validItems": ["Pure Crystal", "Blessed Water", "Sacred Flame"],
                "applicationMethod": "Present the pure object to the barrier with focused intent"
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "The barrier responds to purity of both object and intention.",
            "Something that has never been tainted by negative emotions might work.",
            "Water from a sacred spring or an object blessed by a true spiritual master could penetrate the barrier."
        ],
        "rewards": {
            "access": "Purified Crystal",
            "ability": "Enhanced spiritual perception",
            "knowledge": "Understanding of how purity can counteract corruption"
        },
        "completed": false
    },

    /**
     * Shilpa Shastra Crafting System
     * A multi-stage crafting puzzle based on the sacred art of divine crafting
     */
    "ShilpaShastraCrafting": {
        "title": "The Sacred Art of Divine Crafting",
        "description": "Master the four stages of Shilpa Shastra to create divine artifacts.",
        "difficulty": "Variable",
        "stages": [
            {
                "name": "Atma Shuddhi (Self-Purification)",
                "description": "Purify your spiritual energy through meditation",
                "challenge": "Complete a mandala pattern by selecting the correct sequence of energy points",
                "difficulty": "Easy"
            },
            {
                "name": "Vastu Vidya (Material Knowledge)",
                "description": "Select the proper materials with divine resonance",
                "challenge": "Identify materials with the correct spiritual properties for your intended creation",
                "difficulty": "Medium"
            },
            {
                "name": "Yantra Sthapana (Sacred Geometry)",
                "description": "Arrange the components in a sacred geometric pattern",
                "challenge": "Place components according to cosmic mathematical principles",
                "difficulty": "Hard"
            },
            {
                "name": "Prana Pratishtha (Life Installation)",
                "description": "Infuse the creation with divine life force",
                "challenge": "Channel your spiritual energy into the creation through proper mantras and visualization",
                "difficulty": "Very Hard"
            }
        ],
        "mechanics": {
            "type": "MultiStageCrafting",
            "craftableItems": [
                {
                    "name": "Resonance Bell",
                    "materials": ["Celestial Bronze", "River Pearl", "Sandalwood"],
                    "pattern": "Triangular Yantra",
                    "mantra": "Om Ghanta Nada Brahma",
                    "difficulty": "Medium",
                    "effects": ["Reveals hidden spiritual energies", "Clears negative vibrations"]
                },
                {
                    "name": "Dharma Compass",
                    "materials": ["Purified Gold", "Lodestone", "Lotus Fiber"],
                    "pattern": "Circular Mandala",
                    "mantra": "Om Dharma Marga Darshaka",
                    "difficulty": "Hard",
                    "effects": ["Points toward your spiritual path", "Reveals moral choices"]
                }
                // Additional craftable items can be added here
            ],
            "skillProgression": true, // Player improves with each crafting attempt
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Each stage builds upon the previous one; errors compound if not corrected.",
            "Your intention while crafting is as important as the physical actions.",
            "Different items require different approaches to the four stages."
        ],
        "rewards": {
            "item": "Resonance Bell",
            "abilities": ["Detect divine vibrations", "Amplify celestial sounds", "Dispel minor dissonance"],
            "craftingExperience": 100
        },
        "completed": false,
        "currentStage": 1
    },

    /**
     * Harmonic Resonance Puzzle
     * A musical puzzle requiring understanding of divine harmonics
     */
    "HarmonicResonance": {
        "title": "The Celestial Harmony",
        "description": "Unlock the temple entrance by playing the five sacred notes with perfect harmonic resonance.",
        "difficulty": "Medium",
        "mechanics": {
            "type": "MusicalSequence",
            "notes": ["Sa", "Ga", "Pa", "Dha", "Ni"],
            "correctSequence": ["Sa", "Ga", "Pa", "Dha", "Ni"],
            "harmonicRequirements": {
                "timing": {
                    "description": "Each note must be played with precise timing, following the cosmic rhythm",
                    "pattern": [1, 0.5, 0.5, 1, 2], // Duration multipliers for each note
                    "tolerance": 0.2 // Acceptable error margin
                },
                "intensity": {
                    "description": "Each note must be played with the correct intensity to activate its corresponding element",
                    "pattern": ["medium", "soft", "medium", "strong", "soft"],
                    "elementalAssociations": {
                        "Sa": "Earth",
                        "Ga": "Water",
                        "Pa": "Fire",
                        "Dha": "Air",
                        "Ni": "Ether"
                    }
                }
            },
            "attempts": 0,
            "maxAttempts": 3
        },
        "hints": [
            "Listen to the natural sounds around the temple for guidance.",
            "The elements follow a pattern from densest to most subtle.",
            "The timing reflects the cosmic breath - expansion and contraction."
        ],
        "rewards": {
            "access": "Inner Temple Sanctum",
            "ability": "Elemental Attunement",
            "knowledge": "Understanding of sound as the bridge between matter and spirit"
        },
        "completed": false
    },

    /**
     * Act II Puzzles
     */

    /**
     * Celestial Court Puzzle
     * A diplomatic puzzle requiring navigation of divine politics
     */
    "CelestialCourt": {
        "title": "The Celestial Court",
        "description": "Navigate the complex politics of the divine court to gain an audience with Indra.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "DiplomaticNavigation",
            "courtMembers": [
                {
                    "name": "Brihaspati",
                    "title": "Guru of the Devas",
                    "domain": "Wisdom and Counsel",
                    "disposition": "Neutral",
                    "desires": ["Intellectual discussion", "Respect for tradition"],
                    "dislikes": ["Impulsiveness", "Disrespect for hierarchy"]
                },
                {
                    "name": "Agni",
                    "title": "God of Fire",
                    "domain": "Transformation and Ritual",
                    "disposition": "Favorable",
                    "desires": ["Offerings", "Directness"],
                    "dislikes": ["Deception", "Water imagery"]
                },
                {
                    "name": "Varuna",
                    "title": "Lord of Waters",
                    "domain": "Celestial Order and Justice",
                    "disposition": "Unfavorable",
                    "desires": ["Adherence to cosmic law", "Humility"],
                    "dislikes": ["Chaos", "Pride"]
                },
                {
                    "name": "Saraswati",
                    "title": "Goddess of Knowledge",
                    "domain": "Arts and Learning",
                    "disposition": "Neutral",
                    "desires": ["Poetic speech", "New knowledge"],
                    "dislikes": ["Ignorance", "Crude expression"]
                },
                {
                    "name": "Yama",
                    "title": "Lord of Dharma",
                    "domain": "Celestial Authority",
                    "disposition": "Unfavorable",
                    "desires": ["Honesty", "Acceptance of natural order"],
                    "dislikes": ["Attempts to circumvent fate", "Dishonesty"]
                }
            ],
            "interactions": [
                {
                    "name": "Formal Greeting",
                    "description": "How you initially address each deity",
                    "options": ["Traditional", "Creative", "Direct", "Humble"]
                },
                {
                    "name": "Conversation Topic",
                    "description": "What subject you choose to discuss",
                    "options": ["Cosmic Philosophy", "Current Celestial Affairs", "Personal Journey", "The Celestial Silence"]
                },
                {
                    "name": "Offering",
                    "description": "What you present as a token of respect",
                    "options": ["Symbolic Item", "Knowledge", "Service", "Nothing"]
                },
                {
                    "name": "Request Style",
                    "description": "How you frame your request for assistance",
                    "options": ["Appeal to Duty", "Appeal to Compassion", "Appeal to Curiosity", "Appeal to Order"]
                }
            ],
            "events": [
                {
                    "name": "Celestial Debate",
                    "description": "A formal debate on the proper response to the Celestial Silence",
                    "participants": ["Brihaspati", "Varuna", "Saraswati"],
                    "keyInsight": "The silence is not an absence but a presence that requires understanding, not action"
                },
                {
                    "name": "Divine Council",
                    "description": "A gathering of deities to discuss cosmic matters",
                    "participants": ["All court members"],
                    "keyInsight": "The court is divided on whether to intervene in mortal affairs during this unusual time"
                }
            ],
            "successConditions": {
                "minimumFavorableDeities": 3,
                "requiredAllies": ["Brihaspati"],
                "avoidedEnemies": ["Yama"]
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts, but consequences for failures
        },
        "hints": [
            "Each deity responds differently to different approaches.",
            "Your Nakshatra may give you natural affinity with certain deities.",
            "Listen carefully to the ongoing conversations in court for clues about current tensions.",
            "Sometimes it's better to make a powerful ally than to avoid making an enemy."
        ],
        "rewards": {
            "access": "Indra's Audience Chamber",
            "ability": "Divine Etiquette",
            "knowledge": "Understanding of celestial politics"
        },
        "completed": false
    },

    /**
     * Celestial Silence Investigation
     * An investigative puzzle about the mysterious silence affecting the heavens
     */
    "CelestialSilence": {
        "title": "The Great Silence",
        "description": "Investigate the mysterious silence that has fallen over the celestial realms.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "MysteryInvestigation",
            "clueLocations": [
                {
                    "name": "Hall of Echoes",
                    "description": "A chamber where all cosmic sounds converge",
                    "clues": ["Residual vibrations show the silence began precisely at the last celestial conjunction", "The silence affects divine communication but not physical sound"]
                },
                {
                    "name": "Akashic Library",
                    "description": "Repository of all cosmic knowledge",
                    "clues": ["Similar silences have occurred five times in recorded cosmic history", "Each previous silence preceded a major shift in cosmic order"]
                },
                {
                    "name": "Observatory of Ages",
                    "description": "Where celestial movements are tracked",
                    "clues": ["The planets have subtly altered their orbits", "The constellation of the Saptarishi (Seven Sages) has dimmed"]
                },
                {
                    "name": "Divine Communication Nexus",
                    "description": "Central hub for messages between realms",
                    "clues": ["Messages to the higher realms beyond Svarga are completely blocked", "Messages between deities are delayed and distorted"]
                }
            ],
            "suspects": [
                {
                    "name": "Rahu",
                    "motive": "Revenge for being eternally separated from his lower half",
                    "evidence": ["Shadow energy detected in the Hall of Echoes", "Increased eclipse activity"],
                    "alibi": "Was observed in the far reaches of space during the onset"
                },
                {
                    "name": "Shukra",
                    "motive": "Protest against the devas for their treatment of the asuras",
                    "evidence": ["Diplomatic communications with asuras increased before the silence", "Known expert in sound-absorbing mantras"],
                    "alibi": "No solid alibi, claims to have been in meditation"
                },
                {
                    "name": "Cosmic Cycle Itself",
                    "motive": "Natural transition to a new cosmic age",
                    "evidence": ["Timing aligns with ancient prophecies", "Similar patterns observed at ends of previous yugas"],
                    "alibi": "Not applicable - natural phenomenon"
                }
            ],
            "investigationMethods": [
                {
                    "name": "Divine Perception",
                    "description": "Using heightened senses to detect subtle energies",
                    "effectiveness": "High for energy traces, low for intentions"
                },
                {
                    "name": "Astral Projection",
                    "description": "Sending consciousness to witness past events",
                    "effectiveness": "Medium for events, high for locations"
                },
                {
                    "name": "Witness Interviews",
                    "description": "Speaking with celestial beings who observed anomalies",
                    "effectiveness": "High for perspectives, low for objective facts"
                }
            ],
            "solution": {
                "culprit": "Cosmic Cycle Itself",
                "explanation": "The silence is a natural phenomenon marking the transition between cosmic ages, not a malicious act",
                "evidence": ["Pattern matching with historical transitions", "Planetary alignment confirmation", "Energy signature analysis"],
                "resolution": "The silence cannot be broken, but can be understood and navigated"
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Not all mysteries have villains; some are simply natural transitions.",
            "Pay attention to historical patterns rather than current suspicions.",
            "The most obvious suspects may be convenient scapegoats rather than true culprits.",
            "Consider what the silence enables rather than what it prevents."
        ],
        "rewards": {
            "knowledge": "Understanding of cosmic cycles and transitions",
            "ability": "Clarity of Perception - ability to see through illusions and distractions",
            "insight": "Recognition that change, even disruptive change, is part of the cosmic order"
        },
        "completed": false
    },

    /**
     * Navaratri Festival Puzzle
     * A nine-night festival puzzle requiring gathering specific components
     */
    "NavaratriFestival": {
        "title": "The Nine Nights of the Goddess",
        "description": "Participate in the divine Navaratri festival to counter the effects of the Celestial Silence.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "RitualPreparation",
            "nights": [
                {
                    "name": "Shailaputri Night",
                    "deity": "Goddess of the Mountains",
                    "element": "Earth",
                    "offering": "Soil from a sacred mountain peak",
                    "ritual": "Grounding meditation at sunset",
                    "benefit": "Stability in chaos"
                },
                {
                    "name": "Brahmacharini Night",
                    "deity": "Goddess of Asceticism",
                    "element": "Water",
                    "offering": "Water from the confluence of three rivers",
                    "ritual": "Fasting and purification",
                    "benefit": "Clarity of purpose"
                },
                {
                    "name": "Chandraghanta Night",
                    "deity": "Goddess of Courage",
                    "element": "Fire",
                    "offering": "Oil lamp with seven wicks",
                    "ritual": "Bell-ringing at midnight",
                    "benefit": "Dispelling of fear"
                },
                {
                    "name": "Kushmanda Night",
                    "deity": "Goddess of the Cosmic Egg",
                    "element": "Solar energy",
                    "offering": "Sun-ripened fruits",
                    "ritual": "Visualization of inner light",
                    "benefit": "Vitality and health"
                },
                {
                    "name": "Skandamata Night",
                    "deity": "Mother of Skanda",
                    "element": "Air",
                    "offering": "Incense of five fragrances",
                    "ritual": "Recitation of protective mantras",
                    "benefit": "Divine protection"
                },
                {
                    "name": "Katyayani Night",
                    "deity": "Warrior Goddess",
                    "element": "Storm",
                    "offering": "Weapons adorned with flowers",
                    "ritual": "Martial dance at twilight",
                    "benefit": "Courage in battle"
                },
                {
                    "name": "Kalaratri Night",
                    "deity": "Goddess of Darkness",
                    "element": "Shadow",
                    "offering": "Black sesame seeds and iron",
                    "ritual": "Facing fears in darkness",
                    "benefit": "Destruction of obstacles"
                },
                {
                    "name": "Mahagauri Night",
                    "deity": "Goddess of Purity",
                    "element": "Ether",
                    "offering": "White flowers and milk",
                    "ritual": "Bathing ritual at dawn",
                    "benefit": "Purification of karma"
                },
                {
                    "name": "Siddhidatri Night",
                    "deity": "Goddess of Perfection",
                    "element": "Cosmic consciousness",
                    "offering": "Nine types of grains arranged in a yantra",
                    "ritual": "Integration meditation uniting all elements",
                    "benefit": "Spiritual attainment"
                }
            ],
            "gatheringChallenges": {
                "difficulty": "Variable by component",
                "timeConstraint": "Each component must be gathered before its corresponding night",
                "purityRequirements": "Gatherer must maintain specific observances while collecting each item"
            },
            "ritualRequirements": {
                "timing": "Each ritual must be performed at its auspicious time",
                "sequence": "The nine nights must be observed in order",
                "participation": "Different celestial beings must be invited on different nights"
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts, but time-constrained
        },
        "hints": [
            "Each component must be gathered with the specific intention aligned with its associated deity.",
            "The order of the nine nights follows a spiritual progression from grounding to transcendence.",
            "Your participation in each night's ritual builds upon the previous, creating a cumulative effect.",
            "Your Nakshatra's natural affinity may make certain nights' rituals more powerful for you."
        ],
        "rewards": {
            "abilities": "Nine distinct divine blessings, one from each night of the festival",
            "knowledge": "Deeper understanding of the cosmic feminine principles that counter the Celestial Silence",
            "communityEffect": "Strengthened bonds with divine beings across Svarga"
        },
        "completed": false
    },

    /**
     * Act III Puzzles
     */

    /**
     * Karma Reflection Puzzle
     * A puzzle from the Labyrinth of Maya focused on understanding the nature of action
     */
    "KarmaReflection": {
        "title": "Karma's Echo",
        "description": "Recognize the true nature of action and the illusion of the separate doer.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "SelfReflection",
            "challenge": "Before you stands a mirror that reflects not your physical form but the consequences of your actions in Dharmapura. To proceed, you must recognize which of your past actions was based on the deepest illusion of separateness.",
            "correctInsight": "All actions arise from the illusion of being a separate doer.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Look beyond the specific actions to the underlying assumption behind all of them.",
            "The question is not which action was most separate, but what makes any action seem separate.",
            "Consider the perspective from which you evaluate your actions - who is the judge?"
        ],
        "rewards": {
            "insight": "The doer is itself a thought arising in awareness",
            "ability": "Witness Consciousness - ability to observe actions without identification"
        },
        "completed": false
    },

    /**
     * Devotion Transcendence Puzzle
     * A puzzle from the Labyrinth of Maya focused on the nature of devotion
     */
    "DevotionTranscendence": {
        "title": "Bhakti's Reflection",
        "description": "Recognize the ultimate truth about the relationship between worshipper and worshipped.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "SelfReflection",
            "challenge": "Before you floats a divine form that shifts between different deities you encountered in Svarga. To proceed, you must recognize the ultimate truth about the relationship between worshipper and worshipped.",
            "correctInsight": "The worshipper and the worshipped are ultimately one.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Devotion creates a relationship that maintains duality.",
            "The highest form of devotion dissolves the devotee.",
            "What is the state when the lover and the beloved become indistinguishable?"
        ],
        "rewards": {
            "insight": "Love is the recognition of unity, not the bridge between separate entities",
            "ability": "Heart-Mind Unity - integration of emotional and intellectual understanding"
        },
        "completed": false
    },

    /**
     * Self Inquiry Puzzle
     * A puzzle from the Labyrinth of Maya focused on the nature of the Self
     */
    "SelfInquiry": {
        "title": "The Mirror of Self",
        "description": "Recognize the true nature of the Self beyond all identifications.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "SelfReflection",
            "challenge": "Before you stands a series of mirrors, each reflecting a different aspect of what you've considered to be 'yourself.' To proceed, you must identify which reflection represents the true Self (Atman).",
            "correctInsight": "The true Self is not in any reflection but is the awareness observing all reflections.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "What you call 'yourself' is a process, not an entity.",
            "The observer cannot be the observed.",
            "That which is aware of all changing states cannot itself be a changing state."
        ],
        "rewards": {
            "insight": "The Self is not an object of experience but the subject of all experience",
            "ability": "Self-Abidance - ability to rest as awareness rather than identifying with thoughts"
        },
        "completed": false
    },

    /**
     * Maya Riddle Puzzle
     * The final puzzle in the Labyrinth of Maya
     */
    "MayaRiddle": {
        "title": "The Riddle of Appearance",
        "description": "Solve Maya's riddle about the nature of illusion and reality.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "PhilosophicalRiddle",
            "riddle": "I create the appearance of many from the reality of one. I am neither true nor false, neither existent nor non-existent. Those who call me 'mere illusion' do not understand my power. Those who take me as ultimate reality remain bound. What am I, truly?",
            "correctAnswer": "You are the creative power of Brahman itself, neither separate from reality nor identical with ultimate truth. You are real as an experience but not as an independent existence.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Maya is not simply falsehood; it has its own kind of reality.",
            "Consider the relationship between the wave and the ocean.",
            "Maya is not opposed to Brahman but is its expression."
        ],
        "rewards": {
            "insight": "Maya is not other than Brahman, yet creates the appearance of otherness. When understood, it is no longer an obstacle but a revelation.",
            "ability": "Clear Seeing - ability to perceive both the relative and absolute nature of reality simultaneously"
        },
        "completed": false
    },

    /**
     * The Labyrinth of Maya Puzzle
     * A complex puzzle representing the player's own attachments and illusions
     */
    "LabyrinthOfMaya": {
        "title": "The Shifting Paths of Illusion",
        "description": "Navigate the Labyrinth of Maya, where your own attachments and illusions manifest as paths and obstacles.",
        "difficulty": "Hard",
        "mechanics": {
            "type": "SelfReflectiveNavigation",
            "labyrinthProperties": {
                "description": "A maze that shifts based on the player's attachments and beliefs",
                "nature": "The labyrinth is not a physical space but a mental construct that reflects the player's own mind",
                "challenges": [
                    "Paths shift when not directly observed",
                    "Obstacles represent the player's own fears and attachments",
                    "Solutions require recognizing and releasing specific attachments"
                ]
            },
            "mirrors": [
                {
                    "name": "Mirror of Action",
                    "description": "Reflects scenes from the player's journey through Dharmapura",
                    "challenge": "Recognize which past action was based on the deepest illusion of separateness",
                    "insight": "All actions arise from the illusion of being a separate doer",
                    "resolution": "Recognizing that the doer is itself a thought arising in awareness",
                    "puzzleId": "KarmaReflection"
                },
                {
                    "name": "Mirror of Devotion",
                    "description": "Reflects scenes from the player's journey through Svarga",
                    "challenge": "Recognize the ultimate truth about the relationship between worshipper and worshipped",
                    "insight": "Devotion creates a relationship that maintains duality",
                    "resolution": "Recognizing that the worshipper and the worshipped are ultimately one",
                    "puzzleId": "DevotionTranscendence"
                },
                {
                    "name": "Mirror of Self",
                    "description": "Reflects aspects of the player's own consciousness",
                    "challenge": "Identify which reflection represents the true Self (Atman)",
                    "insight": "What you call 'yourself' is a process, not an entity",
                    "resolution": "Recognizing that the true Self is not in any reflection but is the awareness observing all reflections",
                    "puzzleId": "SelfInquiry"
                }
            ],
            "convergencePoint": {
                "name": "The Heart of Maya",
                "description": "A chamber where the figure of Maya poses a riddle",
                "riddle": "I create the appearance of many from the reality of one. I am neither true nor false, neither existent nor non-existent. Those who call me 'mere illusion' do not understand my power. Those who take me as ultimate reality remain bound. What am I, truly?",
                "correctAnswer": "The creative power of Brahman itself, neither separate from reality nor identical with ultimate truth. Real as an experience but not as an independent existence.",
                "insight": "Maya is not other than Brahman, yet creates the appearance of otherness. When understood, it is no longer an obstacle but a revelation.",
                "puzzleId": "MayaRiddle"
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "The labyrinth is not trying to trap you but to reveal your own assumptions and attachments.",
            "When a path seems to vanish, question what belief or expectation made you think it should remain.",
            "Your strongest convictions may be your greatest obstacles; your deepest doubts may be doorways.",
            "The way out is not forward or backward, but through—through the recognition of what is already true."
        ],
        "rewards": {
            "insight": "The mind that created the labyrinth is the same mind that navigates it",
            "ability": "Maya-Darshana - the ability to see through illusions while still appreciating their beauty"
        },
        "completed": false
    },

    /**
     * Non-Duality Realization Puzzle
     * A philosophical puzzle from the School of Radical Non-Duality
     */
    "NonDualityRealization": {
        "title": "The Illusion of Separation",
        "description": "Recognize the illusory nature of the distinction between subject and object.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "PhilosophicalInquiry",
            "question": "If there is truly no separation between observer and observed, between self and world, then what is it that seeks enlightenment, and what is there to be found?",
            "correctAnswer": "The seeker is the sought; the very search creates the illusion of separation from what is already the case.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "The question contains a hidden assumption.",
            "Consider what happens when the seeker turns attention back upon itself.",
            "The search for enlightenment presupposes that it is elsewhere."
        ],
        "rewards": {
            "insight": "Enlightenment is not an achievement but a recognition",
            "ability": "Non-Dual Awareness - direct perception of unity underlying apparent diversity",
            "items": ["Non-Duality Crystal"]
        },
        "completed": false
    },

    /**
     * Logical Paradox Puzzle
     * A philosophical puzzle from the School of Logical Deconstruction
     */
    "LogicalParadox": {
        "title": "The Limits of Thought",
        "description": "Apply logical analysis to reveal the inherent contradictions in the concept of spiritual seeking.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "LogicalAnalysis",
            "question": "Apply logical analysis to the concept of the 'self' that seeks enlightenment. What contradiction do you discover?",
            "correctAnswer": "If the self is unenlightened, it cannot cause its own enlightenment, as it lacks what it seeks. If the self already contains enlightenment, then it is already enlightened and there is nothing to seek. Either way, the concept of an unenlightened self seeking enlightenment is logically incoherent.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Apply the principle of causality to the seeker and the sought.",
            "Consider the qualifications necessary for a cause to produce its effect.",
            "Examine the logical relationship between the starting point and the goal."
        ],
        "rewards": {
            "insight": "True understanding cannot be reached through conceptual thinking alone—it requires a direct recognition that transcends the limitations of logic",
            "ability": "Paradox Navigation - comfort with logical contradictions as pointers to transcendent truth",
            "items": ["Logic Puzzle Box"]
        },
        "completed": false
    },

    /**
     * Paradox Resolution Puzzle
     * A philosophical puzzle from the School of Experiential Paradox
     */
    "ParadoxResolution": {
        "title": "The Experience Beyond Thought",
        "description": "Transcend conceptual understanding through direct experience of paradox.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "ExperientialParadox",
            "question": "What lies beyond the opposites of existence and non-existence, self and other, knowing and not-knowing?",
            "correctResponse": "Instead of answering verbally, simply rest in the awareness that contains all paradoxes without needing to resolve them.",
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "The answer is not conceptual but experiential.",
            "Notice the awareness in which all opposites appear.",
            "The resolution of paradox is found in the space between thoughts."
        ],
        "rewards": {
            "insight": "The resolution of paradox is found in recognizing the awareness that contains all opposites without being limited by them",
            "ability": "Paradoxical Wisdom - ability to hold contradictory truths simultaneously",
            "items": ["Paradox Mirror"]
        },
        "completed": false
    },

    /**
     * Upanishadic Riddles Puzzle
     * A complex puzzle representing the three philosophical schools at the Asura University
     */
    "UpanishadicRiddles": {
        "title": "The Three Schools of Wisdom",
        "description": "Master the philosophical challenges presented by the three schools of the Asura University of Prajna.",
        "difficulty": "Very Hard",
        "mechanics": {
            "type": "PhilosophicalInquiry",
            "schools": [
                {
                    "name": "School of Radical Non-Duality",
                    "description": "Investigates the ultimate truth that all apparent distinctions are constructs of thought",
                    "teachingMethod": "Guided contemplations to reveal the illusory nature of separation",
                    "centralQuestion": "If there is truly no separation between observer and observed, between self and world, then what is it that seeks enlightenment, and what is there to be found?",
                    "correctResponse": "The seeker is the sought; the very search creates the illusion of separation from what is already the case.",
                    "insight": "Enlightenment is not an achievement but a recognition.",
                    "reward": "Non-Duality Crystal - Reveals the underlying unity of all phenomena",
                    "puzzleId": "NonDualityRealization"
                },
                {
                    "name": "School of Logical Deconstruction",
                    "description": "Uses rigorous analysis to reveal the inherent contradictions in all conceptual thinking",
                    "teachingMethod": "Logical analyses designed to reveal the limitations of conceptual thinking",
                    "centralQuestion": "Apply logical analysis to the concept of the 'self' that seeks enlightenment. What contradiction do you discover?",
                    "correctResponse": "If the self is unenlightened, it cannot cause its own enlightenment, as it lacks what it seeks. If the self already contains enlightenment, then it is already enlightened and there is nothing to seek. Either way, the concept of an unenlightened self seeking enlightenment is logically incoherent.",
                    "insight": "True understanding cannot be reached through conceptual thinking alone—it requires a direct recognition that transcends the limitations of logic.",
                    "reward": "Logic Puzzle Box - Contains nothing, yet solving it reveals everything",
                    "puzzleId": "LogicalParadox"
                },
                {
                    "name": "School of Experiential Paradox",
                    "description": "Transcends intellectual understanding through direct experience of paradox",
                    "teachingMethod": "Immersion in paradoxical experiences until the mind surrenders its need for conceptual resolution",
                    "centralQuestion": "What lies beyond the opposites of existence and non-existence, self and other, knowing and not-knowing?",
                    "correctResponse": "Instead of answering verbally, simply rest in the awareness that contains all paradoxes without needing to resolve them.",
                    "insight": "The resolution of paradox is found in recognizing the awareness that contains all opposites without being limited by them.",
                    "reward": "Paradox Mirror - Shows completely different scenes from different angles",
                    "puzzleId": "ParadoxResolution"
                }
            ],
            "completion": {
                "requirement": "Master all three schools to gain a complete understanding",
                "synthesis": "Each offers a different path to the same truth: that ultimate reality transcends all conceptual understanding while being immediately present in every experience.",
                "finalInsight": "The three approaches—non-dual recognition, logical deconstruction, and paradoxical experience—are complementary facets of the same truth."
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Each school offers a different approach to the same ultimate truth.",
            "The limitations of one school are addressed by the strengths of another.",
            "The final understanding integrates all three perspectives.",
            "Your own Nakshatra may give you a natural affinity with one particular approach."
        ],
        "rewards": {
            "insight": "Ultimate truth can be approached through multiple paths, each revealing different aspects of the same reality",
            "ability": "Philosophical Integration - ability to see the unity underlying diverse spiritual approaches",
            "items": ["Asura Wisdom Trident"]
        },
        "completed": false
    },

    /**
     * Final Riddle Puzzle
     * The ultimate philosophical challenge about suffering and the Self
     */
    "FinalRiddle": {
        "title": "The Riddle of the Self",
        "description": "Answer the ultimate question about the nature of suffering and the Self to achieve moksha.",
        "difficulty": "Transcendent",
        "mechanics": {
            "type": "UltimateInquiry",
            "setting": {
                "description": "A perfectly circular chamber with walls, floor, and ceiling made of a material that seems both perfectly reflective and infinitely deep",
                "centralElement": "A reflection of the player's own Jiva (embodied individual self)",
                "atmosphere": "A sense of timelessness and profound significance"
            },
            "riddle": "If, as the sages claim, the Atman is one with the universal Brahman, from whence comes the illusion of my suffering?",
            "answers": {
                "devaGana": {
                    "Ashwini": "The illusion of suffering is a sickness of perception. It comes from a wound that separates the Self from the Whole.",
                    "Mrigashira": "It comes from the act of seeking. The moment the Self seeks Brahman, it creates a distance to be crossed.",
                    "Punarvasu": "It is a memory of a forgotten wholeness. Like a vessel that remembers the rain, the soul remembers its source.",
                    "Pushya": "It comes from a lack of nourishment. The individual soul, when not fed by the light of Brahman, feels an ache.",
                    "Hasta": "It is a phantom created by the hand of Maya. The illusion arises because the Self mistakes the tools of creation for the Creator.",
                    "Swati": "It is like a single gust of wind that believes it is separate from the sky. The illusion comes from mistaking movement for identity.",
                    "Anuradha": "It comes from a lack of devotion. The illusion of 'my' suffering arises when the heart does not see every act as an offering to the One.",
                    "Shravana": "It comes from listening to the voice of the ego instead of the echo of the cosmos. The illusion is noise.",
                    "Revati": "It is the suffering of a single fish that believes it is separate from the ocean. The illusion comes from the boundary of the skin."
                },
                "manushyaGana": {
                    "Bharani": "The illusion of suffering is the womb from which the new Self is born. It comes from the necessary death of the ego.",
                    "Rohini": "It is the seed of desire, planted by Prakriti. The illusion grows because the Self identifies with the flowering plant of worldly experience.",
                    "Ardra": "It is a teardrop of Rudra, a storm of divine feeling. The illusion of suffering is real because the pain is real.",
                    "PurvaPhalguni": "It comes from seeking enjoyment in the reflection, not the source. The illusion is believing the joy from the world is your own.",
                    "UttaraPhalguni": "It is the pain of a sacred pact forgotten. The soul makes a pact with Maya to experience individuality.",
                    "PurvaAshadha": "It is an unconquerable challenge that invigorates the soul. The illusion of suffering is a divine adversary.",
                    "UttaraAshadha": "It comes from mistaking a lesser dharma for the ultimate Dharma. The illusion of 'my' suffering is the soul's attachment to worldly duties.",
                    "PurvaBhadrapada": "It comes from the fire of aspiration. The soul, like a flame, always reaches upward.",
                    "UttaraBhadrapada": "It is the ripple from a single stone dropped into the calm, deep ocean of Brahman. The illusion of suffering is real, but temporary."
                },
                "rakshasaGana": {
                    "Krittika": "There is no 'whence.' The question itself is the illusion. To ask for the origin of suffering is to affirm its reality.",
                    "Ashlesha": "It is a self-inflicted poison. The ego, the serpent of 'I', bites its own tail and calls the venom 'suffering.'",
                    "Magha": "It is the inheritance of our ancestors, the karmic echo of every soul that has ever believed itself to be separate.",
                    "Chitra": "It is a flaw in the design of perception. The illusion of suffering is a beautiful, intricate, but ultimately false jewel created by the senses.",
                    "Vishakha": "It comes from the ambition of the part to comprehend the whole. The illusion of suffering is the consequence of a limited perspective.",
                    "Jyeshtha": "It is a challenge from a fallen king—the ego. The illusion of suffering is the ego's claim to sovereignty over your consciousness.",
                    "Mula": "You are looking for a root that does not exist. The illusion of suffering has no source. It is the absence of knowledge.",
                    "Dhanishtha": "It is the silence between the notes of a divine song. The illusion of suffering is not a thing in itself, but the perceived absence of bliss.",
                    "Shatabhisha": "It is the ailment of the one who believes they are a single drop, not the ocean. The illusion of suffering requires a healer, but there is nothing to heal."
                }
            },
            "resolution": {
                "description": "As you complete your answer, your reflection begins to merge with you. The boundaries between observer and observed dissolve.",
                "experience": "A profound shift in perception—not a new piece of knowledge, but a fundamental transformation in the knower.",
                "realization": "What you have been calling 'yourself' was never separate from the universal consciousness. The illusion of separation dissolves, and with it, the root of all suffering."
            },
            "finalChoice": {
                "options": [
                    {
                        "name": "Complete Merger with Brahman",
                        "description": "Dissolve your individual story into the cosmic ocean of consciousness",
                        "outcome": "Transcendence of individual existence"
                    },
                    {
                        "name": "Remain as a Jivanmukta",
                        "description": "Continue to participate in creation while knowing its ultimate nature",
                        "outcome": "Liberation within embodied existence"
                    }
                ],
                "nature": "This choice is not made from desire or fear, but from the spontaneous expression of your true nature"
            },
            "attempts": 0,
            "maxAttempts": null // Unlimited attempts
        },
        "hints": [
            "Your Nakshatra's inherent nature will guide you to your unique answer.",
            "There is no single correct answer, but your answer must be a perfect expression of your Nakshatra's wisdom.",
            "The answer is not intellectual but experiential—it must come from your deepest understanding.",
            "Consider how your journey through all three acts has prepared you for this moment."
        ],
        "rewards": {
            "insight": "The ultimate nature of reality is beyond all concepts yet immediately present in every experience",
            "ability": "Liberation (Moksha) - freedom from the cycle of suffering",
            "achievement": "Moksha"
        },
        "completed": false
    }
};

/**
 * Helper functions for puzzle management
 */
export const puzzleUtils = {
    /**
     * Initialize a puzzle for a player
     * @param {string} puzzleId - The ID of the puzzle to initialize
     * @param {object} playerState - The current state of the player
     * @returns {object} Updated player state with initialized puzzle
     */
    initializePuzzle: function(puzzleId, playerState) {
        if (!playerState.puzzles) {
            playerState.puzzles = {};
        }
        
        if (!playerState.puzzles[puzzleId]) {
            playerState.puzzles[puzzleId] = {
                active: true,
                started: true,
                completed: false,
                currentStage: 1,
                attempts: 0,
                progress: {}
            };
        }
        
        return playerState;
    },
    
    /**
     * Record an attempt at solving a puzzle
     * @param {string} puzzleId - The ID of the puzzle being attempted
     * @param {object} playerState - The current state of the player
     * @param {boolean} successful - Whether the attempt was successful
     * @returns {object} Updated player state with attempt recorded
     */
    recordAttempt: function(puzzleId, playerState, successful) {
        // Initialize if needed
        playerState = this.initializePuzzle(puzzleId, playerState);
        
        // Increment attempts
        playerState.puzzles[puzzleId].attempts++;
        
        // Record success if applicable
        if (successful) {
            playerState.puzzles[puzzleId].completed = true;
            playerState = this.grantRewards(puzzleId, playerState);
        }
        
        return playerState;
    },
    
    /**
     * Advance a puzzle to the next stage
     * @param {string} puzzleId - The ID of the puzzle to advance
     * @param {object} playerState - The current state of the player
     * @returns {object} Updated player state with advanced puzzle stage
     */
    advancePuzzleStage: function(puzzleId, playerState) {
        // Initialize if needed
        playerState = this.initializePuzzle(puzzleId, playerState);
        
        // Advance stage
        playerState.puzzles[puzzleId].currentStage++;
        
        return playerState;
    },
    
    /**
     * Check if a player has completed a puzzle
     * @param {string} puzzleId - The ID of the puzzle to check
     * @param {object} playerState - The current state of the player
     * @returns {boolean} Whether the puzzle is completed
     */
    isPuzzleCompleted: function(puzzleId, playerState) {
        if (!playerState.puzzles || !playerState.puzzles[puzzleId]) {
            return false;
        }
        
        return playerState.puzzles[puzzleId].completed;
    },
    
    /**
     * Grant rewards for completing a puzzle
     * @param {string} puzzleId - The ID of the completed puzzle
     * @param {object} playerState - The current state of the player
     * @returns {object} Updated player state with rewards granted
     */
    grantRewards: function(puzzleId, playerState) {
        const puzzle = puzzles[puzzleId];
        if (!puzzle || !puzzle.rewards) {
            return playerState;
        }
        
        const rewards = puzzle.rewards;
        
        // Initialize rewards structure if needed
        if (!playerState.rewards) {
            playerState.rewards = {
                items: [],
                abilities: [],
                knowledge: [],
                insights: [],
                achievements: []
            };
        }
        
        // Apply item rewards
        if (rewards.item) {
            playerState.rewards.items.push(rewards.item);
            
            // Set specific item flags
            if (rewards.item === "Banyan Leaf Talisman") {
                playerState.has_banyan_talisman = true;
            }
            if (rewards.item === "Resonance Bell") {
                playerState.has_resonance_bell = true;
            }
            if (rewards.item === "Asura Wisdom Trident") {
                playerState.has_wisdom_trident = true;
            }
        }
        
        // Apply multiple items
        if (rewards.items) {
            playerState.rewards.items = [
                ...playerState.rewards.items,
                ...rewards.items
            ];
            
            // Set specific item flags
            if (rewards.items.includes("Non-Duality Crystal")) {
                playerState.has_nonduality_crystal = true;
            }
            if (rewards.items.includes("Logic Puzzle Box")) {
                playerState.has_logic_puzzle = true;
            }
            if (rewards.items.includes("Paradox Mirror")) {
                playerState.has_paradox_mirror = true;
            }
        }
        
        // Apply ability rewards
        if (rewards.abilities) {
            playerState.rewards.abilities = [
                ...playerState.rewards.abilities,
                ...rewards.abilities
            ];
        }
        
        // Apply single ability reward
        if (rewards.ability) {
            playerState.rewards.abilities.push(rewards.ability);
        }
        
        // Apply knowledge rewards
        if (rewards.knowledge) {
            playerState.rewards.knowledge.push(rewards.knowledge);
        }
        
        // Apply insight reward
        if (rewards.insight) {
            playerState.rewards.insights.push(rewards.insight);
        }
        
        // Apply achievement rewards
        if (rewards.achievement) {
            playerState.rewards.achievements.push(rewards.achievement);
            
            // Set specific achievement flags
            if (rewards.achievement === "Moksha") {
                playerState.achieved_moksha = true;
            }
        }
        
        // Apply specific access rewards
        if (rewards.access) {
            playerState[`access_${rewards.access.toLowerCase().replace(/\s+/g, '_')}`] = true;
        }
        
        return playerState;
    }
};