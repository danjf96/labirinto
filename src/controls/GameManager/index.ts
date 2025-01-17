class GameManager {
  private coins: number = 0
  private gameOver: Boolean = false
  constructor() {}

  addCoin(value: number = 1): void {
    this.coins += value
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

  setGameOver(gameOver: Boolean) {
    this.gameOver = gameOver
  }

  getGameOver(): Boolean {
    return this.gameOver
  }
}

const gameManager = new GameManager()
export default gameManager
