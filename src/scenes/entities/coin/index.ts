import MusicPlayer from '../../../controls/MusicPlayer'
import GameScene from '../../interfaces/GameScene'
import { CoinPositionProps } from './types'

class Coin {
  scene!: GameScene
  private sprite!: Phaser.GameObjects.Sprite
  private getCoinSong: MusicPlayer
  private loseCoinSong: MusicPlayer
  private possiblePositions: CoinPositionProps[] = []

  constructor(scene: GameScene) {
    this.scene = scene
    this.setAnimations()
    this.getCoinSong = new MusicPlayer(this.scene, 'getCoin')
    this.loseCoinSong = new MusicPlayer(this.scene, 'loseCoin')
  }

  create({ x, y }: CoinPositionProps): void {
    this.sprite = this.scene.physics.add.sprite(x, y, 'coin')
    this.sprite.setOrigin(0.5)

    this.getCoinSong.setVolume(0.5)
    this.loseCoinSong.setVolume(0.5)
  }

  setPosition({ x, y }: CoinPositionProps): void {
    this.sprite.setPosition(x, y)
  }

  setPossiblePositions(positions: CoinPositionProps[]) {
    this.possiblePositions = positions
  }

  getPossiblePositions(): CoinPositionProps[] {
    return this.possiblePositions
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

  getCoin() {
    this.getCoinSong.play()
    this.scene.player.getCoin()
    this.newPosition()
  }

  setBlockColide(type: 'GET' | 'LOSE') {
    const playerEntity = this.scene.player
    switch (type) {
      case 'GET':
        this.scene.physics.overlap(
          playerEntity.getSprite(),
          this.sprite,
          this.getCoin,
          () => null,
          this,
        )
        break
    }
  }

  newPosition() {
    const length: number = this.possiblePositions.length
    var pos = this.possiblePositions[Math.floor(Math.random() * length)]
    this.setPosition(pos)
  }
}

export default Coin
