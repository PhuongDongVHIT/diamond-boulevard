import type { Meta, StoryObj } from '@storybook/svelte';
import Amenities from './Amenities.svelte';

const meta = {
  title: 'Components/Amenities',
  component: Amenities,
  tags: ['autodocs'],
  argTypes: {
    showCta: { control: 'boolean' },
  },
} satisfies Meta<Amenities>;

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
