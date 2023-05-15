import React from 'react';
import { Alert, AlertDescription } from '../alert';

export default {
  component: Alert,
  title: 'Alert',
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'info', 'error', 'warning']
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  },
  args: {
    status: 'info',
    size: 'sm'
  }
};

const Template = (args) => (
  <Alert
    css={{
      maxWidth: 400
    }}
    {...args}
  >
    <AlertDescription>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {`A ${args.status} message here`}
    </AlertDescription>
  </Alert>
);
export const Default = Template.bind({});
