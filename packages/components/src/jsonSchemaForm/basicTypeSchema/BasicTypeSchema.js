import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

import { getValidationFailures } from '../validation/validation-failures';
import { getValidModelParts } from '../validation/valid-model';

const BasicTypeSchema = (props) => {
  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(sanitiseModel(newModel));
  };

  const getValidationKeys = (newModel) =>
    getValidationFailures(newModel, props.schema, props.required);

  const setModelAndBroadcast = (newModel) => {
    setModel(newModel);
    const validationKeys = getValidationKeys(newModel);
    setValidations(validationKeys);

    const broadcastModel = validationKeys.length ? null : newModel;

    setLastModel(broadcastModel);

    if (broadcastModel !== lastModel) {
      props.onChange(broadcastModel, props.schema);
    }
  };

  const sanitiseModel = (newModel) => getValidModelParts(newModel, props.schema);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  const generateId = () => String(Math.floor(100000000 * Math.random()));

  const [id, setId] = useState('');
  const [model, setModel] = useState(props.model);
  const [lastModel, setLastModel] = useState(props.model);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState([]);

  const onSchemaChange = () => {
    // If no model, change to the default, only run this when the schema changes
    if (!model && props.schema.default) {
      setModelAndBroadcast(props.schema.default);
    }

    setId(generateId());
  };

  const onModelChange = () => {
    setValidations(getValidationKeys(model));
  };

  useEffect(onSchemaChange, [props.schema]);
  useEffect(onModelChange, [props.model]);

  const formGroupClasses = {
    'form-group': true,
    'has-error':
      (!changed && props.errors) ||
      ((props.submitted || (changed && blurred)) && validations.length),
    'has-info': focused && props.schema.help,
  };

  const showLabel = props.schema.format !== 'file' && props.schema.type !== 'boolean';

  return (
    <div className={classNames(formGroupClasses)}>
      {showLabel && (
        <label className="control-label" htmlFor={id}>
          {props.schema.title}
        </label>
      )}
      <SchemaFormControl
        id={id}
        schema={props.schema}
        value={model}
        locale={props.locale}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ControlFeedback
        changed={changed}
        focused={focused}
        blurred={blurred}
        submitted={props.submitted}
        errors={props.errors}
        schema={props.schema}
        validations={validations}
      />
    </div>
  );
};

BasicTypeSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number, Types.bool])),
    format: Types.string,
    title: Types.string,
    values: Types.arrayOf(Types.shape({})),
    default: Types.oneOfType([Types.string, Types.number, Types.bool]),
    disabled: Types.bool,
    help: Types.shape({}),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  errors: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
  locale: Types.string,
};

BasicTypeSchema.defaultProps = {
  model: null,
  errors: null,
  translations: {},
  required: false,
  locale: 'en-GB',
};

export default BasicTypeSchema;
