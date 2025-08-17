/**
 * AudioManager.js
 * 
 * This module handles all audio effects, background music, and sound feedback
 * to enhance the game experience.
 */

class AudioManager {
    constructor() {
        // Audio context
        this.audioContext = null;
        
        // Sound effects
        this.sounds = {};
        
        // Background music
        this.backgroundMusic = null;
        this.currentMusicTrack = null;
        
        // Volume settings
        this.masterVolume = 0.7;
        this.musicVolume = 0.5;
        this.effectsVolume = 0.8;
        
        // Mute state
        this.muted = false;
        
        // Sound URLs
        this.soundUrls = {
            // UI Sounds
            click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
            hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
            back: 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3',
            
            // Game Events
            karma_positive: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
            karma_negative: 'https://assets.mixkit.co/active_storage/sfx/2940/2940-preview.mp3',
            level_up: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3',
            achievement: 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3',
            quest_complete: 'https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3',
            quest_start: 'https://assets.mixkit.co/active_storage/sfx/2016/2016-preview.mp3',
            puzzle_solved: 'https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3',
            puzzle_failed: 'https://assets.mixkit.co/active_storage/sfx/2941/2941-preview.mp3',
            item_acquired: 'https://assets.mixkit.co/active_storage/sfx/2001/2001-preview.mp3',
            meditation: 'https://assets.mixkit.co/active_storage/sfx/2599/2599-preview.mp3',
            
            // Ambient Sounds
            forest: 'https://assets.mixkit.co/active_storage/sfx/2526/2526-preview.mp3',
            river: 'https://assets.mixkit.co/active_storage/sfx/2525/2525-preview.mp3',
            temple: 'https://assets.mixkit.co/active_storage/sfx/2527/2527-preview.mp3',
            village: 'https://assets.mixkit.co/active_storage/sfx/2522/2522-preview.mp3',
            
            // Background Music
            act1_music: 'https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3',
            act2_music: 'https://assets.mixkit.co/active_storage/sfx/210/210-preview.mp3',
            act3_music: 'https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3',
            menu_music: 'https://assets.mixkit.co/active_storage/sfx/208/208-preview.mp3',
            meditation_music: 'https://assets.mixkit.co/active_storage/sfx/211/211-preview.mp3'
        };
    }

