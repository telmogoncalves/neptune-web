import React from 'react';
import SelectWithAlternatives from './SelectWithAlternatives';

export default {
  component: SelectWithAlternatives,
  title: 'SelectWithAlternatives',
};

export const basic = () => {
  return (
    <SelectWithAlternatives
      id="select-with-alternatives"
      searchPlaceholder="Country name, abbreviation or capital city"
      optionsWithAlts={[
        { value: 'US', label: 'United States of America', alternatives: ['Washington D.C.', 'DC'] },
        { value: 'EE', label: 'Estonia', alternatives: ['Tallinn'] },
        { value: 'GB', label: 'United Kingdom', alternatives: ['London'] },
        { value: 'HU', label: 'Hungary', alternatives: ['Budapest'] },
        { value: 'SG', label: 'Singapore' },
        { value: 'JP', label: 'Japan', alternatives: ['Tokyo'] },
      ]}
    />
  );
};
