/**
 * nakshatraData.js
 * 
 * This file converts the NakshatraAttribute.json data into a JavaScript array
 * that can be used by the game.
 */

// Convert the JSON object to an array of nakshatra objects with proper structure
window.NAKSHATRA_ATTRIBUTES = [
    {
        name: "Ashwini",
        rulingPlanet: "Ketu",
        deity: "Ashvins",
        symbol: "Horse's Head",
        shakti: "To heal quickly",
        gana: "Deva",
        gunas: {
            sattva: 0,
            rajas: 3,
            tamas: 0
        },
        description: "Ashwini nakshatra represents healing, rejuvenation, and quick action. People born under this star are often skilled healers, quick thinkers, and have a natural ability to recover from setbacks."
    },
    {
        name: "Bharani",
        rulingPlanet: "Venus",
        deity: "Yama",
        symbol: "Yoni (Female Organ)",
        shakti: "To renew and purify",
        gana: "Manushya",
        gunas: {
            sattva: 0,
            rajas: 2,
            tamas: 1
        },
        description: "Bharani nakshatra represents transformation, restraint, and the cycle of birth and death. People born under this star often have a deep understanding of life's cycles and possess the ability to transform themselves and others."
    },
    {
        name: "Krittika",
        rulingPlanet: "Sun",
        deity: "Agni",
        symbol: "Knife or Spear",
        shakti: "To burn illusion",
        gana: "Rakshasa",
        gunas: {
            sattva: 1,
            rajas: 2,
            tamas: 0
        },
        description: "Krittika nakshatra represents purification through fire, clarity, and ambition. People born under this star often have a sharp intellect, strong determination, and the ability to cut through illusions."
    },
    {
        name: "Rohini",
        rulingPlanet: "Moon",
        deity: "Brahma/Prajapati",
        symbol: "Cart or Chariot",
        shakti: "To make things grow",
        gana: "Manushya",
        gunas: {
            sattva: 0,
            rajas: 2,
            tamas: 1
        },
        description: "Rohini nakshatra represents growth, fertility, and abundance. People born under this star often have a nurturing nature, creativity, and the ability to manifest material prosperity."
    },
    {
        name: "Mrigashira",
        rulingPlanet: "Mars",
        deity: "Soma (Chandra)",
        symbol: "Deer's Head",
        shakti: "To find fulfillment",
        gana: "Deva",
        gunas: {
            sattva: 0,
            rajas: 1,
            tamas: 2
        },
        description: "Mrigashira nakshatra represents seeking, exploration, and gentle persistence. People born under this star often have a curious nature, adaptability, and the ability to pursue their goals with gentle determination."
    },
    {
        name: "Ardra",
        rulingPlanet: "Rahu",
        deity: "Rudra",
        symbol: "Teardrop, Human Head",
        shakti: "To feel and act",
        gana: "Manushya",
        gunas: {
            sattva: 1,
            rajas: 1,
            tamas: 1
        },
        description: "Ardra nakshatra represents transformation through struggle, emotional intensity, and raw power. People born under this star often have strong emotions, resilience, and the ability to transform through challenging experiences."
    },
    {
        name: "Punarvasu",
        rulingPlanet: "Jupiter",
        deity: "Aditi",
        symbol: "Bow and Quiver",
        shakti: "To regenerate and recover",
        gana: "Deva",
        gunas: {
            sattva: 1,
            rajas: 2,
            tamas: 0
        },
        description: "Punarvasu nakshatra represents renewal, optimism, and abundance. People born under this star often have a positive outlook, adaptability, and the ability to bounce back from difficulties."
    },
    {
        name: "Pushya",
        rulingPlanet: "Saturn",
        deity: "Brihaspati",
        symbol: "Cow's Udder, Lotus",
        shakti: "To create spiritual energy",
        gana: "Deva",
        gunas: {
            sattva: 1,
            rajas: 1,
            tamas: 1
        },
        description: "Pushya nakshatra represents nourishment, spiritual growth, and inner strength. People born under this star often have a nurturing nature, wisdom, and the ability to provide guidance and support to others."
    },
    {
        name: "Ashlesha",
        rulingPlanet: "Mercury",
        deity: "Nagas/Sarpas",
        symbol: "Serpent",
        shakti: "To poison and heal",
        gana: "Rakshasa",
        gunas: {
            sattva: 2,
            rajas: 1,
            tamas: 0
        },
        description: "Ashlesha nakshatra represents intuition, mysticism, and transformation. People born under this star often have deep intuition, healing abilities, and the capacity to understand hidden truths."
    },
    {
        name: "Magha",
        rulingPlanet: "Ketu",
        deity: "Pitrs (Ancestors)",
        symbol: "Royal Throne",
        shakti: "To leave the body",
        gana: "Rakshasa",
        gunas: {
            sattva: 0,
            rajas: 2,
            tamas: 1
        },
        description: "Magha nakshatra represents power, leadership, and ancestral connections. People born under this star often have leadership qualities, dignity, and a strong connection to their heritage and lineage."
    },
    {
        name: "Purva Phalguni",
        rulingPlanet: "Venus",
        deity: "Bhaga",
        symbol: "Front Legs of Bed",
        shakti: "To find love and enjoyment",
        gana: "Manushya",
        gunas: {
            sattva: 0,
            rajas: 1,
            tamas: 2
        },
        description: "Purva Phalguni nakshatra represents creativity, enjoyment, and social harmony. People born under this star often have creative talents, charisma, and the ability to bring joy and pleasure to others."
    },
    {
        name: "Uttara Phalguni",
        rulingPlanet: "Sun",
        deity: "Aryaman",
        symbol: "Four Legs of Bed",
        shakti: "To accumulate security",
        gana: "Manushya",
        gunas: {
            sattva: 1,
            rajas: 1,
            tamas: 1
        },
        description: "Uttara Phalguni nakshatra represents stability, social harmony, and prosperity. People born under this star often have diplomatic skills, a sense of duty, and the ability to create stable and harmonious relationships."
    },
    {
        name: "Hasta",
        rulingPlanet: "Moon",
        deity: "Savitri (Surya)",
        symbol: "Hand or Fist",
        shakti: "To manifest desires",
        gana: "Deva",
        gunas: {
            sattva: 0,
            rajas: 1,
            tamas: 2
        },
        description: "Hasta nakshatra represents skill, manifestation, and practical action. People born under this star often have dexterity, practical intelligence, and the ability to manifest their goals through skillful action."
    },
    {
        name: "Chitra",
        rulingPlanet: "Mars",
        deity: "Tvastar",
        symbol: "Bright Jewel or Pearl",
        shakti: "To accumulate merit",
        gana: "Rakshasa",
        gunas: {
            sattva: 0,
            rajas: 0,
            tamas: 3
        },
        description: "Chitra nakshatra represents beauty, creativity, and distinction. People born under this star often have artistic talents, a unique vision, and the ability to create beauty and harmony in their environment."
    },
    {
        name: "Swati",
        rulingPlanet: "Rahu",
        deity: "Vayu",
        symbol: "Shoot of a Plant",
        shakti: "To scatter like the wind",
        gana: "Deva",
        gunas: {
            sattva: 1,
            rajas: 0,
            tamas: 2
        },
        description: "Swati nakshatra represents independence, adaptability, and spiritual growth. People born under this star often have a free spirit, versatility, and the ability to adapt to changing circumstances."
    },
    {
        name: "Vishakha",
        rulingPlanet: "Jupiter",
        deity: "Indra-Agni",
        symbol: "Triumphant Archway",
        shakti: "To achieve many things",
        gana: "Rakshasa",
        gunas: {
            sattva: 1,
            rajas: 1,
            tamas: 1
        },
        description: "Vishakha nakshatra represents determination, focus, and achievement. People born under this star often have strong willpower, purposefulness, and the ability to achieve their goals through focused effort."
    },
    {
        name: "Anuradha",
        rulingPlanet: "Saturn",
        deity: "Mitra",
        symbol: "Lotus Flower",
        shakti: "To worship (Bhakti)",
        gana: "Deva",
        gunas: {
            sattva: 1,
            rajas: 0,
            tamas: 2
        },
        description: "Anuradha nakshatra represents friendship, devotion, and cooperation. People born under this star often have loyalty, devotion, and the ability to create harmonious relationships based on mutual respect."
    },
    {
        name: "Jyeshtha",
        rulingPlanet: "Mercury",
        deity: "Indra",
        symbol: "Umbrella, Earring",
        shakti: "To rise and conquer",
        gana: "Rakshasa",
        gunas: {
            sattva: 2,
            rajas: 0,
            tamas: 1
        },
        description: "Jyeshtha nakshatra represents courage, leadership, and protection. People born under this star often have courage, protective instincts, and the ability to overcome obstacles through determination."
    },
    {
        name: "Mula",
        rulingPlanet: "Ketu",
        deity: "Nirriti",
        symbol: "Tied Bundle of Roots",
        shakti: "To ruin or destroy",
        gana: "Rakshasa",
        gunas: {
            sattva: 1,
            rajas: 2,
            tamas: 0
        },
        description: "Mula nakshatra represents transformation, destruction of the old, and spiritual seeking. People born under this star often have a transformative nature, spiritual depth, and the ability to break through limitations."
    },
    {
        name: "Purva Ashadha",
        rulingPlanet: "Venus",
        deity: "Apas (Water)",
        symbol: "Fan, Winnowing Basket",
        shakti: "To invigorate or strengthen",
        gana: "Manushya",
        gunas: {
            sattva: 1,
            rajas: 1,
            tamas: 1
        },
        description: "Purva Ashadha nakshatra represents purification, invigoration, and determination. People born under this star often have determination, clarity of purpose, and the ability to separate the essential from the non-essential."
    },
    {
        name: "Uttara Ashadha",
        rulingPlanet: "Sun",
        deity: "Visvedevas",
        symbol: "Elephant Tusk",
        shakti: "To win for the highest good",
        gana: "Manushya",
        gunas: {
            sattva: 2,
            rajas: 1,
            tamas: 0
        },
        description: "Uttara Ashadha nakshatra represents universal principles, victory, and integrity. People born under this star often have integrity, leadership qualities, and the ability to achieve victory through adherence to universal principles."
    },
    {
        name: "Shravana",
        rulingPlanet: "Moon",
        deity: "Vishnu",
        symbol: "Ear",
        shakti: "To connect",
        gana: "Deva",
        gunas: {
            sattva: 1,
            rajas: 1,
            tamas: 1
        },
        description: "Shravana nakshatra represents learning, connection, and spiritual wisdom. People born under this star often have good listening skills, spiritual inclination, and the ability to connect with higher knowledge."
    },
    {
        name: "Dhanishtha",
        rulingPlanet: "Mars",
        deity: "Vasus",
        symbol: "Drum or Flute",
        shakti: "To give fame and abundance",
        gana: "Rakshasa",
        gunas: {
            sattva: 1,
            rajas: 0,
            tamas: 2
        },
        description: "Dhanishtha nakshatra represents abundance, rhythm, and prosperity. People born under this star often have musical talents, prosperity consciousness, and the ability to create wealth and abundance."
    },
    {
        name: "Shatabhisha",
        rulingPlanet: "Rahu",
        deity: "Varuna",
        symbol: "Empty Circle, 1000 Flowers",
        shakti: "To heal and support",
        gana: "Rakshasa",
        gunas: {
            sattva: 2,
            rajas: 0,
            tamas: 1
        },
        description: "Shatabhisha nakshatra represents healing, innovation, and mystical knowledge. People born under this star often have healing abilities, scientific minds, and the capacity to understand hidden or occult knowledge."
    },
    {
        name: "Purva Bhadrapada",
        rulingPlanet: "Jupiter",
        deity: "Aja Ekapada",
        symbol: "Two Front Legs of Cot",
        shakti: "To raise a person up",
        gana: "Manushya",
        gunas: {
            sattva: 2,
            rajas: 1,
            tamas: 0
        },
        description: "Purva Bhadrapada nakshatra represents spiritual fire, inspiration, and transformation. People born under this star often have spiritual insight, inspirational qualities, and the ability to elevate themselves and others."
    },
    {
        name: "Uttara Bhadrapada",
        rulingPlanet: "Saturn",
        deity: "Ahir Budhyana",
        symbol: "Back Legs of Cot, Snake in Water",
        shakti: "To bring rain and stability",
        gana: "Manushya",
        gunas: {
            sattva: 2,
            rajas: 0,
            tamas: 1
        },
        description: "Uttara Bhadrapada nakshatra represents depth, healing waters, and spiritual wisdom. People born under this star often have depth of character, healing abilities, and the capacity to bring stability in times of change."
    },
    {
        name: "Revati",
        rulingPlanet: "Mercury",
        deity: "Pushan",
        symbol: "Pair of Fish, Drum",
        shakti: "To nourish and transcend",
        gana: "Deva",
        gunas: {
            sattva: 3,
            rajas: 0,
            tamas: 0
        },
        description: "Revati nakshatra represents nourishment, transcendence, and spiritual journey. People born under this star often have nurturing qualities, spiritual inclination, and the ability to transcend material limitations."
    }
];