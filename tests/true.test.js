import { isTrue, isFalse, isNull, isUndefined } from '../true'

describe('Probar resultados nulos', () => {
  test('Null', () => {
    expect(isNull()).toBeNull()
  })
  test('Undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
})

describe('Probar resultados verdaderos', () => {
  test('True', () => {
    expect(isTrue()).toBeTruthy()
  })
  test('False', () => {
    expect(isFalse()).toBeFalsy()
  })
})
