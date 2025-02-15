import type React from "react"

interface CommandProps {
  children: React.ReactNode
}

export const CustomCommand: React.FC<CommandProps> = ({ children }) => {
  return <div className="py-1">{children}</div>
}

export const CustomCommandList: React.FC<CommandProps> = ({ children }) => {
  return <ul className="max-h-60 overflow-auto">{children}</ul>
}

interface CommandItemProps {
  children: React.ReactNode
  onSelect: () => void
  disabled?: boolean
}

export const CustomCommandItem: React.FC<CommandItemProps> = ({ children, onSelect, disabled }) => {
  return (
    <li>
      <button
        className={`w-full text-left px-4 py-2 text-sm ${
          disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        }`}
        onClick={onSelect}
        disabled={disabled}
      >
        {children}
      </button>
    </li>
  )
}

export const CustomCommandEmpty: React.FC<CommandProps> = ({ children }) => {
  return <div className="py-2 px-4 text-sm text-gray-500">{children}</div>
}

