import { createMachine, assign } from 'xstate'


const increment = (context: { count: number }) => context.count + 1
const decrement = (context: { count: number }) => context.count - 1

export const counterMachine = createMachine({
  id: 'changeCount',
  initial: 'active',
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: { actions: assign({ count: increment }) },
        DEC: { actions: assign({ count: decrement }) },
        RESET: { actions: assign({ count: 0 }) },
      },
    },
  },
})
