export interface MazeGame_Storage {
  highScore: number
}

export interface StorageProps {
  setItem: <K extends keyof MazeGame_Storage>(
    key: K,
    value: MazeGame_Storage[K],
  ) => void
  getItem: <K extends keyof MazeGame_Storage>(key: K) => MazeGame_Storage[K]
  getStorage: () => MazeGame_Storage
  setStorage: (storage: MazeGame_Storage) => void
}
