import React, { useState } from 'react';
import Types from 'prop-types';

import Select from '../select';

import './SelectWithAlternatives.css';

const OptionWithAlternatives = Types.shape({
  value: Types.string,
  label: Types.string,
  alternatives: Types.arrayOf(Types.string),
});

const SelectWithAlternatives = props => {
  const { searchPlaceholder, disabled, required, optionsWithAlts, useContainSearch } = props;

  const getInitialValue = () => {
    return { value: '', label: '' };
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(getInitialValue());

  const optionPropertyFitsQuery = (value, query, isContainSearch) => {
    return value && isContainSearch
      ? value.toLowerCase().indexOf(query.toLowerCase()) !== -1
      : value.toLowerCase().startsWith(query.toLowerCase());
  };

  const searchAltArray = (alternatives, query, isContainSearch) => {
    return (
      alternatives &&
      alternatives.findIndex(element =>
        optionPropertyFitsQuery(element, query, isContainSearch),
      ) !== -1
    );
  };

  const getSelectOptions = () => {
    const filteredOptions = optionsWithAlts.filter(
      option =>
        optionPropertyFitsQuery(option.value, searchQuery, useContainSearch) ||
        optionPropertyFitsQuery(option.label, searchQuery, useContainSearch) ||
        searchAltArray(option.alternatives, searchQuery, useContainSearch),
    );

    return filteredOptions.map(option => {
      return { value: option.value, label: option.label };
    });
  };

  const options = getSelectOptions();

  const handleChangeSelect = event => {
    setSelectedOption({ value: event.value, label: event.label, alternatives: [] });
    setSearchQuery('');
  };

  return (
    <div className="tw-select-with-alternatives">
      <Select
        options={options}
        onChange={handleChangeSelect}
        searchPlaceholder={searchPlaceholder}
        onSearchChange={newSearch => setSearchQuery(newSearch)}
        selected={selectedOption}
        searchValue={searchQuery}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

SelectWithAlternatives.propTypes = {
  required: Types.bool,
  disabled: Types.bool,
  searchPlaceholder: Types.string,
  optionsWithAlts: Types.arrayOf(OptionWithAlternatives).isRequired,
  useContainSearch: Types.bool,
};

SelectWithAlternatives.defaultProps = {
  required: false,
  disabled: false,
  searchPlaceholder: '',
  useContainSearch: false,
};

export default SelectWithAlternatives;
