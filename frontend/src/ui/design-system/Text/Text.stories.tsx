import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Text>;

export const H1: Story = {
  args: {
    tag: 'h1',
    display: 'h1',
    children: 'Creating digital products with a human face'
  }
};

export const H2: Story = {
  args: {
    tag: 'h2',
    display: 'h2',
    children: 'Creating digital products with a human face'
  }
};

export const H3: Story = {
  args: {
    tag: 'h3',
    display: 'h3',
    children: 'Creating digital products with a human face'
  }
};

export const P1: Story = {
  args: {
    tag: 'p',
    display: 'p1',
    children: 'Creating digital products with a human face'
  }
};

export const P2: Story = {
  args: {
    tag: 'p',
    display: 'p2',
    children: 'Creating digital products with a human face'
  }
};

export const P3: Story = {
  args: {
    tag: 'p',
    display: 'p3',
    children: 'Creating digital products with a human face'
  }
};
