import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export const CustomBadge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ${className}`}
    >
      {children}
    </span>
  )
}

