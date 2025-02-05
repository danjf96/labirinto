import { StageNames } from '../../scenes/stages'
import GameScene from '../../scenes/stages/BaseStage/interfaces'
import Storage from '../Storage'

class GameManager {
  private coins: number = 0
  private gameOver: Boolean = false
  private highScore: number = 0
  private score: number = 0
  private completePhases: StageNames[] = []

  constructor() {
    const highScore = Storage.getItem('highScore')
    if (highScore) this.highScore = highScore
    else Storage.setItem('highScore', 0)
  }

  addCoin(value: number = 1): void {
    this.coins += value
  }

  setCoin(value: number): void {
    this.coins = value
  }

  removeCoin(value: number = 1): void {
    this.coins -= value
  }

  resetCoins(): void {
    this.coins = 0
  }

  getCoins(): number {
    return this.coins
  }

  setGameOver(gameOver: Boolean, scene: GameScene) {
    this.gameOver = gameOver
    this.score = 0
    scene.scene.stop()
    scene.scene.start('GameOver')
  }

  restartGame() {
    this.gameOver = false
    this.coins = 0
    this.score = 0
    const highScore = Storage.getItem('highScore')
    if (highScore) this.highScore = highScore

    this.completePhases = []
  }

  getGameOver(): Boolean {
    return this.gameOver
  }

  addHighScore(highScore: number): void {
    this.highScore = highScore
    Storage.setItem('highScore', highScore)
  }

  getHighScore(): number {
    return this.highScore
  }

  addScore(score: number): void {
    this.score += score

    if (this.score > this.highScore) {
      this.addHighScore(this.score)
    }
  }

  setScore(score: number): void {
    this.score = score
    if (this.score > this.highScore) {
      this.addHighScore(score)
    }
  }

  getScore(): number {
    return this.score
  }

  setCompletePhase(phase: StageNames) {
    this.completePhases.push(phase)
  }

  getCompletePhases() {
    return this.completePhases
  }

  phaseIsComplete(phase: StageNames) {
    return this.completePhases.includes(phase)
  }
}

const gameManager = new GameManager()
export default gameManager
