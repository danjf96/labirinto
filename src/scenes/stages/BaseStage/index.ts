import gameManager from '../../../controls/GameManager'
import Hud from '../../../controls/Hud'
import MusicPlayer from '../../../controls/MusicPlayer'
import Coin from '../../entities/coin'
import { generatePossiblePositions } from '../../entities/maze/helpers'
import { CoinPositionProps } from '../../entities/coin/interfaces'
import Maze from '../../entities/maze'
import { MazeGridType } from '../../entities/maze/interfaces'
import Player from '../../entities/player'
import GameScene, { BaseStageCreateParams } from './interfaces'

class BaseStage extends Phaser.Scene implements GameScene {
  maze!: Maze
  player!: Player
  coin!: Coin
  hud!: Hud
  audio!: MusicPlayer
  phaseDurationTime: number = 0
  timerEvent: any

  constructor({ key }: { key: string }) {
    super({ key })
  }

  preload(mazeGrid: MazeGridType) {
    this.player = new Player(this, { x: 0, y: 0 })

    this.maze = new Maze(this, mazeGrid)
    this.maze.create()

    this.coin = new Coin(this)
  }

  create({ phaseDurationTime = 5 }: BaseStageCreateParams) {
    this.phaseDurationTime = phaseDurationTime
    this.hud = new Hud(this)
    this.hud.updateTimer(phaseDurationTime)

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

    //timer
    this.timerEvent = this.time.addEvent({
      delay: 1000, // 1 segundo
      callback: this.updateTimer,
      callbackScope: this,
      loop: true,
    })
  }

  async shutdown({ scene: { hud, tweens, anims } }: { scene: GameScene }) {
    hud.destroy()
  }

  updateTimer() {
    this.hud.updateTimer(--this.phaseDurationTime)
    if (this.phaseDurationTime <= 0) {
      this.timerEvent.remove(false)
      alert('ACABOU O TEMPO')
    }
  }

  update(time: number, delta: number): void {
    const gameOver = gameManager.getGameOver()
    if (gameOver) return

    this.player.movePlayer()
  }
}

export default BaseStage
