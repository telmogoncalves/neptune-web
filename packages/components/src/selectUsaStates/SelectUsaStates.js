import React from 'react';
import SelectWithAlternatives from "../selectWithAlternatives";
import Types from "prop-types";

import usStates from './data/usStates';

const SelectUsaStates = props => {
    const { searchPlaceholder, disabled, required, size} = props;

    return (
        <SelectWithAlternatives optionsWithAlts={usStates} required={required}
                                disabled={disabled} size={size} searchPlaceholder={searchPlaceholder}/>
    );
};

SelectUsaStates.propTypes = {
    required: Types.bool,
    disabled: Types.bool,
    searchPlaceholder: Types.string,
    size: Types.oneOf(['sm', 'md', 'lg']),
};

SelectUsaStates.defaultProps = {
    required: false,
    disabled: false,
    searchPlaceholder: '',
    size: 'md'
};

export default SelectUsaStates;
