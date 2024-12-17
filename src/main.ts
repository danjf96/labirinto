import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import MainScene from './scenes/MainScene'
import PreloadScene from './scenes/PreloadScene'
import MenuScene from './scenes/MenuScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  scene: [BootScene, PreloadScene, MainScene, MenuScene],
}

new Phaser.Game(config)
