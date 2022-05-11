type Props = {
  counter: {
    count: number;
    decrement: () => void;
    increment: () => void;
    reset: () => void;
  }
};

export default function Counter({ counter }: Props) {
  return (
    <section>
      <header>
        <strong>Counter</strong>
      </header>
      <article>
        <p>
          Current count: <span>{counter.count}</span>
        </p>
        <ul>
          <li>
            <button onClick={() => counter.decrement()}>-1</button>
          </li>
          <li>
            <button onClick={() => counter.increment()}>+1</button>
          </li>
          <li>
            <button onClick={() => counter.reset()}>Reset</button>
          </li>
        </ul>
      </article>
    </section>
  )
}
