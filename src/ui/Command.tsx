import { Command as CommandPrimitive } from "cmdk";

export const Command = CommandPrimitive;
export const CommandList = CommandPrimitive.List;
export const CommandItem = CommandPrimitive.Item;
export const CommandLoading = () => <div>Loading...</div>;