import EventManager from '../../../controls/EventManager'
import gameManager from '../../../controls/GameManager'
import MusicPlayer from '../../../controls/MusicPlayer'
import GameScene from '../../interfaces/GameScene'
import { CoinPositionProps } from './types'

class Coin {
  scene!: GameScene
  private sprite!: Phaser.GameObjects.Sprite
  private getCoinSong: MusicPlayer
  private loseCoinSong: MusicPlayer
  private possiblePositions: CoinPositionProps[] = []
  private emitParticles!: Phaser.GameObjects.Particles.ParticleEmitter
  private position: CoinPositionProps = { x: 0, y: 0 }

  constructor(scene: GameScene) {
    this.scene = scene
    this.getCoinSong = new MusicPlayer(this.scene, 'getCoin')
    this.loseCoinSong = new MusicPlayer(this.scene, 'loseCoin')

    this.scene.anims.create({
      key: 'coin',
      frames: this.scene.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1, // Repetição infinita
    })

    this.emitParticles = this.scene.add.particles(
      undefined,
      undefined,
      'coinParticles',
      {
        x: 0,
        y: 0,
        speed: { min: -50, max: 50 },
        gravityY: 0,
        lifespan: 500,
        quantity: 15,
        active: false,
      },
    )
  }

  create({ x, y }: CoinPositionProps): void {
    this.sprite = this.scene.physics.add.sprite(x, y, 'coin')
    this.sprite.setOrigin(0.5)
    this.position = { x, y }
    this.getCoinSong.setVolume(0.5)
    this.loseCoinSong.setVolume(0.5)
  }

  setPosition({ x, y }: CoinPositionProps): void {
    this.position = { x, y }
    this.sprite.setPosition(x, y)
  }

  setPossiblePositions(positions: CoinPositionProps[]) {
    this.possiblePositions = positions
  }

  getPossiblePositions(): CoinPositionProps[] {
    return this.possiblePositions
  }

  playAnimation(animation: string = 'coin'): void {
    this.sprite.play(animation)
  }

  playParticles({ x, y }: CoinPositionProps) {
    if (!this.emitParticles.active) this.emitParticles.setActive(true)
    this.emitParticles.setPosition(x, y)
    this.emitParticles.explode(15)
  }

  getCoin() {
    this.getCoinSong.play()
    this.scene.player.getCoin()
    gameManager.addCoin()

    EventManager.emit('updateCoins', gameManager.getCoins())

    this.playParticles(this.position)
    this.newPosition()
  }

  loseCoin() {
    this.loseCoinSong.play()
    gameManager.removeCoin()

    EventManager.emit('updateCoins', gameManager.getCoins())
  }

  setColider(type: 'GET' | 'LOSE') {
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
