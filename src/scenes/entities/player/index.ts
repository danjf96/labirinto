import { PlayAnimKey, PlayerPosition } from './types'

class Player {
  private scene: Phaser.Scene
  private position: PlayerPosition
  private sprite: Phaser.GameObjects.Sprite
  private controls!: Phaser.Types.Input.Keyboard.CursorKeys

  private velocity: number = 100

  constructor(scene: Phaser.Scene, newPosition: PlayerPosition) {
    this.scene = scene
    this.position = newPosition

    this.sprite = scene.physics.add.sprite(
      newPosition.x,
      newPosition.y,
      'player',
    )
    this.sprite.setOrigin(0.5)

    this.controls = this.scene.input.keyboard?.createCursorKeys()!

    this.setAnimations()
  }

  setAnimations() {
    this.scene.anims.create({
      key: 'goDown',
      frames: this.scene.anims.generateFrameNumbers('player', {
        start: 0,
        end: 7,
      }),
      frameRate: 12,
      repeat: -1, // Repetição infinita
    })

    this.scene.anims.create({
      key: 'goUp',
      frames: this.scene.anims.generateFrameNumbers('player', {
        start: 8,
        end: 15,
      }),
      frameRate: 12,
      repeat: -1,
    })

    this.scene.anims.create({
      key: 'goLeft',
      frames: this.scene.anims.generateFrameNumbers('player', {
        start: 16,
        end: 23,
      }),
      frameRate: 12,
      repeat: -1,
    })

    this.scene.anims.create({
      key: 'goRight',
      frames: this.scene.anims.generateFrameNumbers('player', {
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

  setVelocity(newVelocity: number) {
    this.velocity = newVelocity
  }

  movePlayer() {
    if (this.sprite.body && this.sprite) {
      this.sprite.body.velocity.x = 0
      this.sprite.body.velocity.y = 0

      if (this.controls.left.isDown && !this.controls.right.isDown) {
        this.sprite.body.velocity.x = -this.velocity
        this.playAnimation('goLeft')
      } else if (this.controls.right.isDown && !this.controls.left.isDown) {
        this.sprite.body.velocity.x = this.velocity
        this.playAnimation('goRight')
      } else if (this.controls.up.isDown && !this.controls.down.isDown) {
        this.sprite.body.velocity.y = -this.velocity
        this.playAnimation('goUp')
      } else if (this.controls.down.isDown && !this.controls.up.isDown) {
        this.sprite.body.velocity.y = this.velocity
        this.playAnimation('goDown')
      }

      if (
        this.sprite.body.velocity.x === 0 &&
        this.sprite.body.velocity.y === 0
      ) {
        this.stopAnimation()
      }
    }
  }

  getCoin() {
    console.log('GET ')
  }
  loseCoin() {
    console.log('LOSE ')
  }
}

export default Player
