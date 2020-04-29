import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import GenericSchema from '../genericSchema';
import { getValidModelParts } from '../validation/valid-model';

const ObjectSchema = (props) => {
  const [model, setModel] = useState({ ...(props.model || {}) });

  const onChange = (propertyName, propertyModel, schema) => {
    if (propertyModel !== null) {
      model[propertyName] = propertyModel;
    } else {
      delete model[propertyName];
    }
    setModel(model);
    props.onChange(model, schema);
  };

  const getSchemaColumnClasses = (width) => {
    return {
      'col-xs-12': true,
      'col-sm-6': width === 'md',
      'col-sm-4': width === 'sm',
    };
  };

  const isRequired = (propertyName) =>
    props.schema.required && props.schema.required.indexOf(propertyName) >= 0;

  useEffect(() => {
    // When the schema changes, only retain valid parts of the model
    setModel(getValidModelParts(model, props.schema));
  }, [props.schema]);

  return (
    <fieldset>
      {props.schema.title && !props.hideTitle && <legend> {props.schema.title} </legend>}
      {props.schema.description && <p> {props.schema.description} </p>}
      <div className="row">
        {Object.keys(props.schema.properties).map((propertyName) => (
          <div
            key={propertyName}
            className={classNames(
              getSchemaColumnClasses(props.schema.properties[propertyName].width),
            )}
          >
            <GenericSchema
              schema={props.schema.properties[propertyName]}
              model={props.model && props.model[propertyName]}
              errors={props.errors && props.errors[propertyName]}
              locale={props.locale}
              translations={props.translations}
              onChange={(newModel, schema) => onChange(propertyName, newModel, schema)}
              submitted={props.submitted}
              required={isRequired(propertyName)}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

ObjectSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['object']).isRequired,
    properties: Types.shape({}).isRequired,
    required: Types.arrayOf(Types.string),
    title: Types.string,
    description: Types.string,
    width: Types.oneOf(['sm', 'md', 'lg']),
  }).isRequired,
  model: Types.shape({}),
  errors: Types.shape({}),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  hideTitle: Types.bool,
};

ObjectSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
};

export default ObjectSchema;
