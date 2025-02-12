import { generatePossiblePositions } from '../../entities/maze/helpers'
import Enemy from '../../entities/enemy'
import { MazeGridType } from '../../entities/maze/interfaces'
import BaseStage from '../BaseStage'
import gameManager from '../../../controls/GameManager'

class Stage2 extends BaseStage {
  enemyGoblin!: Enemy

  constructor() {
    super({ key: 'Stage2' })
  }

  preload() {
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

    super.preload(mazeGrid)

    const possiblePositions = generatePossiblePositions(mazeGrid)
    this.enemyGoblin = new Enemy(this, possiblePositions[1])
  }

  create() {
    super.create({ maxCoins: 10 })

    this.maze.setCollisionsWithTheBlocks([
      this.player.getSprite(),
      this.enemyGoblin.getSprite(),
    ])

    this.player.loseCoinWhenColide([this.enemyGoblin.getSprite()])
  }

  update(time: number, delta: number): void {
    super.update(time, delta)

    this.enemyGoblin.movePlayer()

    if (gameManager.getCoins() == this.maxCoins && !gameManager.getGameOver()) {
      this.completePhase('MenuScene')
    }
  }
}

export default Stage2
