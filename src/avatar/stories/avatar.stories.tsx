import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  subComponents: { AvatarImage, AvatarFallback },
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: '3xl',
    },
    isAnonymous: {
      control: 'boolean',
    },
    src: {
      control: 'text',
      defaultValue: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>
    <AvatarImage />
    <AvatarFallback delayMs={600}>CT</AvatarFallback>
  </Avatar>
);
export const Default = Template.bind({});
Default.args = { size: '3xl' };
