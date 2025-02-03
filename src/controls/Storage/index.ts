import { MazeGame_Storage, StorageProps } from './interface'
const MAZE_STORAGE_NAME = 'MazeGame_Storage'

const setItem = <K extends keyof MazeGame_Storage>(
  key: K,
  value: MazeGame_Storage[K],
) => {
  let storage: any = localStorage.getItem(MAZE_STORAGE_NAME)
  if (storage) storage = JSON.parse(storage) || {}

  const newStorage = {
    ...storage,
    [key]: value,
  }
  localStorage.setItem(MAZE_STORAGE_NAME, JSON.stringify(newStorage))
}

const getItem = <K extends keyof MazeGame_Storage>(
  key: K,
): MazeGame_Storage[K] => {
  let storage: any = localStorage.getItem(MAZE_STORAGE_NAME)
  if (storage) storage = JSON.parse(storage) || {}

  return storage?.[key] ?? null
}

const getStorage = (): MazeGame_Storage => {
  let storage: any = localStorage.getItem(MAZE_STORAGE_NAME)
  if (storage) storage = JSON.parse(storage) || {}

  return storage
}

const setStorage = (storage: MazeGame_Storage): void => {
  localStorage.setItem(MAZE_STORAGE_NAME, JSON.stringify(storage))
}

const Storage: StorageProps = {
  setItem,
  getItem,
  getStorage,
  setStorage,
}
export default Storage
