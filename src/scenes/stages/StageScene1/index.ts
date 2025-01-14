import MusicPlayer from '../../../controls/MusicPlayer'
import Coin from '../../entities/coin'
import { CoinPositionProps } from '../../entities/coin/types'
import Maze from '../../entities/maze'
import { MazeGridType } from '../../entities/maze/types'
import Player from '../../entities/player'
import GameScene from '../../interfaces/GameScene'

class StageScene1 extends Phaser.Scene implements GameScene {
  maze!: Maze
  player!: Player
  coin!: Coin
  coinPositions: CoinPositionProps[] = []

  constructor() {
    super({ key: 'Stage1' })
  }

  preload() {
    this.player = new Player(this, { x: 0, y: 0 })
    const mazeGrid: MazeGridType = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

    this.maze = new Maze(this, mazeGrid)
    this.maze.create()

    this.coin = new Coin(this)
  }

  create() {
    const audio = new MusicPlayer(this, 'main_song')
    audio.setVolume(0.1)
    audio.play()

    const width = this.cameras.main.width
    const height = this.cameras.main.height
    const background = this.add.sprite(0, 0, 'ground')

    background.setOrigin(0, 0)
    background.setDisplaySize(width, height)
    background.setDepth(-1)

    this.coinPositions = this.coin.generatePositions(this.maze.getGrid())
    this.coin.create(this.coinPositions[0])
    this.coin.playAnimation()
  }

  update(time: number, delta: number): void {
    this.maze.setBlockColide()

    this.player?.movePlayer()
  }
}

export default StageScene1
