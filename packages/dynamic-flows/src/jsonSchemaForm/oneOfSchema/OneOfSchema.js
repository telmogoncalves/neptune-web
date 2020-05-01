import React, { useState } from 'react';
import Types from 'prop-types';

import GenericSchema from '../genericSchema';
import { RadioGroup, Select } from '@transferwise/components';

import { getValidModelParts } from '../validation/valid-model';
import { isValidSchema } from '../validation/schema-validators';

const OneOfSchema = (props) => {
  const getModelPartsForSchemas = (model, schemas) =>
    schemas.map((schema) => getValidModelParts(model, schema));

  // Determine which schema to show intitially based on validity of model, default to 0
  const getActiveSchemaIndex = (schema, model) => {
    const index = schema.oneOf.findIndex((childSchema) => isValidSchema(model, childSchema));
    return index >= 0 ? index : 0;
  };

  const onChange = (model, index) => {
    models[index] = model;
    setModels(models);
    props.onChange(model, props.schema.oneOf[index]);
  };

  const onSchemaChange = (index) => {
    setSchemaIndex(index);

    const newSchema = props.schema.oneOf[index];

    // const schemas broadcast a change automatically
    if (!isConstSchema(newSchema)) {
      props.onChange(models[index], newSchema);
    }
  };

  const isConstSchema = (schema) => {
    return schema.const || (schema.enum && schema.enum.length === 1);
  };

  const getRadioOptions = (schemas) =>
    schemas.map((schema, value) => {
      return { value, label: schema.title };
    });

  const [schemaIndex, setSchemaIndex] = useState(getActiveSchemaIndex(props.schema, props.model));
  const [models, setModels] = useState(getModelPartsForSchemas(props.model, props.schema.oneOf));

  const options = getRadioOptions(props.schema.oneOf);

  const controlType =
    props.schema.oneOf.length > 3 || props.schema.control === 'select' ? 'select' : 'radio';

  return (
    <div>
      {props.schema.title && <small className="control-label"> {props.schema.title} </small>}

      {props.schema.oneOf.length > 1 && (
        <div className="m-b-3">
          { controlType === 'radio' && (
            <RadioGroup
              selectedValue={schemaIndex}
              radios={options}
              name="radio-group"
              onChange={onSchemaChange}
            />
          ) }
          { controlType === 'select' && (
            <Select
              selected={options[schemaIndex]}
              options={options}
              onChange={(selected) => onSchemaChange(selected.value)}
            />
          ) }
        </div>
      )}

      <GenericSchema
        schema={props.schema.oneOf[schemaIndex]}
        model={models[schemaIndex]}
        errors={props.errors}
        locale={props.locale}
        translations={props.translations}
        onChange={(model) => onChange(model, schemaIndex)}
        submitted={props.submitted}
        hide-title
      />
    </div>
  );
};

OneOfSchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    oneOf: Types.arrayOf(Types.object).isRequired,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
};

OneOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
};

export default OneOfSchema;
