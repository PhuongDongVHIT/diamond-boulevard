import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from './Carousel.svelte';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    autoplay: { control: 'boolean' },
    interval: { control: 'number' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoplay: true,
    interval: 3000,
    items: [
      {
        id: 1,
        title: "Mock Title 1",
        subtitle: "Mock Subtitle 1",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
      },
      {
        id: 2,
        title: "Mock Title 2",
        subtitle: "Mock Subtitle 2",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
      },
    ]
  },
};
