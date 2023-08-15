// core/src/components/Button/Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react'; // Import Story and Meta types
import Button from '../views/Button.view'; // Import the default export (Button component)

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = (args: any) => <Button {...args} />; // Use the Button component as a Story

// Default story, it will use the component with its default props
export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};
