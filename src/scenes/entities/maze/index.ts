import GameScene from '../../stages/BaseStage/interfaces'
import { BLOCK_SIZE } from './constants'
import { MazeGridType } from './interfaces'

class Maze {
  private scene: GameScene
  private grid: MazeGridType
  private blocks: Phaser.GameObjects.Group
  private blockSize: number = BLOCK_SIZE

  constructor(scene: GameScene, grid: MazeGridType) {
    this.scene = scene
    this.grid = grid
    this.blocks = this.scene.physics.add.staticGroup()
  }

  create() {
    for (const row in this.grid) {
      for (const col in this.grid[row]) {
        const tile = this.grid[row][col]
        const x = parseInt(col) * this.blockSize + this.blockSize / 2
        const y = parseInt(row) * this.blockSize + this.blockSize / 2

        switch (tile) {
          case 1:
            const block = this.blocks.create(x, y, 'block')

            this.scene.physics.world.enable(block)

            block.body.immovable = true
            block.enableBody = true
            break
          case 2:
            this.scene.player.setPosition(x, y)
            break
          default:
            break
        }
      }
    }

    const mazeWidth = this.grid[0].length * this.blockSize
    const mazeHeight = this.grid.length * this.blockSize

    this.scene.cameras.main.setBounds(0, 0, mazeWidth, mazeHeight)
    this.scene.cameras.main.centerOn(mazeWidth / 2, mazeHeight / 2)

    this.scene.physics.world.setBounds(0, 0, mazeWidth, mazeHeight)
  }

  setCollisionsWithTheBlocks(sprites: Phaser.GameObjects.Sprite[]) {
    this.scene.physics.add.collider(sprites, this.blocks)
  }

  getGrid(): MazeGridType {
    return this.grid
  }

  getSizeBlock(): number {
    return this.blockSize
  }
}

export default Maze
