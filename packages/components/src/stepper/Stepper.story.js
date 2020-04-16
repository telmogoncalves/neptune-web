import React from 'react';
import Stepper from './Stepper';

import { select } from '@storybook/addon-knobs';

export default {
  component: Stepper,
  title: 'Stepper',
};

export const basic = () => {
  const activeStep = select('activeStep', [0, 1, 2, 3, 4], 0);
  return (
    <Stepper
      activeStep={activeStep}
      steps={[
        {
          label: 'One',
          onClick() {
            alert('You clicked on step 1, which triggered this function, which alerted you.'); // eslint-disable-line
          },
        },
        {
          label: 'Two',
          hoverLabel: (
            <>
              <div>
                <strong>Diana Jaramillo</strong>
              </div>
              dianajarm123@gmail.com
            </>
          ),
        },
        { label: 'Recipient' },
        { label: 'Smellification' },
        { label: 'Battle' },
      ]}
    />
  );
};
