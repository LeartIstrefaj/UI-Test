// Alert.tsx
import React from "react";
import { cn } from "../lib/utils" // Assuming ShadCN utilities are used

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  title?: string;
  description?: string;
  variant?: "default" | "subtle";
  icon?: React.ReactNode;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  type,
  title,
  description,
  variant = "default",
  icon,
  onClose,
  children,
}) => {
  const baseStyles = "p-4 rounded-lg flex items-start gap-3";
  const variantStyles = {
    default: {
      success: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800",
      warning: "bg-yellow-100 text-yellow-800",
      info: "bg-blue-100 text-blue-800",
    },
    subtle: {
      success: "bg-green-50 text-green-700",
      error: "bg-red-50 text-red-700",
      warning: "bg-yellow-50 text-yellow-700",
      info: "bg-blue-50 text-blue-700",
    },
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(baseStyles, variantStyles[variant][type])}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <div className="flex-1">
        {title && <h3 className="font-semibold">{title}</h3>}
        {description && <p className="text-sm">{description}</p>}
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close alert"
          className="text-sm font-medium text-current hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
        >
          Close
        </button>
      )}
    </div>
  );
};

export default Alert;