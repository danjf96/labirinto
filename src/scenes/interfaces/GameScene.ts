import Player from '../entities/player'

interface GameScene extends Phaser.Scene {
  player: Player
}

export default GameScene
