import React from 'react';
import { shallow } from 'enzyme';

import Option from './Option';

describe('option', () => {
  let component;
  let props;

  beforeEach(() => {
    props = { label: 'hello' };
    component = shallow(<Option {...props} />);
  });

  it('renders the given label', () => {
    expect(component.text()).toEqual(props.label);
  });

  it('renders the given small note', () => {
    component.setProps({ note: 'whadup' });
    expect(component.find('span.small').text()).toEqual('whadup');
  });

  it('renders the given secondary text in a separate line', () => {
    component.setProps({ secondary: 'secondary text' });
    expect(component.find('span.small.text-ellipsis').text()).toEqual('secondary text');
  });

  it('renders a given icon', () => {
    component.setProps({ icon: 'swag' });
    expect(component.find('i.icon.swag').length).toBe(1);
  });

  it('renders the given currency flag for a given currency', () => {
    component.setProps({ currency: 'hustle' });
    expect(component.find('i.currency-flag.currency-flag-hustle').length).toBe(1);
  });
});
