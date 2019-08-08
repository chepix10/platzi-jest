import { callbackHell } from '../callbacks'

describe('Probando un callback', () => {
  test('Callback', (done) => {
    const otherCallback = (data) => {
      expect(data).toBe('Hola Javascripters')
      done()
    }
    callbackHell(otherCallback)
  })
})
