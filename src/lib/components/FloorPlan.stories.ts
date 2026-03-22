import type { Meta, StoryObj } from '@storybook/svelte';
import FloorPlan from './FloorPlan.svelte';

const meta = {
  title: 'Components/FloorPlan',
  component: FloorPlan,
  tags: ['autodocs'],
  argTypes: {
    showCta: { control: 'boolean' },
  },
} satisfies Meta<FloorPlan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showCta: false,
  },
};

export const WithCTA: Story = {
  args: {
    showCta: true,
  },
};
