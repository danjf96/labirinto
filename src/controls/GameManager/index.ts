class GameManager {
  private coins: number = 0
  constructor() {}

  addCoin() {
    this.coins += 1
  }

  removeCoin() {
    this.coins -= 1
  }

  resetCoins() {
    this.coins = 0
  }

  getCoins(): number {
    return this.coins
  }
}

const gameManager = new GameManager()
export default gameManager
