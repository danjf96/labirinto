import Stage1 from './Stage1'

type SceneType = typeof Phaser.Scene

const allStages: Record<string, SceneType> = {
  Stage1,
}

const allStageScenes = Object.values(allStages)

export default allStageScenes
