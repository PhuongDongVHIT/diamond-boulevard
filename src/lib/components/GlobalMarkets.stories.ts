import type { Meta, StoryObj } from '@storybook/svelte';
import GlobalMarkets from './GlobalMarkets.svelte';

const meta = {
  title: 'Components/GlobalMarkets',
  component: GlobalMarkets,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<GlobalMarkets>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
