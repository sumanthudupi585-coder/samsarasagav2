/**
 * @file ACT1storyData.js
 * @description This file contains the entire narrative graph for Samsara Saga, redesigned for interactive gameplay.
 * @version 4.0.0
 * @license MIT
 *
 * -- GAME DESIGN REVISIONS --
 * 1.  **Hub-Based Exploration:** Replaced the linear dilemma choice with an interactive "Dharmapura Square" hub. Players can now explore, examine objects, and talk to NPCs to gather clues.
 * 2.  **Active Nakshatra Abilities:** Instead of providing a single solution, a player's Nakshatra now unlocks unique interactions or dialogue options within the hub, empowering the player to discover their path.
 * 3.  **Interactive Puzzles:** Implemented a more detailed puzzle structure. Quest 2 ("The Poisoned River") is now a multi-stage investigation requiring exploration and item use.
 * 4.  **Dynamic World State:** Added more granular scene properties like `interactions` and `worldStateTriggers` to allow the game engine to modify the world based on player actions (e.g., making an NPC angry, purifying a location).
 * 5.  **Puzzle & Item Integration:** Defined a clear structure for puzzles within scenes, including solutions that can require items from the player's inventory.
 * 6.  **Full Nakshatra Integration:** Expanded all quests to include unique, interactive paths for all 27 Nakshatras.
 * 7.  **Nakshatra Attribute Integration:** Incorporated Nakshatra attributes (Gana, Gunas, Shakti) into gameplay mechanics.
 * 8.  **Five Complete Quests:** Expanded the game to include five complete quests with unique paths for all 27 Nakshatras.
 */

