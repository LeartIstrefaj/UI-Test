import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export const CustomButton: React.FC<ButtonProps> = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  const variantStyles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
      : "text-white bg-blue-600 hover:bg-blue-700"

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

