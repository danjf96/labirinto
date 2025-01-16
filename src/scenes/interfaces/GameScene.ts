import Coin from '../entities/coin'
import Maze from '../entities/maze'
import Player from '../entities/player'

interface GameScene extends Phaser.Scene {
  player: Player
  coin: Coin
  maze: Maze
}

export default GameScene