export const storyData = {

    // --- ACT I: THE THREE TRIALS OF DHARMAPURA ---

    "JOURNEY_START": {
        "title": "Awakening",
        "text": "Your consciousness coalesces like morning mist over water. The Oracle's words, once a thunderous prophecy, now fade to a quiet echo in your mind, leaving you with a newfound sense of self and a path to walk. You open your eyes, your very nature having chosen the ground upon which you take your first breath: the village of Dharmapura.",
        "choices": [
            { "text": "Enter the village square...", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    // --- QUEST 1: THE ELDER'S DILEMMA ---

    "DHARMAPURA_SQUARE": {
        "title": "Dharmapura Square",
        "text": "The village square is tense. A spiritual malaise hangs in the air, causing minor misfortunes. At the center of the tension is the ancient, semi-petrified Banyan tree. The village Elder and the Priestess are in a heated debate nearby, their factions watching anxiously.",
        "questStatus": "The Elder's Dilemma - Active",
        "interactions": [
            { "verb": "Examine", "noun": "Banyan Tree", "scene": "EXAMINE_BANYAN" },
            { "verb": "Listen to", "noun": "The Debate", "scene": "LISTEN_DEBATE" },
            { "verb": "Talk to", "noun": "The Village Elder", "scene": "TALK_ELDER" },
            { "verb": "Talk to", "noun": "The Priestess", "scene": "TALK_PRIESTESS" },
            { "verb": "Observe", "noun": "The Villagers", "scene": "OBSERVE_VILLAGERS" }
        ]
    },

    "LISTEN_DEBATE": {
        "title": "The Debate",
        "text": "The Elder argues passionately, 'The tree is draining our vitality! Its wood is needed for repairs!' The Priestess counters, her voice firm, 'The tree is a sacred ancestor! To harm it is a grave sin.' She poses a riddle to the crowd: "When the root of tradition and the branch of necessity pull the world apart, where does a soul find its balance?"",
        "choices": [
            { "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    // --- Quest 1: The Elder's Dilemma Interactive Scenes ---
    "EXAMINE_BANYAN": {
        "title": "The Great Banyan",
        "text": "The Banyan is immense, its bark gnarled and almost stone-like. It feels ancient and powerful, yet there's a subtle wrongness to it, a feeling of stagnant energy.",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] Use your healing senses to diagnose the tree.", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] Attempt to commune with the tree's indwelling spirit.", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] Sit and listen to the whispers of the tree's history.", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] Search for hidden patterns in the tree's growth.", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] Examine the tree for signs of regeneration.", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] Channel spiritual energy into the tree's core.", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] Use your skilled hands to feel the tree's texture.", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] Feel the air currents around the tree.", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] Connect with the tree's nourishing essence.", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] Look for signs of death and renewal in the tree.", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] Check if the tree can still grow and flourish.", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] Feel the emotional energy emanating from the tree.", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] Sense if the tree still experiences joy.", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] Assess the tree's structural security.", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] Try to invigorate the tree's energy.", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] Determine what would be the highest good for the tree.", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] Look for ways to elevate the tree's condition.", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] Investigate the ground for blocked waterways.", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] Try to burn away the illusion of what you see.", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] Examine the leaves for a subtle affliction.", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] Meditate at the roots to connect with the ancestral plane.", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] Look for hidden patterns or designs in the tree's structure.", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] Analyze the tree from multiple perspectives simultaneously.", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] Assess if the tree can be conquered or controlled.", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] Search for the 'root' of the problem beneath the tree.", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] Scan the highest branches for something of value.", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] Analyze the tree as part of the village's ecosystem.", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "Step back.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "TALK_ELDER": {
        "title": "The Village Elder",
        "text": "'Traveler, you see our plight,' the Elder says, his face etched with worry. 'Our tools break, our roofs leak. The Banyan's wood could solve our problems, but the Priestess is blind to reason. Will you help me convince her?'",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] 'I can heal both the village and preserve the tree.'", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] 'Let me speak with the tree's spirit first.'", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] 'I will listen to what history tells us about this tree.'", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] 'I'll seek a fulfilling solution for everyone.'", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] 'The village can regenerate without harming the tree.'", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Spiritual energy, not wood, is what you need.'", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] 'My hands can craft a better solution than cutting the tree.'", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] 'The energy here is stagnant. I can disperse it.'", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] 'I can nourish both the village and the tree.'", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] 'This is a cycle of decay. It needs renewal.'", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] 'Let us mediate a compromise.'", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] 'Your sorrow must be channeled into action.'", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] 'What this village lacks is not wood, but joy.'", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'A formal pact might solve this disagreement.'", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] 'I will invigorate the village and win this debate for you.'", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'This is a test of Dharma. Let us win the highest good.'", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] 'I can elevate your village without harming the tree.'", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'I can bring stability without cutting the tree.'", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] 'I will burn away the illusion clouding this issue.'", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] 'I sense a poison that can be both problem and solution.'", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'I will consult the ancestors about this tree.'", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] 'Your building methods are flawed. I can show you a better way.'", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] 'I can solve multiple problems at once.'", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] 'Your leadership has failed. I will solve this myself.'", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'I'll find the root cause of this problem.'", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] 'I can find abundance without cutting the tree.'", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'The village is a system. I will heal it all at once.'", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "'I will consider your words.'", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "TALK_PRIESTESS": {
        "title": "The Priestess",
        "text": "'The Elder sees only with his eyes,' the Priestess whispers, her gaze fixed on the Banyan. 'He cannot feel the tree's spirit, nor the sacrilege he proposes. The malaise is not from the tree, but from our wavering faith. Will you help me restore it?'",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] 'I can heal the tree and solve the village's problems.'", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] 'I will commune with the tree's spirit directly.'", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] 'The tree's history may hold the answer.'", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] 'I'll find a fulfilling path for all involved.'", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] 'Is there a ritual of regeneration that could aid the tree?'", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Perhaps an act of collective faith is what is needed.'", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] 'My hands can manifest a solution that preserves the tree.'", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] 'The energy here is stagnant. It needs to be dispersed.'", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] 'We must nourish the future to honor the past.'", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] 'I can guide a ritual of renewal for the tree.'", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] 'I can help the tree grow despite its condition.'", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] 'The tree's sorrow can be transformed into action.'", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] 'The tree needs joy to revitalize it.'", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'We need a formal agreement to protect the tree.'", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] 'I can strengthen the tree's spiritual presence.'", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'What is the highest good for both tree and village?'", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] 'I can elevate the tree's status in the village.'", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'The tree may be blocking something vital.'", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] 'I can burn away any illusion affecting the tree.'", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] 'The tree may be poisoned, but I can heal it.'", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'I will speak with the ancestors about this tree.'", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] 'I see a pattern in the tree that others miss.'", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] 'I can achieve multiple goals at once with this tree.'", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] 'I will take control of this situation myself.'", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'The root of the problem may lie beneath the tree.'", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] 'The tree may hold untapped abundance.'", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'The village is a system. I will heal it all at once.'", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "'I will think on this.'", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    "OBSERVE_VILLAGERS": {
        "title": "The Onlookers",
        "text": "The villagers are divided. Some nod along with the Elder's practical concerns, while others cast reverent glances at the tree, supporting the Priestess. A general feeling of frustration and helplessness pervades the crowd.",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] 'I can heal the division in this village.'", "nextScene": "BANYAN_SOLUTION_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] 'Your devotion to both sides is admirable.'", "nextScene": "BANYAN_SOLUTION_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] 'Let me listen to all your stories about the tree.'", "nextScene": "BANYAN_SOLUTION_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] 'There must be a third option they are not seeing.'", "nextScene": "BANYAN_SOLUTION_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] 'This village can recover without harming the tree.'", "nextScene": "BANYAN_SOLUTION_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Your collective faith can solve this problem.'", "nextScene": "BANYAN_SOLUTION_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] 'I can show you how to manifest what you need.'", "nextScene": "BANYAN_SOLUTION_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] 'The energy here is stagnant. It needs to be dispersed.'", "nextScene": "BANYAN_SOLUTION_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] 'I can nourish both your traditions and your needs.'", "nextScene": "BANYAN_SOLUTION_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] 'This is a cycle of decay. It needs to be renewed.'", "nextScene": "BANYAN_SOLUTION_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] 'I can help your village grow despite these challenges.'", "nextScene": "BANYAN_SOLUTION_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] 'Their sorrow must be channeled into action.'", "nextScene": "BANYAN_SOLUTION_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] 'What this village lacks is not wood, but joy.'", "nextScene": "BANYAN_SOLUTION_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'You need security, not just solutions.'", "nextScene": "BANYAN_SOLUTION_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] 'I can strengthen your community's spirit.'", "nextScene": "BANYAN_SOLUTION_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'What is the highest good for your village?'", "nextScene": "BANYAN_SOLUTION_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] 'Someone is being ignored. I will find them.'", "nextScene": "BANYAN_SOLUTION_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'I can bring stability to your village.'", "nextScene": "BANYAN_SOLUTION_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] 'The illusion of conflict can be burned away.'", "nextScene": "BANYAN_SOLUTION_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] 'This conflict is like a poison in your midst.'", "nextScene": "BANYAN_SOLUTION_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'What would your ancestors say about this tree?'", "nextScene": "BANYAN_SOLUTION_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] 'I see a pattern in your conflict that you don't.'", "nextScene": "BANYAN_SOLUTION_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] 'They are focused on one problem. I will solve them all.'", "nextScene": "BANYAN_SOLUTION_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] 'This village needs stronger leadership.'", "nextScene": "BANYAN_SOLUTION_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'The root of your conflict lies deeper than the tree.'", "nextScene": "BANYAN_SOLUTION_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] 'There is untapped abundance in your village.'", "nextScene": "BANYAN_SOLUTION_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'Your village is a system that needs healing.'", "nextScene": "BANYAN_SOLUTION_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "Return to the square.", "nextScene": "DHARMAPURA_SQUARE" }
        ]
    },

    // --- Quest 1 Solution Scenes (Full 27 Paths) ---
    "BANYAN_SOLUTION_ASHWINI": { 
        "title": "A Healer's Insight", 
        "text": "Your healing senses confirm your suspicion: the Banyan is sick. A quest to the Whispering Dandaka Forest to find rare ingredients for a spiritual poultice could restore its vitality. Your Ashwini nature allows you to quickly diagnose and heal the tree's ailment, demonstrating your power to heal quickly.", 
        "choices": [{ "text": "Accept the quest.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Heal the Tree" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To heal quickly",
            "gunas": ["Rajas", "Rajas", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_BHARANI": { 
        "title": "The Path of Renewal", 
        "text": "You see this not as an end, but a transition. You propose a grand village ceremony where the tree is respectfully felled, its wood used for repairs, and a new sapling consecrated in its place, framing the act as a necessary cycle of renewal. Your Bharani nature allows you to see the beauty in this cycle of death and rebirth.", 
        "choices": [{ "text": "Propose the ceremony.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Ceremony of Renewal" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To renew and purify",
            "gunas": ["Rajas", "Rajas", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_KRITTIKA": { 
        "title": "Burning the Illusion", 
        "text": "You suspect the premise of the debate is flawed. Using your power, you 'burn away' the illusion of age, discovering the tree is not ancient, but a common Banyan afflicted by a mundane disease. This shatters the Priestess's argument, allowing a practical solution without sacrilege. Your Krittika nature allows you to see through illusions with piercing clarity.", 
        "choices": [{ "text": "Reveal the truth.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Revealed the Illusion" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To burn illusion",
            "gunas": ["Rajas", "Rajas", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_ROHINI": { 
        "title": "The Art of Compromise", 
        "text": "Using your natural charm, you propose a town council meeting. You can guide the Elder and Priestess to a compromise: carefully pruning deadwood for repairs in return for a new annual festival honoring the tree, uniting the village. Your Rohini nature allows you to nurture growth in both the community and the tree.", 
        "choices": [{ "text": "Call the council meeting.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Brokered a Compromise" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To make things grow",
            "gunas": ["Rajas", "Tamas", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_MRIGASHIRA": { 
        "title": "The Seeker's Path", 
        "text": "Convinced a third option must exist, your seeking nature leads you to a hidden path behind the village waterfall. It opens into a forgotten quarry of resilient stone—a far better building material that makes the Elder's argument moot. Your Mrigashira nature allows you to find fulfillment through discovery.", 
        "choices": [{ "text": "Reveal the quarry.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Found the Quarry" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To find fulfillment",
            "gunas": ["Rajas", "Tamas", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_ARDRA": { 
        "title": "Tears to Action", 
        "text": "You channel the village's collective sorrow and frustration. You deliver a passionate speech, arguing their internal conflict is the true source of the malaise, inspiring a community project to perform all repairs through collective effort, uniting the factions through shared work. Your Ardra nature allows you to transform emotion into decisive action.", 
        "choices": [{ "text": "Inspire the villagers.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Inspired Community Action" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To feel and act",
            "gunas": ["Rajas", "Tamas", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_PUNARVASU": { 
        "title": "The Gift of Regeneration", 
        "text": "You learn a ritual of regeneration from the Priestess. By performing it at the Banyan's roots, you don't just heal it; you cause it to gift a perfectly formed, supernaturally strong fallen branch to the village—enough for the most critical repairs without harming the tree. Your Punarvasu nature allows you to regenerate and recover what seemed lost.", 
        "choices": [{ "text": "Perform the ritual.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Ritual of Regeneration" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To regenerate and recover",
            "gunas": ["Rajas", "Sattva", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_PUSHYA": { 
        "title": "Nourishment of Faith", 
        "text": "Your solution is purely spiritual. You lead the villagers in a day-long chant and offering at the tree's base. This act of collective worship creates such a surge of positive energy that it purifies the village, proving that faith itself is a resource. Your Pushya nature allows you to create spiritual energy that sustains the physical world.", 
        "choices": [{ "text": "Lead the chant.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Act of Collective Faith" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To create spiritual energy",
            "gunas": ["Rajas", "Sattva", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_ASHLESHA": { 
        "title": "Serpentine Wit", 
        "text": "You use your cunning. You secretly apply a non-lethal poison to the tree's leaves that makes them emit a foul smell. You then 'discover' this affliction, framing it as a divine omen. This allows you to propose felling the 'cursed' tree, satisfying the Elder's needs with a spiritual justification the Priestess can accept. Your Ashlesha nature allows you to use poison as both problem and solution.", 
        "choices": [{ "text": "Enact your plan.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "A Deceptive Omen" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To poison and heal",
            "gunas": ["Rajas", "Sattva", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_MAGHA": { 
        "title": "Ancestral Testimony", 
        "text": "You meditate at the Banyan's roots, sending your consciousness into the 'ancestral plane.' You speak with the spirit of the village founder, who tells you the tree's true purpose. You return with this undeniable testimony, which supersedes both the Elder's and Priestess's opinions. Your Magha nature allows you to transcend the physical and commune with ancestors.", 
        "choices": [{ "text": "Share the ancestor's words.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Received Ancestral Guidance" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To leave the body",
            "gunas": ["Tamas", "Rajas", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_PURVA_PHALGUNI": { 
        "title": "The Cure of Joy", 
        "text": "You argue the village's problem is a lack of joy, not wood. You organize a village festival at the base of the tree with music and dance. The resulting outpouring of positive emotion is so strong that it revitalizes both the tree and the village. Your Purva Phalguni nature allows you to find love and enjoyment even in difficult situations.", 
        "choices": [{ "text": "Organize the festival.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Festival of Joy" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To find love and enjoyment",
            "gunas": ["Tamas", "Rajas", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_UTTARA_PHALGUNI": { 
        "title": "The Binding Pact", 
        "text": "You forge a pact. You get the Elder and the Priestess to sign a formal agreement, witnessed by the council. The pact specifies exactly which branches can be pruned and outlines new rituals the village must perform, turning a vague disagreement into a binding social contract. Your Uttara Phalguni nature allows you to create security through formal agreements.", 
        "choices": [{ "text": "Draft the agreement.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Forged a Pact" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To accumulate security",
            "gunas": ["Tamas", "Rajas", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_HASTA": { 
        "title": "The Crafter's Hand", 
        "text": "You agree with the Elder's need for repairs but offer a different path. You use your skills to organize the villagers, showing them how to make better bricks from local clay and thatch stronger roofs from river reeds, fixing the community's problems so effectively that the Banyan's wood is no longer needed. Your Hasta nature allows you to manifest desires through skilled craftsmanship.", 
        "choices": [{ "text": "Teach new crafting methods.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Innovated with Crafts" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To manifest desires",
            "gunas": ["Tamas", "Tamas", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_CHITRA": { 
        "title": "A Flaw in the System", 
        "text": "You realize the village's building techniques are inefficient. You teach the villagers a superior method of construction (like joinery or better brick-making), allowing them to complete all repairs using only a fraction of the available wood, rendering the debate pointless. Your Chitra nature allows you to see patterns and designs that others miss.", 
        "choices": [{ "text": "Demonstrate superior techniques.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Systemic Improvement" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To accumulate merit",
            "gunas": ["Tamas", "Tamas", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_SWATI": { 
        "title": "Scattered Like the Wind", 
        "text": "You realize the malaise isn't from the tree, but from stagnant spiritual energy. You craft a series of blessed chimes and place them at key points, allowing the wind to carry their song and disperse the negative energy, cleansing the village. Your Swati nature allows you to scatter and disperse energy like the wind.", 
        "choices": [{ "text": "Craft and place the chimes.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Dispersed Stagnation" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To scatter like the wind",
            "gunas": ["Tamas", "Tamas", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_VISHAKHA": { 
        "title": "Achieving Many Goals", 
        "text": "You decide that solving the village's malaise is your primary goal. This allows you to simultaneously pursue multiple solutions—searching for herbs, mediating, and investigating the tree—achieving a swift and decisive victory through sheer force of ambition. Your Vishakha nature allows you to achieve many goals at once.", 
        "choices": [{ "text": "Begin your multi-pronged effort.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Multi-pronged Victory" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To achieve many things",
            "gunas": ["Tamas", "Sattva", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_ANURADHA": { 
        "title": "The Worshipful Heart", 
        "text": "You speak directly to the dryad dwelling within the Banyan. It reveals it is not the cause of the malaise, but is also suffering from it. It asks you to perform a specific ritual of devotion to give it the strength to fight off the negativity, saving both itself and the village. Your Anuradha nature allows you to connect through devotion and worship.", 
        "choices": [{ "text": "Perform the requested ritual.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Aided the Dryad" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To worship (Bhakti)",
            "gunas": ["Tamas", "Sattva", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_JYESHTHA": { 
        "title": "The Right to Conquer", 
        "text": "You see the council's indecision as a failure of leadership. You challenge both the Elder and the Priestess, declaring you will solve the problem yourself. By completing a difficult solo quest (like slaying a beast in the nearby forest), you earn enough authority to impose your own solution on the grateful village. Your Jyeshtha nature allows you to rise and conquer challenges.", 
        "choices": [{ "text": "Declare your intent to lead.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Seized Leadership" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To rise and conquer",
            "gunas": ["Tamas", "Sattva", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_MULA": { 
        "title": "The Root of the Problem", 
        "text": "You feel an unnatural coldness beneath the soil. Your intuition screams that the true problem lies buried beneath the tree's roots. Excavating the area could reveal a cursed object, and destroying it would heal both the tree and the village instantly. Your Mula nature allows you to find and destroy the root cause of problems.", 
        "choices": [{ "text": "Begin digging.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Destroy the Cursed Object" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To ruin or destroy",
            "gunas": ["Sattva", "Rajas", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_PURVA_ASHADHA": { 
        "title": "Invigorating Spirit", 
        "text": "You declare your intent to find a solution. This invigorates your spirit, unlocking a temporary ability to win a major debate. You can then choose to side with either the Elder or Priestess and argue their point so convincingly that you unite the village behind that single vision. Your Purva Ashadha nature allows you to invigorate and strengthen any cause you champion.", 
        "choices": [{ "text": "Declare your chosen side.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Won the Debate" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To invigorate or strengthen",
            "gunas": ["Sattva", "Rajas", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_UTTARA_ASHADHA": { 
        "title": "The Highest Good", 
        "text": "You call a public debate and make a 'Dharmic Declaration' that transcends the immediate problem. You argue that the tree is a test of their dharma, and by working together to find a non-destructive solution, they will earn a greater cosmic boon than any amount of wood could provide. Your Uttara Ashadha nature allows you to identify and pursue the highest good.", 
        "choices": [{ "text": "Make your declaration.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Declared a Higher Path" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To win for the highest good",
            "gunas": ["Sattva", "Rajas", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_SHRAVANA": { 
        "title": "The Whispering Past", 
        "text": "You sit beneath the tree and listen. Your power allows you to hear the whispers of the village's history. You learn that the village's founding charter, buried long ago at the tree's roots, grants the villagers special rights they were unaware of, solving a deeper problem than just the need for wood. Your Shravana nature allows you to connect with hidden knowledge through listening.", 
        "choices": [{ "text": "Reveal the lost charter.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Uncovered the Charter" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To connect",
            "gunas": ["Sattva", "Tamas", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_DHANISHTHA": { 
        "title": "The Gift of Abundance", 
        "text": "You learn that a rare, beautiful flower blooms on the Banyan's highest branches. You undertake a perilous climb to retrieve one. A traveling merchant offers the village a great sum for more of the flowers—a price high enough to fund all their repairs and more, making the tree more valuable alive than dead. Your Dhanishtha nature allows you to find abundance and prosperity.", 
        "choices": [{ "text": "Climb the tree.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Found Abundance" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To give fame and abundance",
            "gunas": ["Sattva", "Tamas", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_SHATABHISHA": { 
        "title": "The Hundred Medicines", 
        "text": "Your healing ability is holistic. You realize the village and the tree are a single symbiotic system. You create 100 small offerings and have the villagers place them throughout the area. This large-scale healing ritual cures the spiritual malaise at a systemic level, restoring harmony to the entire ecosystem. Your Shatabhisha nature allows you to heal and support entire systems at once.", 
        "choices": [{ "text": "Begin the systemic healing.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Systemic Healing" } }],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To heal and support",
            "gunas": ["Sattva", "Tamas", "Sattva"]
        }
    },
    
    "BANYAN_SOLUTION_PURVA_BHADRAPADA": { 
        "title": "The Voice of the Ignored", 
        "text": "You find a disenfranchised woodcutter who feels ignored by both factions. By listening to his practical wisdom and raising his status in the eyes of the council, he reveals a sustainable method to harvest the tree's deadwood without harming its living core. Your Purva Bhadrapada nature allows you to elevate those who have been overlooked.", 
        "choices": [{ "text": "Champion the woodcutter.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Empowered the Woodcutter" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To raise a person up",
            "gunas": ["Sattva", "Sattva", "Rajas"]
        }
    },
    
    "BANYAN_SOLUTION_UTTARA_BHADRAPADA": { 
        "title": "The Hidden Spring", 
        "text": "You discover the tree is not draining the land's vitality, but its deep roots are blocking a subterranean spring. By performing a ritual to slightly shift the roots, you can release the spring, creating a new well for the village. This provides a valuable new resource and heals the tree from below. Your Uttara Bhadrapada nature allows you to bring stability through water.", 
        "choices": [{ "text": "Unblock the spring.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Revealed the Spring" } }],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To bring rain and stability",
            "gunas": ["Sattva", "Sattva", "Tamas"]
        }
    },
    
    "BANYAN_SOLUTION_REVATI": { 
        "title": "The Path of Nourishment", 
        "text": "Your path is to nourish. You find a sapling of the Banyan and, through a special ritual, imbue it with your own spiritual energy. You propose a compromise: the village may take the wood of the old, dying tree, but only after they have collectively planted and consecrated this new sapling, ensuring the village's spiritual lineage continues. Your Revati nature allows you to nourish and transcend limitations.", 
        "choices": [{ "text": "Propose the compromise.", "nextScene": "DILEMMA_RESOLUTION", "worldStateTriggers": { "quest1_solution": "Nourished the Future" } }],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To nourish and transcend",
            "gunas": ["Sattva", "Sattva", "Sattva"]
        }
    },

    "DILEMMA_RESOLUTION": {
        "title": "A Path Forward",
        "text": "Your unique insight has revealed a path to resolve the Elder's Dilemma. The village council agrees to your proposed course of action. As you prepare, a sense of peace begins to return to Dharmapura. The villagers look at you with newfound respect.",
        "questStatus": "The Elder's Dilemma - Completed",
        "choices": [
            { "text": "Prepare for the next trial.", "nextScene": "QUEST_2_START" }
        ]
    },

    // --- QUEST 2: THE POISONED RIVER ---

    "QUEST_2_START": {
        "title": "The Poisoned River",
        "text": "Weeks later, a new crisis emerges. A vital tributary of the Ma Ganga that feeds the village has been corrupted by a spiritual blight. The water is toxic, and the local spirits have become aggressive. The villagers, remembering your wisdom, turn to you for help.",
        "questStatus": "The Poisoned River - Active",
        "choices": [
            { "text": "Go to the riverbank to investigate.", "nextScene": "RIVERBANK" }
        ]
    },

    "RIVERBANK": {
        "title": "Blighted Riverbank",
        "text": "The riverbank is a grim sight. The water flows sluggishly, coated in a sickly, unnatural sheen. The plants along the shore are withered and grey. The air feels heavy with sorrow.",
        "interactions": [
            { "verb": "Examine", "noun": "Water", "scene": "EXAMINE_WATER" },
            { "verb": "Follow", "noun": "River Upstream", "scene": "FOLLOW_UPSTREAM" },
            { "verb": "Speak to", "noun": "Water Spirits", "scene": "SPEAK_WATER_SPIRITS" },
            { "verb": "Analyze", "noun": "Surrounding Plants", "scene": "ANALYZE_PLANTS" }
        ]
    },

    "EXAMINE_WATER": {
        "title": "Tainted Water",
        "text": "You cup some water in your hands. It is unnaturally cold and smells of decay and regret. You notice dark, ethereal tendrils clinging to the stones at the river's bottom. This is not a natural poison; it is a curse.",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] Use healing energy to purify a small sample.", "nextScene": "RIVER_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] Commune with the water's spirit.", "nextScene": "RIVER_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] Listen to the water's story.", "nextScene": "RIVER_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] Search for patterns in the water's flow.", "nextScene": "RIVER_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] Test if the water can be regenerated.", "nextScene": "RIVER_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] Channel spiritual energy into the water.", "nextScene": "RIVER_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] Use your hands to feel the water's texture.", "nextScene": "RIVER_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] Feel the air currents above the water.", "nextScene": "RIVER_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] Connect with the water's nourishing essence.", "nextScene": "RIVER_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] Look for signs of death and renewal in the water.", "nextScene": "RIVER_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] Check if the water can still support growth.", "nextScene": "RIVER_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] Feel the emotional energy in the water.", "nextScene": "RIVER_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] Sense if the water still experiences joy.", "nextScene": "RIVER_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] Assess the water's security and stability.", "nextScene": "RIVER_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] Try to invigorate the water's energy.", "nextScene": "RIVER_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] Determine what would be the highest good for the river.", "nextScene": "RIVER_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] Look for ways to elevate the water's condition.", "nextScene": "RIVER_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] Investigate the riverbed for blockages.", "nextScene": "RIVER_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] Try to burn away the illusion in the water.", "nextScene": "RIVER_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] Examine the water for a subtle poison.", "nextScene": "RIVER_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] Connect with ancestral water spirits.", "nextScene": "RIVER_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] Look for hidden patterns in the water's surface.", "nextScene": "RIVER_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] Analyze the water from multiple perspectives.", "nextScene": "RIVER_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] Assess if the water can be controlled.", "nextScene": "RIVER_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] Search for the root cause of the water's corruption.", "nextScene": "RIVER_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] Look for valuable elements in the water.", "nextScene": "RIVER_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] Analyze the water as part of the ecosystem.", "nextScene": "RIVER_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "FOLLOW_UPSTREAM": {
        "title": "Upstream Journey",
        "text": "You follow the river's path into the edge of the Dandaka Forest. The blight worsens with every step. Finally, you arrive at a small cave, partially hidden by weeping willows, from which the corrupted water seems to flow.",
        "choices": [
            { "text": "Enter the cave.", "nextScene": "CORRUPTED_CAVE" },
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "SPEAK_WATER_SPIRITS": {
        "title": "Agitated Spirits",
        "text": "You attempt to communicate with the water spirits. They appear as distorted, anguished forms, barely recognizable as the benevolent entities they once were. Their voices are garbled, but you sense they are trying to warn you about something upstream.",
        "choices": [
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "ANALYZE_PLANTS": {
        "title": "Withered Flora",
        "text": "The plants along the riverbank are in various states of decay. Some are completely withered, while others show strange mutations—leaves growing in spiral patterns or roots that seem to be retreating from the water rather than seeking it. You find a single lotus petal that somehow remains impossibly fragrant and pure despite the corruption.",
        "choices": [
            { "text": "Take the lotus petal.", "nextScene": "TAKE_LOTUS", "worldStateTriggers": { "has_lotus_petal": true } },
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    "TAKE_LOTUS": {
        "title": "Pure Essence",
        "text": "You carefully pick up the lotus petal. It glows with a subtle inner light and feels warm to the touch. This is no ordinary plant—it contains a concentrated essence of purity that has somehow resisted the corruption. It might be useful against whatever is poisoning the river.",
        "choices": [
            { "text": "Return to the riverbank.", "nextScene": "RIVERBANK" }
        ]
    },

    // Quest 2 Nakshatra-specific scenes (abbreviated for brevity)
    "RIVER_ASHWINI": {
        "title": "Healing Waters",
        "text": "Your healing touch causes the small water sample to briefly clear, revealing that the corruption is not just physical but spiritual—a curse of sorrow and regret. You sense that the source is upstream, in a cave where a powerful negative emotion has taken physical form.",
        "choices": [
            { "text": "Follow the river upstream.", "nextScene": "FOLLOW_UPSTREAM" }
        ]
    },

    "RIVER_BHARANI": {
        "title": "Cycle of Decay",
        "text": "You see that this water is caught in a cycle of decay without renewal. The normal purification processes of nature have been interrupted. You need to find what's blocking the renewal cycle and remove it to restore balance.",
        "choices": [
            { "text": "Follow the river upstream to find the source.", "nextScene": "FOLLOW_UPSTREAM" }
        ]
    },

    // Additional River scenes for other Nakshatras would be defined here

    "CORRUPTED_CAVE": {
        "title": "Cave of the Rishi",
        "text": "Inside the cave, you find a horrifying scene. A hermit's belongings are scattered around a meditation mat. In the center of the cave, a dark, pulsating crystal leeches corruption into a spring that feeds the river. The crystal is protected by a shimmering barrier of negative energy.",
        "puzzle": {
            "puzzleId": "BarrierOfNegativity",
            "description": "The barrier hums with spiritual despair. A direct assault would be useless. It must be countered with an object of immense purity or positive karma.",
            "solutions": [
                {
                    "item": "Lotus Petal",
                    "text": "Use the impossibly fragrant Lotus Petal.",
                    "successScene": "PURIFY_CRYSTAL_SUCCESS",
                    "condition": (state) => state.has_lotus_petal === true
                }
            ],
            "defaultFailure": {
                "text": "You reach out, but the barrier repels you with a wave of sorrow, weakening your resolve.",
                "effects": { "karma": -2 }
            }
        },
        "choices": [
            { "text": "Leave the cave for now.", "nextScene": "FOLLOW_UPSTREAM" }
        ]
    },

    "PURIFY_CRYSTAL_SUCCESS": {
        "title": "Purification",
        "text": "You present the Lotus Petal. As it nears the barrier, it glows with a brilliant, warm light. The pure energy of the lotus dissolves the barrier and neutralizes the dark crystal, which crumbles into harmless dust. The spring water begins to run clear and pure.",
        "questStatus": "The Poisoned River - Completed",
        "worldStateTriggers": { "river_purified": true },
        "effects": { "karma": 20, "gunas": { "sattva": 10 } },
        "choices": [
            { "text": "Return to Dharmapura a hero.", "nextScene": "QUEST_3_START" }
        ]
    },
    
    // --- QUEST 3: THE KING'S TAX COLLECTOR ---
    
    "QUEST_3_START": {
        "title": "The King's Tax Collector",
        "text": "Your victories have brought you fame, but fame attracts attention. A corrupt official from the capital has arrived in Dharmapura, demanding an impossible tax. The village cannot possibly pay the amount he demands, and he threatens to take villagers as indentured servants to cover the debt.",
        "questStatus": "The King's Tax Collector - Active",
        "choices": [
            { "text": "Meet the tax collector in the village square.", "nextScene": "TAX_COLLECTOR_SQUARE" }
        ]
    },

    "TAX_COLLECTOR_SQUARE": {
        "title": "The Imperious Official",
        "text": "The tax collector, Adhikari Dhanadatta, sits on an ornate portable throne in the village square. He is flanked by four armed guards. The villagers stand at a distance, fear evident in their eyes. 'This backwater has been underpaying its dues for years,' he announces when he sees you approach. 'I am here to collect what is owed, with interest.'",
        "interactions": [
            { "verb": "Speak to", "noun": "Dhanadatta", "scene": "SPEAK_TAX_COLLECTOR" },
            { "verb": "Examine", "noun": "Tax Records", "scene": "EXAMINE_TAX_RECORDS" },
            { "verb": "Consult", "noun": "Village Elder", "scene": "CONSULT_ELDER_TAX" },
            { "verb": "Observe", "noun": "The Guards", "scene": "OBSERVE_GUARDS" }
        ]
    },

    "SPEAK_TAX_COLLECTOR": {
        "title": "Confronting Dhanadatta",
        "text": "The tax collector looks down at you with disdain. 'So you're the one they call the village savior,' he sneers. 'Unless you can produce 500 gold pieces by tomorrow's dawn, I'll be taking ten villagers back to the capital as payment. The king's roads don't build themselves, you know.'",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] 'I can heal what ails you, if you'll be reasonable.'", "nextScene": "TAX_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Anuradha] 'Let us worship together and find a solution.'", "nextScene": "TAX_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] 'I've heard stories about your methods.'", "nextScene": "TAX_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Mrigashira] 'There must be a fulfilling solution for all.'", "nextScene": "TAX_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] 'This village can recover, with proper time.'", "nextScene": "TAX_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] 'Spiritual wealth exceeds material wealth.'", "nextScene": "TAX_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] 'We can craft a solution with our hands.'", "nextScene": "TAX_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] 'Your demands scatter like leaves in the wind.'", "nextScene": "TAX_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Revati] 'We can nourish both the kingdom and village.'", "nextScene": "TAX_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] 'This tax cycle needs renewal and purification.'", "nextScene": "TAX_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] 'Let us grow a compromise together.'", "nextScene": "TAX_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] 'Your threats bring tears that will become action.'", "nextScene": "TAX_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] 'Perhaps we can make this collection enjoyable.'", "nextScene": "TAX_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] 'We need a formal agreement that provides security.'", "nextScene": "TAX_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] 'I will strengthen our position in this matter.'", "nextScene": "TAX_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] 'What is the highest good in this situation?'", "nextScene": "TAX_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] 'Someone's voice is being ignored here.'", "nextScene": "TAX_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] 'We need stability, not disruption.'", "nextScene": "TAX_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] 'I see through the illusion of your authority.'", "nextScene": "TAX_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] 'Your poison can be countered with another.'", "nextScene": "TAX_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] 'The ancestors would judge your actions harshly.'", "nextScene": "TAX_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] 'I see a pattern in your collections that others miss.'", "nextScene": "TAX_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] 'I can solve multiple problems at once here.'", "nextScene": "TAX_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] 'Your authority is challenged by my presence.'", "nextScene": "TAX_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] 'I'll destroy the root of this corruption.'", "nextScene": "TAX_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] 'There is abundance here you do not see.'", "nextScene": "TAX_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] 'This tax system needs systemic healing.'", "nextScene": "TAX_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' },
            
            { "text": "Step back and consider your options.", "nextScene": "TAX_COLLECTOR_SQUARE" }
        ]
    },

    "EXAMINE_TAX_RECORDS": {
        "title": "Suspicious Ledgers",
        "text": "You ask to see the tax records. Dhanadatta reluctantly shows you a ledger. As you examine it, you notice several discrepancies. The amounts have been altered, and the royal seal on the document appears to be a forgery. This tax collector may not be operating under the king's authority at all.",
        "choices": [
            { "text": "Return to the square.", "nextScene": "TAX_COLLECTOR_SQUARE", "worldStateTriggers": { "discovered_fake_records": true } }
        ]
    },

    "CONSULT_ELDER_TAX": {
        "title": "The Elder's Concern",
        "text": "The Elder pulls you aside, his voice a worried whisper. 'This is not the regular tax collector, and the amount he demands is ten times our usual tribute. Something is very wrong. The royal tax collection was just three months ago—this man is not from the king.'",
        "choices": [
            { "text": "Return to the square.", "nextScene": "TAX_COLLECTOR_SQUARE", "worldStateTriggers": { "elder_suspicion": true } }
        ]
    },

    "OBSERVE_GUARDS": {
        "title": "Mercenary Eyes",
        "text": "You study the guards carefully. Their armor bears no royal insignia, and their weapons are of varying quality—not the standardized equipment of the king's soldiers. These are hired mercenaries, not royal guards.",
        "choices": [
            { "text": "Return to the square.", "nextScene": "TAX_COLLECTOR_SQUARE", "worldStateTriggers": { "noticed_fake_guards": true } }
        ]
    },

    // Tax Collector solution scenes for each Nakshatra would be defined here
    // For brevity, we'll include just a few examples

    "TAX_ASHWINI": {
        "title": "The Healer's Insight",
        "text": "You notice Dhanadatta wincing occasionally—he suffers from a painful condition he's been hiding. You offer to heal him in exchange for reducing the tax demand. Desperate for relief, he agrees. After your treatment, he reduces the tax to a reasonable amount the village can pay.",
        "choices": [
            { "text": "Accept his new terms.", "nextScene": "TAX_RESOLUTION", "worldStateTriggers": { "tax_solution": "Healed the Collector" } }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To heal quickly",
            "gunas": ["Rajas", "Rajas", "Rajas"]
        }
    },

    "TAX_KRITTIKA": {
        "title": "Burning Illusions",
        "text": "You use your power to 'burn away' illusions, publicly revealing the forged documents and fake royal seal. 'This man is a fraud!' you declare to the village. The exposed Dhanadatta tries to flee but is detained by the villagers.",
        "choices": [
            { "text": "Let justice be served.", "nextScene": "TAX_RESOLUTION", "worldStateTriggers": { "tax_solution": "Exposed the Fraud" } }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To burn illusion",
            "gunas": ["Rajas", "Rajas", "Sattva"]
        }
    },

    "TAX_RESOLUTION": {
        "title": "Justice Prevails",
        "text": "With the tax collector situation resolved, the village breathes a collective sigh of relief. Your reputation grows further as word spreads of how you protected Dharmapura from exploitation. The village Elder approaches you with gratitude in his eyes.",
        "questStatus": "The King's Tax Collector - Completed",
        "choices": [
            { "text": "Accept the village's thanks.", "nextScene": "QUEST_4_START" }
        ]
    },

    // --- QUEST 4: THE FORGOTTEN TEMPLE ---

    "QUEST_4_START": {
        "title": "The Forgotten Temple",
        "text": "The Elder reveals that your actions have awakened an ancient prophecy. 'Beyond the eastern ridge lies a forgotten temple,' he explains. 'Legend says it contains wisdom that can only be accessed by one who has passed the three trials of Dharmapura. You have passed two—the tree and the river. The tax collector was the third. The temple awaits you.'",
        "questStatus": "The Forgotten Temple - Active",
        "choices": [
            { "text": "Journey to the eastern ridge.", "nextScene": "TEMPLE_APPROACH" }
        ]
    },

    "TEMPLE_APPROACH": {
        "title": "The Overgrown Path",
        "text": "After a day's journey, you find a barely visible path winding up the eastern ridge. Centuries of neglect have allowed the jungle to reclaim much of the route. As you ascend, you begin to see ancient stone markers, their inscriptions worn but still faintly visible.",
        "interactions": [
            { "verb": "Examine", "noun": "Stone Markers", "scene": "EXAMINE_MARKERS" },
            { "verb": "Clear", "noun": "Overgrown Path", "scene": "CLEAR_PATH" },
            { "verb": "Listen to", "noun": "The Forest", "scene": "LISTEN_FOREST" }
        ]
    },

    "EXAMINE_MARKERS": {
        "title": "Ancient Inscriptions",
        "text": "The stone markers bear inscriptions in an archaic script. You can make out references to the 'Temple of the Celestial Wheel' and warnings about 'approaching with a pure heart.' One marker mentions that 'only those who understand their own nature may enter.'",
        "choices": [
            { "text": "Return to the path.", "nextScene": "TEMPLE_APPROACH" }
        ]
    },

    "CLEAR_PATH": {
        "title": "Revealing the Way",
        "text": "You spend time clearing away the overgrowth. As you work, you uncover a series of stone steps leading higher up the ridge. The steps are arranged in a pattern that seems to mimic the movement of celestial bodies.",
        "choices": [
            { "text": "Follow the steps upward.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "LISTEN_FOREST": {
        "title": "Whispers Among Leaves",
        "text": "You quiet your mind and listen to the forest. Beyond the natural sounds of birds and insects, you detect a subtle hum—a vibration that seems to emanate from further up the ridge. It has a rhythmic quality, almost like a chant.",
        "choices": [
            { "text": "Follow the sound.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "TEMPLE_ENTRANCE": {
        "title": "The Forgotten Temple",
        "text": "You emerge from the forest path to find a magnificent structure carved directly into the mountainside. The temple facade features 27 pillars, each adorned with celestial symbols. The massive stone doors are sealed, with a circular indentation in the center that appears to be a locking mechanism.",
        "interactions": [
            { "verb": "Examine", "noun": "Temple Pillars", "scene": "EXAMINE_PILLARS" },
            { "verb": "Study", "noun": "Door Mechanism", "scene": "STUDY_DOOR" },
            { "verb": "Meditate", "noun": "At the Entrance", "scene": "MEDITATE_ENTRANCE" }
        ]
    },

    "EXAMINE_PILLARS": {
        "title": "Celestial Columns",
        "text": "Each of the 27 pillars represents one of the Nakshatras. You find the pillar corresponding to your own birth star and notice that it has a small recess that seems shaped to receive an offering.",
        "choices": [
            // Each Nakshatra would have a unique choice here
            { "text": "Make an offering based on your Nakshatra.", "nextScene": "TEMPLE_OFFERING" },
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "STUDY_DOOR": {
        "title": "The Celestial Lock",
        "text": "The door mechanism is a complex astronomical device. It appears that when the correct configuration is set—aligning with specific celestial positions—the door will open. The configuration seems to be related to the current positions of the planets associated with the Nakshatras.",
        "choices": [
            { "text": "Attempt to solve the celestial puzzle.", "nextScene": "TEMPLE_PUZZLE" },
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "MEDITATE_ENTRANCE": {
        "title": "Spiritual Attunement",
        "text": "You sit in meditation before the temple entrance. As your mind quiets, you begin to perceive the subtle energies flowing through the temple structure. The entire temple is aligned with cosmic forces, and you sense that your own spiritual energy must resonate with these forces to gain entry.",
        "choices": [
            { "text": "Align your energy with the temple.", "nextScene": "TEMPLE_ALIGNMENT" },
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "TEMPLE_OFFERING": {
        "title": "Gift to the Stars",
        "text": "You prepare an offering that resonates with your Nakshatra's energy. As you place it in the recess of your pillar, the stone begins to glow with a soft light. You feel a shift in the temple's energy, as if it is recognizing your presence.",
        "choices": [
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE", "worldStateTriggers": { "made_offering": true } }
        ]
    },

    "TEMPLE_PUZZLE": {
        "title": "Celestial Alignment",
        "text": "You work with the door mechanism, adjusting various dials and levers to match the current celestial positions. As you make the final alignment, you hear a series of clicks from within the door.",
        "choices": [
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE", "worldStateTriggers": { "solved_puzzle": true } }
        ]
    },

    "TEMPLE_ALIGNMENT": {
        "title": "Resonance",
        "text": "Through deep meditation, you align your spiritual energy with the temple's cosmic frequencies. You feel a profound connection forming, as if the temple is recognizing you as a kindred spirit.",
        "choices": [
            { "text": "Return to the entrance.", "nextScene": "TEMPLE_ENTRANCE", "worldStateTriggers": { "aligned_energy": true } }
        ]
    },

    "TEMPLE_INNER_SANCTUM": {
        "title": "The Heart of Wisdom",
        "text": "The massive doors slowly swing open, revealing the inner sanctum of the temple. At the center stands a crystalline structure that seems to contain the very essence of the cosmos—stars, planets, and constellations swirl within it. This is the Celestial Wheel, the repository of cosmic wisdom.",
        "choices": [
            { "text": "Approach the Celestial Wheel.", "nextScene": "CELESTIAL_WHEEL" }
        ],
        "condition": (state) => (state.made_offering === true && state.solved_puzzle === true && state.aligned_energy === true)
    },

    "CELESTIAL_WHEEL": {
        "title": "Cosmic Revelation",
        "text": "As you approach the Celestial Wheel, it responds to your presence. The cosmic display within the crystal reconfigures itself to show the specific celestial pattern of your birth—your Nakshatra in perfect detail. A voice speaks directly into your mind: 'You who have passed the trials, receive the wisdom of the stars.'",
        "choices": [
            { "text": "Accept the cosmic wisdom.", "nextScene": "TEMPLE_RESOLUTION" }
        ]
    },

    "TEMPLE_RESOLUTION": {
        "title": "Stellar Enlightenment",
        "text": "The wisdom of the Celestial Wheel flows into you, expanding your understanding of your own Nakshatra and its place in the cosmic order. You gain profound insights about your path and purpose. As the transfer of knowledge completes, you feel transformed—more aligned with your true nature than ever before.",
        "questStatus": "The Forgotten Temple - Completed",
        "choices": [
            { "text": "Return to Dharmapura with your new wisdom.", "nextScene": "QUEST_5_START" }
        ]
    },

    // --- QUEST 5: THE CELESTIAL ALIGNMENT ---

    "QUEST_5_START": {
        "title": "The Coming Alignment",
        "text": "You return to Dharmapura with the wisdom of the Celestial Wheel, only to find the village in a state of anticipation. The Priestess explains that a rare celestial alignment will occur in three days—an event that happens only once every 108 years. 'This alignment will amplify the power of all 27 Nakshatras simultaneously,' she says. 'It is a time of great potential... and great danger.'",
        "questStatus": "The Celestial Alignment - Active",
        "choices": [
            { "text": "Ask about the potential dangers.", "nextScene": "ALIGNMENT_DANGERS" }
        ]
    },

    "ALIGNMENT_DANGERS": {
        "title": "Cosmic Imbalance",
        "text": "The Priestess explains that while the alignment can bring blessings, it also creates instability in the cosmic order. 'The barriers between realms thin during such times,' she warns. 'Already, we see signs of entities from other planes attempting to cross over. We need your help to prepare protective rituals and guide the village through this event.'",
        "choices": [
            { "text": "Offer to help prepare the village.", "nextScene": "PREPARE_VILLAGE" }
        ]
    },

    "PREPARE_VILLAGE": {
        "title": "Preparations Begin",
        "text": "Over the next two days, you help the village prepare for the alignment. You create protective talismans, teach meditation techniques to strengthen spiritual barriers, and identify key locations that must be secured. As the final day approaches, you sense a growing disturbance in the cosmic energies.",
        "choices": [
            { "text": "Perform a final survey of the village.", "nextScene": "VILLAGE_SURVEY" }
        ]
    },

    "VILLAGE_SURVEY": {
        "title": "Points of Vulnerability",
        "text": "Your survey reveals three critical points of vulnerability where the cosmic barriers are weakest: the Banyan tree in the village square, the now-purified river source, and the ancient shrine at the village boundary. Each location corresponds to one of the three gunas: sattva, rajas, and tamas. You must decide where to focus your protective efforts as the alignment begins.",
        "choices": [
            { "text": "Focus on the Banyan tree (Sattva).", "nextScene": "PROTECT_BANYAN" },
            { "text": "Focus on the river source (Rajas).", "nextScene": "PROTECT_RIVER" },
            { "text": "Focus on the boundary shrine (Tamas).", "nextScene": "PROTECT_SHRINE" }
        ]
    },

    "PROTECT_BANYAN": {
        "title": "Guardian of Purity",
        "text": "You choose to protect the Banyan tree, the point where sattva energy is strongest. As the alignment begins, the tree begins to glow with an otherworldly light. Ethereal entities of pure consciousness attempt to manifest through it. Your presence helps stabilize the influx of sattva energy.",
        "choices": [
            { "text": "Channel the sattva energy.", "nextScene": "CHANNEL_SATTVA" }
        ]
    },

    "PROTECT_RIVER": {
        "title": "Keeper of Action",
        "text": "You choose to protect the river source, where rajas energy flows most strongly. As the alignment begins, the water churns and glows with vibrant energy. Entities of pure action and change try to emerge from the waters. Your presence helps contain and direct the rajas energy.",
        "choices": [
            { "text": "Channel the rajas energy.", "nextScene": "CHANNEL_RAJAS" }
        ]
    },

    "PROTECT_SHRINE": {
        "title": "Warden of Darkness",
        "text": "You choose to protect the boundary shrine, where tamas energy is concentrated. As the alignment begins, shadows deepen around the shrine, and the air grows heavy. Entities of dissolution and chaos attempt to break through. Your presence helps stabilize and balance the tamas energy.",
        "choices": [
            { "text": "Channel the tamas energy.", "nextScene": "CHANNEL_TAMAS" }
        ]
    },

    "CHANNEL_SATTVA": {
        "title": "Pure Illumination",
        "text": "You open yourself to the sattva energy, channeling its pure illumination. The Banyan tree becomes a beacon of clarity and wisdom. The entities attempting to cross over are transformed into beneficial spirits that bless the village with insight and spiritual growth. Your Nakshatra's connection to sattva is strengthened.",
        "choices": [
            { "text": "Complete the alignment ritual.", "nextScene": "ALIGNMENT_CLIMAX", "worldStateTriggers": { "channeled_sattva": true } }
        ]
    },

    "CHANNEL_RAJAS": {
        "title": "Dynamic Transformation",
        "text": "You open yourself to the rajas energy, channeling its dynamic power. The river becomes a current of transformative force. The entities attempting to cross over are reshaped into spirits of positive change that invigorate the village with creativity and progress. Your Nakshatra's connection to rajas is strengthened.",
        "choices": [
            { "text": "Complete the alignment ritual.", "nextScene": "ALIGNMENT_CLIMAX", "worldStateTriggers": { "channeled_rajas": true } }
        ]
    },

    "CHANNEL_TAMAS": {
        "title": "Profound Stillness",
        "text": "You open yourself to the tamas energy, channeling its profound stillness. The shrine becomes an anchor of stability and rest. The entities attempting to cross over are absorbed and neutralized, creating a protective boundary around the village that will last for generations. Your Nakshatra's connection to tamas is strengthened.",
        "choices": [
            { "text": "Complete the alignment ritual.", "nextScene": "ALIGNMENT_CLIMAX", "worldStateTriggers": { "channeled_tamas": true } }
        ]
    },

    "ALIGNMENT_CLIMAX": {
        "title": "Cosmic Harmony",
        "text": "As the celestial alignment reaches its peak, the energies you've been channeling surge to their maximum intensity. The entire village is bathed in a light that seems to contain all colors and none at once. For a brief moment, you perceive the entire cosmic wheel—all 27 Nakshatras in perfect harmony, each connected to the others in an eternal dance.",
        "choices": [
            { "text": "Embrace your cosmic role.", "nextScene": "ALIGNMENT_RESOLUTION" }
        ]
    },

    "ALIGNMENT_RESOLUTION": {
        "title": "Stellar Guardian",
        "text": "The alignment passes, and the cosmic energies return to their normal flow. But Dharmapura is forever changed—blessed by the alignment and protected by the energies you helped channel. The villagers look to you with new understanding, recognizing that you are more than just a hero; you are a cosmic guardian, aligned with the very stars that shape destiny.",
        "questStatus": "The Celestial Alignment - Completed",
        "choices": [
            { "text": "Accept your destiny.", "nextScene": "GAME_CONCLUSION" }
        ]
    },

    "GAME_CONCLUSION": {
        "title": "Samsara Saga",
        "text": "Your journey through the trials of Dharmapura has transformed both the village and yourself. You have grown into your Nakshatra's full potential, embodying its unique qualities and powers. The village prospers under your guidance, becoming a beacon of harmony between cosmic forces and earthly life. Yet you sense that this is just the beginning of your saga—greater adventures await beyond the horizon, as the wheel of samsara continues to turn.",
        "choices": [
            { "text": "The End... For Now", "nextScene": "JOURNEY_START" }
        ]
    }
};