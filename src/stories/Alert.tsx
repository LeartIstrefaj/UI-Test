// // Alert.tsx
// import React from "react";
// import { cn } from "../lib/utils" // Assuming ShadCN utilities are used

// interface AlertProps {
//   type: "success" | "error" | "warning" | "info";
//   title?: string;
//   description?: string;
//   variant?: "default" | "subtle";
//   icon?: React.ReactNode;
//   onClose?: () => void;
//   children?: React.ReactNode;
// }

// const Alert: React.FC<AlertProps> = ({
//   type,
//   title,
//   description,
//   variant = "default",
//   icon,
//   onClose,
//   children,
// }) => {
//   const baseStyles = "p-4 rounded-lg flex items-start gap-3";
//   const variantStyles = {
//     default: {
//       success: "bg-green-100 text-green-800",
//       error: "bg-red-100 text-red-800",
//       warning: "bg-yellow-100 text-yellow-800",
//       info: "bg-blue-100 text-blue-800",
//     },
//     subtle: {
//       success: "bg-green-50 text-green-700",
//       error: "bg-red-50 text-red-700",
//       warning: "bg-yellow-50 text-yellow-700",
//       info: "bg-blue-50 text-blue-700",
//     },
//   };

//   return (
//     <div
//       role="alert"
//       aria-live="polite"
//       className={cn(baseStyles, variantStyles[variant][type])}
//     >
//       {icon && <span className="flex-shrink-0">{icon}</span>}
//       <div className="flex-1">
//         {title && <h3 className="font-semibold">{title}</h3>}
//         {description && <p className="text-sm">{description}</p>}
//         {children}
//       </div>
//       {onClose && (
//         <button
//           onClick={onClose}
//           aria-label="Close alert"
//           className="text-sm font-medium text-current hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
//         >
//           Close
//         </button>
//       )}
//     </div>
//   );
// };

// export default Alert;



// import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"
// import { cn } from "@/lib/utils"
// import { X } from "lucide-react"

// const alertVariants = cva(
//   "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
//   {
//     variants: {
//       variant: {
//         default: "bg-background text-foreground",
//         destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
//       },
//       type: {
//         success: "border-green-500 text-green-800 dark:text-green-400 [&>svg]:text-green-500",
//         error: "border-red-500 text-red-800 dark:text-red-400 [&>svg]:text-red-500",
//         warning: "border-yellow-500 text-yellow-800 dark:text-yellow-400 [&>svg]:text-yellow-500",
//         info: "border-blue-500 text-blue-800 dark:text-blue-400 [&>svg]:text-blue-500",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       type: "info",
//     },
//   },
// )

// const Alert = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> &
//     VariantProps<typeof alertVariants> & {
//       title?: string
//       description?: string
//       icon?: React.ReactNode
//       onClose?: () => void
//     }
// >(({ className, variant, type, title, description, icon, onClose, ...props }, ref) => (
//   <div ref={ref} role="alert" className={cn(alertVariants({ variant, type }), className)} {...props}>
//     {icon}
//     <div className="flex-1">
//       {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
//       {description && <div className="text-sm [&_p]:leading-relaxed">{description}</div>}
//       {props.children}
//     </div>
//     {onClose && (
//       <button
//         onClick={onClose}
//         className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
//       >
//         <X className="h-4 w-4" />
//         <span className="sr-only">Close</span>
//       </button>
//     )}
//   </div>
// ))
// Alert.displayName = "Alert"

// export { Alert, alertVariants }



// THE FINAL VERSION

// import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"
// import { cn } from "@/lib/utils"
// import { X, Bell, AlertTriangle, CheckCircle } from "lucide-react"
// import './alert.css';

// const alertVariants = cva("relative w-full rounded-lg border p-4 flex items-start gap-3", {
//   variants: {
//     variant: {
//       success: "bg-green-50 border-green-500 text-green-700",
//       warning: "bg-[#fff8e7] border-[#f5c155] text-[#915930]",
//       info: "bg-blue-50 border-blue-500 text-blue-700",
//     },
//   },
//   defaultVariants: {
//     variant: "info",
//   },
// })

// export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
//   title?: string
//   description?: string
//   onClose?: () => void
// }

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
//   ({ className, variant, title, description, onClose, ...props }, ref) => {
//     const IconMap = {
//       success: CheckCircle,
//       warning: AlertTriangle,
//       info: Bell,
//     }

//     const Icon = variant && IconMap[variant]

//     return (
//       <div ref={ref} role="alert" className={cn(alertVariants({ variant }), "max-w-2xl", className="alert")} {...props}>
//         {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
//         <div className="flex-1">
//           {title && <div className="font-medium">{title}</div>}
//           {description && <div className="text-sm mt-1">{description}</div>}
//           {props.children}
//         </div>
//         {onClose && (
//           <button onClick={onClose} className="text-current opacity-70 hover:opacity-100 focus:outline-none">
//             <X className="h-4 w-4" />
//             <span className="sr-only">Close</span>
//           </button>
//         )}
//       </div>
//     )
//   },
// )
// Alert.displayName = "Alert"

// export { Alert, alertVariants }



// -------------------------------------------------------------------
import * as React from "react"
import { X, Bell, AlertTriangle, CheckCircle, Info, AlertCircle } from "lucide-react"
import "./alert.css"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the alert, which determines its color scheme and icon.
   */
  variant?: "info" | "success" | "warning" | "error" | "notification"
  /**
   * The main message of the alert.
   */
  title?: string
  /**
   * Additional details or context for the alert.
   */
  description?: string
  /**
   * Whether to show the icon associated with the alert variant.
   */
  showIcon?: boolean
  /**
   * Function to call when the close button is clicked.
   */
  onClose?: () => void
}

/**
 * Alert component for displaying important messages to the user.
 *
 * It supports different variants, can display a title and/or description,
 * and can optionally show an icon and close button.
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = "", variant = "info", title, description, showIcon = true, onClose, ...props }, ref) => {
    const IconMap = {
      info: Bell,
      success: CheckCircle,
      warning: AlertTriangle,
      error: AlertCircle,
      notification: Info,
    }

    const Icon = IconMap[variant]

    return (
      <div ref={ref} role="alert" className={`alert ${className}`} data-variant={variant} {...props}>
        <div className="alert-content">
          {showIcon && Icon && <Icon className="icon" />}
          <div className="alert-text">
            {title && <h4 className="title">{title}</h4>}
            {description && <p className="description">{description}</p>}
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="close-button" aria-label="Close alert">
            <X />
          </button>
        )}
      </div>
    )
  },
)
Alert.displayName = "Alert"

export { Alert }



