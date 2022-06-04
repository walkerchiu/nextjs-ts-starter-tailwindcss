import { createMachine } from 'xstate'


type ToggleEvent = { type: "TOGGLE" };

type ToggleState =
  | { value: "active"; context: undefined }
  | { value: "inactive"; context: undefined };

export const toggleMachine = createMachine<
  undefined, // We don’t have context, so we type it as undefined
  ToggleEvent,
  ToggleState
>({
  id: 'toggleStatus',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
})
