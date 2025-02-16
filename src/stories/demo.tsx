// import { MultiSelect } from "./MultiSelect"

// export default function Demo() {
//   const options = [
//     { value: "shark", label: "Shark" },
//     { value: "dolphin", label: "Dolphin" },
//     { value: "whale", label: "Whale" },
//     { value: "octopus", label: "Octopus" },
//     { value: "crab", label: "Crab" },
//     { value: "lobster", label: "Lobster" },
//   ]

//   return (
//     <div className="w-[300px]">
//       <MultiSelect options={options} placeholder="Select sea creatures..." />
//     </div>
//   )
// }

"use client"

import { MultiSelect } from "./MultiSelect"

const fetchOptions = async () => {
  // Simulating API call
  return [
    { value: "shark", label: "Shark" },
    { value: "dolphin", label: "Dolphin" },
    { value: "whale", label: "Whale" },
    { value: "octopus", label: "Octopus" },
    { value: "crab", label: "Crab" },
    { value: "lobster", label: "Lobster" },
  ]
}

export default function Demo() {
  return (
    <div className="w-[400px] p-4">
      <MultiSelect
        options={fetchOptions}
        placeholder="Select sea creatures..."
        onChange={(selected) => console.log("Selected:", selected)}
      />
    </div>
  )
}

