import React from 'react';
import InstructionsList from './InstructionsList';
import { array } from '@storybook/addon-knobs';

export default {
  component: InstructionsList,
  title: 'InstructionsList',
};

export const basic = () => {
  const dos = array('dos', [
    'Do an initial money transfer',
    'Invite at least 3 friends',
    'Convince them to use this amazing product',
  ]);
  const donts = array('donts', ['Paying extra hidden fees for transfers', 'Use bad exchange rate']);

  return <InstructionsList dos={dos} donts={donts} />;
};
