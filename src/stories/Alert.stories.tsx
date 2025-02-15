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

// import type { Meta, StoryObj } from "@storybook/react"
// import { Alert } from "./Alert"

// const meta = {
//   title: "Components/Alert",
//   component: Alert,
//   parameters: {
//     layout: "centered",
//   },
//   decorators: [
//     (Story) => (
//       <div className="p-4 w-full max-w-2xl">
//         <Story />
//       </div>
//     ),
//   ],
//   tags: ["autodocs"],
// } satisfies Meta<typeof Alert>

// export default meta
// type Story = StoryObj<typeof Alert>

// export const Success: Story = {
//   args: {
//     variant: "success",
//     title: "Operation completed",
//   },
// }

// export const Warning: Story = {
//   args: {
//     variant: "warning",
//     title: "Update Available",
//     description: "A new version is ready to install.",
//   },
// }

// export const Info: Story = {
//   args: {
//     variant: "info",
//     title: "Custom content here",
//     onClose: () => console.log("closed"),
//   },
// }

// export const AllVariants: Story = {
//   render: () => (
//     <div className="space-y-4">
//       <Alert variant="success" title="Operation completed" />
//       <Alert variant="warning" title="Update Available" description="A new version is ready to install." />
//       <Alert variant="info" title="Custom content here" onClose={() => console.log("closed")} />
//     </div>
//   ),
// }



// ------------------------------------------------------
// import type { Meta, StoryObj } from "@storybook/react"
// import { Alert } from "./Alert"

// const meta = {
//   title: "Components/Alert",
//   component: Alert,
//   parameters: {
//     layout: "centered",
//     docs: {
//       description: {
//         component:
//           "Alert component for displaying important messages to the user. It supports different variants, can display a title and/or description, and can optionally show an icon and close button.",
//       },
//     },
//   },
//   tags: ["autodocs"],
//   argTypes: {
//     variant: {
//       control: "select",
//       options: ["info", "success", "warning", "error", "notification"],
//       description: "The variant of the alert, which determines its color scheme and icon.",
//     },
//     title: {
//       control: "text",
//       description: "The main message of the alert.",
//     },
//     description: {
//       control: "text",
//       description: "Additional details or context for the alert.",
//     },
//     showIcon: {
//       control: "boolean",
//       description: "Whether to show the icon associated with the alert variant.",
//     },
//     onClose: {
//       action: "closed",
//       description: "Function to call when the close button is clicked.",
//     },
//   },
//   decorators: [
//     (Story) => (
//       <div style={{ width: "600px", padding: "20px" }}>
//         <Story />
//       </div>
//     ),
//   ],
// } satisfies Meta<typeof Alert>

// export default meta
// type Story = StoryObj<typeof Alert>

// export const Default: Story = {
//   args: {
//     variant: "info",
//     title: "Here's something you should know",
//     description: "This is additional information that provides more context about the alert.",
//     showIcon: true,
//     onClose: () => {},
//   },
// }

// export const TitleOnly: Story = {
//   args: {
//     variant: "success",
//     title: "Operation completed successfully",
//     showIcon: true,
//     onClose: () => {},
//   },
// }

// export const DescriptionOnly: Story = {
//   args: {
//     variant: "warning",
//     description: "A new version is available. Please update at your earliest convenience.",
//     showIcon: true,
//     onClose: () => {},
//   },
// }

// export const WithoutIcon: Story = {
//   args: {
//     variant: "error",
//     title: "Process failed",
//     description: "There was a critical error during the process. Please try again later.",
//     showIcon: false,
//     onClose: () => {},
//   },
// }

// export const WithoutCloseButton: Story = {
//   args: {
//     variant: "notification",
//     title: "For your information",
//     description: "This is a general notification message that doesn't require any action.",
//     showIcon: true,
//   },
// }

// export const AllVariants: Story = {
//   render: () => (
//     <div className="space-y-4">
//       <Alert variant="info" title="Information" description="This is an informational alert." onClose={() => {}} />
//       <Alert variant="success" title="Success" description="Operation completed successfully." onClose={() => {}} />
//       <Alert variant="warning" title="Warning" description="Please be cautious." onClose={() => {}} />
//       <Alert variant="error" title="Error" description="An error occurred." onClose={() => {}} />
//       <Alert variant="notification" title="Notification" description="You have a new message." onClose={() => {}} />
//     </div>
//   ),
// }



"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "./Alert"
import { useState } from "react"

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alert component for displaying important messages to the user. It supports different variants, can display a title and/or description, and can optionally show an icon and close button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error", "notification"],
      description: "The variant of the alert, which determines its color scheme and icon.",
    },
    title: {
      control: "text",
      description: "The main message of the alert.",
    },
    description: {
      control: "text",
      description: "Additional details or context for the alert.",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon associated with the alert variant.",
    },
    onClose: {
      action: "closed",
      description: "Function to call when the close button is clicked.",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: "info",
    title: "Information alert",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    showIcon: true,
    onClose: () => {},
  },
}

export const TitleOnly: Story = {
  args: {
    variant: "success",
    title: "Form completed successfully",
    showIcon: true,
    onClose: () => {},
  },
}

export const DescriptionOnly: Story = {
  args: {
    variant: "warning",
    description: "A new version is available. Please update your system.",
    showIcon: true,
    onClose: () => {},
  },
}

export const WithoutIcon: Story = {
  args: {
    variant: "error",
    title: "Process failed",
    description: "There was a critical error during the process. Please try again later.",
    showIcon: false,
    onClose: () => {},
  },
}

export const WithoutCloseButton: Story = {
  args: {
    variant: "notification",
    title: "For your information",
    description: "This is a general notification message that doesn't require any action.",
    showIcon: true,
  },
}

export const AllVariants: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      { variant: "info", title: "Information", description: "This is an informational alert." },
      { variant: "success", title: "Success", description: "Form completed successfully." },
      { variant: "warning", title: "Warning", description: "Please be cautious." },
      { variant: "error", title: "Error", description: "An error occurred." },
      { variant: "notification", title: "Notification", description: "You have a new message." },
    ])

    const handleClose = (index: number) => {
      setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index))
    }

    return (
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <Alert
            key={index}
            variant={alert.variant as "info" | "success" | "warning" | "error" | "notification"}
            title={alert.title}
            description={alert.description}
            onClose={() => handleClose(index)}
          />
        ))}
      </div>
    )
  },
}

// export const ClosableAlert: Story = {
//   render: () => {
//     const [isVisible, setIsVisible] = useState(true)

//     const handleClose = () => {
//       setIsVisible(false)
//     }

//     return isVisible ? (
//       <Alert
//         variant="info"
//         title="Closable Alert"
//         description="Click the X button to close this alert."
//         onClose={handleClose}
//       />
//     ) : (
//       <button onClick={() => setIsVisible(true)}>Show Alert</button>
//     )
//   },
// }

