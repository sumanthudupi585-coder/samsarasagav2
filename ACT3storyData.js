/**
 * @file ACT3storyData.js
 * @description This file contains the narrative graph for Act III of Samsara Saga: The Path of Knowledge (Jnana Marga).
 * @version 1.0.0
 * @license MIT
 *
 * -- GAME DESIGN FEATURES --
 * 1.  **Netherworld Setting:** Transitions from the celestial realm to Patala, the beautiful and profound netherworld.
 * 2.  **Knowledge & Self-Inquiry:** Focuses on jnana (knowledge), self-inquiry, and understanding the nature of reality.
 * 3.  **Philosophical Dialogues:** Features complex dialogues with Nagas and Asuras that test the player's understanding.
 * 4.  **The Labyrinth of Maya:** A shifting maze representing the player's own attachments and illusions.
 * 5.  **Upanishadic Riddles:** Incorporates profound philosophical riddles based on Vedantic concepts.
 * 6.  **Nakshatra Paths:** Provides unique paths for all 27 Nakshatras to solve the final riddle.
 * 7.  **Asura Philosophy:** Explores alternative philosophical perspectives that challenge orthodox views.
 * 8.  **The Final Riddle:** Culminates in the ultimate question about the nature of suffering and the Self.
 */

export const storyData = {

    // --- ACT III: THE PATH OF KNOWLEDGE (JNANA MARGA) ---

    "JOURNEY_TO_PATALA": {
        "title": "Descent",
        "text": "Having mastered the path of devotion in Svarga, your soul now descends toward Patala, the profound netherworld of wisdom. As you descend, the celestial light fades, replaced by a subtle luminescence emanating from precious gems embedded in ancient stone. Your consciousness deepens, preparing for the final stage of your spiritual journey—the path of knowledge.",
        "choices": [
            { "text": "Embrace the descent...", "nextScene": "ARRIVAL_IN_PATALA" }
        ]
    },

    "ARRIVAL_IN_PATALA": {
        "title": "The Realm of Profound Beauty",
        "text": "You arrive in Patala, a realm of stunning, otherworldly beauty. Contrary to mortal misconceptions, this is no hellish domain but a place of profound wisdom. Vast caverns stretch before you, their walls studded with self-luminous gems that cast a serene glow across underground lakes of perfect stillness. The air carries the scent of ancient stone and rare incense. In the distance, you see the glittering spires of Bhogavati, the capital city of the Nagas.",
        "choices": [
            { "text": "Journey toward Bhogavati...", "nextScene": "BHOGAVATI_APPROACH" }
        ]
    },

    "BHOGAVATI_APPROACH": {
        "title": "The Serpent City",
        "text": "As you approach Bhogavati, you're struck by its architectural perfection. The city is built from polished obsidian and luminous crystal, with spiraling towers that seem to defy physical laws. Naga guards—beings with human torsos and serpentine lower bodies—regard you with ancient eyes full of wisdom and caution. They seem to have been expecting you.",
        "choices": [
            { "text": "Present yourself to the guards.", "nextScene": "NAGA_GUARDS" }
        ]
    },

    "NAGA_GUARDS": {
        "title": "Guardians of Wisdom",
        "text": "&quot;A soul from the upper realms,&quot; observes the lead guard, his scales shimmering with an iridescent glow. &quot;You have passed through the realms of action and devotion to reach us. But here in Patala, neither deeds nor devotion will suffice. Only true understanding will guide your path. King Vasuki awaits you in the Hall of Echoing Thought.&quot;",
        "questStatus": "The Nature of the Self - Active",
        "choices": [
            { "text": "Follow the guards to King Vasuki.", "nextScene": "VASUKI_COURT" }
        ]
    },

    "VASUKI_COURT": {
        "title": "The Hall of Echoing Thought",
        "text": "The Hall of Echoing Thought is a vast chamber where every whisper returns not as a simple echo but transformed into a deeper question. King Vasuki, the great serpent king, coils upon a throne of polished black stone. His eyes hold the wisdom of eons. &quot;Welcome, seeker,&quot; he says, his voice resonating with multiple harmonics. &quot;You stand at the threshold of the final path—Jnana Marga, the way of knowledge. To complete your journey, you must penetrate the illusion of separateness and realize the true nature of the Self.&quot;",
        "interactions": [
            { "verb": "Ask about", "noun": "The Path of Knowledge", "scene": "ASK_ABOUT_JNANA" },
            { "verb": "Inquire about", "noun": "The Final Liberation", "scene": "INQUIRE_LIBERATION" },
            { "verb": "Request", "noun": "Guidance for the Journey", "scene": "REQUEST_GUIDANCE" }
        ]
    },

    "ASK_ABOUT_JNANA": {
        "title": "The Way of Knowledge",
        "text": "&quot;Jnana,&quot; Vasuki explains, &quot;is not mere information or intellectual understanding. It is direct perception of reality as it truly is, beyond the veils of maya—illusion. In the realm of karma, you learned that action shapes destiny. In the realm of bhakti, you learned that love transcends action. Now, in the realm of jnana, you will learn that knowledge transcends both action and devotion, for it reveals the ultimate truth: the non-dual nature of existence.&quot; His eyes narrow as he studies you. &quot;But such knowledge cannot be given—it must be realized through your own inquiry.&quot;",
        "choices": [
            { "text": "&quot;How do I begin this inquiry?&quot;", "nextScene": "BEGIN_INQUIRY" },
            { "text": "Return to the previous topics.", "nextScene": "VASUKI_COURT" }
        ]
    },

    "BEGIN_INQUIRY": {
        "title": "The First Question",
        "text": "&quot;Begin with the fundamental question,&quot; Vasuki says. &quot;Who are you? Not your name, not your form, not your history or achievements. Who is the 'I' that experiences all these things?&quot; As he speaks, the chamber seems to shift subtly, as if reality itself responds to the question. &quot;Your journey has three stages: First, you must navigate the Labyrinth of Maya, where your own attachments and illusions will manifest as paths and obstacles. Then, you must study at the Asura University of Prajna, where conventional wisdom is challenged. Finally, you must face the Chamber of the Final Riddle, where the ultimate question awaits.&quot;",
        "choices": [
            { "text": "&quot;I am ready to begin.&quot;", "nextScene": "JOURNEY_BEGINS" },
            { "text": "Return to the previous topics.", "nextScene": "VASUKI_COURT" }
        ]
    },

    "INQUIRE_LIBERATION": {
        "title": "Moksha: The Final Freedom",
        "text": "&quot;Moksha,&quot; Vasuki says, his voice dropping to a reverent tone, &quot;is not a place or a state to be achieved. It is the recognition of what has always been true—that the individual soul (Atman) and the universal consciousness (Brahman) are one and the same. The sense of separation is the fundamental illusion.&quot; He uncoils slightly, his massive form shifting. &quot;When this is not merely understood intellectually but directly experienced, the cycle of samsara ends. Not because you escape it, but because you recognize that you were never truly bound by it in the first place.&quot;",
        "choices": [
            { "text": "&quot;How will I know when I've achieved this recognition?&quot;", "nextScene": "SIGNS_OF_LIBERATION" },
            { "text": "Return to the previous topics.", "nextScene": "VASUKI_COURT" }
        ]
    },

    "SIGNS_OF_LIBERATION": {
        "title": "The Recognition of Truth",
        "text": "&quot;When the question of 'who am I?' dissolves because the questioner and the answer are recognized as one,&quot; Vasuki explains, &quot;when joy and sorrow are seen as waves on the same ocean, when time itself is perceived as a construct rather than a constraint—these are the signs. But do not seek the signs, for that seeking itself reinforces the illusion of a separate seeker. Instead, question every assumption, especially the assumption that you are a limited being seeking an unlimited state.&quot;",
        "choices": [
            { "text": "&quot;I understand. I am ready to begin.&quot;", "nextScene": "JOURNEY_BEGINS" },
            { "text": "Return to the previous topics.", "nextScene": "VASUKI_COURT" }
        ]
    },

    "REQUEST_GUIDANCE": {
        "title": "The Path Ahead",
        "text": "&quot;I will provide you with a guide,&quot; Vasuki says, gesturing with a graceful movement. A female Naga approaches, her scales shimmering with a subtle blue light. &quot;This is Ananta, a scholar of the ancient wisdom. She will accompany you to the entrance of the Labyrinth of Maya. Beyond that, your path must be walked alone, for each soul's illusions are unique to them.&quot; Ananta bows respectfully. &quot;Remember,&quot; Vasuki continues, &quot;in Patala, things are rarely what they seem. The greatest obstacles will be your own preconceptions. The most profound truths may appear as paradoxes or even as their opposites.&quot;",
        "choices": [
            { "text": "Thank Vasuki and depart with Ananta.", "nextScene": "JOURNEY_BEGINS" }
        ]
    },

    "JOURNEY_BEGINS": {
        "title": "The Path of Self-Inquiry",
        "text": "With Ananta as your guide, you leave the Hall of Echoing Thought. As you walk through the streets of Bhogavati, she explains more about your journey. &quot;The Labyrinth of Maya is not a fixed place but a manifestation of your own mind. It will challenge your attachments and assumptions. The Asura University will challenge your understanding of cosmic order. And the Final Chamber... well, no guide can prepare you for that. It is different for each seeker.&quot;",
        "choices": [
            { "text": "Journey to the Labyrinth of Maya.", "nextScene": "LABYRINTH_ENTRANCE" }
        ]
    },

    "LABYRINTH_ENTRANCE": {
        "title": "The Veil of Illusion",
        "text": "You arrive at what appears to be a simple archway carved into a cavern wall. Despite its unassuming appearance, the space beyond the arch seems to shift and waver, as if reality itself is uncertain there. &quot;This is where I must leave you,&quot; Ananta says. &quot;The Labyrinth will manifest differently for each seeker, reflecting their own attachments and illusions. Remember: what you perceive as obstacles are actually opportunities for insight. Question everything, especially your own certainties.&quot;",
        "choices": [
            { "text": "Step through the archway alone.", "nextScene": "ENTER_LABYRINTH" }
        ]
    },

    "ENTER_LABYRINTH": {
        "title": "The Shifting Paths",
        "text": "As you step through the archway, the world transforms. You find yourself in a maze of corridors that seem to be made of light and shadow rather than physical matter. The paths shift subtly when you're not looking directly at them. You sense that this labyrinth is not testing your ability to navigate physical space, but your ability to recognize the nature of reality itself. Three paths lie before you, each seeming to represent a different aspect of your journey so far.",
        "interactions": [
            { "verb": "Take", "noun": "The Path of Action", "scene": "PATH_OF_ACTION" },
            { "verb": "Take", "noun": "The Path of Devotion", "scene": "PATH_OF_DEVOTION" },
            { "verb": "Take", "noun": "The Path of Reflection", "scene": "PATH_OF_REFLECTION" }
        ]
    },

    "PATH_OF_ACTION": {
        "title": "Karma's Echo",
        "text": "You choose the path that pulses with dynamic energy. As you walk, scenes from your journey through Dharmapura materialize around you—the challenges you faced, the choices you made, the karma you generated. But something is different now. You can see how each action arose from certain assumptions about yourself and the world. You realize that while actions have consequences, the actor—the sense of 'I' that claims ownership of actions—is itself a construct, a product of identification with the body and mind.",
        "puzzle": {
            "puzzleId": "KarmaReflection",
            "description": "Before you stands a mirror that reflects not your physical form but the consequences of your actions in Dharmapura. To proceed, you must recognize which of your past actions was based on the deepest illusion of separateness.",
            "solutions": [
                {
                    "text": "Recognize that all actions arise from the illusion of being a separate doer.",
                    "successScene": "KARMA_INSIGHT"
                }
            ],
            "defaultFailure": {
                "text": "The mirror clouds over. You sense that you're still identifying too strongly with being the 'doer' of actions.",
                "nextScene": "ENTER_LABYRINTH"
            }
        }
    },

    "KARMA_INSIGHT": {
        "title": "Beyond the Doer",
        "text": "As you recognize that the sense of being a separate 'doer' is itself an illusion, the mirror dissolves. You understand now that karma binds only those who identify with their actions. When this identification dissolves, action continues, but it arises spontaneously from the whole rather than from a separate self. This insight creates a shift in your perception. The labyrinth path ahead seems clearer now, leading toward a chamber where multiple paths converge.",
        "choices": [
            { "text": "Proceed to the convergence chamber.", "nextScene": "CONVERGENCE_CHAMBER" }
        ]
    },

    "PATH_OF_DEVOTION": {
        "title": "Bhakti's Reflection",
        "text": "You choose the path that glows with warm, devotional light. As you walk, scenes from your journey through Svarga materialize—the divine beings you encountered, the devotion you offered, the harmony you helped restore. But now you see something deeper: how devotion creates a relationship between worshipper and worshipped, maintaining the very duality it seeks to transcend. You realize that while devotion opens the heart, true knowledge dissolves the distinction between devotee and deity.",
        "puzzle": {
            "puzzleId": "DevotionTranscendence",
            "description": "Before you floats a divine form that shifts between different deities you encountered in Svarga. To proceed, you must recognize the ultimate truth about the relationship between worshipper and worshipped.",
            "solutions": [
                {
                    "text": "Recognize that the worshipper and the worshipped are ultimately one.",
                    "successScene": "BHAKTI_INSIGHT"
                }
            ],
            "defaultFailure": {
                "text": "The divine form becomes distant and unapproachable. You sense that you're still perceiving devotion through the lens of duality.",
                "nextScene": "ENTER_LABYRINTH"
            }
        }
    },

    "BHAKTI_INSIGHT": {
        "title": "Beyond Separation",
        "text": "As you recognize that the worshipper and the worshipped are ultimately expressions of the same consciousness, the divine form merges with you. You understand now that devotion is a beautiful path that eventually transcends itself—the love between devotee and deity ultimately reveals their non-dual nature. This insight creates a shift in your perception. The labyrinth path ahead seems clearer now, leading toward a chamber where multiple paths converge.",
        "choices": [
            { "text": "Proceed to the convergence chamber.", "nextScene": "CONVERGENCE_CHAMBER" }
        ]
    },

    "PATH_OF_REFLECTION": {
        "title": "The Mirror of Self",
        "text": "You choose the path that seems to reflect your own awareness back to you. As you walk, you encounter not external scenes but aspects of your own consciousness—your thoughts, emotions, beliefs, and the sense of 'I' that has persisted throughout your journey. You begin to observe how this sense of self is constructed moment by moment through identification with perceptions, sensations, and thoughts. You realize that what you've been calling 'yourself' is actually a process, not an entity.",
        "puzzle": {
            "puzzleId": "SelfInquiry",
            "description": "Before you stands a series of mirrors, each reflecting a different aspect of what you've considered to be 'yourself.' To proceed, you must identify which reflection represents the true Self (Atman).",
            "solutions": [
                {
                    "text": "Recognize that the true Self is not in any reflection but is the awareness observing all reflections.",
                    "successScene": "SELF_INSIGHT"
                }
            ],
            "defaultFailure": {
                "text": "The mirrors multiply endlessly, creating a disorienting hall of reflections. You sense that you're still identifying with an object of awareness rather than awareness itself.",
                "nextScene": "ENTER_LABYRINTH"
            }
        }
    },

    "SELF_INSIGHT": {
        "title": "The Witness Consciousness",
        "text": "As you recognize that the true Self is not any object of perception but the awareness in which all perceptions arise, the mirrors dissolve. You understand now that you are not the body, mind, or any identifiable entity, but the consciousness that knows all these things. This insight creates a shift in your perception. The labyrinth path ahead seems clearer now, leading toward a chamber where multiple paths converge.",
        "choices": [
            { "text": "Proceed to the convergence chamber.", "nextScene": "CONVERGENCE_CHAMBER" }
        ]
    },

    "CONVERGENCE_CHAMBER": {
        "title": "The Heart of Maya",
        "text": "The paths converge in a circular chamber whose walls seem to be made of pure light. In the center stands a figure that shifts between forms—sometimes appearing as yourself, sometimes as beings you've encountered on your journey, sometimes as formless radiance. &quot;I am Maya,&quot; the figure says, its voice both within and around you. &quot;Not merely illusion, as I am often misunderstood, but the creative power that gives rise to the appearance of multiplicity. To proceed beyond me, you must answer my riddle.&quot;",
        "choices": [
            { "text": "&quot;I am ready for your riddle.&quot;", "nextScene": "MAYA_RIDDLE" }
        ]
    },

    "MAYA_RIDDLE": {
        "title": "The Riddle of Appearance",
        "text": "The figure of Maya speaks: &quot;I create the appearance of many from the reality of one. I am neither true nor false, neither existent nor non-existent. Those who call me 'mere illusion' do not understand my power. Those who take me as ultimate reality remain bound. What am I, truly?&quot;",
        "puzzle": {
            "puzzleId": "MayaRiddle",
            "description": "To solve Maya's riddle, you must provide an answer that acknowledges both Maya's power to create appearances and its ultimate non-separation from Brahman.",
            "solutions": [
                {
                    "text": "&quot;You are the creative power of Brahman itself, neither separate from reality nor identical with ultimate truth. You are real as an experience but not as an independent existence.&quot;",
                    "successScene": "MAYA_TRANSCENDED"
                }
            ],
            "defaultFailure": {
                "text": "&quot;Your answer reflects a partial understanding,&quot; Maya says. &quot;Contemplate further the nature of appearance and reality.&quot;",
                "nextScene": "MAYA_RIDDLE"
            }
        }
    },

    "MAYA_TRANSCENDED": {
        "title": "Beyond the Veil",
        "text": "&quot;Well answered,&quot; the figure says, its form becoming increasingly transparent. &quot;I am not other than Brahman, yet I create the appearance of otherness. I am the power by which the One appears as many. When I am understood, I am no longer an obstacle but a revelation.&quot; The figure dissolves into light, and the chamber walls fade away. You find yourself standing at the exit of the Labyrinth, facing an imposing structure carved into the living rock of Patala—the Asura University of Prajna.",
        "choices": [
            { "text": "Approach the Asura University.", "nextScene": "ASURA_UNIVERSITY" }
        ]
    },

    "ASURA_UNIVERSITY": {
        "title": "The Halls of Radical Wisdom",
        "text": "The Asura University of Prajna is a vast complex of lecture halls, libraries, and debate chambers carved directly into a massive stalactite that hangs from the cavern ceiling. Unlike the celestial architecture of Svarga, which emphasizes harmony and beauty, this structure celebrates complexity and challenging perspectives. Asuras—beings of great intelligence and power—move purposefully through the halls, engaged in intense philosophical discussions. At the entrance, a tall, austere Asura awaits you.",
        "choices": [
            { "text": "Greet the Asura.", "nextScene": "ASURA_GREETING" }
        ]
    },

    "ASURA_GREETING": {
        "title": "The Philosophical Guardian",
        "text": "&quot;I am Shukracharya, preceptor of the Asuras and guardian of knowledge that challenges conventional wisdom,&quot; the figure announces. His eyes hold both brilliance and a hint of defiance. &quot;In Svarga, you learned the orthodox view of reality. Here, we question everything, especially what the Devas hold as self-evident. Are you prepared to have your understanding challenged to its core?&quot;",
        "choices": [
            { "text": "&quot;I seek truth, whatever form it takes.&quot;", "nextScene": "UNIVERSITY_ENTRANCE" },
            { "text": "&quot;Why do the Asuras question the wisdom of the Devas?&quot;", "nextScene": "ASURA_PHILOSOPHY" }
        ]
    },

    "ASURA_PHILOSOPHY": {
        "title": "The Counterpoint Perspective",
        "text": "&quot;The Devas,&quot; Shukracharya explains with a subtle smile, &quot;mistake their perspective for ultimate truth. They see order and harmony as inherently superior to chaos and challenge. But consider: without questioning, how can wisdom deepen? Without challenge, how can understanding be tested?&quot; He gestures to the university behind him. &quot;We Asuras value knowledge gained through rigorous inquiry, not accepted on authority. The Devas call this pride; we call it intellectual integrity. Both perspectives are necessary for the cosmos—theirs to preserve, ours to transform.&quot;",
        "choices": [
            { "text": "&quot;I understand. I am ready to enter the university.&quot;", "nextScene": "UNIVERSITY_ENTRANCE" }
        ]
    },

    "UNIVERSITY_ENTRANCE": {
        "title": "The Threshold of Inquiry",
        "text": "&quot;Before you enter,&quot; Shukracharya says, &quot;you must choose which of our three principal schools of thought you wish to study first. Each represents a different approach to challenging conventional understanding.&quot; He gestures to three ornate doorways. &quot;The School of Radical Non-Duality questions the very distinction between self and other. The School of Logical Deconstruction dismantles all concepts through rigorous analysis. The School of Experiential Paradox uses direct experience to transcend intellectual understanding.&quot;",
        "interactions": [
            { "verb": "Enter", "noun": "School of Radical Non-Duality", "scene": "SCHOOL_NONDUALITY" },
            { "verb": "Enter", "noun": "School of Logical Deconstruction", "scene": "SCHOOL_LOGIC" },
            { "verb": "Enter", "noun": "School of Experiential Paradox", "scene": "SCHOOL_PARADOX" }
        ]
    },

    "SCHOOL_NONDUALITY": {
        "title": "Beyond All Distinctions",
        "text": "You enter a circular hall where Asura philosophers sit in deep meditation. The leader, a serene figure with penetrating eyes, acknowledges your presence. &quot;Welcome to the School of Radical Non-Duality. Here, we investigate the ultimate truth that all apparent distinctions—self and other, knower and known, seeker and sought—are constructs of thought rather than fundamental reality. Our central teaching is simple yet profound: There is only One without a second, appearing as many through the power of Maya.&quot;",
        "choices": [
            { "text": "Participate in the teaching session.", "nextScene": "NONDUALITY_TEACHING" }
        ]
    },

    "NONDUALITY_TEACHING": {
        "title": "The Illusion of Separation",
        "text": "The teacher guides you through a series of contemplations designed to reveal the illusory nature of separation. &quot;Consider your experience right now,&quot; he instructs. &quot;There appears to be a 'you' experiencing 'this teaching.' But look closely—where exactly is the boundary between the knower and the known? Between the listener and the words being heard? Between awareness and its contents?&quot; As you contemplate, you begin to sense how the distinction between subject and object is not discovered in experience but imposed upon it by thought.",
        "puzzle": {
            "puzzleId": "NonDualityRealization",
            "description": "The teacher presents you with a profound question: &quot;If there is truly no separation between observer and observed, between self and world, then what is it that seeks enlightenment, and what is there to be found?&quot;",
            "solutions": [
                {
                    "text": "&quot;The seeker is the sought; the very search creates the illusion of separation from what is already the case.&quot;",
                    "successScene": "NONDUALITY_INSIGHT"
                }
            ],
            "defaultFailure": {
                "text": "&quot;Your answer still assumes a fundamental duality,&quot; the teacher observes. &quot;Contemplate further.&quot;",
                "nextScene": "NONDUALITY_TEACHING"
            }
        }
    },

    "NONDUALITY_INSIGHT": {
        "title": "The End of Seeking",
        "text": "&quot;Precisely,&quot; the teacher says, his eyes reflecting recognition. &quot;The search for enlightenment presupposes that it is something to be attained by someone, somewhere other than here and now. But non-duality reveals that the very notion of a separate self that could attain anything is the fundamental illusion. What is sought is not absent but overlooked because it is too close—it is the very awareness in which all experience appears.&quot; He presents you with a simple crystal that seems to contain both everything and nothing. &quot;Take this as a reminder of what cannot be forgotten but only apparently overlooked.&quot;",
        "choices": [
            { "text": "Accept the crystal and return to the university entrance.", "nextScene": "UNIVERSITY_ENTRANCE", "worldStateTriggers": { "has_nonduality_crystal": true } }
        ]
    },

    "SCHOOL_LOGIC": {
        "title": "The Dismantling of Concepts",
        "text": "You enter a hall filled with Asura logicians engaged in intense debate. The leader, a sharp-featured figure with precise gestures, turns to you. &quot;Welcome to the School of Logical Deconstruction. Here, we use rigorous analysis to reveal the inherent contradictions in all conceptual thinking. Our method is to take any concept—self, time, causality, existence—and demonstrate that when examined closely, it collapses under its own weight. True understanding begins when conceptual thinking reaches its limits.&quot;",
        "choices": [
            { "text": "Participate in the logical exercise.", "nextScene": "LOGIC_EXERCISE" }
        ]
    },

    "LOGIC_EXERCISE": {
        "title": "The Limits of Thought",
        "text": "The teacher leads you through a series of logical analyses designed to reveal the limitations of conceptual thinking. &quot;Consider the concept of causality,&quot; he suggests. &quot;We say A causes B. But what is this 'causation'? Is it a thing? A process? If A truly causes B, then A must contain B potentially, in which case B already exists in some form before it is caused. But if B already exists in some form, then A doesn't truly cause it to exist. Yet if B doesn't exist in any form within A, then how does A specifically give rise to B rather than to C or D?&quot;",
        "puzzle": {
            "puzzleId": "LogicalParadox",
            "description": "The teacher challenges you: &quot;Apply this same logical analysis to the concept of the 'self' that seeks enlightenment. What contradiction do you discover?&quot;",
            "solutions": [
                {
                    "text": "&quot;If the self is unenlightened, it cannot cause its own enlightenment, as it lacks what it seeks. If the self already contains enlightenment, then it is already enlightened and there is nothing to seek. Either way, the concept of an unenlightened self seeking enlightenment is logically incoherent.&quot;",
                    "successScene": "LOGIC_INSIGHT"
                }
            ],
            "defaultFailure": {
                "text": "&quot;Your analysis still contains unexamined assumptions,&quot; the teacher notes. &quot;Probe deeper into the contradiction.&quot;",
                "nextScene": "LOGIC_EXERCISE"
            }
        }
    },

    "LOGIC_INSIGHT": {
        "title": "Beyond Conceptual Understanding",
        "text": "&quot;Excellent analysis,&quot; the teacher says with approval. &quot;You've identified the fundamental paradox of spiritual seeking: the very concept of an unenlightened self seeking enlightenment is logically incoherent. This is why true understanding cannot be reached through conceptual thinking alone—it requires a direct recognition that transcends the limitations of logic while acknowledging its value in clearing away false assumptions.&quot; He presents you with a small, intricately carved puzzle box. &quot;This box contains nothing, yet solving it reveals everything. Take it as a reminder that the ultimate answer lies beyond both assertion and denial.&quot;",
        "choices": [
            { "text": "Accept the puzzle box and return to the university entrance.", "nextScene": "UNIVERSITY_ENTRANCE", "worldStateTriggers": { "has_logic_puzzle": true } }
        ]
    },

    "SCHOOL_PARADOX": {
        "title": "The Unity of Opposites",
        "text": "You enter a strange hall where physical laws seem to operate differently in different areas. The leader, an enigmatic figure whose appearance seems to shift subtly, greets you. &quot;Welcome to the School of Experiential Paradox. Here, we transcend intellectual understanding through direct experience of paradox—states where apparent opposites are revealed as unified. Our method is not to explain paradox but to immerse you in it until the mind surrenders its need for conceptual resolution.&quot;",
        "choices": [
            { "text": "Participate in the paradox exercise.", "nextScene": "PARADOX_EXERCISE" }
        ]
    },

    "PARADOX_EXERCISE": {
        "title": "The Experience Beyond Thought",
        "text": "The teacher guides you to a circular platform in the center of the hall. &quot;Stand here and simply observe,&quot; he instructs. As you do, your perception begins to shift dramatically. You simultaneously experience yourself as infinitely small and infinitely vast. Time appears to flow both forward and backward. You feel both completely empty and absolutely full. These are not sequential experiences but simultaneous—paradoxes experienced directly rather than contemplated intellectually.",
        "puzzle": {
            "puzzleId": "ParadoxResolution",
            "description": "As your mind struggles to reconcile these paradoxical experiences, the teacher asks: &quot;What lies beyond the opposites of existence and non-existence, self and other, knowing and not-knowing?&quot;",
            "solutions": [
                {
                    "text": "Instead of answering verbally, simply rest in the awareness that contains all paradoxes without needing to resolve them.",
                    "successScene": "PARADOX_INSIGHT"
                }
            ],
            "defaultFailure": {
                "text": "&quot;You're still trying to resolve the paradox conceptually,&quot; the teacher observes. &quot;Let go of that attempt and simply be with the experience.&quot;",
                "nextScene": "PARADOX_EXERCISE"
            }
        }
    },

    "PARADOX_INSIGHT": {
        "title": "The Wisdom of Not-Knowing",
        "text": "The teacher smiles as you rest in silent awareness. &quot;You've understood the essential teaching. The resolution of paradox is not found in choosing one side or creating a synthesis, but in recognizing the awareness that contains all opposites without being limited by them. This 'not-knowing' is not ignorance but a higher wisdom that transcends the limitations of conceptual knowledge.&quot; He presents you with a small mirror that, when viewed from different angles, shows completely different scenes. &quot;Take this as a reminder that perspective determines perception, yet awareness transcends all perspectives.&quot;",
        "choices": [
            { "text": "Accept the mirror and return to the university entrance.", "nextScene": "UNIVERSITY_ENTRANCE", "worldStateTriggers": { "has_paradox_mirror": true } }
        ]
    },

    "UNIVERSITY_COMPLETION": {
        "title": "The Synthesis of Understanding",
        "text": "As you return to the university's central hall, Shukracharya awaits you. &quot;You have studied our three approaches to wisdom,&quot; he observes. &quot;Each offers a different path to the same truth: that ultimate reality transcends all conceptual understanding while being immediately present in every experience.&quot; He studies you carefully. &quot;You are now prepared for the final stage of your journey—the Chamber of the Final Riddle. There, you will face the ultimate question about the nature of suffering and the Self.&quot;",
        "choices": [
            { "text": "&quot;I am ready for the final challenge.&quot;", "nextScene": "FINAL_CHAMBER_APPROACH" }
        ],
        "condition": (state) => (state.has_nonduality_crystal === true && state.has_logic_puzzle === true && state.has_paradox_mirror === true)
    },

    "UNIVERSITY_ENTRANCE_RETURN": {
        "title": "The Threshold of Completion",
        "text": "You return to the university entrance, where Shukracharya observes your progress. &quot;You have not yet completed your studies in all three schools,&quot; he notes. &quot;Each offers an essential perspective that will prepare you for the final challenge. I encourage you to explore the remaining teachings before proceeding to the Chamber of the Final Riddle.&quot;",
        "interactions": [
            { "verb": "Enter", "noun": "School of Radical Non-Duality", "scene": "SCHOOL_NONDUALITY", "condition": (state) => state.has_nonduality_crystal !== true },
            { "verb": "Enter", "noun": "School of Logical Deconstruction", "scene": "SCHOOL_LOGIC", "condition": (state) => state.has_logic_puzzle !== true },
            { "verb": "Enter", "noun": "School of Experiential Paradox", "scene": "SCHOOL_PARADOX", "condition": (state) => state.has_paradox_mirror !== true },
            { "verb": "Proceed to", "noun": "Final Chamber", "scene": "UNIVERSITY_COMPLETION", "condition": (state) => (state.has_nonduality_crystal === true && state.has_logic_puzzle === true && state.has_paradox_mirror === true) }
        ]
    },

    "FINAL_CHAMBER_APPROACH": {
        "title": "The Path to Ultimate Truth",
        "text": "Shukracharya leads you through a series of descending passages, deeper into the heart of Patala. &quot;The Chamber of the Final Riddle exists at the very core of this realm,&quot; he explains. &quot;It is said to be the still point around which all of Patala is organized—a place where the veil between appearance and reality is at its thinnest.&quot; As you descend, the passages become increasingly simple and austere, as if all ornamentation and complexity are being stripped away.",
        "choices": [
            { "text": "Continue the descent.", "nextScene": "FINAL_CHAMBER_ENTRANCE" }
        ]
    },

    "FINAL_CHAMBER_ENTRANCE": {
        "title": "The Threshold of Revelation",
        "text": "You arrive at a simple doorway carved into the living rock. Unlike the elaborate architecture you've encountered throughout your journey, this entrance is marked only by a single symbol—a circle containing a dot. &quot;This is where I leave you,&quot; Shukracharya says. &quot;Beyond this point, each seeker must proceed alone. The Chamber contains nothing but a perfect, reflective surface. There, you will meet your own Jiva—your embodied, individual self—and face the Final Riddle. How you answer will determine whether you achieve moksha or continue in the cycle of samsara.&quot;",
        "choices": [
            { "text": "Step through the doorway alone.", "nextScene": "FINAL_CHAMBER" }
        ]
    },

    "FINAL_CHAMBER": {
        "title": "The Chamber of the Final Riddle",
        "text": "You enter a perfectly circular chamber whose walls, floor, and ceiling are made of a material that seems both perfectly reflective and infinitely deep. In the center of the chamber stands a figure—an exact reflection of yourself, yet somehow more fundamental, as if you are looking at the template from which your current form was created. This is your Jiva, the embodied individual self that has persisted through countless lifetimes. It regards you with eyes that hold both question and recognition.",
        "choices": [
            { "text": "Approach your reflection.", "nextScene": "FINAL_RIDDLE" }
        ]
    },

    "FINAL_RIDDLE": {
        "title": "The Riddle of the Self",
        "text": "As you approach, your reflection speaks with your voice, yet it seems to emanate from everywhere in the chamber: &quot;If, as the sages claim, the Atman is one with the universal Brahman, from whence comes the illusion of my suffering?&quot; The question hangs in the air, both profoundly simple and impossibly complex. You sense that your answer must be a perfect expression of your Nakshatra's innate nature and the wisdom you have gained throughout your journey.",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] &quot;The illusion of suffering is a sickness of perception...&quot;", "nextScene": "ANSWER_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Mrigashira] &quot;It comes from the act of seeking...&quot;", "nextScene": "ANSWER_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] &quot;It is a memory of a forgotten wholeness...&quot;", "nextScene": "ANSWER_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] &quot;It comes from a lack of nourishment...&quot;", "nextScene": "ANSWER_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] &quot;It is a phantom created by the hand of Maya...&quot;", "nextScene": "ANSWER_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] &quot;It is like a single gust of wind that believes it is separate from the sky...&quot;", "nextScene": "ANSWER_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Anuradha] &quot;It comes from a lack of devotion...&quot;", "nextScene": "ANSWER_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] &quot;It comes from listening to the voice of the ego...&quot;", "nextScene": "ANSWER_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Revati] &quot;It is the suffering of a single fish that believes it is separate from the ocean...&quot;", "nextScene": "ANSWER_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] &quot;The illusion of suffering is the womb from which the new Self is born...&quot;", "nextScene": "ANSWER_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] &quot;It is the seed of desire, planted by Prakriti...&quot;", "nextScene": "ANSWER_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] &quot;It is a teardrop of Rudra, a storm of divine feeling...&quot;", "nextScene": "ANSWER_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] &quot;It comes from seeking enjoyment in the reflection, not the source...&quot;", "nextScene": "ANSWER_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] &quot;It is the pain of a sacred pact forgotten...&quot;", "nextScene": "ANSWER_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] &quot;It is an unconquerable challenge that invigorates the soul...&quot;", "nextScene": "ANSWER_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] &quot;It comes from mistaking a lesser dharma for the ultimate Dharma...&quot;", "nextScene": "ANSWER_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] &quot;It comes from the fire of aspiration...&quot;", "nextScene": "ANSWER_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] &quot;It is the ripple from a single stone dropped into the calm, deep ocean of Brahman...&quot;", "nextScene": "ANSWER_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] &quot;There is no 'whence.' The question itself is the illusion...&quot;", "nextScene": "ANSWER_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] &quot;It is a self-inflicted poison...&quot;", "nextScene": "ANSWER_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] &quot;It is the inheritance of our ancestors...&quot;", "nextScene": "ANSWER_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] &quot;It is a flaw in the design of perception...&quot;", "nextScene": "ANSWER_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] &quot;It comes from the ambition of the part to comprehend the whole...&quot;", "nextScene": "ANSWER_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] &quot;It is a challenge from a fallen king—the ego...&quot;", "nextScene": "ANSWER_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] &quot;You are looking for a root that does not exist...&quot;", "nextScene": "ANSWER_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] &quot;It is the silence between the notes of a divine song...&quot;", "nextScene": "ANSWER_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] &quot;It is the ailment of the one who believes they are a single drop, not the ocean...&quot;", "nextScene": "ANSWER_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' }
        ]
    },

    // Deva Gana Answers
    "ANSWER_ASHWINI": {
        "title": "The Healer's Insight",
        "text": "&quot;The illusion of suffering is a sickness of perception. It comes from a wound that separates the Self from the Whole. It is healed not by denying the pain, but by applying the balm of unity, making the two one again.&quot; As you speak, your reflection nods in recognition. Your Ashwini nature, with its power to heal quickly, has perceived that suffering is not an entity to be destroyed but a misperception to be corrected—a healing of the fundamental wound of separation.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To heal quickly",
            "gunas": ["Rajas", "Rajas", "Rajas"]
        }
    },

    "ANSWER_MRIGASHIRA": {
        "title": "The Seeker's Realization",
        "text": "&quot;It comes from the act of seeking. The moment the Self seeks Brahman, it creates a distance to be crossed. The illusion ends when the seeker realizes it is, and always has been, standing in the place it seeks.&quot; As you speak, your reflection nods in recognition. Your Mrigashira nature, with its power to find fulfillment, has perceived that the very search for completion creates the illusion of incompleteness, when fulfillment has always been the seeker's true nature.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To find fulfillment",
            "gunas": ["Rajas", "Tamas", "Tamas"]
        }
    },

    "ANSWER_PUNARVASU": {
        "title": "The Restorer's Wisdom",
        "text": "&quot;It is a memory of a forgotten wholeness. Like a vessel that remembers the rain, the soul remembers its source. The illusion is the vessel believing it is separate from the rain it is meant to hold.&quot; As you speak, your reflection nods in recognition. Your Punarvasu nature, with its power to regenerate and recover, has perceived that suffering is not an intrusion but a forgetting of one's true nature—a nature that can be recovered through remembrance.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To regenerate and recover",
            "gunas": ["Rajas", "Sattva", "Rajas"]
        }
    },

    "ANSWER_PUSHYA": {
        "title": "The Nourisher's Understanding",
        "text": "&quot;It comes from a lack of nourishment. The individual soul, when not fed by the light of Brahman, feels an ache. This ache is the illusion of suffering. It is dispelled by the spiritual energy of pure knowing.&quot; As you speak, your reflection nods in recognition. Your Pushya nature, with its power to create spiritual energy, has perceived that suffering is essentially a spiritual hunger—a lack of connection to the nourishing source of all being.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To create spiritual energy",
            "gunas": ["Rajas", "Sattva", "Tamas"]
        }
    },

    "ANSWER_HASTA": {
        "title": "The Craftsman's Perception",
        "text": "&quot;It is a phantom created by the hand of Maya. The illusion arises because the Self mistakes the tools of creation—the mind, the senses—for the Creator. Suffering ends when the hand remembers it is guided by the universal will.&quot; As you speak, your reflection nods in recognition. Your Hasta nature, with its power to manifest desires, has perceived that suffering comes from misidentifying with the instruments of action rather than with the universal consciousness that wields them.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To manifest desires",
            "gunas": ["Tamas", "Tamas", "Rajas"]
        }
    },

    "ANSWER_SWATI": {
        "title": "The Wind's Freedom",
        "text": "&quot;It is like a single gust of wind that believes it is separate from the sky. The illusion comes from mistaking movement for identity. When the wind comes to rest, it does not die; it becomes the sky again.&quot; As you speak, your reflection nods in recognition. Your Swati nature, with its power to scatter like the wind, has perceived that suffering arises from identifying with temporary movements and forms rather than with the boundless space in which all movement occurs.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To scatter like the wind",
            "gunas": ["Tamas", "Tamas", "Sattva"]
        }
    },

    "ANSWER_ANURADHA": {
        "title": "The Devotee's Surrender",
        "text": "&quot;It comes from a lack of devotion. The illusion of 'my' suffering arises when the heart does not see every act, every feeling, as an offering to the One. True worship dissolves the worshipper, leaving only the divine.&quot; As you speak, your reflection nods in recognition. Your Anuradha nature, with its power of worship, has perceived that suffering is essentially a failure of devotion—a holding back of the self from complete surrender to the divine whole.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To worship (Bhakti)",
            "gunas": ["Tamas", "Sattva", "Tamas"]
        }
    },

    "ANSWER_SHRAVANA": {
        "title": "The Listener's Silence",
        "text": "&quot;It comes from listening to the voice of the ego instead of the echo of the cosmos. The illusion is noise. When the Self becomes perfectly silent, it hears its true name, which is Brahman.&quot; As you speak, your reflection nods in recognition. Your Shravana nature, with its power to connect through listening, has perceived that suffering arises from attending to the clamor of the separate self rather than to the subtle harmony of universal consciousness.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To connect",
            "gunas": ["Sattva", "Tamas", "Rajas"]
        }
    },

    "ANSWER_REVATI": {
        "title": "The Transcendent Nourishment",
        "text": "&quot;It is the suffering of a single fish that believes it is separate from the ocean. The illusion comes from the boundary of the skin, the scale. It ends with the nourishing realization that the water outside the fish is the same as the water within.&quot; As you speak, your reflection nods in recognition. Your Revati nature, with its power to nourish and transcend, has perceived that suffering arises from the illusion of boundaries, when in truth the same essence flows within and without.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To nourish and transcend",
            "gunas": ["Sattva", "Sattva", "Sattva"]
        }
    },

    // Manushya Gana Answers
    "ANSWER_BHARANI": {
        "title": "The Purifier's Transformation",
        "text": "&quot;The illusion of suffering is the womb from which the new Self is born. It comes from the necessary death of the ego. The pain is real, but it is the purifying fire that allows the soul to be renewed into the form of Brahman.&quot; As you speak, your reflection nods in recognition. Your Bharani nature, with its power to renew and purify, has perceived that suffering is a transformative process—a necessary dissolution that precedes rebirth into a truer understanding.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To renew and purify",
            "gunas": ["Rajas", "Rajas", "Tamas"]
        }
    },

    "ANSWER_ROHINI": {
        "title": "The Grower's Insight",
        "text": "&quot;It is the seed of desire, planted by Prakriti (nature). The illusion grows because the Self identifies with the beautiful, flowering plant of worldly experience. Suffering ends when the Self realizes it is not the plant, but the soil from which all things grow.&quot; As you speak, your reflection nods in recognition. Your Rohini nature, with its power to make things grow, has perceived that suffering arises from identifying with the products of growth rather than with the fertile ground of being itself.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To make things grow",
            "gunas": ["Rajas", "Tamas", "Rajas"]
        }
    },

    "ANSWER_ARDRA": {
        "title": "The Storm's Clarity",
        "text": "&quot;It is a teardrop of Rudra, a storm of divine feeling. The illusion of suffering is real because the pain is real. It is overcome not by ignoring the storm, but by becoming the eye of the storm—the calm, witnessing center around which all chaos churns.&quot; As you speak, your reflection nods in recognition. Your Ardra nature, with its power to feel and act, has perceived that suffering is not to be denied but transcended by finding the still point within the tempest of experience.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To feel and act",
            "gunas": ["Rajas", "Tamas", "Sattva"]
        }
    },

    "ANSWER_PURVA_PHALGUNI": {
        "title": "The Enjoyer's Realization",
        "text": "&quot;It comes from seeking enjoyment in the reflection, not the source. The illusion is believing the joy from the world is your own. Suffering ends when you find bliss not in possessing, but in being.&quot; As you speak, your reflection nods in recognition. Your Purva Phalguni nature, with its power to find love and enjoyment, has perceived that suffering arises from mistaking reflected joy for its source—from seeking happiness in objects rather than in the consciousness that gives them value.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To find love and enjoyment",
            "gunas": ["Tamas", "Rajas", "Tamas"]
        }
    },

    "ANSWER_UTTARA_PHALGUNI": {
        "title": "The Pact Remembered",
        "text": "&quot;It is the pain of a sacred pact forgotten. The soul, in its quest for security, makes a pact with Maya to experience individuality. The illusion of suffering is the price of that pact. It ends when the soul willingly releases its claim and returns to its source.&quot; As you speak, your reflection nods in recognition. Your Uttara Phalguni nature, with its power to accumulate security, has perceived that suffering is the consequence of a cosmic agreement—a necessary condition for the experience of individuality that can be transcended by conscious surrender.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To accumulate security",
            "gunas": ["Tamas", "Rajas", "Sattva"]
        }
    },

    "ANSWER_PURVA_ASHADHA": {
        "title": "The Invigorator's Challenge",
        "text": "&quot;It is an unconquerable challenge that invigorates the soul. The illusion of suffering is a divine adversary. It exists to be overcome, for in the struggle against it, the Self is strengthened until it is strong enough to realize its own invincibility.&quot; As you speak, your reflection nods in recognition. Your Purva Ashadha nature, with its power to invigorate and strengthen, has perceived that suffering is a cosmic training ground—a resistance that builds the spiritual strength needed for ultimate realization.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To invigorate or strengthen",
            "gunas": ["Sattva", "Rajas", "Tamas"]
        }
    },

    "ANSWER_UTTARA_ASHADHA": {
        "title": "The Highest Path",
        "text": "&quot;It comes from mistaking a lesser dharma for the ultimate Dharma. The illusion of 'my' suffering is the soul's attachment to its worldly duties. It ends when the soul realizes its only true duty is to awaken to its identity as Brahman.&quot; As you speak, your reflection nods in recognition. Your Uttara Ashadha nature, with its power to win for the highest good, has perceived that suffering arises from confusing relative with absolute values—from pursuing limited goods rather than the ultimate good of self-realization.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To win for the highest good",
            "gunas": ["Sattva", "Rajas", "Sattva"]
        }
    },

    "ANSWER_PURVA_BHADRAPADA": {
        "title": "The Elevating Flame",
        "text": "&quot;It comes from the fire of aspiration. The soul, like a flame, always reaches upward. The illusion of suffering is the heat of this intense striving. It is not an obstacle, but the very force that raises the individual consciousness back to the universal.&quot; As you speak, your reflection nods in recognition. Your Purva Bhadrapada nature, with its power to raise a person up, has perceived that suffering is the felt intensity of spiritual evolution—the necessary heat that drives the soul's ascent to higher awareness.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To raise a person up",
            "gunas": ["Sattva", "Sattva", "Rajas"]
        }
    },

    "ANSWER_UTTARA_BHADRAPADA": {
        "title": "The Stabilizer's Perspective",
        "text": "&quot;It is the ripple from a single stone dropped into the calm, deep ocean of Brahman. The illusion of suffering is real, but it is temporary and localized. It ends when the ripples fade, and the surface is once again stable and whole.&quot; As you speak, your reflection nods in recognition. Your Uttara Bhadrapada nature, with its power to bring rain and stability, has perceived that suffering is a temporary disturbance in the eternal stillness of being—a passing wave that returns to the ocean from which it arose.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To bring rain and stability",
            "gunas": ["Sattva", "Sattva", "Tamas"]
        }
    },

    // Rakshasa Gana Answers
    "ANSWER_KRITTIKA": {
        "title": "The Illusion Burned Away",
        "text": "&quot;There is no 'whence.' The question itself is the illusion. To ask for the origin of suffering is to affirm its reality. The final truth is a blade that cuts the question away entirely, leaving only the searing light of Brahman.&quot; As you speak, your reflection nods in recognition. Your Krittika nature, with its power to burn illusion, has perceived that suffering is not merely an illusion but that the very inquiry into its origin perpetuates the fundamental misunderstanding.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To burn illusion",
            "gunas": ["Rajas", "Rajas", "Sattva"]
        }
    },

    "ANSWER_ASHLESHA": {
        "title": "The Serpent's Wisdom",
        "text": "&quot;It is a self-inflicted poison. The ego, the serpent of 'I', bites its own tail and calls the venom 'suffering.' The cure is to realize you are the serpent, and you hold the antidote: the will to let go.&quot; As you speak, your reflection nods in recognition. Your Ashlesha nature, with its power to poison and heal, has perceived that suffering is self-created and self-perpetuated—a toxic cycle that can be broken only by the same consciousness that created it.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To poison and heal",
            "gunas": ["Rajas", "Sattva", "Sattva"]
        }
    },

    "ANSWER_MAGHA": {
        "title": "The Ancestral Burden",
        "text": "&quot;It is the inheritance of our ancestors, the karmic echo of every soul that has ever believed itself to be separate. Suffering is a ghost. It ends when you leave the haunted house of the body and realize you were never truly inside it.&quot; As you speak, your reflection nods in recognition. Your Magha nature, with its power to leave the body, has perceived that suffering is an ancestral pattern—a collective memory of separation that can be transcended by stepping outside the limited identity it assumes.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To leave the body",
            "gunas": ["Tamas", "Rajas", "Rajas"]
        }
    },

    "ANSWER_CHITRA": {
        "title": "The Designer's Insight",
        "text": "&quot;It is a flaw in the design of perception. The illusion of suffering is a beautiful, intricate, but ultimately false jewel created by the senses. True merit is not in possessing the jewel, but in seeing the light that shines through it.&quot; As you speak, your reflection nods in recognition. Your Chitra nature, with its power to accumulate merit, has perceived that suffering is an artifact of perceptual design—a pattern that can be appreciated for its complexity even as it is transcended by seeing the light it obscures.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To accumulate merit",
            "gunas": ["Tamas", "Tamas", "Tamas"]
        }
    },

    "ANSWER_VISHAKHA": {
        "title": "The Multiple Achiever's Vision",
        "text": "&quot;It comes from the ambition of the part to comprehend the whole. The illusion of suffering is the consequence of a limited perspective. It is not dispelled; it is outgrown when the soul's ambition is fulfilled by becoming the cosmos itself.&quot; As you speak, your reflection nods in recognition. Your Vishakha nature, with its power to achieve many things, has perceived that suffering arises from the limited ambition of the separate self—a limitation transcended not by abandoning ambition but by expanding it to cosmic proportions.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To achieve many things",
            "gunas": ["Tamas", "Sattva", "Rajas"]
        }
    },

    "ANSWER_JYESHTHA": {
        "title": "The Conqueror's Throne",
        "text": "&quot;It is a challenge from a fallen king—the ego. The illusion of suffering is the ego's claim to sovereignty over your consciousness. It is conquered when you rise up, claim your throne, and realize you were the true ruler all along.&quot; As you speak, your reflection nods in recognition. Your Jyeshtha nature, with its power to rise and conquer, has perceived that suffering is a usurpation—a false claim to authority that must be overthrown by the recognition of one's true sovereignty as universal consciousness.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To rise and conquer",
            "gunas": ["Tamas", "Sattva", "Sattva"]
        }
    },

    "ANSWER_MULA": {
        "title": "The Root Destroyer",
        "text": "&quot;You are looking for a root that does not exist. The illusion of suffering has no source. It is the absence of knowledge. To destroy it, you do not need to pull a root; you need only to turn on the light.&quot; As you speak, your reflection nods in recognition. Your Mula nature, with its power to ruin or destroy, has perceived that suffering has no substantial existence—it is merely the absence of self-knowledge, dispelled not by struggle but by the simple presence of awareness.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To ruin or destroy",
            "gunas": ["Sattva", "Rajas", "Rajas"]
        }
    },

    "ANSWER_DHANISHTHA": {
        "title": "The Cosmic Symphony",
        "text": "&quot;It is the silence between the notes of a divine song. The illusion of suffering is not a thing in itself, but the perceived absence of bliss. It ends when you realize you are not the listener, but the music itself, and there is no silence.&quot; As you speak, your reflection nods in recognition. Your Dhanishtha nature, with its power to give fame and abundance, has perceived that suffering is not a positive reality but a perceived absence—a silence that dissolves when one recognizes oneself as the unbroken music of existence.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To give fame and abundance",
            "gunas": ["Sattva", "Tamas", "Tamas"]
        }
    },

    "ANSWER_SHATABHISHA": {
        "title": "The Healer of Systems",
        "text": "&quot;It is the ailment of the one who believes they are a single drop, not the ocean. The illusion of suffering requires a healer, but there is nothing to heal. The cure is the realization that there was never a patient to begin with.&quot; As you speak, your reflection nods in recognition. Your Shatabhisha nature, with its power to heal and support, has perceived that suffering is a systemic misidentification—a diagnosis that applies to a non-existent patient, cured by the recognition that the apparent sufferer is itself an appearance within undivided awareness.",
        "choices": [
            { "text": "Complete your answer.", "nextScene": "LIBERATION" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To heal and support",
            "gunas": ["Sattva", "Tamas", "Sattva"]
        }
    },

    "LIBERATION": {
        "title": "The Gates of Moksha",
        "text": "As you complete your answer, your reflection does not vanish. Instead, it smiles in recognition and begins to merge with you. The boundaries between observer and observed, questioner and answerer, seeker and sought, dissolve. You experience a profound shift in perception—not a new piece of knowledge, but a fundamental transformation in the knower. You realize that what you have been calling 'yourself' was never separate from the universal consciousness. The illusion of separation dissolves, and with it, the root of all suffering.",
        "questStatus": "The Nature of the Self - Completed",
        "choices": [
            { "text": "Experience moksha.", "nextScene": "MOKSHA_CHOICE" }
        ]
    },

    "MOKSHA_CHOICE": {
        "title": "The Final Freedom",
        "text": "In this state of liberation, you are granted a choice. You may merge completely with Brahman, dissolving your individual story into the cosmic ocean of consciousness. Or you may remain in the world as a Jivanmukta—a liberated soul who continues to participate in creation while knowing its ultimate nature. This choice is not made from desire or fear, but from the spontaneous expression of your true nature.",
        "choices": [
            { "text": "Merge completely with Brahman.", "nextScene": "COMPLETE_MERGER" },
            { "text": "Remain as a Jivanmukta to guide others.", "nextScene": "JIVANMUKTA_PATH" }
        ]
    },

    "COMPLETE_MERGER": {
        "title": "The Ocean Returns to Itself",
        "text": "You choose complete merger with the infinite. Your individual consciousness, like a drop returning to the ocean, dissolves into the boundless awareness that is Brahman. There is no loss in this dissolution, only the recognition of what has always been true. The story of your journey through the realms of karma, bhakti, and jnana becomes one of countless waves in the cosmic ocean of consciousness, inspiring those still walking the path of samsara.",
        "choices": [
            { "text": "The End... For Now", "nextScene": "GAME_CONCLUSION" }
        ]
    },

    "JIVANMUKTA_PATH": {
        "title": "Liberation Within Creation",
        "text": "You choose to remain as a Jivanmukta—a liberated soul who continues to participate in creation while knowing its ultimate nature. Your presence in the world becomes a living teaching, a bridge between the relative and the absolute. You move through the realms of existence with perfect freedom, no longer bound by karma yet still engaged in the divine play of consciousness. Your actions arise spontaneously from compassion rather than from desire or fear.",
        "choices": [
            { "text": "The End... For Now", "nextScene": "GAME_CONCLUSION" }
        ]
    },

    "GAME_CONCLUSION": {
        "title": "Samsara Saga",
        "text": "Your journey through the three great paths—Karma Marga, Bhakti Marga, and Jnana Marga—is complete. You have mastered action in the earthly realm, devotion in the celestial realm, and knowledge in the depths of Patala. Whether you have chosen complete merger with Brahman or remain as a Jivanmukta, you have achieved the ultimate goal of existence—moksha, liberation from the cycle of samsara. Yet the wheel continues to turn for countless other souls, and the cosmic drama of creation, preservation, and dissolution plays on eternally. Your story becomes part of the great tapestry of consciousness, inspiring others on their own journey through the realms of being.",
        "choices": [
            { "text": "The End", "nextScene": "JOURNEY_TO_PATALA" }
        ]
    }
};