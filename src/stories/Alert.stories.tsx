// // Alert.stories.tsx
// import { Meta, StoryObj } from "@storybook/react";
// import Alert from "./Alert";
// import { FaInfoCircle } from "react-icons/fa"; // Import an icon from react-icons

// const meta: Meta<typeof Alert> = {
//   title: "Components/Alert",
//   component: Alert,
//   tags: ["autodocs"],
//   argTypes: {
//     type: {
//       control: { type: "select" },
//       options: ["success", "error", "warning", "info"],
//     },
//     variant: {
//       control: { type: "select" },
//       options: ["default", "subtle"],
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Alert>;

// export const Success: Story = {
//   args: {
//     type: "success",
//     title: "Operation Completed",
//     description: "Your operation was successful.",
//   },
// };

// export const Error: Story = {
//   args: {
//     type: "error",
//     title: "An Error Occurred",
//     description: "Please try again later.",
//   },
// };

// export const Warning: Story = {
//   args: {
//     type: "warning",
//     title: "Update Available",
//     description: "A new version is ready to install.",
//   },
// };

// export const Info: Story = {
//   args: {
//     type: "info",
//     title: "Information",
//     description: "This is an informational message.",
//   },
// };

// export const CustomIcon: Story = {
//   args: {
//     type: "info",
//     title: "Custom Icon",
//     description: "This alert uses a custom icon.",
//     icon: <FaInfoCircle />, // Use the imported icon
//   },
// };

// export const WithCloseButton: Story = {
//   args: {
//     type: "success",
//     title: "Closeable Alert",
//     description: "This alert can be closed.",
//     onClose: () => alert("Alert closed!"),
//   },
// };

// export const SubtleVariant: Story = {
//   args: {
//     type: "info",
//     variant: "subtle",
//     title: "Subtle Alert",
//     description: "This is a subtle alert.",
//   },
// };




// import type { Meta, StoryObj } from "@storybook/react"
// import { Alert } from "./Alert"
// import { Info, AlertCircle, CheckCircle, XCircle } from "lucide-react"

// const meta: Meta<typeof Alert> = {
//   title: "Components/Alert",
//   component: Alert,
//   tags: ["autodocs"],
//   argTypes: {
//     variant: {
//       control: { type: "select" },
//       options: ["default", "destructive"],
//     },
//     type: {
//       control: { type: "select" },
//       options: ["success", "error", "warning", "info"],
//     },
//   },
// }

// export default meta

// type Story = StoryObj<typeof Alert>

// export const Default: Story = {
//   args: {
//     type: "info",
//     title: "Information",
//     description: "This is an informational message.",
//     icon: <Info className="h-4 w-4" />,
//   },
// }

// export const Success: Story = {
//   args: {
//     type: "success",
//     title: "Operation Completed",
//     description: "Your operation was successful.",
//     icon: <CheckCircle className="h-4 w-4" />,
//   },
// }

// export const Error: Story = {
//   args: {
//     type: "error",
//     title: "An Error Occurred",
//     description: "Please try again later.",
//     icon: <XCircle className="h-4 w-4" />,
//   },
// }

// export const Warning: Story = {
//   args: {
//     type: "warning",
//     title: "Update Available",
//     description: "A new version is ready to install.",
//     icon: <AlertCircle className="h-4 w-4" />,
//   },
// }

// export const WithCloseButton: Story = {
//   args: {
//     type: "success",
//     title: "Closeable Alert",
//     description: "This alert can be closed.",
//     icon: <CheckCircle className="h-4 w-4" />,
//     onClose: () => alert("Alert closed!"),
//   },
// }

// export const Destructive: Story = {
//   args: {
//     variant: "destructive",
//     title: "Destructive Alert",
//     description: "This is a destructive alert.",
//     icon: <AlertCircle className="h-4 w-4" />,
//   },
// }



// FINAL VERSION:

import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "./Alert"

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="p-4 w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Success: Story = {
  args: {
    variant: "success",
    title: "Operation completed",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Update Available",
    description: "A new version is ready to install.",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    title: "Custom content here",
    onClose: () => console.log("closed"),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="success" title="Operation completed" />
      <Alert variant="warning" title="Update Available" description="A new version is ready to install." />
      <Alert variant="info" title="Custom content here" onClose={() => console.log("closed")} />
    </div>
  ),
}

