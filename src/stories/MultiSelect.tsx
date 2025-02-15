// "use client"

// import type React from "react"

// import { useEffect, useState } from "react"
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover"
// import { Button } from "../ui/Button"
// import { Badge } from "../ui/Badge"
// import { Command, CommandList, CommandItem, CommandEmpty } from "../ui/Command"
// import { CheckIcon, ChevronsUpDown, X } from "lucide-react"

// export interface MultiSelectOption {
//   value: string
//   label: string
//   disabled?: boolean
// }

// interface MultiSelectProps {
//   options: MultiSelectOption[] | (() => Promise<MultiSelectOption[]>)
//   value?: string[]
//   onChange?: (selected: string[]) => void
//   placeholder?: string
//   isLoading?: boolean
//   disabled?: boolean
// }

// export const MultiSelect = ({
//   options,
//   value = [],
//   onChange,
//   placeholder = "Select items...",
//   isLoading = false,
//   disabled = false,
// }: MultiSelectProps) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [localOptions, setLocalOptions] = useState<MultiSelectOption[]>([])
//   const [internalLoading, setInternalLoading] = useState(false)

//   useEffect(() => {
//     const loadOptions = async () => {
//       if (typeof options === "function") {
//         setInternalLoading(true)
//         try {
//           const result = await options()
//           setLocalOptions(result)
//         } catch (error) {
//           console.error("Failed to load options:", error)
//         } finally {
//           setInternalLoading(false)
//         }
//       } else {
//         setLocalOptions(options)
//       }
//     }

//     loadOptions()
//   }, [options])

//   const currentOptions = localOptions
//   const showLoading = internalLoading || isLoading

//   const handleSelect = (optionValue: string) => {
//     const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue]
//     onChange?.(newValue)
//   }

//   const clearSelection = (e: React.MouseEvent) => {
//     e.stopPropagation()
//     onChange?.([])
//   }

//   return (
//     <Popover open={isOpen} onOpenChange={setIsOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={isOpen}
//           disabled={disabled}
//           className="w-full justify-between min-h-10 h-auto"
//         >
//           <div className="flex flex-wrap gap-1">
//             {value.length > 0 ? (
//               currentOptions
//                 .filter((opt) => value.includes(opt.value))
//                 .map((opt) => (
//                   <Badge key={opt.value} variant="secondary" className="mb-1">
//                     {opt.label}
//                   </Badge>
//                 ))
//             ) : (
//               <span className="text-muted-foreground">{placeholder}</span>
//             )}
//           </div>
//           {value.length > 0 ? (
//             <X className="ml-2 h-4 w-4 opacity-50 hover:opacity-100" onClick={clearSelection} />
//           ) : (
//             <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
//           )}
//         </Button>
//       </PopoverTrigger>

//       <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]">
//         <Command>
//           <CommandList>
//             {showLoading ? (
//               <CommandItem disabled>Loading...</CommandItem>
//             ) : currentOptions.length === 0 ? (
//               <CommandEmpty>No options available</CommandEmpty>
//             ) : (
//               currentOptions.map((option) => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.value}
//                   onSelect={() => !option.disabled && handleSelect(option.value)}
//                   disabled={option.disabled}
//                   className="aria-disabled:opacity-50 aria-disabled:pointer-events-none"
//                 >
//                   <CheckIcon className={`mr-2 h-4 w-4 ${value.includes(option.value) ? "opacity-100" : "opacity-0"}`} />
//                   {option.label}
//                 </CommandItem>
//               ))
//             )}
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }



"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { CustomPopover } from "./CustomPopover"
import { CustomButton } from "./CustomButton"
import { CustomBadge } from "./CustomBadge"
import { CustomCommand, CustomCommandList, CustomCommandItem, CustomCommandEmpty } from "./CustomCommand"
import { CheckIcon, ChevronsUpDown, X } from "lucide-react"

export interface MultiSelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface MultiSelectProps {
  options: MultiSelectOption[] | (() => Promise<MultiSelectOption[]>)
  value?: string[]
  onChange?: (selected: string[]) => void
  placeholder?: string
  isLoading?: boolean
  disabled?: boolean
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  placeholder = "Select items...",
  isLoading = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [localOptions, setLocalOptions] = useState<MultiSelectOption[]>([])
  const [internalLoading, setInternalLoading] = useState(false)

  useEffect(() => {
    const loadOptions = async () => {
      if (typeof options === "function") {
        setInternalLoading(true)
        try {
          const result = await options()
          setLocalOptions(result)
        } catch (error) {
          console.error("Failed to load options:", error)
        } finally {
          setInternalLoading(false)
        }
      } else {
        setLocalOptions(options)
      }
    }

    loadOptions()
  }, [options])

  const currentOptions = localOptions
  const showLoading = internalLoading || isLoading

  const handleSelect = (optionValue: string) => {
    const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue]
    onChange?.(newValue)
  }

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange?.([])
  }

  const triggerButton = (
    <CustomButton variant="outline" disabled={disabled} className="w-full justify-between min-h-10 h-auto">
      <div className="flex flex-wrap gap-1">
        {value.length > 0 ? (
          currentOptions
            .filter((opt) => value.includes(opt.value))
            .map((opt) => (
              <CustomBadge key={opt.value} className="mb-1">
                {opt.label}
              </CustomBadge>
            ))
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
      </div>
      {value.length > 0 ? (
        <X className="ml-2 h-4 w-4 opacity-50 hover:opacity-100" onClick={clearSelection} />
      ) : (
        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
      )}
    </CustomButton>
  )

  return (
    <CustomPopover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={triggerButton}
      content={
        <CustomCommand>
          <CustomCommandList>
            {showLoading ? (
              <CustomCommandItem onSelect={() => {}}>Loading...</CustomCommandItem>
            ) : currentOptions.length === 0 ? (
              <CustomCommandEmpty>No options available</CustomCommandEmpty>
            ) : (
              currentOptions.map((option) => (
                <CustomCommandItem
                  key={option.value}
                  onSelect={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                >
                  <CheckIcon className={`mr-2 h-4 w-4 ${value.includes(option.value) ? "opacity-100" : "opacity-0"}`} />
                  {option.label}
                </CustomCommandItem>
              ))
            )}
          </CustomCommandList>
        </CustomCommand>
      }
    />
  )
}

