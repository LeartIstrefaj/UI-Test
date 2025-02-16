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


// import React, { useState, useEffect } from 'react';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
// import Spinner from './Spinner'; // Import the Spinner component

// // Define the type for an option
// type Option = {
//   value: string;
//   label: string;
// };

// // Define the props for the MultiSelect component
// interface MultiSelectProps {
//   options: () => Promise<Option[]>; // Function that returns a promise of options
//   placeholder?: string; // Optional placeholder text
//   isLoading?: boolean; // Optional loading state
//   onChange: (selected: string[]) => void; // Callback function for selected items
//   defaultSelected?: string[]; // Optional array of pre-selected values
//   clearable?: boolean; // Optional clear functionality
//   disabled?: boolean; // Optional disabled state
// }

// const MultiSelect: React.FC<MultiSelectProps> = ({
//   options,
//   placeholder = 'Select items...',
//   isLoading = false,
//   onChange,
//   defaultSelected = [],
//   clearable = true,
//   disabled = false,
// }) => {
//   const [selected, setSelected] = useState<string[]>(defaultSelected);
//   const [optionsList, setOptionsList] = useState<Option[]>([]);

//   useEffect(() => {
//     const fetchOptionsData = async () => {
//       const data = await options();
//       setOptionsList(data);
//     };
//     fetchOptionsData();
//   }, [options]);

//   const handleChange = (value: string) => {
//     const updatedSelected = selected.includes(value)
//       ? selected.filter((item) => item !== value)
//       : [...selected, value];
//     setSelected(updatedSelected);
//     onChange(updatedSelected);
//   };

//   return (
//     <Select disabled={disabled}>
//       <SelectTrigger>
//         <SelectValue placeholder={placeholder} />
//         {isLoading && <Spinner />} {/* Show spinner when loading */}
//       </SelectTrigger>
//       <SelectContent>
//         {optionsList.map((option) => (
//           <SelectItem
//             key={option.value}
//             value={option.value}
//             onSelect={() => handleChange(option.value)}
//           >
//             {option.label}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// };

// export default MultiSelect;

"use client"

import * as React from "react"
import { X, ChevronDown } from "lucide-react"
import "./multiselect.css"

type Option = {
  value: string
  label: string
}

interface MultiSelectProps {
  options: () => Promise<Option[]>
  placeholder?: string
  isLoading?: boolean
  onChange: (selected: string[]) => void
  defaultSelected?: string[]
  clearable?: boolean
  disabled?: boolean
}

export function MultiSelect({
  options,
  placeholder = "Select items...",
  isLoading = false,
  onChange,
  defaultSelected = [],
  clearable = true,
  disabled = false,
}: MultiSelectProps) {
  const [selected, setSelected] = React.useState<string[]>(defaultSelected)
  const [optionsList, setOptionsList] = React.useState<Option[]>([])
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const fetchOptionsData = async () => {
      const data = await options()
      setOptionsList(data)
    }
    fetchOptionsData()

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [options])

  const handleSelect = (value: string) => {
    const updatedSelected = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]
    setSelected(updatedSelected)
    onChange(updatedSelected)
  }

  const removeItem = (valueToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const updatedSelected = selected.filter((value) => value !== valueToRemove)
    setSelected(updatedSelected)
    onChange(updatedSelected)
  }

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelected([])
    onChange([])
  }

  return (
    <div ref={containerRef} className="multi-select-container">
      <div
        className={`select-input ${isOpen ? "is-open" : ""} ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {selected.map((value) => {
          const option = optionsList.find((opt) => opt.value === value)
          return (
            <span key={value} className="selected-item">
              {option?.label}
              <button onClick={(e) => removeItem(value, e)} className="remove-button">
                <X className="h-3 w-3" />
              </button>
            </span>
          )
        })}
        {selected.length === 0 && <span className="placeholder">{placeholder}</span>}
        <div className="controls">
          {clearable && selected.length > 0 && (
            <button onClick={clearAll} className="clear-button">
              <X className="dropdown-icon" />
            </button>
          )}
          <ChevronDown className="dropdown-icon" />
        </div>
      </div>
      {isOpen && (
        <div className="options-dropdown">
          {optionsList.map((option) => (
            <div
              key={option.value}
              className={`option-item ${selected.includes(option.value) ? "selected" : ""}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}



