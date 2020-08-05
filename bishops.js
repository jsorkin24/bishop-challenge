function bishops(startingPosition, ending_Position) {
  starting_column = (startingPosition - 1) % 8
  startingRow = Math.floor((startingPosition - 1) / 8)
  endingColumn = (ending_Position - 1) % 8
  endRow = Math.floor((ending_Position - 1) / 8)
  column_moves = Math.abs(starting_column - endingColumn)
  rowMoves = Math.abs(startingRow - endRow)
  if (column_moves == rowMoves) return 1;
  if (column_moves % 2 === rowMoves % 2) return 2;
}

module.exports = bishops;
