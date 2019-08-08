import { getDataFromApi } from '../promise'

describe('Probando promesas', () => {
  test('Realizando una petición a una api', (done) => {
    const url = 'https://rickandmortyapi.com/api/character'
    getDataFromApi(url).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
      done()
    })
  })

  test('Resuelve un Hola!', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
  })

  test('Rechaza con un error', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error') // eslint-disable-line prefer-promise-reject-errors
  })
})