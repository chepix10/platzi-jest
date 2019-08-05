import { sumar, restar, multiplicar, dividir } from '../maths'

describe('Cálculos matemáticos', () => {
  test('Sumar', () => {
    expect(sumar(1, 1)).toBe(2)
  })
  test('Multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4)
  })
  test('Restar', () => {
    expect(restar(1, 1)).toBe(0)
  })
  test('Dividir', () => {
    expect(dividir(2, 2)).toBe(1)
  })
})
