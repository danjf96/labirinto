import Stage1 from './Stage1'
import Stage2 from './Stage2'

type SceneType = typeof Phaser.Scene

const allStages: Record<string, SceneType> = {
  Stage1,
  Stage2,
} as const

export type StageNames = keyof typeof allStages

const allStageScenes = Object.values(allStages)

export default allStageScenes
