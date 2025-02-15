import type { Meta, StoryObj } from "@storybook/react"
import { MultiSelect } from "./MultiSelect"
import { sleep } from "@/lib/utils"

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
}

export default meta

type Story = StoryObj<typeof MultiSelect>

const staticOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2", disabled: true },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
]

export const Default: Story = {
  args: {
    options: staticOptions,
    placeholder: "Select options...",
  },
}

export const AsyncOptions: Story = {
  args: {
    options: async () => {
      await sleep(1000)
      return staticOptions
    },
  },
}

export const LoadingState: Story = {
  args: {
    options: [],
    isLoading: true,
  },
}

export const Preselected: Story = {
  args: {
    options: staticOptions,
    value: ["1", "3"],
  },
}

export const DisabledOptions: Story = {
  args: {
    options: staticOptions,
    value: ["1"],
    disabled: true,
  },
}

