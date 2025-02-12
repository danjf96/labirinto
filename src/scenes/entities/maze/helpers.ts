import { BLOCK_SIZE } from './constants'
import { MazeGridType, MazePositionsProps } from './interfaces'

export function generatePossiblePositions(
  mazeGrid: MazeGridType,
): MazePositionsProps[] {
  let validsPostions: MazePositionsProps[] = []
  mazeGrid.forEach((grid, row) =>
    grid.forEach((g, column) => {
      const position = {
        x: column * BLOCK_SIZE + BLOCK_SIZE / 2,
        y: row * BLOCK_SIZE + BLOCK_SIZE / 2,
      }

      if (g === 0) validsPostions.push(position)
    }),
  )
  return validsPostions
}
