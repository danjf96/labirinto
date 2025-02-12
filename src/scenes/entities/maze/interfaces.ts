// 0 -  chao, passagem do player ou inimigo
// 1 -  parede do labirintp
// 2 -  apenas para informar onde o jogador vai iniciar
// 3 -  moeda a ser coletada
export type MazeValueType = 0 | 1 | 2 | 3

export type MazeGridType = MazeValueType[][]

export interface MazePositionsProps {
  x: number
  y: number
}
