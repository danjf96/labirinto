import Hud from '../../../controls/Hud'
import MusicPlayer from '../../../controls/MusicPlayer'
import Coin from '../../entities/coin'
import { generatePossiblePositions } from '../../entities/coin/helpers'
import { CoinPositionProps } from '../../entities/coin/types'
import Enemy from '../../entities/enemy'
import Maze from '../../entities/maze'
import { MazeGridType } from '../../entities/maze/types'
import Player from '../../entities/player'
import GameScene from '../../interfaces/GameScene'

class StageScene1 extends Phaser.Scene implements GameScene {
  maze!: Maze
  player!: Player
  coin!: Coin
  hud!: Hud
  enemyGoblin!: Enemy

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
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

    const possiblePositions = generatePossiblePositions(mazeGrid)
    this.enemyGoblin = new Enemy(this, possiblePositions[1])

    this.maze = new Maze(this, mazeGrid)
    this.maze.create()

    this.coin = new Coin(this)
  }

  create() {
    this.hud = new Hud(this)

    const audio = new MusicPlayer(this, 'mainSong')
    audio.setVolume(0.1)
    audio.play(true)

    const width = this.cameras.main.width
    const height = this.cameras.main.height
    const background = this.add.sprite(0, 0, 'ground')

    background.setOrigin(0, 0)
    background.setDisplaySize(width, height)
    background.setDepth(-1)

    const coinPositions: CoinPositionProps[] = generatePossiblePositions(
      this.maze.getGrid(),
    )
    this.coin.create(coinPositions[0])
    this.coin.setPossiblePositions(coinPositions)
    this.coin.playAnimation()
  }

  update(time: number, delta: number): void {
    this.maze.setCollisionsWithTheBlocks([
      this.player.getSprite(),
      this.enemyGoblin.getSprite(),
    ])

    this.coin.setColider('GET')

    this.player.movePlayer()
    this.player.loseCoinWhenColide([this.enemyGoblin.getSprite()])

    this.enemyGoblin.movePlayer()
  }
}

export default StageScene1
