import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe('Es hora de las instantáneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  })

  test('Siempre fallará la instantánea', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 1000000)
    }
    expect(user).toMatchSnapshot()
  })

  test('Tenemos una excepción', () => {
    const user = {
      id: Math.floor(Math.random() * 1000000),
      name: 'Oscar Barajas'
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    })
  })
})
