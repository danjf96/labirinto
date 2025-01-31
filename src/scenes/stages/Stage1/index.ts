import { generatePossiblePositions } from '../../entities/maze/helpers'
import Enemy from '../../entities/enemy'
import { MazeGridType } from '../../entities/maze/interfaces'
import BaseStage from '../BaseStage'

class Stage1 extends BaseStage {
  enemyGoblin!: Enemy

  constructor() {
    super({ key: 'Stage1' })
  }

  preload() {
    const mazeGrid: MazeGridType = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 2, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
    super.create()

    this.maze.setCollisionsWithTheBlocks([
      this.player.getSprite(),
      this.enemyGoblin.getSprite(),
    ])

    this.player.loseCoinWhenColide([this.enemyGoblin.getSprite()])
  }

  update(time: number, delta: number): void {
    super.update(time, delta)

    this.enemyGoblin.movePlayer()
  }
}

export default Stage1
