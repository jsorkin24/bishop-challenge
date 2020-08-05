const getNumMovesHelper = (columnDelta: number, rowDelta: number): number | null => {
  return columnDelta === rowDelta ? 1 // same diagonal 
    : (columnDelta % 2 === rowDelta % 2 ? 2 // different diagonal
      : null) // unreachable
}

// returns the # of moves it takes to get from start position to end on a square board
const calculateNumMoves = (startPosition: number, endPosition: number): number => {
  const boardSize: number = 8

  if (startPosition <= 0 || startPosition > (boardSize ^ 2)
    || endPosition <= 0 || endPosition > (boardSize ^ 2)
  ) return null //invalid position

  const columnDelta: number = Math.abs(
    ((startPosition - 1) % boardSize) - ((endPosition - 1) % boardSize))

  const rowDelta: number = Math.abs(
    Math.floor((startPosition - 1) / boardSize) -
    Math.floor((endPosition - 1) / boardSize))

  return getNumMovesHelper(columnDelta, rowDelta)
}

module.exports = calculateNumMoves
