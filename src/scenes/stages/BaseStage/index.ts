import gameManager from '../../../controls/GameManager'
import Hud from '../../../controls/Hud'
import MusicPlayer from '../../../controls/MusicPlayer'
import Coin from '../../entities/coin'
import { generatePossiblePositions } from '../../entities/maze/helpers'
import { CoinPositionProps } from '../../entities/coin/interfaces'
import Maze from '../../entities/maze'
import { MazeGridType } from '../../entities/maze/interfaces'
import Player from '../../entities/player'
import GameScene from './interfaces'

class BaseStage extends Phaser.Scene implements GameScene {
  maze!: Maze
  player!: Player
  coin!: Coin
  hud!: Hud
  audio!: MusicPlayer

  constructor({ key }: { key: string }) {
    super({ key })
  }

  preload(mazeGrid: MazeGridType) {
    this.player = new Player(this, { x: 0, y: 0 })

    this.maze = new Maze(this, mazeGrid)
    this.maze.create()

    this.coin = new Coin(this)
  }

  create() {
    this.hud = new Hud(this)

    this.audio = new MusicPlayer(this, 'mainSong')
    this.audio.setVolume(0.1)
    this.audio.play(true)

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

    this.coin.setColider('GET')

    this.events.once('shutdown', this.shutdown)
  }

  update(time: number, delta: number): void {
    const gameOver = gameManager.getGameOver()
    if (gameOver) return

    this.player.movePlayer()
  }

  async shutdown({ scene: { hud, tweens, anims } }: { scene: GameScene }) {
    hud.destroy()
  }
}

export default BaseStage
