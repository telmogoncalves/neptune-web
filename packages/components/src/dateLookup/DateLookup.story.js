import React from 'react';
import DateLookup from './DateLookup';
import { action } from '@storybook/addon-actions';
import { boolean, select, date, text } from '@storybook/addon-knobs';

export default {
  component: DateLookup,
  title: 'DateLookup',
};

export const basic = () => {
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const disabled = boolean('disabled', false);
  const size = select('size', Object.values(DateLookup.Size), DateLookup.Size.MEDIUM);
  const placeholder = text('placeholder', 'placeholder');
  const label = text('label', 'label');
  const monthFormat = select('monthFormat', ['long', 'short']);

  const value = date('value', new Date('2020-02-01'));
  const minvalue = date('minvalue', new Date('2020-01-01'));
  const maxvalue = date('maxvalue', new Date('2020-03-01'));

  return (
    <DateLookup
      value={new Date(value)}
      min={new Date(minvalue)}
      max={new Date(maxvalue)}
      size={size}
      locale={locale}
      placeholder={placeholder}
      label={label}
      monthFormat={monthFormat}
      disabled={disabled}
      onChange={(v) => action(v)}
    />
  );
};
