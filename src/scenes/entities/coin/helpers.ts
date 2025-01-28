import { MazeGridType } from '../maze/interfaces'
import { CoinPositionProps } from './interfaces'

export function generatePossiblePositions(
  mazeGrid: MazeGridType,
): CoinPositionProps[] {
  let validsPostions: CoinPositionProps[] = []
  mazeGrid.forEach((grid, row) =>
    grid.forEach((g, column) => {
      const position = {
        x: column * 50,
        y: row * 50,
      }

      if (g === 0) validsPostions.push(position)
    }),
  )
  return validsPostions
}
