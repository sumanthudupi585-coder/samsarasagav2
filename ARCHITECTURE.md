# Samsara Saga - Architecture Documentation

## Overview

Samsara Saga is built using a modular architecture that separates concerns into distinct components. This document explains how these components interact to create the game experience.

## Core Components

### 1. GameStateManager

**Purpose:** Manages all game state data and persistence.

**Responsibilities:**
- Stores player profile (nakshatra, gana, shakti, gunas)
- Tracks dynamic player state (act, scene, karma, inventory)
- Maintains world state flags and triggers
- Handles save/load functionality
- Provides methods for state manipulation

**Key Methods:**
- `init()`: Initialize a new game
- `saveGame()`: Save current state to localStorage
- `loadGame()`: Load saved state from localStorage
- `updateState(key, value)`: Update a state value
- `getState()`: Get the complete game state

### 2. StoryEngine

**Purpose:** Connects player state to story content and determines what happens next.

**Responsibilities:**
- Loads and manages story data for all acts
- Determines the current scene based on game state
- Filters available choices based on conditions
- Processes player choices and updates game state

**Key Methods:**
- `getActiveStoryData()`: Get story data for current act
- `getCurrentScene()`: Get the current scene object
- `getAvailableChoices()`: Get valid choices for current scene
- `processChoice(choiceId)`: Process a player's choice

### 3. PuzzleEngine

**Purpose:** Handles puzzle mechanics and evaluation.

**Responsibilities:**
- Evaluates puzzle solutions
- Applies effects based on puzzle outcomes
- Tracks puzzle completion state

**Key Methods:**
- `solvePuzzle(puzzleId, chosenSolution)`: Evaluate a puzzle solution
- `processEffects(effects)`: Apply effects from puzzle solutions
- `isPuzzleSolved(puzzleId)`: Check if a puzzle is solved

### 4. UIController

**Purpose:** Renders the game UI based on current state.

**Responsibilities:**
- Displays scene content and available choices
- Renders puzzle interfaces
- Updates status displays (karma, inventory, etc.)
- Handles character creation and game menu

**Key Methods:**
- `render()`: Update the UI based on current game state
- `renderPuzzle(puzzleData)`: Render a puzzle interface
- `updateStatusDisplay()`: Update status displays
- `initCharacterCreation()`: Show character creation screen
- `showGameMenu()`: Display the game menu

### 5. Main.js

**Purpose:** Initializes the game and connects all components.

**Responsibilities:**
- Creates instances of all game components
- Sets up event listeners and callbacks
- Handles game initialization and flow

**Key Functions:**
- `initGame()`: Initialize all game components
- `startNewGame()`: Start a new game
- `loadSavedGame()`: Load a saved game
- `showAboutScreen()`: Show the about screen

## Data Structure

### Story Data

Each act's story data follows this structure:

```javascript
{
  scenes: [
    {
      id: "SCENE_ID",
      title: "Scene Title",
      text: "Scene description text...",
      choices: [
        {
          id: "choice1",
          text: "Choice text",
          nextScene: "NEXT_SCENE_ID",
          condition: "gameState.worldState.flag === true",
          effects: {
            karma: 10,
            inventory: {
              add: ["Item1"],
              remove: ["Item2"]
            },
            dharmicProfile: {
              dharma: 5
            }
          },
          worldStateTriggers: {
            "flag_name": true
          }
        }
      ],
      puzzle: {
        puzzleId: "puzzle1",
        description: "Puzzle description...",
        solutions: [
          {
            id: "solution1",
            text: "Solution text",
            successScene: "SUCCESS_SCENE_ID",
            requiresItem: "Required Item"
          }
        ],
        defaultFailure: {
          nextScene: "FAILURE_SCENE_ID",
          effects: {
            karma: -5
          }
        }
      }
    }
  ]
}
```

### Player State

```javascript
{
  playerProfile: {
    nakshatra: "Ashwini",
    gana: "Deva",
    shakti: "To heal quickly",
    gunas: {
      sattva: 0,
      rajas: 3,
      tamas: 0
    }
  },
  playerState: {
    currentAct: 1,
    currentSceneId: "JOURNEY_START",
    karma: 0,
    dharmicProfile: {
      dharma: 0,
      artha: 0,
      kama: 0,
      moksha: 0
    },
    inventory: ["Sacred Amulet"]
  },
  worldState: {
    river_purified: true,
    temple_visited: false
  }
}
```

## Component Interaction Flow

1. **Game Initialization:**
   - `main.js` creates instances of all components
   - `UIController` shows the game menu
   - Player selects "New Game" or "Load Game"

2. **New Game Flow:**
   - `GameStateManager.init()` initializes default state
   - `UIController.initCharacterCreation()` shows character creation
   - Player selects a nakshatra
   - `GameStateManager.setupPlayerProfile()` sets up player profile
   - `UIController.render()` displays the first scene

3. **Game Loop:**
   - `UIController.render()` calls `StoryEngine.getCurrentScene()`
   - `StoryEngine.getAvailableChoices()` filters valid choices
   - `UIController` displays scene and choices
   - Player selects a choice
   - `StoryEngine.processChoice()` updates game state
   - `UIController.render()` updates the display
   - Loop continues

4. **Puzzle Interaction:**
   - `UIController.renderPuzzle()` displays puzzle interface
   - Player selects a solution
   - `PuzzleEngine.solvePuzzle()` evaluates the solution
   - `StoryEngine.processChoice()` updates game state based on outcome
   - `UIController.render()` updates the display

5. **Save/Load:**
   - Player clicks "Save Game"
   - `GameStateManager.saveGame()` saves state to localStorage
   - Player selects "Load Game" from menu
   - `GameStateManager.loadGame()` loads state from localStorage
   - `UIController.render()` displays the current scene

## Design Patterns Used

1. **Singleton Pattern:** `GameStateManager` is implemented as a singleton to ensure there's only one source of truth for game state.

2. **Observer Pattern:** `UIController` observes changes in the game state and updates the UI accordingly.

3. **Command Pattern:** Player choices are processed as commands that modify the game state.

4. **Factory Pattern:** `StoryEngine` creates scene objects based on the current game state.

5. **Strategy Pattern:** `PuzzleEngine` uses different strategies to evaluate different types of puzzles.

## Extending the Game

### Adding a New Act:
1. Create a new act data file (e.g., ACT4storyData.js)
2. Add the act data to `StoryEngine.allActs`
3. Update act transition logic in `StoryEngine.processChoice()`

### Adding New Puzzle Types:
1. Add new puzzle data to puzzles.js
2. Extend `PuzzleEngine.solvePuzzle()` to handle the new puzzle type
3. Add rendering logic in `UIController.renderPuzzle()`

### Adding New Game Mechanics:
1. Add new state properties to `GameStateManager`
2. Add processing logic in `StoryEngine` or `PuzzleEngine`
3. Add UI elements in `UIController`