export interface PlayerPosition {
  x: number
  y: number
}

export type PlayAnimKey =
  | string
  | Phaser.Animations.Animation
  | Phaser.Types.Animations.PlayAnimationConfig
