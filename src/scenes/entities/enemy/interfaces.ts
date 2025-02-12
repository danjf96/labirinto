export interface EnemyPositionParams {
  x: number
  y: number
}

export type PlayAnimKey =
  | string
  | Phaser.Animations.Animation
  | Phaser.Types.Animations.PlayAnimationConfig

export type SpriteDirectionProps = 'DOWN' | 'UP' | 'RIGHT' | 'LEFT'
