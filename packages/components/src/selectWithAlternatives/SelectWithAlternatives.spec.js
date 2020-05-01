import React from 'react';
import { shallow } from 'enzyme';
import SelectWithAlternatives from './SelectWithAlternatives';
import { Select } from '../index';

describe('Select With Alternatives', () => {
  let component;
  let props;
  let states;

  beforeEach(() => {
    states = [
      {
        value: 'MA',
        label: 'Massachusetts',
        alternatives: ['Bay State'],
      },
      {
        value: 'NY',
        label: 'New York',
        alternatives: ['Empire State', 'Excelsior'],
      },
      {
        value: 'NC',
        label: 'North Carolina',
        alternatives: ['Tar Heel State'],
      },
      {
        value: 'SC',
        label: 'South Carolina',
        alternatives: ['Palmetto State'],
      },
    ];
    props = {
      optionsWithAlts: states,
    };
    component = shallow(<SelectWithAlternatives {...props} />);
  });

  function selectWithAlt() {
    return component.find(Select);
  }

  function searchStates(query) {
    selectWithAlt().prop('onSearchChange')(query);
    component.update();
  }

  function displayedStates() {
    return selectWithAlt().prop('options');
  }

  describe('when searching', () => {
    it('passes search value to currency select', () => {
      expect(selectWithAlt().prop('searchValue')).toBe('');

      searchStates('NY');
      expect(selectWithAlt().prop('searchValue')).toBe('NY');
    });

    it('searches by label using starts with', () => {
      const stateOptions = [
        { value: 'MA', label: 'Massachusetts' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'SC', label: 'South Carolina' },
      ];

      expect(displayedStates()).toEqual(stateOptions);

      searchStates('New');
      expect(displayedStates()).toEqual([{ value: 'NY', label: 'New York' }]);
    });

    it('searches by alt using starts with', () => {
      const stateOptions = [
        { value: 'MA', label: 'Massachusetts' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'SC', label: 'South Carolina' },
      ];

      expect(displayedStates()).toEqual(stateOptions);

      searchStates('Excel');
      expect(displayedStates()).toEqual([{ value: 'NY', label: 'New York' }]);
    });

    it('searches by value using starts with', () => {
      const stateOptions = [
        { value: 'MA', label: 'Massachusetts' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'SC', label: 'South Carolina' },
      ];

      expect(displayedStates()).toEqual(stateOptions);

      searchStates('NY');
      expect(displayedStates()).toEqual([{ value: 'NY', label: 'New York' }]);
    });
  });
});
