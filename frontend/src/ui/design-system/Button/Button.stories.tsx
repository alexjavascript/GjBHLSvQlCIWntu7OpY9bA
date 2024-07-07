import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary: Story = {
  args: {
    display: 'primary',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    display: 'secondary',
    children: 'Button'
  }
};

export const Tertiary: Story = {
  args: {
    display: 'tertiary',
    children: 'Button'
  }
};
