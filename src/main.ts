import Phaser from 'phaser'
import BootScene from './scenes/managers/BootScene'
import PreloadScene from './scenes/managers/PreloadScene'
import MenuScene from './scenes/managers/MenuScene'
import allStages from './scenes/stages'
import GameOver from './scenes/managers/GameOver'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: 'game-container',
  scale: {
    mode: Phaser.Scale.FIT,
    width: 750,
    height: 500,
  },
  scene: [BootScene, PreloadScene, MenuScene, GameOver, ...allStages],
  physics: {
    default: 'arcade',
  },
}

new Phaser.Game(config)
