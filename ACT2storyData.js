
/**
 * @file ACT2storyData.js
 * @description This file contains the narrative graph for Act II of Samsara Saga: The Path of Devotion (Bhakti Marga).
 * @version 1.0.0
 * @license MIT
 *
 * -- GAME DESIGN FEATURES --
 * 1.  **Celestial Setting:** Transitions from the earthly realm to Svarga, the celestial realm of the Devas.
 * 2.  **Devotion & Creation:** Focuses on bhakti (devotion), creation, and community rather than karma.
 * 3.  **Shilpa Shastra Crafting:** Introduces a sacred crafting system with multiple ritual stages.
 * 4.  **Festival Events:** Incorporates server-wide festival events tied to the Hindu calendar.
 * 5.  **The Celestial Silence:** Centers on a mystery threatening the fabric of the celestial realm.
 * 6.  **Nakshatra Paths:** Provides unique paths for all 27 Nakshatras to solve the central mystery.
 * 7.  **Divine Politics:** Explores the intricate social and political dynamics of the gods.
 * 8.  **Cosmic Harmony:** Emphasizes themes of harmony, beauty, reverence, and divine splendor.
 */

export const storyData = {

    // --- ACT II: THE PATH OF DEVOTION (BHAKTI MARGA) ---

    "JOURNEY_TO_SVARGA": {
        "title": "Ascension",
        "text": "Having proven your understanding of earthly karma, your soul ascends from Dharmapura toward Svarga, the celestial realm of the Devas. As you rise, the material world falls away, replaced by clouds of impossible colors and the distant sounds of divine music. Your consciousness expands, preparing for the next stage of your spiritual journey.",
        "choices": [
            { "text": "Embrace the ascension...", "nextScene": "ARRIVAL_IN_SVARGA" }
        ]
    },

    "ARRIVAL_IN_SVARGA": {
        "title": "The Realm of the Devas",
        "text": "You arrive in Svarga, an opulent, otherworldly paradise. Golden palaces float amongst clouds of pearl and rose. The air itself tastes of amrita\u2014divine nectar\u2014and the light emanates not from a sun, but from the very fabric of reality. Celestial beings\u2014Apsaras, Gandharvas, and minor Devas\u2014move with perfect grace through gardens of wish-fulfilling Kalpavriksha trees and ethereal lotus blooms.",
        "choices": [
            { "text": "Proceed to Indra's Court...", "nextScene": "INDRAS_COURT" }
        ]
    },

    "INDRAS_COURT": {
        "title": "Sudharma: The Court of Indra",
        "text": "You enter Sudharma, the magnificent assembly hall of Indra, King of the Devas. The vast chamber shimmers with celestial light, its walls inlaid with gems unknown to the mortal realm. Devas of various ranks converse in hushed tones, but something is amiss. The usual vibrant energy of the court feels subdued, the celestial music discordant. A strange spiritual apathy\u2014a 'Celestial Silence'\u2014seems to hang in the air.",
        "questStatus": "The Celestial Silence - Active",
        "interactions": [
            { "verb": "Approach", "noun": "Indra", "scene": "APPROACH_INDRA" },
            { "verb": "Observe", "noun": "The Gandharvas", "scene": "OBSERVE_GANDHARVAS" },
            { "verb": "Speak with", "noun": "The Apsaras", "scene": "SPEAK_APSARAS" },
            { "verb": "Listen to", "noun": "The Celestial Music", "scene": "LISTEN_MUSIC" }
        ]
    },

    "APPROACH_INDRA": {
        "title": "The King of Devas",
        "text": "Indra sits upon his celestial throne, his expression troubled. His usual radiance seems dimmed. As you approach and bow, he regards you with interest. 'A mortal soul who has ascended through merit,' he observes. 'Perhaps you are the one the celestial omens spoke of. Svarga faces a crisis\u2014a strange silence spreads through our realm. The Gandharvas lose their inspiration, the Apsaras their grace. We must discover the cause before the cosmic harmony is irreparably damaged.'",
        "choices": [
            { "text": "\"I will help restore the harmony, Lord Indra.\"", "nextScene": "INDRA_QUEST" },
            { "text": "\"What do you suspect is causing this silence?\"", "nextScene": "INDRA_SUSPICIONS" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "INDRA_QUEST": {
        "title": "The Divine Commission",
        "text": "Indra nods with approval. 'Your willingness honors you. This silence began weeks ago and grows stronger each day. I believe its source lies in the Sunken Temple of Saraswati, goddess of knowledge, music, and arts. The temple entrance is sealed by a grand musical lock, and the melody to open it has been lost. Find this melody, enter the temple, and discover what disrupts our harmony.'",
        "choices": [
            { "text": "\"Where should I begin my search?\"", "nextScene": "INDRA_GUIDANCE" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "INDRA_SUSPICIONS": {
        "title": "Divine Concerns",
        "text": "'I have my suspicions,' Indra says gravely. 'This silence feels... deliberate. Not a natural phenomenon, but something created. Perhaps even by one among us.' He lowers his voice. 'Be cautious in your investigations. Even in Svarga, not all motives are pure. The Sunken Temple of Saraswati may hold answers, but its entrance is sealed with a musical lock requiring a specific five-note melody that has been lost.'",
        "choices": [
            { "text": "\"I will help restore the harmony, Lord Indra.\"", "nextScene": "INDRA_QUEST" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "INDRA_GUIDANCE": {
        "title": "The Path Forward",
        "text": "'Begin in the Gardens of Nandana,' Indra advises. 'Speak with the Apsaras and Gandharvas there\u2014they are most affected by this silence and may have insights. Then visit Tvashtar's Workshop; the divine craftsman has ancient knowledge that could help you. The melody likely exists in fragments throughout Svarga. Find these fragments, and you may restore what has been lost.'",
        "choices": [
            { "text": "\"I will begin at once.\"", "nextScene": "QUEST_BEGINS" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "OBSERVE_GANDHARVAS": {
        "title": "The Divine Musicians",
        "text": "The Gandharvas, celestial musicians of unparalleled skill, sit with instruments in hand, but their usual vibrant performances are replaced by hesitant, discordant notes. Their faces show confusion and frustration. One of them, Chitraratha, notices your observation and approaches. 'Our melodies fade from memory,' he explains sadly. 'Notes that once flowed like divine rivers now feel trapped behind a dam of silence.'",
        "choices": [
            { "text": "\"When did this problem begin?\"", "nextScene": "GANDHARVA_HISTORY" },
            { "text": "\"Can you still play any music at all?\"", "nextScene": "GANDHARVA_ATTEMPT" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "GANDHARVA_HISTORY": {
        "title": "The Spreading Silence",
        "text": "'It began subtly,' Chitraratha explains. 'First, we struggled with the most complex ragas. Then simpler melodies became difficult. Now, even basic notes feel... distant. The silence spread from the direction of Saraswati's Sunken Temple. Some say the temple holds a powerful artifact\u2014the Veena of Creation\u2014whose music helps maintain cosmic harmony. If something has happened to it...' He trails off, the implications too troubling to voice.",
        "choices": [
            { "text": "\"Can you still play any music at all?\"", "nextScene": "GANDHARVA_ATTEMPT" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "GANDHARVA_ATTEMPT": {
        "title": "Fading Melodies",
        "text": "Chitraratha lifts his celestial veena and attempts to play. The first few notes ring clear and beautiful, but soon falter into discord. You notice something strange\u2014for a brief moment when he played the correct notes, the silence seemed to retreat slightly. 'Did you feel that?' he asks, surprised. 'For a moment, it was as if... as if the music pushed against the silence.' He carefully plays the notes again: Sa, Ga, Pa. 'These three notes still come clearly. Perhaps they are part of the key to the temple.'",
        "choices": [
            { "text": "\"I'll remember these notes.\"", "nextScene": "INDRAS_COURT", "worldStateTriggers": { "melody_fragment_1": true } }
        ]
    },

    "SPEAK_APSARAS": {
        "title": "The Celestial Dancers",
        "text": "The Apsaras, divine dancers of legendary beauty and grace, stand in small groups, their movements lacking their usual fluid perfection. Rambha, foremost among them, notices your approach. 'Our dance is the physical expression of cosmic harmony,' she explains. 'But now our limbs feel heavy, our movements uncertain. It's as if we've forgotten the very language of celestial dance.'",
        "choices": [
            { "text": "\"Has anything unusual happened recently?\"", "nextScene": "APSARA_RECOLLECTION" },
            { "text": "\"Can you demonstrate what happens when you try to dance?\"", "nextScene": "APSARA_DEMONSTRATION" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "APSARA_RECOLLECTION": {
        "title": "A Troubling Memory",
        "text": "Rambha's brow furrows in concentration. 'Before the silence began, there was a visitor to Saraswati's temple\u2014a being I did not recognize, neither Deva nor Asura. They claimed to be a scholar seeking knowledge.' Her eyes widen suddenly. 'And now that I think of it, the silence began shortly after their visit. How strange that I could not recall this until now... it's as if the silence affects our memories as well.'",
        "choices": [
            { "text": "\"Can you describe this visitor?\"", "nextScene": "VISITOR_DESCRIPTION" },
            { "text": "\"Can you demonstrate what happens when you try to dance?\"", "nextScene": "APSARA_DEMONSTRATION" },
            { "text": "Return to the court.", "nextScene": "INDRAS_COURT" }
        ]
    },

    "VISITOR_DESCRIPTION": {
        "title": "The Mysterious Scholar",
        "text": "'They wore robes of shifting colors, like oil on water,' Rambha recalls. 'Their face was beautiful, yet somehow... wrong. As if assembled from perfect features that didn't quite belong together. Their voice was melodious but left an echo that lingered uncomfortably.' She shakes her head. 'I remember feeling uneasy, yet unable to explain why. They carried an instrument\u2014not unlike a veena, but with strings that seemed to absorb light rather than reflect it.'",
        "choices": [
            { "text": "\"Thank you for this information.\"", "nextScene": "INDRAS_COURT", "worldStateTriggers": { "learned_about_visitor": true } }
        ]
    },

    "APSARA_DEMONSTRATION": {
        "title": "Disrupted Grace",
        "text": "Rambha begins to dance. Her first movements are exquisite, but soon her rhythm falters. As she attempts a complex sequence, her foot catches, and she stumbles\u2014something unheard of for an Apsara. 'You see?' she says, distressed. 'But wait...' She repeats a specific gesture\u2014a flowing movement where her hands trace a pattern like flowing water. 'This movement still feels right.' She performs it again, and you notice it creates a sound like gentle chimes. 'This mudra corresponds to the note Ni in the sacred scale. Perhaps this is significant?'",
        "choices": [
            { "text": "\"I'll remember this note.\"", "nextScene": "INDRAS_COURT", "worldStateTriggers": { "melody_fragment_2": true } }
        ]
    },

    "LISTEN_MUSIC": {
        "title": "Discordant Harmonies",
        "text": "You focus on the celestial music that normally permeates Indra's court. Instead of the perfect harmonies that should exist, you hear fragmented melodies and jarring dissonance. Yet within the discord, a single note repeatedly emerges with clarity\u2014Dha. Each time this note sounds, the air briefly shimmers, as if the note itself fights against the spreading silence.",
        "choices": [
            { "text": "Remember this note.", "nextScene": "INDRAS_COURT", "worldStateTriggers": { "melody_fragment_3": true } }
        ]
    },

    "QUEST_BEGINS": {
        "title": "The Muted Mantra",
        "text": "With Indra's blessing, you set forth on your quest to discover the cause of the Celestial Silence. You must find the five-note melody that will unlock the Sunken Temple of Saraswati, where the source of the silence likely resides. Your journey will take you through the divine realms of Svarga, interacting with celestial beings who each hold a fragment of the lost melody.",
        "choices": [
            { "text": "Visit the Gardens of Nandana.", "nextScene": "NANDANA_GARDENS" },
            { "text": "Go to Tvashtar's Workshop.", "nextScene": "TVASHTAR_WORKSHOP" },
            { "text": "Explore the vicinity of the Sunken Temple.", "nextScene": "TEMPLE_VICINITY" }
        ]
    },

    "NANDANA_GARDENS": {
        "title": "Gardens of Nandana",
        "text": "You enter the ethereal Gardens of Nandana, where celestial flowers bloom in impossible colors and the air is perfumed with divine fragrances. Normally a place of relaxation and pleasure for the Devas, the gardens now seem subdued. The flowers droop slightly, their colors less vibrant, and the celestial beings wander with troubled expressions.",
        "interactions": [
            { "verb": "Speak with", "noun": "Resting Devas", "scene": "SPEAK_DEVAS" },
            { "verb": "Examine", "noun": "Celestial Flowers", "scene": "EXAMINE_FLOWERS" },
            { "verb": "Approach", "noun": "Singing Fountain", "scene": "APPROACH_FOUNTAIN" },
            { "verb": "Return to", "noun": "Indra's Court", "scene": "INDRAS_COURT" }
        ]
    },

    "SPEAK_DEVAS": {
        "title": "Troubled Immortals",
        "text": "You approach a group of minor Devas resting near a crystal pool. They greet you with polite but subdued nods. 'The gardens offer little comfort these days,' one sighs. 'Even the Kalpavriksha trees grant wishes with less enthusiasm.' Another adds, 'I visited the Sunken Temple often, before it was sealed. Saraswati's presence there made it a place of perfect inspiration. Now...' He gestures at the diminished splendor around you.",
        "choices": [
            { "text": "\"Do you know anything about the melody that opens the temple?\"", "nextScene": "DEVA_MELODY_KNOWLEDGE" },
            { "text": "Return to exploring the gardens.", "nextScene": "NANDANA_GARDENS" }
        ]
    },

    "DEVA_MELODY_KNOWLEDGE": {
        "title": "Ancient Memories",
        "text": "The oldest Deva in the group closes his eyes in concentration. 'The melody... yes, I've heard it played. Five notes that resonate with Saraswati's essence. I cannot recall them all, but the final note\u2014I remember it was Re, played twice in succession. The sound of revelation and divine knowledge.' He hums the note, and for a moment, the garden around you seems to brighten.",
        "choices": [
            { "text": "Thank the Deva and remember this note.", "nextScene": "NANDANA_GARDENS", "worldStateTriggers": { "melody_fragment_4": true } }
        ]
    },

    "EXAMINE_FLOWERS": {
        "title": "Divine Blooms",
        "text": "You study the celestial flowers, each one perfect beyond mortal imagination. Despite the silence affecting Svarga, they still radiate divine energy. One particular lotus, with petals of shifting opalescent hues, catches your attention. As you lean closer, you notice it's vibrating at a specific frequency, producing a nearly inaudible tone.",
        "choices": [
            { "text": "Listen carefully to the flower's tone.", "nextScene": "FLOWER_TONE" },
            { "text": "Return to exploring the gardens.", "nextScene": "NANDANA_GARDENS" }
        ]
    },

    "FLOWER_TONE": {
        "title": "The Lotus Song",
        "text": "You place your ear near the lotus and hear a clear, pure note\u2014Sa, the foundation of all celestial music. The flower seems to respond to your attention, its petals opening wider, its tone growing stronger. You realize this is no ordinary lotus; it's a rare Saraswati Padma, sacred to the goddess herself. These flowers are said to grow only in soil blessed by divine music.",
        "choices": [
            { "text": "Remember this note.", "nextScene": "NANDANA_GARDENS", "worldStateTriggers": { "melody_fragment_5": true } }
        ]
    },

    "APPROACH_FOUNTAIN": {
        "title": "The Melodious Waters",
        "text": "At the center of the gardens stands a magnificent fountain crafted from crystal and divine metals. Normally, its waters would create perfect musical tones as they fall, but now the sound is muted and irregular. A young Gandharva sits beside it, attempting to tune his instrument to match the fountain's diminished melody.",
        "choices": [
            { "text": "Speak with the Gandharva.", "nextScene": "FOUNTAIN_GANDHARVA" },
            { "text": "Return to exploring the gardens.", "nextScene": "NANDANA_GARDENS" }
        ]
    },

    "FOUNTAIN_GANDHARVA": {
        "title": "The Frustrated Musician",
        "text": "'This fountain,' the Gandharva explains, 'was tuned by Saraswati herself. Its waters play all seven sacred notes in perfect sequence. Now the sequence is broken\u2014notes are missing, others distorted.' He plucks a string on his instrument. 'I'm trying to remember how it should sound. The pattern began with Sa, then...' He struggles, plucking different strings. 'Sa, Re, Ga, Ma, Pa, Dha, Ni\u2014but in what order for the temple melody? If only I could remember...'",
        "choices": [
            { "text": "Return to exploring the gardens.", "nextScene": "NANDANA_GARDENS" }
        ]
    },

    "TVASHTAR_WORKSHOP": {
        "title": "The Divine Workshop",
        "text": "You enter Tvashtar's Workshop, a vast space where the divine architect and craftsman creates objects of power and beauty. The workshop hums with creative energy, though even here, the effects of the silence can be felt. Celestial forges burn with multicolored flames, and half-finished divine artifacts float in various stages of completion. Tvashtar himself, a Deva of imposing stature with multiple arms, works intently on a complex mechanism.",
        "interactions": [
            { "verb": "Speak with", "noun": "Tvashtar", "scene": "SPEAK_TVASHTAR" },
            { "verb": "Examine", "noun": "Divine Artifacts", "scene": "EXAMINE_ARTIFACTS" },
            { "verb": "Study", "noun": "Shilpa Shastra Texts", "scene": "STUDY_SHILPA_SHASTRA" },
            { "verb": "Return to", "noun": "Indra's Court", "scene": "INDRAS_COURT" }
        ]
    },

    "SPEAK_TVASHTAR": {
        "title": "The Divine Craftsman",
        "text": "Tvashtar looks up from his work, his multiple eyes focusing on you with intense scrutiny. 'A mortal in Svarga? Interesting times indeed.' His voice resonates like metal striking metal. 'You seek the melody to Saraswati's temple, I presume? This silence affects my work\u2014divine craftsmanship requires divine inspiration.' He sets down his tools. 'I helped construct the temple's lock ages ago. Its mechanism responds to the correct sequence of notes, which resonate with Saraswati's essence.'",
        "choices": [
            { "text": "\"Can you tell me the correct melody?\"", "nextScene": "TVASHTAR_MELODY" },
            { "text": "\"What are you working on?\"", "nextScene": "TVASHTAR_CURRENT_WORK" },
            { "text": "Return to exploring the workshop.", "nextScene": "TVASHTAR_WORKSHOP" }
        ]
    },

    "TVASHTAR_MELODY": {
        "title": "The Craftsman's Memory",
        "text": "'The full melody? No, even I cannot recall it completely\u2014this silence clouds even divine memory.' Tvashtar frowns. 'But I remember this: the melody begins with Sa and ends with Re. The middle notes...' He closes his eyes in concentration. 'One of them is Ga. The others elude me.' He opens his eyes. 'Perhaps creating something might help. The Shilpa Shastra teaches that creation and memory are linked. Learn the sacred crafting arts, and you might unlock more than just physical objects.'",
        "choices": [
            { "text": "\"Teach me the basics of Shilpa Shastra.\"", "nextScene": "LEARN_CRAFTING" },
            { "text": "Return to exploring the workshop.", "nextScene": "TVASHTAR_WORKSHOP" }
        ]
    },

    "TVASHTAR_CURRENT_WORK": {
        "title": "The Resonance Device",
        "text": "'This?' Tvashtar gestures to the complex mechanism before him. 'A resonance device that might help counteract the silence. But without proper inspiration, it remains incomplete.' He adjusts a crystalline component. 'Divine crafting is not merely assembly\u2014it is a sacred act requiring proper spiritual alignment. The Shilpa Shastra teaches four stages: Atma Shuddhi (self-purification), Dravya Shuddhi (material purification), Nirmana (creation), and Prana Pratishtha (invocation of life). Master these, and you might create something to help your quest.'",
        "choices": [
            { "text": "\"Teach me the basics of Shilpa Shastra.\"", "nextScene": "LEARN_CRAFTING" },
            { "text": "Return to exploring the workshop.", "nextScene": "TVASHTAR_WORKSHOP" }
        ]
    },

    "LEARN_CRAFTING": {
        "title": "Sacred Crafting Arts",
        "text": "Tvashtar guides you through the fundamentals of the Shilpa Shastra. You learn to purify yourself through meditation, to prepare materials with sacred mantras, to create with divine intent, and to invoke spiritual essence into your creations. As you complete a simple crafting exercise\u2014creating a small resonance bell\u2014Tvashtar nods with approval. 'You have an aptitude for this. The bell you've created will help you detect divine vibrations. It may prove useful in your search for the temple melody.'",
        "choices": [
            { "text": "Thank Tvashtar and take the resonance bell.", "nextScene": "TVASHTAR_WORKSHOP", "worldStateTriggers": { "has_resonance_bell": true } }
        ]
    },

    "EXAMINE_ARTIFACTS": {
        "title": "Divine Creations",
        "text": "The workshop contains countless divine artifacts in various stages of completion: celestial weapons that could slay demons with a touch, instruments that could charm the cosmos itself, jewelry that would grant the wearer godlike abilities. One item catches your attention\u2014a small tuning fork made of an opalescent metal. Unlike the other artifacts, it seems complete, yet Tvashtar has set it aside.",
        "choices": [
            { "text": "Ask Tvashtar about the tuning fork.", "nextScene": "TUNING_FORK_INQUIRY" },
            { "text": "Return to exploring the workshop.", "nextScene": "TVASHTAR_WORKSHOP" }
        ]
    },

    "TUNING_FORK_INQUIRY": {
        "title": "The Perfect Fifth",
        "text": "'Ah, you noticed that.' Tvashtar picks up the tuning fork. 'This is tuned to the perfect fifth\u2014the note Pa in the sacred scale. I created it for Saraswati herself, but with the temple sealed...' He strikes the fork against his palm, and it emits a pure, clear tone that momentarily pushes back the silence. 'Take it. Perhaps at the temple, its resonance might help you discern the correct melody.'",
        "choices": [
            { "text": "Accept the tuning fork with gratitude.", "nextScene": "TVASHTAR_WORKSHOP", "worldStateTriggers": { "has_tuning_fork": true } }
        ]
    },

    "STUDY_SHILPA_SHASTRA": {
        "title": "Ancient Crafting Texts",
        "text": "You examine the sacred texts of the Shilpa Shastra, divine manuals of creation and craftsmanship. The texts are written in celestial script that somehow translates itself as you read. You learn about the sacred geometries, the properties of divine materials, and the rituals of creation. One passage catches your attention\u2014a description of how Saraswati's temple was constructed with acoustics that respond to specific musical sequences.",
        "choices": [
            { "text": "Study the temple acoustics section carefully.", "nextScene": "TEMPLE_ACOUSTICS" },
            { "text": "Return to exploring the workshop.", "nextScene": "TVASHTAR_WORKSHOP" }
        ]
    },

    "TEMPLE_ACOUSTICS": {
        "title": "Divine Harmonics",
        "text": "The text explains that Saraswati's temple was designed to amplify certain harmonics while dampening others. 'The entrance responds to a five-note sequence that embodies Saraswati's essence: knowledge (Sa), creativity (Ga), harmony (Pa), revelation (Dha), and transcendence (Ni). When played in the correct order, these notes create a resonance pattern that unlocks the temple door.' While the text doesn't specify the exact order, this confirms the notes you need to discover.",
        "choices": [
            { "text": "Make note of this information.", "nextScene": "TVASHTAR_WORKSHOP", "worldStateTriggers": { "learned_note_meanings": true } }
        ]
    },

    "TEMPLE_VICINITY": {
        "title": "The Sunken Temple",
        "text": "You arrive at the edge of a vast, perfectly still lake of celestial water. Beneath its mirrored surface, you can see the magnificent domed structure of Saraswati's Sunken Temple. The temple appears to be built from crystalline material that shifts between white and blue, with intricate carvings depicting the arts and sciences Saraswati governs. At the lake's edge stands an ornate platform with five crystal chimes arranged in a semicircle\u2014clearly the lock mechanism Indra mentioned.",
        "interactions": [
            { "verb": "Examine", "noun": "Crystal Chimes", "scene": "EXAMINE_CHIMES" },
            { "verb": "Study", "noun": "Temple Reflections", "scene": "STUDY_REFLECTIONS" },
            { "verb": "Listen to", "noun": "The Silence", "scene": "LISTEN_SILENCE" },
            { "verb": "Return to", "noun": "Indra's Court", "scene": "INDRAS_COURT" }
        ]
    },

    "EXAMINE_CHIMES": {
        "title": "The Musical Lock",
        "text": "The five crystal chimes are masterfully crafted, each tuned to a specific note of the sacred scale. When struck, they produce tones of extraordinary purity that ripple across the lake's surface. An inscription on the platform reads: 'Speak Saraswati's essence in the language of divine sound, and the path will open.' It's clear that playing the five correct notes in the proper sequence will unlock the temple entrance.",
        "choices": [
            { "text": "Try to play the melody (if you know all five notes).", "nextScene": "ATTEMPT_MELODY", "condition": (state) => state.melody_fragment_1 && state.melody_fragment_2 && state.melody_fragment_3 && state.melody_fragment_4 && state.melody_fragment_5 },
            { "text": "Return to the temple vicinity.", "nextScene": "TEMPLE_VICINITY" }
        ]
    },

    "STUDY_REFLECTIONS": {
        "title": "Mirrored Wisdom",
        "text": "You gaze into the lake, studying the temple's reflection. Strangely, the reflection doesn't perfectly match the temple beneath\u2014there are subtle differences. In the reflection, you can see inside the temple to its central chamber, where a divine figure (presumably Saraswati) plays a veena. As you watch, the reflection shifts, and you see the figure's fingers move across the strings in a specific pattern, as if showing you a sequence.",
        "choices": [
            { "text": "Focus on the finger movements.", "nextScene": "OBSERVE_SEQUENCE" },
            { "text": "Return to the temple vicinity.", "nextScene": "TEMPLE_VICINITY" }
        ]
    },

    "OBSERVE_SEQUENCE": {
        "title": "The Goddess's Guidance",
        "text": "As you concentrate on the reflection, the sequence becomes clearer. The divine figure plays five notes in succession: Sa, Ga, Pa, Dha, Ni. The reflection ripples and fades, but you've seen enough to understand the correct order of the melody that will unlock the temple.",
        "choices": [
            { "text": "Remember this sequence.", "nextScene": "TEMPLE_VICINITY", "worldStateTriggers": { "knows_full_melody": true } }
        ]
    },

    "LISTEN_SILENCE": {
        "title": "The Void Between Notes",
        "text": "You close your eyes and focus on the silence emanating from the temple. It's not merely an absence of sound but an active force\u2014a void that consumes harmony and inspiration. Yet within this unnatural silence, you detect a faint countermelody, as if something within the temple is fighting against the silence, sending out pulses of pure sound in a rhythmic pattern.",
        "choices": [
            { "text": "Use the resonance bell to amplify these sounds.", "nextScene": "AMPLIFY_COUNTERMELODY", "condition": (state) => state.has_resonance_bell },
            { "text": "Return to the temple vicinity.", "nextScene": "TEMPLE_VICINITY" }
        ]
    },

    "AMPLIFY_COUNTERMELODY": {
        "title": "Echoes of Resistance",
        "text": "You ring the resonance bell Tvashtar gave you. It amplifies the faint countermelody, making it clearly audible. The pattern is unmistakable\u2014Sa, Ga, Pa, Dha, Ni\u2014played repeatedly, like a call for help. This must be the correct sequence to unlock the temple. As the bell's resonance fades, you feel certain you now know the melody needed to open the temple entrance.",
        "choices": [
            { "text": "Remember this melody.", "nextScene": "TEMPLE_VICINITY", "worldStateTriggers": { "knows_full_melody": true } }
        ]
    },

    "ATTEMPT_MELODY": {
        "title": "The Sacred Sequence",
        "text": "Standing before the crystal chimes, you prepare to play the melody you've discovered. The correct sequence is Sa, Ga, Pa, Dha, Ni\u2014representing knowledge, creativity, harmony, revelation, and transcendence. With focused intent, you strike each chime in succession.",
        "choices": [
            { "text": "Play: Sa, Ga, Pa, Dha, Ni", "nextScene": "MELODY_SUCCESS", "condition": (state) => state.knows_full_melody },
            { "text": "Try a different sequence", "nextScene": "MELODY_FAILURE" }
        ]
    },

    "MELODY_FAILURE": {
        "title": "Discordant Echoes",
        "text": "The notes you play echo across the lake, but nothing happens. The temple remains sealed beneath the waters. Perhaps the sequence is incorrect, or you're missing something essential about how to play the chimes. You'll need to gather more information before trying again.",
        "choices": [
            { "text": "Return to the temple vicinity.", "nextScene": "TEMPLE_VICINITY" }
        ]
    },

    "MELODY_SUCCESS": {
        "title": "Harmonic Resonance",
        "text": "As you strike the final note, the five tones hang in the air, harmonizing perfectly. The lake's surface begins to ripple, then part, revealing a crystal bridge that descends to the temple entrance. The massive doors of the temple slowly swing open, inviting you inside. You've successfully unlocked the Sunken Temple of Saraswati.",
        "choices": [
            { "text": "Enter the temple.", "nextScene": "TEMPLE_ENTRANCE" }
        ]
    },

    "TEMPLE_ENTRANCE": {
        "title": "Threshold of Knowledge",
        "text": "You descend the crystal bridge and step into Saraswati's temple. Despite being underwater, the interior is perfectly dry and illuminated by a soft, ambient light that seems to emanate from the walls themselves. The entrance hall is lined with statues of great sages, musicians, and artists from across the cosmos. At the far end, an ornate doorway leads deeper into the temple, toward the central chamber.",
        "choices": [
            { "text": "Proceed to the central chamber.", "nextScene": "CENTRAL_CHAMBER" }
        ]
    },

    "CENTRAL_CHAMBER": {
        "title": "The Heart of Inspiration",
        "text": "The central chamber is a vast, domed space with perfect acoustics. At its center stands a raised platform where the Veena of Creation should rest\u2014but the instrument is missing. In its place hovers a dark, pulsating crystal that emits waves of silence, visibly distorting the air around it. The crystal is clearly the source of the Celestial Silence affecting Svarga.",
        "choices": [
            { "text": "Examine the dark crystal.", "nextScene": "EXAMINE_CRYSTAL" },
            { "text": "Search for the missing Veena.", "nextScene": "SEARCH_VEENA" },
            { "text": "Look for clues about what happened.", "nextScene": "SEARCH_CLUES" }
        ]
    },

    "EXAMINE_CRYSTAL": {
        "title": "The Silence Incarnate",
        "text": "As you approach the crystal, the silence intensifies painfully. The crystal appears to be a perversion of divine craftsmanship\u2014a creation specifically designed to absorb and negate celestial harmonies. Within its dark depths, you can see swirling patterns that seem to consume light and sound. This is no natural formation but a deliberately crafted artifact of immense power.",
        "choices": [
            { "text": "Attempt to neutralize the crystal.", "nextScene": "NAKSHATRA_PATHS" },
            { "text": "Return to the central chamber.", "nextScene": "CENTRAL_CHAMBER" }
        ]
    },

    "SEARCH_VEENA": {
        "title": "The Missing Instrument",
        "text": "You search the chamber for the Veena of Creation. In an alcove behind the central platform, you find a shattered display stand. Fragments of celestial material are scattered nearby\u2014all that remains of the divine instrument. It appears the Veena was deliberately destroyed, and its essence somehow captured within the dark crystal.",
        "choices": [
            { "text": "Return to the central chamber.", "nextScene": "CENTRAL_CHAMBER", "worldStateTriggers": { "found_veena_fragments": true } }
        ]
    },

    "SEARCH_CLUES": {
        "title": "Traces of Intrusion",
        "text": "You carefully examine the chamber for clues. Near one wall, you find strange footprints that shimmer with an oily residue. There are scorch marks on some of the decorative panels, suggesting a struggle. Most telling is a torn piece of fabric caught on a carved projection\u2014a material that shifts colors like oil on water, matching the description of the mysterious visitor Rambha mentioned.",
        "choices": [
            { "text": "Return to the central chamber.", "nextScene": "CENTRAL_CHAMBER", "worldStateTriggers": { "found_visitor_evidence": true } }
        ]
    },

    "NAKSHATRA_PATHS": {
        "title": "The Cosmic Challenge",
        "text": "Standing before the dark crystal, you realize that neutralizing it will require drawing upon your deepest spiritual nature\u2014the power of your Nakshatra. The crystal seems to react to your presence, its pulsations changing rhythm as if recognizing a threat. You sense that your approach must align with your soul's innate qualities to succeed.",
        "choices": [
            // Deva Gana
            { "text": "[Ashwini] Use your healing power to purify the crystal.", "nextScene": "CRYSTAL_ASHWINI", "condition": (profile) => profile.nakshatra === 'Ashwini' },
            { "text": "[Mrigashira] Seek the fulfilling path to neutralize the crystal.", "nextScene": "CRYSTAL_MRIGASHIRA", "condition": (profile) => profile.nakshatra === 'Mrigashira' },
            { "text": "[Punarvasu] Attempt to regenerate the crystal's original nature.", "nextScene": "CRYSTAL_PUNARVASU", "condition": (profile) => profile.nakshatra === 'Punarvasu' },
            { "text": "[Pushya] Channel spiritual energy to transform the crystal.", "nextScene": "CRYSTAL_PUSHYA", "condition": (profile) => profile.nakshatra === 'Pushya' },
            { "text": "[Hasta] Use your skilled hands to reshape the crystal.", "nextScene": "CRYSTAL_HASTA", "condition": (profile) => profile.nakshatra === 'Hasta' },
            { "text": "[Swati] Disperse the crystal's negative energy like the wind.", "nextScene": "CRYSTAL_SWATI", "condition": (profile) => profile.nakshatra === 'Swati' },
            { "text": "[Anuradha] Perform a devotional ritual to counter the crystal.", "nextScene": "CRYSTAL_ANURADHA", "condition": (profile) => profile.nakshatra === 'Anuradha' },
            { "text": "[Shravana] Listen for the crystal's harmonic weakness.", "nextScene": "CRYSTAL_SHRAVANA", "condition": (profile) => profile.nakshatra === 'Shravana' },
            { "text": "[Revati] Nourish the space with positive energy to neutralize the crystal.", "nextScene": "CRYSTAL_REVATI", "condition": (profile) => profile.nakshatra === 'Revati' },
            
            // Manushya Gana
            { "text": "[Bharani] Initiate a cycle of renewal to transform the crystal.", "nextScene": "CRYSTAL_BHARANI", "condition": (profile) => profile.nakshatra === 'Bharani' },
            { "text": "[Rohini] Nurture growth of positive energy to counter the crystal.", "nextScene": "CRYSTAL_ROHINI", "condition": (profile) => profile.nakshatra === 'Rohini' },
            { "text": "[Ardra] Channel emotional energy to shatter the crystal.", "nextScene": "CRYSTAL_ARDRA", "condition": (profile) => profile.nakshatra === 'Ardra' },
            { "text": "[Purva Phalguni] Bring joy and love to dissolve the crystal's negativity.", "nextScene": "CRYSTAL_PURVA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Purva Phalguni' },
            { "text": "[Uttara Phalguni] Create a secure boundary to contain and neutralize the crystal.", "nextScene": "CRYSTAL_UTTARA_PHALGUNI", "condition": (profile) => profile.nakshatra === 'Uttara Phalguni' },
            { "text": "[Purva Ashadha] Strengthen your spiritual presence to overpower the crystal.", "nextScene": "CRYSTAL_PURVA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Purva Ashadha' },
            { "text": "[Uttara Ashadha] Invoke the highest good to transform the crystal.", "nextScene": "CRYSTAL_UTTARA_ASHADHA", "condition": (profile) => profile.nakshatra === 'Uttara Ashadha' },
            { "text": "[Purva Bhadrapada] Elevate the crystal's vibration to a higher state.", "nextScene": "CRYSTAL_PURVA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Purva Bhadrapada' },
            { "text": "[Uttara Bhadrapada] Bring stability to neutralize the crystal's chaos.", "nextScene": "CRYSTAL_UTTARA_BHADRAPADA", "condition": (profile) => profile.nakshatra === 'Uttara Bhadrapada' },
            
            // Rakshasa Gana
            { "text": "[Krittika] Burn away the illusion maintaining the crystal.", "nextScene": "CRYSTAL_KRITTIKA", "condition": (profile) => profile.nakshatra === 'Krittika' },
            { "text": "[Ashlesha] Use subtle poison to neutralize the crystal's effect.", "nextScene": "CRYSTAL_ASHLESHA", "condition": (profile) => profile.nakshatra === 'Ashlesha' },
            { "text": "[Magha] Project your consciousness to understand the crystal's nature.", "nextScene": "CRYSTAL_MAGHA", "condition": (profile) => profile.nakshatra === 'Magha' },
            { "text": "[Chitra] Identify the pattern that will disrupt the crystal.", "nextScene": "CRYSTAL_CHITRA", "condition": (profile) => profile.nakshatra === 'Chitra' },
            { "text": "[Vishakha] Attack the crystal from multiple angles simultaneously.", "nextScene": "CRYSTAL_VISHAKHA", "condition": (profile) => profile.nakshatra === 'Vishakha' },
            { "text": "[Jyeshtha] Assert dominance over the crystal to subdue it.", "nextScene": "CRYSTAL_JYESHTHA", "condition": (profile) => profile.nakshatra === 'Jyeshtha' },
            { "text": "[Mula] Destroy the root cause maintaining the crystal.", "nextScene": "CRYSTAL_MULA", "condition": (profile) => profile.nakshatra === 'Mula' },
            { "text": "[Dhanishtha] Transform the crystal into something of value.", "nextScene": "CRYSTAL_DHANISHTHA", "condition": (profile) => profile.nakshatra === 'Dhanishtha' },
            { "text": "[Shatabhisha] Heal the entire system to neutralize the crystal.", "nextScene": "CRYSTAL_SHATABHISHA", "condition": (profile) => profile.nakshatra === 'Shatabhisha' }
        ]
    },

    // Deva Gana Crystal Solutions
    "CRYSTAL_ASHWINI": {
        "title": "The Healer's Touch",
        "text": "Drawing upon your Ashwini nature, you extend your healing energy toward the crystal. Your power to heal quickly allows you to identify the crystal's fundamental imbalance. You place your hands near it, not touching but channeling purifying energy that begins to neutralize its corruption. The crystal resists at first, but your persistent healing gradually transforms its dark energy into clear light. The silence recedes as the crystal's structure realigns with cosmic harmony.",
        "choices": [
            { "text": "Complete the healing process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To heal quickly",
            "gunas": ["Rajas", "Rajas", "Rajas"]
        }
    },

    "CRYSTAL_MRIGASHIRA": {
        "title": "The Path of Fulfillment",
        "text": "Your Mrigashira nature guides you to seek the most fulfilling solution. You perceive that the crystal, though corrupted, contains fragments of divine harmony trapped within its structure. Rather than opposing it directly, you begin a gentle, persistent search for these fragments, drawing them outward. Your seeking nature allows you to find and amplify these hidden harmonies until they overpower the dissonance. The crystal gradually shifts from darkness to light as its true nature is fulfilled.",
        "choices": [
            { "text": "Complete the transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To find fulfillment",
            "gunas": ["Rajas", "Tamas", "Tamas"]
        }
    },

    "CRYSTAL_PUNARVASU": {
        "title": "Cosmic Regeneration",
        "text": "You call upon your Punarvasu power of regeneration. Recognizing that the crystal was once part of something divine before being corrupted, you focus on recovering its original nature. You create a field of regenerative energy around it, encouraging the crystal to remember its true purpose. Gradually, the dark crystal begins to pulse with renewed light as its divine essence is recovered. What was broken begins to heal, and the silence gives way to the first notes of returning harmony.",
        "choices": [
            { "text": "Complete the regeneration.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To regenerate and recover",
            "gunas": ["Rajas", "Sattva", "Rajas"]
        }
    },

    "CRYSTAL_PUSHYA": {
        "title": "Spiritual Nourishment",
        "text": "Drawing on your Pushya nature, you create a powerful field of spiritual energy. You understand that the crystal's darkness comes from spiritual starvation\u2014it has been cut off from the divine source. You become a conduit for cosmic energy, channeling it directly into the crystal's core. The influx of pure spiritual nourishment overwhelms the negative programming, causing the crystal to vibrate with increasing harmony. Its darkness gradually gives way to radiant light as it reconnects with divine purpose.",
        "choices": [
            { "text": "Complete the spiritual infusion.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To create spiritual energy",
            "gunas": ["Rajas", "Sattva", "Tamas"]
        }
    },

    "CRYSTAL_HASTA": {
        "title": "The Craftsman's Skill",
        "text": "Your Hasta nature gives you unparalleled manual dexterity and the power to manifest desires through skilled hands. You approach the crystal with confident precision, your fingers moving in complex mudras that reshape energy patterns. Though you never physically touch the crystal, your gestures manipulate its structure at a fundamental level, rearranging its chaotic vibrations into harmonious patterns. Under your skilled guidance, the crystal's form shifts from an instrument of silence to one of divine sound.",
        "choices": [
            { "text": "Complete the recrafting.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To manifest desires",
            "gunas": ["Tamas", "Tamas", "Rajas"]
        }
    },

    "CRYSTAL_SWATI": {
        "title": "Winds of Change",
        "text": "Embracing your Swati nature, you become like the wind itself\u2014a force that can scatter and disperse. You create a spiritual cyclone around the crystal, your energy moving with increasing speed and intensity. The whirling vortex begins to separate the crystal's negative energy from its core structure, dispersing the harmful elements while preserving its essence. Like chaff blown from grain, the silence is scattered to the cosmic winds, leaving only pure resonance behind.",
        "choices": [
            { "text": "Complete the dispersion.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To scatter like the wind",
            "gunas": ["Tamas", "Tamas", "Sattva"]
        }
    },

    "CRYSTAL_ANURADHA": {
        "title": "The Power of Devotion",
        "text": "Your Anuradha nature channels the power of worship and devotion. You kneel before the crystal, not in submission but in profound reverence for the divine harmony it once served. You begin a heartfelt prayer to Saraswati, your devotion creating a tangible field of pure bhakti energy. This unconditional love and reverence proves antithetical to the crystal's disharmony. Unable to maintain its corruption in the presence of such devotion, the crystal begins to resonate with your prayer, its darkness dissolving into light.",
        "choices": [
            { "text": "Complete your devotional offering.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To worship (Bhakti)",
            "gunas": ["Tamas", "Sattva", "Tamas"]
        }
    },

    "CRYSTAL_SHRAVANA": {
        "title": "The Divine Listener",
        "text": "Your Shravana nature gives you unparalleled ability to listen and connect through sound. You close your eyes and open your spiritual ears, listening not to the silence but through it. Beneath the apparent void, you detect the crystal's true harmonic signature\u2014a divine sound struggling to express itself. You begin to hum this exact frequency, creating a resonance that strengthens the crystal's original nature. As you maintain this perfect tone, the crystal begins to vibrate in sympathy, its darkness giving way to light as it remembers its true voice.",
        "choices": [
            { "text": "Complete the harmonic restoration.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To connect",
            "gunas": ["Sattva", "Tamas", "Rajas"]
        }
    },

    "CRYSTAL_REVATI": {
        "title": "Transcendent Nourishment",
        "text": "Drawing on your Revati nature, you become a conduit for nourishing, transcendent energy. You understand that the crystal's corruption stems from spiritual starvation. You extend your hands, palms facing the crystal, and begin to channel pure, sustaining energy into it. Like a parched plant receiving water, the crystal absorbs this nourishment eagerly. As you continue, the crystal's dark nature is gradually overwhelmed by the influx of positive energy, its structure transcending its corrupted state and returning to divine harmony.",
        "choices": [
            { "text": "Complete the nourishment process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Deva",
            "shakti": "To nourish and transcend",
            "gunas": ["Sattva", "Sattva", "Sattva"]
        }
    },

    // Manushya Gana Crystal Solutions
    "CRYSTAL_BHARANI": {
        "title": "Cycle of Renewal",
        "text": "Your Bharani nature connects you to the cosmic cycles of death and rebirth. You recognize that the crystal's corruption is part of a cycle that must be completed before renewal can begin. You create a ritual space around the crystal and begin a powerful ceremony of purification. Your energy accelerates the crystal's negative cycle to its natural conclusion, allowing its darkness to burn itself out completely. From this state of emptiness, you then guide the crystal's rebirth into its original, harmonious form.",
        "choices": [
            { "text": "Complete the renewal cycle.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To renew and purify",
            "gunas": ["Rajas", "Rajas", "Tamas"]
        }
    },

    "CRYSTAL_ROHINI": {
        "title": "Nurturing Growth",
        "text": "Your Rohini nature gives you the power to nurture growth in all things. You approach the crystal with gentle determination, sensing the small seed of harmony still present within its corrupted form. Like a skilled gardener, you begin to nurture this seed, encouraging it to grow and flourish. You create a field of nurturing energy that provides exactly what the dormant harmony needs. Gradually, this positive aspect grows stronger, pushing back the darkness until the entire crystal blooms with divine light.",
        "choices": [
            { "text": "Complete the nurturing process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To make things grow",
            "gunas": ["Rajas", "Tamas", "Rajas"]
        }
    },

    "CRYSTAL_ARDRA": {
        "title": "Emotional Catharsis",
        "text": "Your Ardra nature connects you to the power of raw emotion and transformative action. You sense that the crystal's corruption is like frozen grief\u2014emotion trapped in stasis. You begin to channel intense emotional energy toward the crystal, creating a storm of feeling that breaks through its rigid structure. This emotional catharsis forces the crystal to 'feel' again, shaking it out of stagnation. As the emotional storm subsides, the crystal finds a new equilibrium, its darkness transformed into clear, expressive light.",
        "choices": [
            { "text": "Complete the emotional transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To feel and act",
            "gunas": ["Rajas", "Tamas", "Sattva"]
        }
    },

    "CRYSTAL_PURVA_PHALGUNI": {
        "title": "The Joy of Creation",
        "text": "Your Purva Phalguni nature connects you to the power of joy, love, and creative pleasure. You recognize that the crystal's corruption stems from disconnection from these essential energies. You begin to dance around the crystal, your movements expressing pure joy and creative delight. This display of uninhibited positive energy creates a field of pleasure and love that proves irresistible to the crystal's true nature. Gradually, the crystal begins to pulse in rhythm with your dance, its darkness giving way to warm, rosy light.",
        "choices": [
            { "text": "Complete the joyful transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To find love and enjoyment",
            "gunas": ["Tamas", "Rajas", "Tamas"]
        }
    },

    "CRYSTAL_UTTARA_PHALGUNI": {
        "title": "Bonds of Security",
        "text": "Your Uttara Phalguni nature gives you the power to create security and stability through formal bonds. You approach the crystal with authoritative precision, establishing a clear energetic boundary around it. Within this boundary, you create a structured field of positive energy with clear rules and patterns. This orderly environment provides the security the crystal needs to release its chaotic aspects. Like a wild force tamed by proper boundaries, the crystal's energy gradually aligns with your structured field, transforming from darkness to light.",
        "choices": [
            { "text": "Complete the stabilization process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To accumulate security",
            "gunas": ["Tamas", "Rajas", "Sattva"]
        }
    },

    "CRYSTAL_PURVA_ASHADHA": {
        "title": "Invigorating Force",
        "text": "Your Purva Ashadha nature gives you the power to invigorate and strengthen. You approach the crystal with unwavering determination, channeling your vital energy directly into its core. This powerful infusion of strength overwhelms the crystal's negative programming, forcing it to adapt to your superior energy pattern. Like a river changing course due to a stronger current, the crystal's energy begins to flow in harmony with your invigorating force, its darkness gradually brightening into clear, purposeful light.",
        "choices": [
            { "text": "Complete the invigorating process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To invigorate or strengthen",
            "gunas": ["Sattva", "Rajas", "Tamas"]
        }
    },

    "CRYSTAL_UTTARA_ASHADHA": {
        "title": "The Highest Good",
        "text": "Your Uttara Ashadha nature connects you to the power of universal victory\u2014winning for the highest good of all. You stand before the crystal and make a formal declaration of intent, stating that you seek not to destroy but to transform for the benefit of cosmic harmony. This pure intention creates a field of dharmic energy that resonates with the crystal's original purpose. Unable to resist this call to its highest nature, the crystal begins to align with universal law, its darkness giving way to righteous, golden light.",
        "choices": [
            { "text": "Complete the righteous transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To win for the highest good",
            "gunas": ["Sattva", "Rajas", "Sattva"]
        }
    },

    "CRYSTAL_PURVA_BHADRAPADA": {
        "title": "Spiritual Elevation",
        "text": "Your Purva Bhadrapada nature gives you the power to raise things to a higher state. You recognize that the crystal is trapped in a lower vibrational state and needs elevation. You begin a ritual of ascension, creating a spiritual ladder of increasingly refined energies. Starting from the crystal's current state, you establish a series of steps leading to higher and higher frequencies. The crystal responds to this guidance, gradually climbing the vibrational ladder you've created until it reaches a state of divine harmony.",
        "choices": [
            { "text": "Complete the elevation process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To raise a person up",
            "gunas": ["Sattva", "Sattva", "Rajas"]
        }
    },

    "CRYSTAL_UTTARA_BHADRAPADA": {
        "title": "Waters of Stability",
        "text": "Your Uttara Bhadrapada nature connects you to the power of rain and stability. You sense that the crystal's chaotic energy needs the soothing, stabilizing influence of divine waters. You begin to generate a spiritual rainfall around the crystal\u2014not physical water, but the essence of cosmic stability and nourishment. This gentle but persistent force begins to erode the crystal's sharp edges of disharmony, washing away layers of corruption. Gradually, the crystal is cleansed and stabilized, its darkness giving way to a clear, tranquil light.",
        "choices": [
            { "text": "Complete the stabilization process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Manushya",
            "shakti": "To bring rain and stability",
            "gunas": ["Sattva", "Sattva", "Tamas"]
        }
    },

    // Rakshasa Gana Crystal Solutions
    "CRYSTAL_KRITTIKA": {
        "title": "Burning Illusions",
        "text": "Your Krittika nature connects you to the purifying power of fire. You perceive that the crystal's darkness is actually an illusion\u2014a false construct overlaid on its true nature. You summon your inner fire, focusing it into a beam of pure truth that cuts through deception. This spiritual flame doesn't destroy but reveals, burning away the veils of illusion surrounding the crystal. Layer by layer, the false darkness is consumed, revealing the crystal's true luminous form beneath.",
        "choices": [
            { "text": "Complete the purification by fire.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To burn illusion",
            "gunas": ["Rajas", "Rajas", "Sattva"]
        }
    },

    "CRYSTAL_ASHLESHA": {
        "title": "Serpentine Wisdom",
        "text": "Your Ashlesha nature gives you mastery over subtle poisons and their antidotes. You recognize that the crystal's corruption is like a poison that must be countered with another, precisely calibrated energy. With serpentine precision, you begin to generate an opposing force\u2014a spiritual antivenom that targets the specific frequency of the crystal's disharmony. This counteragent infiltrates the crystal's structure, neutralizing its negative aspects while preserving its core essence. The darkness gradually gives way to clear, purified light.",
        "choices": [
            { "text": "Complete the neutralization process.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To poison and heal",
            "gunas": ["Rajas", "Sattva", "Sattva"]
        }
    },

    "CRYSTAL_MAGHA": {
        "title": "Ancestral Wisdom",
        "text": "Your Magha nature allows you to transcend physical limitations and connect with ancestral knowledge. You enter a deep meditative state, projecting your consciousness beyond your body and into the crystal itself. From within, you perceive its true history and the exact nature of its corruption. You also connect with the ancestral memory of the divine craftsmen who created the original instrument. Armed with this ancient knowledge, you begin to undo the corruption from within, guiding the crystal back to its intended form.",
        "choices": [
            { "text": "Complete the internal transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To leave the body",
            "gunas": ["Tamas", "Rajas", "Rajas"]
        }
    },

    "CRYSTAL_CHITRA": {
        "title": "Divine Design",
        "text": "Your Chitra nature gives you insight into patterns and designs that others cannot perceive. You study the crystal intently, seeing beyond its chaotic surface to the mathematical structure beneath. You identify a specific pattern\u2014a flaw in the crystal's design that maintains its corruption. With precise spiritual adjustments, you begin to correct this pattern, rearranging the crystal's internal geometry to match its original divine blueprint. As the pattern shifts, the crystal's appearance transforms from darkness to multicolored brilliance.",
        "choices": [
            { "text": "Complete the pattern correction.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To accumulate merit",
            "gunas": ["Tamas", "Tamas", "Tamas"]
        }
    },

    "CRYSTAL_VISHAKHA": {
        "title": "Multiple Victories",
        "text": "Your Vishakha nature gives you the power to achieve many goals simultaneously. You recognize that the crystal's corruption has multiple aspects that must be addressed concurrently. You divide your consciousness into several focused streams, each targeting a different aspect of the crystal's disharmony. One stream provides positive energy, another disrupts the negative patterns, a third reinforces the crystal's original purpose, and so on. This multi-pronged approach overwhelms the crystal's defenses, forcing a rapid and complete transformation from darkness to light.",
        "choices": [
            { "text": "Complete the multi-faceted transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To achieve many things",
            "gunas": ["Tamas", "Sattva", "Rajas"]
        }
    },

    "CRYSTAL_JYESHTHA": {
        "title": "Sovereign Command",
        "text": "Your Jyeshtha nature connects you to the power of sovereignty and conquest. You approach the crystal with absolute authority, your spiritual presence expanding to fill the chamber. You issue a direct command to the crystal, not with words but with pure will, ordering it to return to its original state of harmony. This overwhelming display of spiritual dominance creates a hierarchy the crystal cannot resist. Recognizing your superior authority, it begins to align with your command, its darkness giving way to obedient, orderly light.",
        "choices": [
            { "text": "Complete the authoritative transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To rise and conquer",
            "gunas": ["Tamas", "Sattva", "Sattva"]
        }
    },

    "CRYSTAL_MULA": {
        "title": "Destroying the Root",
        "text": "Your Mula nature gives you the power to identify and destroy the root cause of problems. You examine the crystal with penetrating insight, tracing its corruption to a single point of origin deep within its structure. This root node maintains the entire network of disharmony. With surgical precision, you direct a focused beam of destructive energy at this exact point. As the root is severed, the entire system of corruption begins to collapse, allowing the crystal's natural harmony to reassert itself from the inside out.",
        "choices": [
            { "text": "Complete the root destruction.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To ruin or destroy",
            "gunas": ["Sattva", "Rajas", "Rajas"]
        }
    },

    "CRYSTAL_DHANISHTHA": {
        "title": "Abundant Transformation",
        "text": "Your Dhanishtha nature connects you to the power of abundance and prosperity. You perceive that the crystal, despite its corruption, contains vast potential wealth\u2014not material riches, but spiritual abundance. You begin to stimulate this potential, encouraging the crystal to express its true wealth of harmony. Like a skilled investor multiplying assets, you amplify every trace of positive energy within the crystal until it becomes self-sustaining. The darkness recedes as the crystal begins to generate its own abundant light, becoming a source of harmony rather than silence.",
        "choices": [
            { "text": "Complete the prosperous transformation.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To give fame and abundance",
            "gunas": ["Sattva", "Tamas", "Tamas"]
        }
    },

    "CRYSTAL_SHATABHISHA": {
        "title": "Hundred Healings",
        "text": "Your Shatabhisha nature gives you the power to heal entire systems through multiple, simultaneous interventions. You perceive the crystal not as a single entity but as a complex system with a hundred different points of dysfunction. With remarkable precision, you begin to address each point individually, applying the exact healing energy needed for each specific imbalance. This comprehensive approach leaves no aspect of the corruption untreated. As the hundred healings progress, the crystal gradually transforms from a system of disharmony to one of perfect cosmic balance.",
        "choices": [
            { "text": "Complete the systematic healing.", "nextScene": "CRYSTAL_NEUTRALIZED" }
        ],
        "nakshatraAttributes": {
            "gana": "Rakshasa",
            "shakti": "To heal and support",
            "gunas": ["Sattva", "Tamas", "Sattva"]
        }
    },

    "CRYSTAL_NEUTRALIZED": {
        "title": "Harmony Restored",
        "text": "The dark crystal transforms completely, its oppressive silence giving way to pure, melodious sound. In its place now hovers a crystalline structure of perfect proportions that emits waves of harmonic energy. The chamber fills with divine music as the temple awakens from its dormancy. Behind the platform where the crystal hovered, a hidden compartment opens, revealing a figure emerging from meditation\u2014Saraswati herself, the goddess of knowledge, music, and arts.",
        "choices": [
            { "text": "Bow respectfully to the goddess.", "nextScene": "SARASWATI_REVELATION" }
        ]
    },

    "SARASWATI_REVELATION": {
        "title": "Divine Wisdom",
        "text": "Saraswati regards you with eyes of infinite wisdom. 'You have done well to restore harmony to my temple,' she says, her voice like perfect music. 'The being who created that crystal of silence was Disharmony incarnate\u2014an entity born from the Devas' own arrogance and neglect of true devotion. It sought to silence all divine music, replacing creation with void.' She gestures, and a new Veena of Creation materializes in her hands. 'Return to Indra with this message: true harmony comes not from power, but from devotion to one's purpose. The Celestial Silence was but a warning of what happens when divine beings forget their sacred duties.'",
        "choices": [
            { "text": "Accept Saraswati's wisdom and return to Indra's Court.", "nextScene": "RETURN_TO_INDRA" }
        ]
    },

    "RETURN_TO_INDRA": {
        "title": "The Concert of the Cosmos",
        "text": "You return to Indra's Court, where the King of Devas awaits anxiously. As you relay Saraswati's message, a change comes over Sudharma. The Celestial Silence recedes completely, replaced by music of transcendent beauty as Saraswati herself appears, playing the new Veena of Creation. The Gandharvas find their inspiration renewed, the Apsaras their grace restored. Indra acknowledges the wisdom in Saraswati's message, vowing that the Devas will recommit themselves to their sacred duties with true devotion. Your journey through Svarga has restored cosmic harmony and taught even the gods the true meaning of bhakti\u2014devotion that creates rather than commands.",
        "questStatus": "The Celestial Silence - Completed",
        "choices": [
            { "text": "Celebrate the restoration of harmony.", "nextScene": "ACT_CONCLUSION" }
        ]
    },

    "ACT_CONCLUSION": {
        "title": "The Path of Devotion",
        "text": "As the divine concert fills Svarga with renewed splendor, you reflect on your journey through the celestial realm. You have proven your worth not through righteous deeds alone, but by demonstrating a soul capable of creating beauty and resonating with cosmic harmony. The path of devotion\u2014Bhakti Marga\u2014has revealed itself as a powerful spiritual approach, complementing the path of action you mastered in the mortal world. Yet your spiritual journey is not complete. New horizons await as you continue your progression through the great paths of yoga toward ultimate liberation.",
        "choices": [
            { "text": "Prepare for the next stage of your journey...", "nextScene": "JOURNEY_TO_SVARGA" }
        ]
    }
};
