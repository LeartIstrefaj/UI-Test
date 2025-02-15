// Alert.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import { FaInfoCircle } from "react-icons/fa"; // Import an icon from react-icons

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "subtle"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: "success",
    title: "Operation Completed",
    description: "Your operation was successful.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "An Error Occurred",
    description: "Please try again later.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Update Available",
    description: "A new version is ready to install.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Information",
    description: "This is an informational message.",
  },
};

export const CustomIcon: Story = {
  args: {
    type: "info",
    title: "Custom Icon",
    description: "This alert uses a custom icon.",
    icon: <FaInfoCircle />, // Use the imported icon
  },
};

export const WithCloseButton: Story = {
  args: {
    type: "success",
    title: "Closeable Alert",
    description: "This alert can be closed.",
    onClose: () => alert("Alert closed!"),
  },
};

export const SubtleVariant: Story = {
  args: {
    type: "info",
    variant: "subtle",
    title: "Subtle Alert",
    description: "This is a subtle alert.",
  },
};