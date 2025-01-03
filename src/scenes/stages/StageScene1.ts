import MusicPlayer from '../../controls/MusicPlayer'
import Maze from '../entities/maze'
import { MazeGridType } from '../entities/maze/types'

class StageScene1 extends Phaser.Scene {
  maze!: Maze
  constructor() {
    super({ key: 'Stage1' })
  }

  preload() {
    const mazeGrid: MazeGridType = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 3, 0, 1, 3, 0, 0, 1, 0, 3, 1, 0, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 3, 0, 0, 0, 0, 1, 0, 0, 3, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 3, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

    this.maze = new Maze(this, mazeGrid)
    this.maze.create()
  }

  create() {
    const player = new MusicPlayer(this, 'main_song')
    player.setVolume(0.1)
    player.play()

    const width = this.cameras.main.width
    const height = this.cameras.main.height
    const background = this.add.sprite(0, 0, 'ground')
    background.setOrigin(0, 0)
    background.setDisplaySize(width, height)
    background.setDepth(-1)
  }
}

export default StageScene1
