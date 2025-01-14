import GameScene from '../../interfaces/GameScene'
import { MazeGridType } from '../maze/types'
import { CoinPositionProps } from './types'

class Coin {
  scene!: GameScene
  private sprite!: Phaser.GameObjects.Sprite

  constructor(scene: GameScene) {
    this.scene = scene
    this.setAnimations()
  }

  create({ x, y }: CoinPositionProps): void {
    this.sprite = this.scene.physics.add.sprite(x, y, 'coin')
    this.sprite.setOrigin(0.5)
  }

  setPosition({ x, y }: CoinPositionProps): void {
    this.sprite.setPosition(x, y)
  }

  setAnimations(): void {
    this.scene.anims.create({
      key: 'coin',
      frames: this.scene.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1, // Repetição infinita
    })
  }

  playAnimation(animation: string = 'coin'): void {
    this.sprite.play(animation)
  }

  generatePositions(mazeGrid: MazeGridType): CoinPositionProps[] {
    let validsPostions: CoinPositionProps[] = []
    mazeGrid.forEach((grid, row) =>
      grid.forEach((g, column) => {
        const position = {
          x: column * 50,
          y: row * 50,
        }

        if (g === 0) validsPostions.push(position)
      }),
    )
    return validsPostions
  }
}

export default Coin
