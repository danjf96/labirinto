class Maze {
  private scene: Phaser.Scene
  private grid: number[][]
  private blocks: Phaser.GameObjects.Group

  constructor(scene: Phaser.Scene, grid: number[][]) {
    this.scene = scene
    this.grid = grid
    this.blocks = this.scene.add.group()
  }

  create() {
    for (const row in this.grid) {
      for (const col in this.grid[row]) {
        const tile = this.grid[row][col]
        const x = parseInt(col) * 50
        const y = parseInt(row) * 50

        switch (tile) {
          case 1:
            const block = this.blocks.create(x, y, 'block')
            this.scene.physics.world.enable(block)

            block.body.immovable = true
            block.enableBody = true
            break
          default:
            break
        }
      }
    }
  }
}

export default Maze
