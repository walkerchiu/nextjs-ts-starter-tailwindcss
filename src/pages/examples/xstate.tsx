import type { NextPage } from 'next';
import { useMachine } from '@xstate/react';
import { Counter, Toggle, TrafficLight } from '../../modules/examples/xstate/components';
import { counterMachine, toggleMachine, nextTrafficLightMachine } from '../../modules/examples/xstate/machines';
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

const XStatePage: NextPage = () => {
  const [toggleCurrent, toggleSend] = useMachine(toggleMachine)
  const [counterCurrent, counterSend] = useMachine(counterMachine, {
    context: { count: 999 },
  })
  const [nextCurrent, nextSend] = useMachine(nextTrafficLightMachine)

  return (
    <>
      <Header />
      <Counter
        counter={{
          count: counterCurrent.context.count,
          increment: () => counterSend('INC'),
          decrement: () => counterSend('DEC'),
          reset: () => counterSend('RESET'),
        }}
      />
      <hr
        style={{ margin: '20px 0' }}
      />
      <Toggle
        onToggle={() => toggleSend('TOGGLE')}
        active={toggleCurrent.matches('active')}
      />
      <hr
        style={{ margin: '20px 0' }}
      />
      <TrafficLight
        onNext={() => nextSend('NEXT')}
        status={nextCurrent.value}
      />
      <hr
        style={{ margin: '20px 0' }}
      />
      <Footer>
        <ol style={{ listStyleType: "number" }}>
          <li>
            Introduction to state machines and statecharts:<br />
            <a
              href="https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts
            </a>
          </li>
          <li>
            Using TypeScript with XState:<br />
            <a
              href="https://xstate.js.org/docs/guides/typescript.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://xstate.js.org/docs/guides/typescript.html
            </a>
          </li>
        </ol>
      </Footer>
    </>
  )
}

export default XStatePage
