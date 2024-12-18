import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PreloadScene from './scenes/PreloadScene'
import MenuScene from './scenes/MenuScene'
import allStages from './scenes/stages'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 750,
  height: 500,
  scene: [BootScene, PreloadScene, MenuScene, ...allStages],
  physics: {
    default: 'arcade',
  },
}

new Phaser.Game(config)
