class GameManager {
  private coins: number = 0
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
}

const gameManager = new GameManager()
export default gameManager
