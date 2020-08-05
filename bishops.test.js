const bishops = require('./bishops')

test('start = 1, end = 4', () => {
  expect(calculateNumMoves(1, 4)).toEqual(null)
})

test('start = 1, end = 4', () => {
  expect(calculateNumMoves(1, 4)).toEqual(null)
})

test('start = 1, end = 3', () => {
  expect(calculateNumMoves(1, 3)).toEqual(2)
})

test('start = 1, end = 10', () => {
  expect(calculateNumMoves(1, 10)).toEqual(1)
})