    /**
     * Initialize the audio system
     */
    init() {
        // Create audio context
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            
            // Create master gain node
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = this.masterVolume;
            this.masterGain.connect(this.audioContext.destination);
            
            // Create separate gain nodes for music and effects
            this.musicGain = this.audioContext.createGain();
            this.musicGain.gain.value = this.musicVolume;
            this.musicGain.connect(this.masterGain);
            
            this.effectsGain = this.audioContext.createGain();
            this.effectsGain.gain.value = this.effectsVolume;
            this.effectsGain.connect(this.masterGain);
            
            // Preload common sounds
            this.preloadSounds(['click', 'hover', 'back', 'karma_positive', 'karma_negative', 'level_up', 'achievement']);
            
            console.log('Audio system initialized');
            return true;
        } catch (e) {
            console.error('Web Audio API is not supported in this browser', e);
            return false;
        }
    }

    /**
     * Preload a list of sounds
     */
    preloadSounds(soundIds) {
        soundIds.forEach(id => {
            if (this.soundUrls[id]) {
                this.loadSound(id, this.soundUrls[id]);
            }
        });
    }

    /**
     * Load a sound file
     */
    loadSound(id, url) {
        if (!this.audioContext) return Promise.reject('Audio context not initialized');
        
        return fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.sounds[id] = audioBuffer;
                return audioBuffer;
            })
            .catch(error => {
                console.error(`Error loading sound ${id}:`, error);
            });
    }

    /**
     * Play a sound effect
     */
    playSound(id, options = {}) {
        if (!this.audioContext || this.muted) return null;
        
        // Resume audio context if it's suspended (browser autoplay policy)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        // If sound is not loaded yet, try to load it
        if (!this.sounds[id] && this.soundUrls[id]) {
            this.loadSound(id, this.soundUrls[id])
                .then(buffer => this.playSoundBuffer(buffer, options));
            return null;
        }
        
        // If sound is loaded, play it
        if (this.sounds[id]) {
            return this.playSoundBuffer(this.sounds[id], options);
        }
        
        console.error(`Sound ${id} not found`);
        return null;
    }

    /**
     * Play a sound buffer
     */
    playSoundBuffer(buffer, options = {}) {
        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        
        // Create gain node for this sound
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = options.volume !== undefined ? options.volume : 1;
        
        // Connect source to gain node
        source.connect(gainNode);
        
        // Connect to effects gain node
        gainNode.connect(this.effectsGain);
        
        // Set loop
        if (options.loop) {
            source.loop = true;
        }
        
        // Start playback
        if (options.delay) {
            source.start(this.audioContext.currentTime + options.delay);
        } else {
            source.start(0);
        }
        
        // Return the source for stopping later
        return source;
    }

    /**
     * Play background music
     */
    playMusic(id, fadeIn = true) {
        if (!this.audioContext || this.muted) return;
        
        // Resume audio context if it's suspended (browser autoplay policy)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        // If already playing this track, do nothing
        if (this.currentMusicTrack === id && this.backgroundMusic) {
            return;
        }
        
        // Stop current music with fade out
        if (this.backgroundMusic) {
            this.stopMusic(true);
        }
        
        // If music is not loaded yet, try to load it
        if (!this.sounds[id] && this.soundUrls[id]) {
            this.loadSound(id, this.soundUrls[id])
                .then(buffer => {
                    this.startMusicPlayback(buffer, fadeIn);
                    this.currentMusicTrack = id;
                });
            return;
        }
        
        // If music is loaded, play it
        if (this.sounds[id]) {
            this.startMusicPlayback(this.sounds[id], fadeIn);
            this.currentMusicTrack = id;
            return;
        }
        
        console.error(`Music ${id} not found`);
    }

    /**
     * Start music playback
     */
    startMusicPlayback(buffer, fadeIn = true) {
        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        
        // Create gain node for this music
        const gainNode = this.audioContext.createGain();
        
        // Set initial volume
        if (fadeIn) {
            gainNode.gain.value = 0;
        } else {
            gainNode.gain.value = 1;
        }
        
        // Connect source to gain node
        source.connect(gainNode);
        
        // Connect to music gain node
        gainNode.connect(this.musicGain);
        
        // Start playback
        source.start(0);
        
        // Fade in
        if (fadeIn) {
            const now = this.audioContext.currentTime;
            gainNode.gain.linearRampToValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(1, now + 2);
        }
        
        // Store reference to background music
        this.backgroundMusic = {
            source: source,
            gainNode: gainNode
        };
    }

    /**
     * Stop background music
     */
    stopMusic(fadeOut = true) {
        if (!this.backgroundMusic) return;
        
        if (fadeOut) {
            const now = this.audioContext.currentTime;
            this.backgroundMusic.gainNode.gain.linearRampToValueAtTime(
                this.backgroundMusic.gainNode.gain.value, now
            );
            this.backgroundMusic.gainNode.gain.linearRampToValueAtTime(0, now + 1);
            
            // Stop and clear after fade out
            setTimeout(() => {
                if (this.backgroundMusic) {
                    this.backgroundMusic.source.stop();
                    this.backgroundMusic = null;
                    this.currentMusicTrack = null;
                }
            }, 1000);
        } else {
            this.backgroundMusic.source.stop();
            this.backgroundMusic = null;
            this.currentMusicTrack = null;
        }
    }

    /**
     * Set master volume
     */
    setMasterVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
        if (this.masterGain) {
            this.masterGain.gain.value = this.masterVolume;
        }
    }

    /**
     * Set music volume
     */
    setMusicVolume(volume) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
        if (this.musicGain) {
            this.musicGain.gain.value = this.musicVolume;
        }
    }

    /**
     * Set effects volume
     */
    setEffectsVolume(volume) {
        this.effectsVolume = Math.max(0, Math.min(1, volume));
        if (this.effectsGain) {
            this.effectsGain.gain.value = this.effectsVolume;
        }
    }

    /**
     * Mute all audio
     */
    muteAudio() {
        this.muted = true;
        if (this.masterGain) {
            this.masterGain.gain.value = 0;
        }
    }

    /**
     * Unmute audio
     */
    unmuteAudio() {
        this.muted = false;
        if (this.masterGain) {
            this.masterGain.gain.value = this.masterVolume;
        }
    }

    /**
     * Toggle mute state
     */
    toggleMute() {
        if (this.muted) {
            this.unmuteAudio();
        } else {
            this.muteAudio();
        }
        return this.muted;
    }

    /**
     * Play UI click sound
     */
    playClickSound() {
        return this.playSound('click');
    }

    /**
     * Play UI hover sound
     */
    playHoverSound() {
        return this.playSound('hover', { volume: 0.3 });
    }

    /**
     * Play karma change sound
     */
    playKarmaSound(amount) {
        if (amount > 0) {
            return this.playSound('karma_positive');
        } else if (amount < 0) {
            return this.playSound('karma_negative');
        }
    }

    /**
     * Play level up sound
     */
    playLevelUpSound() {
        return this.playSound('level_up');
    }

    /**
     * Play achievement sound
     */
    playAchievementSound() {
        return this.playSound('achievement');
    }

    /**
     * Play quest complete sound
     */
    playQuestCompleteSound() {
        return this.playSound('quest_complete');
    }

    /**
     * Play quest start sound
     */
    playQuestStartSound() {
        return this.playSound('quest_start');
    }

    /**
     * Play puzzle solved sound
     */
    playPuzzleSolvedSound() {
        return this.playSound('puzzle_solved');
    }

    /**
     * Play puzzle failed sound
     */
    playPuzzleFailedSound() {
        return this.playSound('puzzle_failed');
    }

    /**
     * Play item acquired sound
     */
    playItemAcquiredSound() {
        return this.playSound('item_acquired');
    }

    /**
     * Play meditation sound
     */
    playMeditationSound() {
        return this.playSound('meditation');
    }

    /**
     * Play act-specific background music
     */
    playActMusic(act) {
        switch (act) {
            case 1:
                this.playMusic('act1_music');
                break;
            case 2:
                this.playMusic('act2_music');
                break;
            case 3:
                this.playMusic('act3_music');
                break;
            default:
                this.playMusic('act1_music');
        }
    }

    /**
     * Play menu music
     */
    playMenuMusic() {
        this.playMusic('menu_music');
    }

    /**
     * Play meditation music
     */
    playMeditationMusic() {
        this.playMusic('meditation_music');
    }

    /**
     * Add event listeners for UI elements
     */
    addUIEventListeners() {
        // Add hover sound to buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.playHoverSound();
            });
            
            button.addEventListener('click', () => {
                this.playClickSound();
            });
        });
    }
}

// Export the AudioManager class