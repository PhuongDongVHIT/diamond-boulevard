import type { Meta, StoryObj } from '@storybook/svelte';
import Hero from './Hero.svelte';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
