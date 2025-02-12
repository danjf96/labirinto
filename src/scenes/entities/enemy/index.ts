import GameScene from '../../stages/BaseStage/interfaces'
import { BLOCK_SIZE } from '../maze/constants'
import {
  EnemyPositionParams,
  PlayAnimKey,
  SpriteDirectionProps,
} from './interfaces'

class Enemy {
  private scene: GameScene
  private sprite: Phaser.GameObjects.Sprite
  private spriteDirection: SpriteDirectionProps = 'LEFT'

  constructor(
    scene: GameScene,
    newPosition: EnemyPositionParams,
    spriteDirectionParam?: SpriteDirectionProps,
  ) {
    this.scene = scene

    if (spriteDirectionParam) this.spriteDirection = spriteDirectionParam

    this.sprite = scene.physics.add
      .sprite(newPosition.x, newPosition.y, 'enemyGoblin')
      .setCollideWorldBounds(true)
      .setSize(23, 35)

    this.sprite.setOrigin(0.5)

    this.sprite.anims.create({
      key: 'goDown',
      frames: this.scene.anims.generateFrameNumbers('enemyGoblin', {
        start: 0,
        end: 7,
      }),
      frameRate: 12,
      repeat: -1, // Repetição infinita
    })

    this.sprite.anims.create({
      key: 'goUp',
      frames: this.scene.anims.generateFrameNumbers('enemyGoblin', {
        start: 8,
        end: 15,
      }),
      frameRate: 12,
      repeat: -1,
    })

    this.sprite.anims.create({
      key: 'goLeft',
      frames: this.scene.anims.generateFrameNumbers('enemyGoblin', {
        start: 16,
        end: 23,
      }),
      frameRate: 12,
      repeat: -1,
    })

    this.sprite.anims.create({
      key: 'goRight',
      frames: this.scene.anims.generateFrameNumbers('enemyGoblin', {
        start: 24,
        end: 31,
      }),
      frameRate: 12,
      repeat: -1,
    })
  }

  public getSprite(): Phaser.GameObjects.Sprite {
    return this.sprite
  }

  playAnimation(direction: PlayAnimKey) {
    if (
      !this.sprite.anims.isPlaying ||
      this.sprite.anims.currentAnim?.key !== direction
    ) {
      this.sprite.play(direction)
    }
  }

  stopAnimation() {
    this.sprite.stop()
  }

  setPosition(x: number, y: number) {
    this.sprite.setPosition(x, y)
  }

  movePlayer() {
    const centerInBlock = BLOCK_SIZE / 2
    if (
      Math.floor(this.sprite.x - centerInBlock) % BLOCK_SIZE === 0 &&
      Math.floor(this.sprite.y - centerInBlock) % BLOCK_SIZE === 0
    ) {
      const maze = this.scene.maze.getGrid()

      var enemyCol = Math.floor(this.sprite.x / BLOCK_SIZE)
      var enemyRow = Math.floor(this.sprite.y / BLOCK_SIZE)
      var validPath: SpriteDirectionProps[] = []

      if (
        maze[enemyRow][enemyCol - 1] !== 1 &&
        this.spriteDirection !== 'RIGHT'
      ) {
        validPath.push('LEFT')
      }
      if (
        maze[enemyRow][enemyCol + 1] !== 1 &&
        this.spriteDirection !== 'LEFT'
      ) {
        validPath.push('RIGHT')
      }
      if (
        maze[enemyRow - 1][enemyCol] !== 1 &&
        this.spriteDirection !== 'DOWN'
      ) {
        validPath.push('UP')
      }
      if (maze[enemyRow + 1][enemyCol] !== 1 && this.spriteDirection !== 'UP') {
        validPath.push('DOWN')
      }

      this.spriteDirection =
        validPath[Math.floor(Math.random() * validPath.length)]
    }

    switch (this.spriteDirection) {
      case 'LEFT':
        this.sprite.x -= 1
        this.playAnimation('goLeft')
        break
      case 'RIGHT':
        this.sprite.x += 1
        this.playAnimation('goRight')
        break
      case 'UP':
        this.sprite.y -= 1
        this.playAnimation('goUp')
        break
      case 'DOWN':
        this.sprite.y += 1
        this.playAnimation('goDown')
        break
    }
  }
}

export default Enemy
