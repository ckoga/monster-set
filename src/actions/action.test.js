import * as actions from '../actions';

describe('actions', () => {
  let weapons, armors;
  beforeEach(() => {
    weapons = [
      {
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      }
    ];
    armors = [
      {
        name: 'Odogaron Helm',
        type: 'head',
        rank: 'low',
        rarity: 4,
      }
    ];
  })
  it('should have a type of ADD_WEAPONS', () => {
    const expectedAction = {
      type: 'ADD_WEAPONS',
      weapons
    }

    const result = actions.addWeapons(weapons);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_ARMORS', () => {
    const expectedAction = {
      type: 'ADD_ARMORS',
      armors
    }

    const result = actions.addArmors(armors);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_PATH', () => {
    const path = '';
    const expectedAction = {
      type: 'ADD_PATH',
      path
    }

    const result = actions.addPath(path)

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_EQUIP', () => {
    const equipment = {
      name: 'Daoras Colossus',
      type: 'hammer',
      rarity: 8,
      attack: 1040
    };
    const expectedAction = {
      type: 'ADD_EQUIP',
      equipment
    }

    const result = actions.addEquip(equipment)

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_SET', () => {
    const set = [
      {
        name: 'Daoras Colossus',
        type: 'hammer',
        rarity: 8,
        attack: 1040
      },
      {
        name: 'Odogaron Helm',
        type: 'head',
        rank: 'low',
        rarity: 4,
      }
    ];
    const expectedAction = {
      type: 'ADD_SET',
      set
    }

    const result = actions.addSet(set)

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_EQUIP', () => {
    const set = [];
    const expectedAction = {
      type: 'ADD_SET',
      set
    }

    const result = actions.addSet(set)

    expect(result).toEqual(expectedAction);
  });

})