import Button from "./Button.vue"
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'secondary', 'outline', 'ghost', 'destructive'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'xs', 'lg', 'icon'],
      },
    },
    handleClick: { action: 'clicked' },
  },
};

// Default Story
const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Login</Button>',
});

// Default Button
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
};

// Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'default',
};

// Outline Button
export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
};

// Ghost Button
export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'default',
};

// Destructive Button
export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'default',
};

// Small Button
export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
};

// Large Button
export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
};

// Icon Button
export const IconButton = Template.bind({});
IconButton.args = {
  variant: 'default',
  size: 'icon',
  className: 'flex justify-center items-center', // Add icon here if needed
};