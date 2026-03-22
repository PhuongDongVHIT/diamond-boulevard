import type { Meta, StoryObj } from '@storybook/svelte';
import PaymentMethods from './PaymentMethods.svelte';

const meta = {
  title: 'Components/PaymentMethods',
  component: PaymentMethods,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<PaymentMethods>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
