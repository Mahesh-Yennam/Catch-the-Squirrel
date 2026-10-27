/**
 * CATCH THE SQUIRREL — Botanical Garden Reflex Game Engine
 * Pure Vanilla JavaScript & Web Audio API
 * (c) 2026 Gamility
 */

(() => {
  'use strict';

  // =========================================================================
  // CONSTANTS & SVGS
  // =========================================================================
  const TOTAL_SPOTS = 10;

  // Vector Critter SVG Graphics (Cheerful Cartoon Arcade Style)
  const SVG_BROWN_SQUIRREL = `
    <svg class="critter-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Big Fluffy Bushy Tail -->
      <path d="M78 85 C108 78 116 32 96 14 C84 3 70 8 74 24 C78 38 88 44 82 66 C79 74 74 80 68 85 Z" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
      <path d="M80 72 C96 64 102 38 88 22 C82 15 74 18 78 28" stroke="#fdba74" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Chubby Body -->
      <ellipse cx="60" cy="85" rx="32" ry="26" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
      <!-- Cream Chest/Belly -->
      <path d="M46 72 C46 72 60 68 74 72 C78 80 78 94 74 100 C60 104 46 100 46 92 Z" fill="#fff7ed"/>

      <!-- Left & Right Ears -->
      <path d="M34 32 C28 14 44 18 42 32 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2.5"/>
      <path d="M35 30 C32 20 40 22 39 30 Z" fill="#fbcfe8"/>
      <path d="M86 32 C92 14 76 18 78 32 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2.5"/>
      <path d="M85 30 C88 20 80 22 81 30 Z" fill="#fbcfe8"/>

      <!-- Chubby Head -->
      <circle cx="60" cy="50" r="26" fill="#f97316" stroke="#9a3412" stroke-width="3"/>
      <!-- Cheek Puffs -->
      <ellipse cx="40" cy="56" rx="14" ry="12" fill="#fdba74"/>
      <ellipse cx="80" cy="56" rx="14" ry="12" fill="#fdba74"/>
      <ellipse cx="60" cy="58" rx="16" ry="12" fill="#fff7ed"/>

      <!-- Rosy Pink Cheeks -->
      <circle cx="36" cy="58" r="4.5" fill="#f472b6" opacity="0.75"/>
      <circle cx="84" cy="58" r="4.5" fill="#f472b6" opacity="0.75"/>

      <!-- Big Sparkling Cartoon Eyes -->
      <circle cx="48" cy="46" r="6.8" fill="#18181b"/>
      <circle cx="46" cy="44" r="2.8" fill="#ffffff"/>
      <circle cx="50.5" cy="48" r="1.3" fill="#ffffff"/>
      <circle cx="72" cy="46" r="6.8" fill="#18181b"/>
      <circle cx="70" cy="44" r="2.8" fill="#ffffff"/>
      <circle cx="74.5" cy="48" r="1.3" fill="#ffffff"/>

      <!-- Cute Snout & Happy Mouth -->
      <ellipse cx="60" cy="54" rx="2.8" ry="2" fill="#431407"/>
      <path d="M56 57 Q60 61 64 57" stroke="#431407" stroke-width="2" stroke-linecap="round" fill="none"/>

      <!-- Front Paws Resting On Wreath Rim -->
      <ellipse cx="44" cy="78" rx="7.5" ry="6" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
      <ellipse cx="76" cy="78" rx="7.5" ry="6" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
    </svg>
  `;

  const SVG_GOLDEN_SQUIRREL = `
    <svg class="critter-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="goldShine" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>

      <!-- Sparkle Stars -->
      <path d="M22 28 Q26 28 26 24 Q26 28 30 28 Q26 28 26 32 Q26 28 22 28 Z" fill="#fef08a"/>
      <path d="M96 20 Q100 20 100 16 Q100 20 104 20 Q100 20 100 24 Q100 20 96 20 Z" fill="#fef08a"/>
      <path d="M16 68 Q20 68 20 64 Q20 68 24 68 Q20 68 20 72 Q20 68 16 68 Z" fill="#fef08a"/>

      <!-- Golden Bushy Tail -->
      <path d="M78 85 C108 78 116 32 96 14 C84 3 70 8 74 24 C78 38 88 44 82 66 C79 74 74 80 68 85 Z" fill="#f59e0b" stroke="#78350f" stroke-width="3" filter="url(#goldShine)"/>
      <path d="M80 72 C96 64 102 38 88 22 C82 15 74 18 78 28" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Golden Chubby Body -->
      <ellipse cx="60" cy="85" rx="32" ry="26" fill="#f59e0b" stroke="#78350f" stroke-width="3"/>
      <path d="M46 72 C46 72 60 68 74 72 C78 80 78 94 74 100 C60 104 46 100 46 92 Z" fill="#fef9c3"/>

      <!-- Ears -->
      <path d="M34 32 C28 14 44 18 42 32 Z" fill="#f59e0b" stroke="#78350f" stroke-width="2.5"/>
      <path d="M35 30 C32 20 40 22 39 30 Z" fill="#fef08a"/>
      <path d="M86 32 C92 14 76 18 78 32 Z" fill="#f59e0b" stroke="#78350f" stroke-width="2.5"/>
      <path d="M85 30 C88 20 80 22 81 30 Z" fill="#fef08a"/>

      <!-- Head -->
      <circle cx="60" cy="50" r="26" fill="#fbbf24" stroke="#78350f" stroke-width="3"/>
      <ellipse cx="40" cy="56" rx="14" ry="12" fill="#fde047"/>
      <ellipse cx="80" cy="56" rx="14" ry="12" fill="#fde047"/>
      <ellipse cx="60" cy="58" rx="16" ry="12" fill="#fef9c3"/>

      <!-- Rosy Cheeks -->
      <circle cx="36" cy="58" r="4.5" fill="#f59e0b" opacity="0.6"/>
      <circle cx="84" cy="58" r="4.5" fill="#f59e0b" opacity="0.6"/>

      <!-- Eyes -->
      <circle cx="48" cy="46" r="6.8" fill="#1e1b4b"/>
      <circle cx="46" cy="44" r="2.8" fill="#ffffff"/>
      <circle cx="50.5" cy="48" r="1.3" fill="#ffffff"/>
      <circle cx="72" cy="46" r="6.8" fill="#1e1b4b"/>
      <circle cx="70" cy="44" r="2.8" fill="#ffffff"/>
      <circle cx="74.5" cy="48" r="1.3" fill="#ffffff"/>

      <!-- Snout & Mouth -->
      <ellipse cx="60" cy="54" rx="2.8" ry="2" fill="#78350f"/>
      <path d="M56 57 Q60 61 64 57" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none"/>

      <!-- Golden Paws Holding Acorn -->
      <ellipse cx="44" cy="78" rx="7.5" ry="6" fill="#fde047" stroke="#78350f" stroke-width="2"/>
      <ellipse cx="76" cy="78" rx="7.5" ry="6" fill="#fde047" stroke="#78350f" stroke-width="2"/>

      <!-- Golden Acorn -->
      <ellipse cx="60" cy="76" rx="7" ry="9" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
      <path d="M53 71 Q60 66 67 71 Z" fill="#ca8a04"/>
    </svg>
  `;

  const SVG_SLEEPY_HEDGEHOG = `
    <svg class="critter-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Spiky Body -->
      <path d="M25 80 Q20 45 60 38 Q100 42 105 80 Q100 102 60 104 Q25 102 25 80 Z" fill="#57534e" stroke="#292524" stroke-width="3"/>
      <!-- Cute Spikes Texture -->
      <path d="M38 52 L34 40 L46 50 L50 36 L60 48 L68 34 L76 48 L86 38 L88 52" stroke="#a8a29e" stroke-width="2.5" stroke-linecap="round"/>
      
      <!-- Cute Snout Face -->
      <ellipse cx="60" cy="74" rx="22" ry="18" fill="#f5f5f4" stroke="#292524" stroke-width="2.5"/>
      
      <!-- Closed Sleepy Arc Eyes (˘ω˘) -->
      <path d="M46 72 Q52 78 56 72" stroke="#292524" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M64 72 Q68 78 74 72" stroke="#292524" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      
      <!-- Nose & Mouth -->
      <circle cx="60" cy="78" r="3.2" fill="#1c1917"/>
      <path d="M57 82 Q60 84 63 82" stroke="#292524" stroke-width="2" stroke-linecap="round" fill="none"/>
      
      <!-- Cute Rosy Cheeks -->
      <circle cx="42" cy="76" r="4.5" fill="#f472b6" opacity="0.6"/>
      <circle cx="78" cy="76" r="4.5" fill="#f472b6" opacity="0.6"/>

      <!-- Front Sleepy Paws -->
      <ellipse cx="48" cy="90" rx="6.5" ry="5.5" fill="#e7e5e4" stroke="#292524" stroke-width="2"/>
      <ellipse cx="72" cy="90" rx="6.5" ry="5.5" fill="#e7e5e4" stroke="#292524" stroke-width="2"/>

      <!-- Floating Animated Zzz's -->
      <text x="82" y="36" font-family="'Fredoka', sans-serif" font-weight="900" font-size="18" fill="#38bdf8">Z</text>
      <text x="94" y="24" font-family="'Fredoka', sans-serif" font-weight="900" font-size="14" fill="#7dd3fc">z</text>
      <text x="102" y="14" font-family="'Fredoka', sans-serif" font-weight="900" font-size="11" fill="#bae6fd">z</text>
    </svg>
  `;

  // =========================================================================
  // AUDIO SYNTHESIZER (WEB AUDIO API)
  // =========================================================================
  class GardenAudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Leaf rustle: bandpass-filtered noise burst
    playRustle() {
      if (this.isMuted) return;
      this.init();

      const bufferSize = this.ctx.sampleRate * 0.22;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
      filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    }

    // Playful squirrel chirp/squeak
    playChirp() {
      if (this.isMuted) return;
      this.init();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1600, now + 0.06);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.12);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    }

    // Catch Acorn Pop: pitch scales with combo streak!
    playCatch(streak = 1) {
      if (this.isMuted) return;
      this.init();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const baseFreq = 340 + Math.min(streak * 70, 700);
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, now + 0.08);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }

    // Golden Squirrel catch chime
    playGoldenChime() {
      if (this.isMuted) return;
      this.init();

      const notes = [659.25, 830.61, 1046.50, 1318.51]; // E5, G#5, C6, E6
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.2, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.26);
      });
    }

    // Hedgehog penalty buzz
    playHazard() {
      if (this.isMuted) return;
      this.init();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(90, now + 0.18);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.21);
    }

    // Round victory fanfare
    playGameOver() {
      if (this.isMuted) return;
      this.init();

      const chords = [523.25, 659.25, 783.99, 1046.50]; // C Major
      const now = this.ctx.currentTime;

      chords.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.22, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.45);
      });
    }
  }

  // =========================================================================
  // GAME STATE & CONTROLLER
  // =========================================================================
  class CatchTheSquirrelGame {
    constructor() {
      this.audio = new GardenAudioEngine();

      // State
      this.isPlaying = false;
      this.isPaused = false;
      this.mode = 'rush'; // 'rush' | 'survival' | 'zen'
      this.score = 0;
      this.timeLeft = 60;
      this.livesLeft = 3;
      this.streak = 1;
      this.maxStreak = 1;
      this.acornsCaught = 0;
      this.totalCaught = 0;
      this.reactionTimes = [];
      this.bestScores = { rush: 0, survival: 0, zen: 0 };

      // Timers & Active Spots
      this.gameTimer = null;
      this.spawnTimer = null;
      this.activeSpots = new Map(); // spotIdx -> { critterType, spawnTime, timerId }

      // DOM Elements
      this.dom = {
        scoreDisplay: document.getElementById('scoreDisplay'),
        primaryStatLabel: document.getElementById('primaryStatLabel'),
        primaryStatVal: document.getElementById('primaryStatVal'),
        streakDisplay: document.getElementById('streakDisplay'),
        acornDisplay: document.getElementById('acornDisplay'),
        bestScoreDisplay: document.getElementById('bestScoreDisplay'),
        speedPill: document.getElementById('speedPill'),
        modeTabs: document.querySelectorAll('.mode-tab'),
        spotsGrid: document.getElementById('spotsGrid'),
        popupsLayer: document.getElementById('popupsLayer'),
        startOverlay: document.getElementById('startOverlay'),
        gameOverOverlay: document.getElementById('gameOverOverlay'),
        btnStartGame: document.getElementById('btnStartGame'),
        btnPlayAgain: document.getElementById('btnPlayAgain'),
        btnRestart: document.getElementById('btnRestart'),
        btnPause: document.getElementById('btnPause'),
        pauseIcon: document.getElementById('pauseIcon'),
        btnSound: document.getElementById('btnSound'),
        btnToggleAudio: document.getElementById('btnToggleAudio'),
        audioIcon: document.getElementById('audioIcon'),
        // End Game Modal Stats
        endStatusBadge: document.getElementById('endStatusBadge'),
        endTitleDisplay: document.getElementById('endTitleDisplay'),
        endSummaryDesc: document.getElementById('endSummaryDesc'),
        endFinalScore: document.getElementById('endFinalScore'),
        endCaughtCount: document.getElementById('endCaughtCount'),
        endAvgSpeed: document.getElementById('endAvgSpeed'),
        endMaxStreak: document.getElementById('endMaxStreak')
      };

      this.loadStorage();
      this.bindEvents();
      this.updateHud();
    }

    loadStorage() {
      try {
        const saved = localStorage.getItem('gamility_squirrel_best');
        if (saved) {
          this.bestScores = JSON.parse(saved);
        }
      } catch (e) {
        console.warn('Storage unavailable', e);
      }
      this.updateBestScoreDisplay();
    }

    saveStorage() {
      try {
        localStorage.setItem('gamility_squirrel_best', JSON.stringify(this.bestScores));
      } catch (e) {
        console.warn('Failed to save score', e);
      }
    }

    updateBestScoreDisplay() {
      const curBest = this.bestScores[this.mode] || 0;
      this.dom.bestScoreDisplay.textContent = curBest.toLocaleString();
    }

    bindEvents() {
      // Start & Restart
      this.dom.btnStartGame.addEventListener('click', () => this.startGame());
      this.dom.btnPlayAgain.addEventListener('click', () => this.startGame());
      this.dom.btnRestart.addEventListener('click', () => this.startGame());

      // Pause
      this.dom.btnPause.addEventListener('click', () => this.togglePause());

      // Audio Toggles
      const toggleMute = () => {
        this.audio.isMuted = !this.audio.isMuted;
        const icon = this.audio.isMuted ? '🔇' : '🔊';
        const txt = this.audio.isMuted ? '🔇 Audio: Off' : '🔊 Audio: On';
        this.dom.audioIcon.textContent = icon;
        this.dom.btnSound.querySelector('span').textContent = txt;
      };
      this.dom.btnSound.addEventListener('click', toggleMute);
      this.dom.btnToggleAudio.addEventListener('click', toggleMute);

      // Mode Switcher
      this.dom.modeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          if (this.isPlaying) {
            if (!confirm('Switching game mode will restart the current round. Proceed?')) {
              return;
            }
          }
          this.dom.modeTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.mode = tab.dataset.mode;
          this.updateBestScoreDisplay();
          this.resetGame();
        });
      });

      // Spot Click & Tap Delegation
      this.dom.spotsGrid.addEventListener('pointerdown', (e) => this.handleSpotClick(e));

      // Keyboard Controls (P for Pause, Space for Restart/Start)
      window.addEventListener('keydown', (e) => {
        if (e.key === 'p' || e.key === 'P') {
          this.togglePause();
        } else if (e.code === 'Space' && !this.isPlaying) {
          e.preventDefault();
          this.startGame();
        }
      });
    }

    setSpeedMessage(text, styleClass = '') {
      this.dom.speedPill.innerHTML = `<span>${text}</span>`;
      this.dom.speedPill.className = 'speed-feedback-pill ' + styleClass;
    }

    resetGame() {
      clearInterval(this.gameTimer);
      clearTimeout(this.spawnTimer);
      this.clearAllSpots();

      this.isPlaying = false;
      this.isPaused = false;
      this.score = 0;
      this.streak = 1;
      this.maxStreak = 1;
      this.acornsCaught = 0;
      this.totalCaught = 0;
      this.reactionTimes = [];

      if (this.mode === 'rush') {
        this.timeLeft = 60;
        this.dom.primaryStatLabel.textContent = 'Time';
        this.dom.primaryStatVal.textContent = '60s';
      } else if (this.mode === 'survival') {
        this.livesLeft = 3;
        this.dom.primaryStatLabel.textContent = 'Lives';
        this.dom.primaryStatVal.textContent = '❤️❤️❤️';
      } else {
        // Zen
        this.dom.primaryStatLabel.textContent = 'Mode';
        this.dom.primaryStatVal.textContent = 'Zen 🌸';
      }

      this.updateHud();
      this.setSpeedMessage('⚡ Watch for leaf rustles!');
    }

    startGame() {
      this.audio.init();
      this.resetGame();
      this.isPlaying = true;

      // Hide Overlays
      this.dom.startOverlay.classList.add('hidden');
      this.dom.gameOverOverlay.classList.add('hidden');

      // Start Mode Loops
      if (this.mode === 'rush') {
        this.gameTimer = setInterval(() => this.tickTimer(), 1000);
      }

      this.scheduleNextSpawn();
    }

    togglePause() {
      if (!this.isPlaying) return;
      this.isPaused = !this.isPaused;

      if (this.isPaused) {
        clearInterval(this.gameTimer);
        clearTimeout(this.spawnTimer);
        this.dom.pauseIcon.textContent = '▶️ Resume';
        this.setSpeedMessage('⏸️ Game Paused');
      } else {
        this.dom.pauseIcon.textContent = '⏸️ Pause';
        this.setSpeedMessage('⚡ Game Resumed!');
        if (this.mode === 'rush') {
          this.gameTimer = setInterval(() => this.tickTimer(), 1000);
        }
        this.scheduleNextSpawn();
      }
    }

    tickTimer() {
      if (!this.isPlaying || this.isPaused) return;
      this.timeLeft--;
      this.dom.primaryStatVal.textContent = `${this.timeLeft}s`;

      if (this.timeLeft <= 10) {
        this.dom.primaryStatVal.style.color = '#ef4444';
      } else {
        this.dom.primaryStatVal.style.color = '#38bdf8';
      }

      if (this.timeLeft <= 0) {
        this.endGame(true);
      }
    }

    scheduleNextSpawn() {
      if (!this.isPlaying || this.isPaused) return;

      // Speed scaling based on score
      // Starts around 900ms interval, scales down to 450ms for hyper reflex
      const speedFactor = Math.min(this.score / 3500, 1);
      const minDelay = 400;
      const maxDelay = 950 - speedFactor * 450;
      const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;

      this.spawnTimer = setTimeout(() => {
        this.spawnCritterWave();
        this.scheduleNextSpawn();
      }, nextDelay);
    }

    spawnCritterWave() {
      if (!this.isPlaying || this.isPaused) return;

      // Find available unoccupied spots
      const availableSpots = [];
      for (let i = 0; i < TOTAL_SPOTS; i++) {
        if (!this.activeSpots.has(i)) {
          availableSpots.push(i);
        }
      }

      if (availableSpots.length === 0) return;

      // In high levels, occasionally spawn 2 squirrels at once!
      const spawnCount = (this.score > 2500 && Math.random() < 0.28 && availableSpots.length >= 2) ? 2 : 1;

      for (let c = 0; c < spawnCount; c++) {
        const spotIdx = availableSpots.splice(Math.floor(Math.random() * availableSpots.length), 1)[0];
        this.activateSpot(spotIdx);
      }
    }

    activateSpot(spotIdx) {
      const spotEl = document.getElementById(`spot-${spotIdx}`);
      const critterSlot = document.getElementById(`critter-${spotIdx}`);
      if (!spotEl || !critterSlot) return;

      // Determine Critter Variety
      // 70% Brown Squirrel, 18% Golden Acorn Squirrel, 12% Sleepy Hedgehog
      const roll = Math.random();
      let critterType = 'brown';
      let svgHtml = SVG_BROWN_SQUIRREL;

      if (roll < 0.18) {
        critterType = 'golden';
        svgHtml = SVG_GOLDEN_SQUIRREL;
      } else if (roll < 0.30) {
        critterType = 'hedgehog';
        svgHtml = SVG_SLEEPY_HEDGEHOG;
      }

      // Phase 1: Rustle Telegraph (Leaves shake & rustle SFX before popping out!)
      spotEl.classList.add('rustling');
      this.audio.playRustle();

      const telegraphTime = Math.random() * 80 + 260; // ~260-340ms telegraph

      setTimeout(() => {
        if (!this.isPlaying || this.isPaused) {
          spotEl.classList.remove('rustling');
          return;
        }

        spotEl.classList.remove('rustling');
        critterSlot.innerHTML = svgHtml;
        critterSlot.className = 'critter-slot peeking';

        if (critterType !== 'hedgehog') {
          this.audio.playChirp();
        }

        const spawnTime = performance.now();

        // Calculate exposure visibility window (starts at 1100ms down to 480ms)
        const speedFactor = Math.min(this.score / 4000, 1);
        const visibilityWindow = (critterType === 'golden' ? 750 : 1100) - (speedFactor * 420);

        // Timer for critter to duck back into hiding if not clicked
        const escapeTimer = setTimeout(() => {
          this.duckCritter(spotIdx, false);
        }, visibilityWindow);

        this.activeSpots.set(spotIdx, {
          critterType,
          spawnTime,
          timerId: escapeTimer
        });
      }, telegraphTime);
    }

    duckCritter(spotIdx, wasCaught) {
      const spotData = this.activeSpots.get(spotIdx);
      if (!spotData) return;

      clearTimeout(spotData.timerId);
      this.activeSpots.delete(spotIdx);

      const critterSlot = document.getElementById(`critter-${spotIdx}`);
      if (!critterSlot) return;

      if (wasCaught) {
        critterSlot.className = 'critter-slot caught';
      } else {
        critterSlot.className = 'critter-slot ducking';
        // Missed squirrel penalty in survival mode
        if (this.mode === 'survival' && spotData.critterType !== 'hedgehog') {
          this.handleMiss();
        }
      }

      setTimeout(() => {
        critterSlot.innerHTML = '';
        critterSlot.className = 'critter-slot';
      }, 250);
    }

    handleSpotClick(e) {
      if (!this.isPlaying || this.isPaused) return;

      // Find if clicked element is inside a peeking critter slot
      const critterSlot = e.target.closest('.critter-slot.peeking');
      if (!critterSlot) return;

      const spotEl = critterSlot.closest('.garden-spot');
      if (!spotEl) return;

      const spotIdx = parseInt(spotEl.dataset.spot, 10);
      const spotData = this.activeSpots.get(spotIdx);
      if (!spotData) return;

      const reactionTime = Math.round(performance.now() - spotData.spawnTime);
      const rect = spotEl.getBoundingClientRect();
      const clickX = e.clientX || (rect.left + rect.width / 2);
      const clickY = e.clientY || (rect.top + 30);

      if (spotData.critterType === 'hedgehog') {
        // HAZARD: Player scared the sleepy hedgehog!
        this.audio.playHazard();
        this.score = Math.max(0, this.score - 150);
        this.streak = 1;
        this.spawnScorePopup(clickX, clickY, '-150 🦔 Ouch!', 'score-hazard');
        this.setSpeedMessage('🦔 Scared a hedgehog! -150 pts', 'flash-red');

        if (this.mode === 'survival') {
          this.handleMiss();
        }
      } else {
        // SUCCESS: Squirrel caught!
        this.totalCaught++;
        this.acornsCaught++;
        this.reactionTimes.push(reactionTime);

        // Speed Rating & Points
        let basePoints = 100;
        let ratingText = 'Gotcha!';
        let scoreClass = 'score-emerald';

        if (reactionTime < 320) {
          basePoints = 300;
          ratingText = '⚡ LIGHTNING!';
          scoreClass = 'score-gold';
          this.setSpeedMessage(`⚡ Lightning Reflex: ${reactionTime}ms!`, 'flash-gold');
        } else if (reactionTime < 580) {
          basePoints = 200;
          ratingText = '🌟 Swift Catch!';
          this.setSpeedMessage(`🌟 Swift Catch: ${reactionTime}ms`, 'flash-gold');
        } else {
          basePoints = 100;
          this.setSpeedMessage(`👍 Catch: ${reactionTime}ms`);
        }

        // Golden Squirrel Extra Bonus
        if (spotData.critterType === 'golden') {
          basePoints += 500;
          this.acornsCaught += 2;
          this.audio.playGoldenChime();
          this.spawnScorePopup(clickX, clickY - 25, '+500 ✨ GOLDEN!', 'score-gold');
          if (this.mode === 'rush') {
            this.timeLeft = Math.min(this.timeLeft + 3, 99);
            this.spawnScorePopup(clickX, clickY + 10, '+3s ⏱️', 'score-emerald');
          }
        } else {
          this.audio.playCatch(this.streak);
        }

        const finalPoints = basePoints * this.streak;
        this.score += finalPoints;

        // Floating score popup
        this.spawnScorePopup(clickX, clickY, `+${finalPoints} ${this.streak > 1 ? `(${this.streak}×)` : ''}`, scoreClass);

        // Increment Streak
        this.streak = Math.min(this.streak + 1, 5);
        if (this.streak > this.maxStreak) {
          this.maxStreak = this.streak;
        }
      }

      this.duckCritter(spotIdx, true);
      this.updateHud();
    }

    handleMiss() {
      this.livesLeft--;
      this.streak = 1;
      this.setSpeedMessage('💔 Squirrel escaped! Streak lost', 'flash-red');

      let hearts = '';
      for (let i = 0; i < 3; i++) {
        hearts += i < this.livesLeft ? '❤️' : '🖤';
      }
      this.dom.primaryStatVal.textContent = hearts;

      if (this.livesLeft <= 0) {
        this.endGame(false);
      }
    }

    spawnScorePopup(x, y, text, extraClass = '') {
      const stageRect = this.dom.spotsGrid.getBoundingClientRect();
      const popup = document.createElement('div');
      popup.className = `floating-score ${extraClass}`;
      popup.textContent = text;
      popup.style.left = `${x - stageRect.left}px`;
      popup.style.top = `${y - stageRect.top}px`;

      this.dom.popupsLayer.appendChild(popup);
      setTimeout(() => popup.remove(), 850);
    }

    updateHud() {
      this.dom.scoreDisplay.textContent = this.score.toLocaleString();
      this.dom.streakDisplay.textContent = `${this.streak}×`;
      this.dom.acornDisplay.textContent = `${this.acornsCaught} 🌰`;

      // Update High Score if beaten
      if (this.score > (this.bestScores[this.mode] || 0)) {
        this.bestScores[this.mode] = this.score;
        this.saveStorage();
        this.updateBestScoreDisplay();
      }
    }

    clearAllSpots() {
      this.activeSpots.forEach(data => clearTimeout(data.timerId));
      this.activeSpots.clear();

      for (let i = 0; i < TOTAL_SPOTS; i++) {
        const spotEl = document.getElementById(`spot-${i}`);
        const critterSlot = document.getElementById(`critter-${i}`);
        if (spotEl) spotEl.classList.remove('rustling');
        if (critterSlot) {
          critterSlot.innerHTML = '';
          critterSlot.className = 'critter-slot';
        }
      }
    }

    endGame(isTimeUp = true) {
      this.isPlaying = false;
      clearInterval(this.gameTimer);
      clearTimeout(this.spawnTimer);
      this.clearAllSpots();
      this.audio.playGameOver();

      // Calculate stats
      const avgSpeed = this.reactionTimes.length > 0
        ? Math.round(this.reactionTimes.reduce((a, b) => a + b, 0) / this.reactionTimes.length)
        : 0;

      // Fill End Game Modal
      this.dom.endFinalScore.textContent = this.score.toLocaleString();
      this.dom.endCaughtCount.textContent = this.totalCaught;
      this.dom.endAvgSpeed.textContent = avgSpeed > 0 ? `${avgSpeed}ms` : '—';
      this.dom.endMaxStreak.textContent = `${this.maxStreak}×`;

      if (this.mode === 'survival' && !isTimeUp) {
        this.dom.endStatusBadge.textContent = '💔 Out of Lives!';
        this.dom.endTitleDisplay.textContent = 'Garden Escapade!';
        this.dom.endSummaryDesc.textContent = `You protected the garden and caught ${this.totalCaught} squirrels before they scampered off!`;
      } else {
        this.dom.endStatusBadge.textContent = '🌻 Sundown in the Garden!';
        this.dom.endTitleDisplay.textContent = this.score > 2000 ? 'Garden Master! 🏆' : 'Great Job! 🐿️';
        this.dom.endSummaryDesc.textContent = `A stellar run! You gathered ${this.acornsCaught} acorns with a peak streak of ${this.maxStreak}×!`;
      }

      this.dom.gameOverOverlay.classList.remove('hidden');
    }
  }

  // Initialize on DOM Ready
  window.addEventListener('DOMContentLoaded', () => {
    window.gamilitySquirrelGame = new CatchTheSquirrelGame();
  });
})();
