# Samsara Saga

Samsara Saga is a narrative-driven game based on Hindu/Vedic concepts of karma, dharma, and spiritual evolution. In this journey through multiple acts, your choices shape your karma and determine your path through the cycle of rebirth.

## Game Structure

The game is built with a modular architecture consisting of four core engine files:

1. **GameStateManager.js** - The game's memory. It holds all player and world data but does not know about the story itself. Its logic is focused on state manipulation and persistence.

2. **StoryEngine.js** - The game's narrator and rule-keeper. It connects the player's state to the story data to figure out what should happen next.

3. **UIController.js** - The renderer. It is responsible for all DOM manipulation and knows nothing about game rules. It simply displays what the other engines tell it to.

4. **PuzzleEngine.js** - The puzzle master. It contains the specific logic for evaluating every puzzle in the game.

5. **main.js** - The entry point. It initializes all game components and sets up the game loop.

## Game Concepts

- **Nakshatra:** Your birth star that determines your innate qualities
- **Karma:** The cosmic principle of cause and effect
- **Dharma:** Your spiritual duty and righteous path
- **Gunas:** The three qualities that make up all of existence (Sattva, Rajas, Tamas)

## Story Structure

The game is divided into three acts, each with its own set of scenes, choices, and puzzles:

- **Act 1:** Introduction to the world and your character's journey
- **Act 2:** Deeper challenges and moral dilemmas
- **Act 3:** Final resolution and spiritual transformation

## How to Run

### Option 1: Using the Node.js Server (Recommended)

1. Make sure you have Node.js installed
2. Run the server script:
   ```
   ./run.sh
   ```
   Or directly with Node.js:
   ```
   node server.js
   ```
3. Open your browser and navigate to `http://localhost:3000`
4. Start a new game or load a saved game
5. Choose your Nakshatra (birth star) to begin your journey
6. Navigate through the story by making choices and solving puzzles

### Option 2: Direct File Access

1. Open `index.html` directly in a web browser
2. Start a new game or load a saved game
3. Choose your Nakshatra (birth star) to begin your journey
4. Navigate through the story by making choices and solving puzzles

Note: Some browsers may restrict localStorage access when opening files directly. Using the server method is recommended.

## Game Features

- **Character Creation:** Choose your Nakshatra to determine your innate qualities
- **Karma System:** Your choices affect your karma, which influences story outcomes
- **Inventory System:** Collect and use items throughout your journey
- **Dharmic Profile:** Track your progress in the four aspects of life (dharma, artha, kama, moksha)
- **Puzzle System:** Solve puzzles using your character's abilities and inventory items
- **Save/Load System:** Save your progress and continue your journey later

## File Structure

```
samsara-saga/
├── index.html              # Main HTML file
├── styles.css              # CSS styling
├── GameStateManager.js     # Game state management
├── StoryEngine.js          # Story progression logic
├── UIController.js         # UI rendering
├── PuzzleEngine.js         # Puzzle mechanics
├── main.js                 # Main initialization
├── nakshatraData.js        # Nakshatra attributes data
├── puzzles.js              # Puzzle definitions
├── ACT1storyData.js        # Act 1 story content
├── ACT2storyData.js        # Act 2 story content
├── ACT3storyData.js        # Act 3 story content
├── server.js               # Simple HTTP server
├── run.sh                  # Server startup script
├── 404.html                # 404 error page
├── test.js                 # Test script (for development)
├── ARCHITECTURE.md         # Architecture documentation
├── todo.md                 # Development task list
└── README.md               # This file
```

## Development

The game is built using vanilla JavaScript, HTML, and CSS. It uses a modular architecture to separate concerns and make the code more maintainable.

### Key Design Patterns

1. **Singleton Pattern:** GameStateManager is implemented as a singleton to ensure there's only one source of truth for game state.

2. **Observer Pattern:** The UIController observes changes in the game state and updates the UI accordingly.

3. **Command Pattern:** Player choices are processed as commands that modify the game state.

4. **Factory Pattern:** The StoryEngine creates scene objects based on the current game state.

5. **Strategy Pattern:** The PuzzleEngine uses different strategies to evaluate different types of puzzles.

## Credits

Samsara Saga is a fictional game created for educational purposes. It draws inspiration from Hindu/Vedic concepts and mythology.