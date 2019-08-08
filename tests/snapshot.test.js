import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe('Es hora de las instantáneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  })
})
