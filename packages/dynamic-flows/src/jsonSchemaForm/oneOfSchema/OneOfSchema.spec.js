import React from 'react';
import { shallow } from 'enzyme';

import OneOfSchema from '.';

import GenericSchema from '../genericSchema/';
import { RadioGroup, Select } from '@transferwise/components';

describe('Given a oneOfSchema component', () => {
  let component;
  let genericSchema;
  let props;
  let onChange;
  let schema;

  const model = { b: 2, c: 3 };
  const errors = { a: 'error' };
  const locale = 'en-GB';
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
  });

  describe('when initialised with multiple schemas', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option A',
            properties: {
              a: {
                type: 'number',
              },
            },
            required: ['a'],
          },
          {
            type: 'object',
            title: 'Option B',
            properties: {
              b: {
                type: 'number',
              },
            },
            required: ['b'],
          },
          {
            type: 'object',
            title: 'Option C',
            properties: {
              c: {
                type: 'number',
              },
            },
            required: ['c'],
          },
        ],
      };

      props = { schema, model, errors, locale, onChange, submitted, translations };
      component = shallow(<OneOfSchema {...props} />);

      genericSchema = component.find(GenericSchema);
    });

    it('should render the schema title in a label', () => {
      expect(component.find('.control-label').text()).toContain(schema.title);
    });

    it('should render a radio group to choose between schemas', () => {
      expect(component.find(RadioGroup)).toHaveLength(1);
    });

    it('should render one generic schema component', () => {
      expect(genericSchema.length).toBe(1);
    });

    it('should pass the first schema with a valid model to the genericSchema', () => {
      expect(genericSchema.prop('schema')).toEqual(schema.oneOf[1]);
    });

    it('should pass the valid part of the model to the genericSchema', () => {
      expect(genericSchema.prop('model')).toEqual({ b: 2 });
    });

    it('should pass errors to the nested generic schema component', () => {
      expect(genericSchema.prop('errors')).toEqual(errors);
    });

    it('should pass locale to the nested generic schema component', () => {
      expect(genericSchema.prop('locale')).toEqual(locale);
    });

    it('should pass translations to the nested generic schema component', () => {
      expect(genericSchema.prop('translations')).toEqual(translations);
    });

    describe('when another schema is selected', () => {
      beforeEach(() => {
        component.find(RadioGroup).simulate('change', 2);
        // As a changing the state cause a render, need to refetch child component
        genericSchema = component.find(GenericSchema);
      });

      it('should pass that schema to the nested generic schema', () => {
        expect(genericSchema.prop('schema')).toBe(schema.oneOf[2]);
      });

      it('should pass the valid parts of the original model to the nested generic schema', () => {
        expect(genericSchema.prop('model')).toEqual({ c: 3 });
      });

      it('should trigger onChange with only the properties in the new schema', () => {
        expect(onChange).toHaveBeenCalledWith({ c: 3 }, schema.oneOf[2]);
      });
    });

    describe('when the generic schema triggers an onChange event', () => {
      beforeEach(() => {
        genericSchema.simulate('change', { b: 4 }, schema.oneOf[1]);
      });

      it('should trigger the components onChange once', () => {
        expect(onChange).toHaveBeenCalled();
      });

      it('should broadcast the changed model from the child', () => {
        expect(onChange).toHaveBeenCalledWith({ b: 4 }, schema.oneOf[1]);
      });

      it('should not change the input model', () => {
        expect(model).toEqual({ b: 2, c: 3 });
      });

      describe('when the user toggles to another schema, and back again', () => {
        beforeEach(() => {
          component.find(RadioGroup).simulate('change', 2);
          component.find(RadioGroup).simulate('change', 1);
          genericSchema = component.find(GenericSchema);
        });

        it('should remember and pass down the changed value', () => {
          expect(genericSchema.prop('model')).toEqual({ b: 4 });
        });
      });
    });
  });

  describe('when only one schema is supplied', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option A',
            properties: {
              a: {
                type: 'number',
              },
            },
            required: ['a'],
          },
        ],
      };

      props = { schema, model, errors, locale, onChange, submitted, translations };
      component = shallow(<OneOfSchema {...props} />);
    });

    it('should not render a radio group to choose between schemas', () => {
      expect(component.find(RadioGroup)).toHaveLength(0);
    });

    it('should render the schema using a GenericSchema', () => {
      expect(component.find(GenericSchema)).toHaveLength(1);
    });
  });


  describe('when many schemas are supplied', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          { title: 'One', const: 1 },
          { title: 'Two', const: 2 },
          { title: 'Three', const: 3 },
          { title: 'Four', const: 4 }
        ],
      };

      props = { schema, model, errors, locale, onChange, submitted, translations };
      component = shallow(<OneOfSchema {...props} />);
    });

    it('should render a select box to choose between schemas', () => {
      expect(component.find(Select)).toHaveLength(1);
    });

    it('should not render a radio groups', () => {
      expect(component.find(RadioGroup)).toHaveLength(0);
    });
  });
});
