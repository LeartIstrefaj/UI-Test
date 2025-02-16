// import React from 'react';
// import MultiSelect from './MultiSelect';

// export default {
//   title: 'Components/MultiSelect',
//   component: MultiSelect,
// };

// const fetchOptions = async () => [
//   { value: '1', label: 'Option 1' },
//   { value: '2', label: 'Option 2' },
//   { value: '3', label: 'Option 3' },
// ];

// export const Default = () => (
//   <MultiSelect
//     options={fetchOptions}
//     placeholder="Select items..."
//     onChange={(selected) => console.log(selected)}
//   />
// );

// export const LoadingState = () => (
//   <MultiSelect
//     options={fetchOptions}
//     placeholder="Select items..."
//     isLoading={true}
//     onChange={(selected) => console.log(selected)}
//   />
// );

// export const PreSelectedOptions = () => (
//   <MultiSelect
//     options={fetchOptions}
//     placeholder="Select items..."
//     defaultSelected={[{ value: '1', label: 'Option 1' }]}
//     onChange={(selected) => console.log(selected)}
//   />
// );

// export const DisabledState = () => (
//   <MultiSelect
//     options={fetchOptions}
//     placeholder="Select items..."
//     disabled={true}
//     onChange={(selected) => console.log(selected)}
//   />
// );


import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {MultiSelect} from './MultiSelect';

// Define the meta information for the component
const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Function that returns a promise of options',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the dropdown',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the component is in a loading state',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback function when selected options change',
    },
    // defaultSelected: {
    //   control: 'array',
    //   description: 'Array of pre-selected values',
    // },
    clearable: {
      control: 'boolean',
      description: 'Whether the clear functionality is enabled',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
  },
};

export default meta;

// Define the type for the story
type Story = StoryObj<typeof MultiSelect>;

// Mock function to simulate fetching options
const fetchOptions = async (): Promise<{ value: string; label: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
};

// Default story
export const Default: Story = {
  args: {
    options: fetchOptions,
    placeholder: 'Select items...',
    isLoading: false,
    // onChange: (selected) => console.log('Selected:', selected),
    defaultSelected: [],
    clearable: true,
    disabled: false,
  },
};

// Loading state story
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

// Pre-selected options story
export const PreSelected: Story = {
  args: {
    ...Default.args,
    defaultSelected: ['1'],
  },
};

// Disabled state story
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

// Clearable functionality story
export const Clearable: Story = {
  args: {
    ...Default.args,
    defaultSelected: ['1', '2'],
    clearable: true,
  },
};

// Custom placeholder story
export const CustomPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'Choose your items...',
  },
};