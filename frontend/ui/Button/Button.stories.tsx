import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    display: 'primary',
    size: 'default',
    children: 'Button'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iyJk6beVrTmbaWwmfYpc0u/Redcollar-Themes?node-id=39-25734&t=26QPOrXME59sSgPc-4"
    },
  }
};

export const Secondary: Story = {
  args: {
    display: 'secondary',
    children: 'Button'
  }
};

export const Outline: Story = {
  args: {
    display: 'outline',
    children: 'Button'
  }
};
