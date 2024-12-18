import {
  ChevronDownIcon,
  TickCircleFillIcon
} from '@sparrowengg/twigs-react-icons';
import React from 'react';
import { Button } from '../button';

export default {
  component: Button,
  title: 'Form/Button',
  args: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    loading: false
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'bright', 'light', 'error']
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'outline']
    },
    loading: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => <Button {...args}>Submit</Button>;
export const Buttons = Template.bind({});

const TemplateButtonWithRightIcon = (args) => (
  <Button {...args} rightIcon={<TickCircleFillIcon />}>
    Submit
  </Button>
);
export const ButtonWithRightIcon = TemplateButtonWithRightIcon.bind({});

const TemplateButtonWithLeftIcon = (args) => (
  <Button {...args} leftIcon={<TickCircleFillIcon />}>
    Submit
  </Button>
);

export const ButtonWithLeftIcon = TemplateButtonWithLeftIcon.bind({});

const TemplateButtonWithLeftAndRightIcon = (args) => (
  <Button
    {...args}
    leftIcon={<TickCircleFillIcon />}
    rightIcon={<ChevronDownIcon />}
  >
    Submit
  </Button>
);

export const ButtonWithLeftAndRightIcon = TemplateButtonWithLeftAndRightIcon.bind({});
