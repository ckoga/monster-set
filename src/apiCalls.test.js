import { getWeapons, getArmors } from './apiCalls';

describe('apiCalls', () => {
  describe('getWeapons', () => {
    let mockResponse = {
      weapons: [
        {
          img: 'image',
          name: 'name',
          type: 'sword',
          rarity: 3,
          attack: 2000
        },
        {
          img: 'image',
          name: 'name',
          type: 'sword',
          rarity: 3,
          attack: 2000
        },
        {
          img: 'image',
          name: 'name',
          type: 'sword',
          rarity: 3,
          attack: 2000
        }
      ]
    };

    it('should return an object with all the weapon data', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });

      expect(getWeapons()).resolves.toEqual(mockResponse)
    });

    it('Sad path, catch should return an error if the fetch is not resolved', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
    });

    expect(getWeapons()).rejects.toEqual(Error('fetch failed'))
  });
})

  describe('getArmors', () => {
    let mockResponse = {
      armor: [
        {
          img: 'image',
          name: 'big helmet',
          type: 'head',
          rank: 'low',
          rarity: 1
        },
        {
          img: 'image',
          name: 'big helmet',
          type: 'head',
          rank: 'low',
          rarity: 1
        }
      ]
    };

    it('should return an object with all armor data', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });

      expect(getArmors()).resolves.toEqual(mockResponse)
    })

    it('Sad path, catch should return an error if the fetch is not resolved', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getArmors()).rejects.toEqual(Error('fetch failed'))
    })
  })
})