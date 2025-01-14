import Coin from '../entities/coin'
import Player from '../entities/player'

interface GameScene extends Phaser.Scene {
  player: Player
  coin: Coin
}

export default GameScene
