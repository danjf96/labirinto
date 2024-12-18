import StageScene1 from './StageScene1'

type SceneType = typeof Phaser.Scene

const allStages: Record<string, SceneType> = {
  StageScene1,
}

const allStageScenes = Object.values(allStages)

export default allStageScenes
