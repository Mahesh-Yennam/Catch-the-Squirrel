# 🐿️ Catch the Squirrel — Botanical Garden Reflex Game

<p align="center">
  <strong>A vibrant, nature-themed reflex arcade game set in an enchanted botanical garden! Spot and catch mischievous squirrels darting from lush foliage, monstera leaves, terracotta pots, and tree trunks before they scamper away.</strong>
</p>

<p align="center">
  <a href="https://mahesh-yennam.github.io/Gamility/"><img src="https://img.shields.io/badge/Live_Portal-Gamility-0ea5e9?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Gamility Portal" /></a>
  <img src="https://img.shields.io/badge/Arcade-Reflex_Tap-15803d?style=for-the-badge&logo=target" alt="Reflex Tap" />
  <img src="https://img.shields.io/badge/Audio-Web_Audio_API-10b981?style=for-the-badge&logo=sound" alt="Web Audio" />
  <img src="https://img.shields.io/badge/Zero_Build-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
</p>

---

## 📁 Repository Structure

```text
catch-the-squirrel/
├── index.html          # Semantic HTML5 stage, HUD panel, 10 floral wreath burrows, Schema.org
├── style.css           # Cheerful cartoon arcade styles, layered wreath occlusion, leaf rustles
├── game.js             # Reflex engine, anticipation telegraphs, combo multiplier, Web Audio SFX
├── favicon.svg         # Bespoke squirrel & acorn vector SVG favicon
├── preview.png         # 1200x630 high-definition social preview image
├── site.webmanifest    # Progressive Web App (PWA) manifest
├── robots.txt          # Search engine indexing configuration
├── sitemap.xml         # Standalone XML sitemap
└── README.md           # Game documentation and mechanics
```

---

## 🌿 Game Features & Mechanics

- **🍃 Leaf Rustle Anticipation Cue**:
  - Before a squirrel emerges, the foliage at that spot vibrates with a rapid rustle animation and synthesized dry leaf audio for 280ms, rewarding observant players who anticipate.
- **⚡ Speed-Tier Scoring**:
  - **< 320ms**: Lightning Reflex (+300 pts)
  - **320ms – 580ms**: Swift Catch (+200 pts)
  - **> 580ms**: Standard Catch (+100 pts)
- **🔥 Combo Streak Multipliers**:
  - Chain consecutive successful catches without missing to ramp up to a **5× combo multiplier**.
- **✨ Golden Acorn Squirrel**:
  - Rare sparkling variant that awards **+500 points** and a **+3s time bonus** in Rush mode.
- **🦔 Sleepy Hedgehog Decoy**:
  - Friendly resting hedgehogs occasionally appear. Tapping them inflicts a **-150 pts penalty** and resets your combo streak!
- **🎮 3 Game Modes**:
  - **⏱️ 60s Garden Rush**: High-energy time attack to gather maximum acorns before sundown.
  - **🎯 Survival Mode**: 3 Lives. Every escaped squirrel or startled hedgehog costs a life.
  - **🧘 Zen Garden Mode**: Infinite, relaxing, untimed nature tapping with peaceful ambient audio.
- **🔊 Synthesized Web Audio API**:
  - 100% zero external audio files. Real-time procedural leaf rustling white noise, chirping oscillators, pitch-ascending acorn pop catches, and game over fanfares.
- **📱 Touch & Mouse Optimized**:
  - Instant zero-lag tap response on smartphones and tablets, fluid crosshair cursor on desktop.

---

## 🕹️ Controls

| Input | Action |
| :--- | :--- |
| **Tap / Left Click on Squirrel** | Catch squirrel before it ducks |
| **`P` Key / ⏸️ Button** | Pause / resume game |
| **Spacebar (Start/Restart)** | Begin round / restart after game over |
| **Mode Tabs (Rush / Survival / Zen)** | Switch game modes |
| **🔊 Button** | Toggle procedural audio synthesizer mute |

---

## 📜 Copyright & Terms

Copyright © 2026 **Gamility** ([Mahesh Yennam](https://github.com/Mahesh-Yennam)). All Rights Reserved.  
Part of the [Gamility](https://mahesh-yennam.github.io/Gamility/) web collection.
