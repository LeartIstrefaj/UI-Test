"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface PopoverProps {
  trigger: React.ReactNode
  content: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CustomPopover: React.FC<PopoverProps> = ({ trigger, content, open, onOpenChange }) => {
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onOpenChange(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onOpenChange])

  return (
    <div className="relative inline-block">
      <div onClick={() => onOpenChange(!open)}>{trigger}</div>
      {open && (
        <div
          ref={popoverRef}
          className="absolute z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {content}
        </div>
      )}
    </div>
  )
}

