import { fruits, colors } from '../arrays'

describe('Comprobamos que existe un elemento', () => {
  test('¿Contiene una banana?', () => {
    expect(fruits()).toContain('banana')
  })
  test('¿Contiene un plátano?', () => {
    expect(fruits()).not.toContain('platano')
  })
  test('Tamaño de un arreglo', () => {
    expect(fruits()).toHaveLength(6)
  })
  test('Comprobaremos que existe un color', () => {
    expect(colors()).toContain('azul')
  })
})
