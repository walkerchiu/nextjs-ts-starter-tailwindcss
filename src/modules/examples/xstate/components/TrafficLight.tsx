type Props = {
  onNext: () => void,
  status: any
};

const TrafficLight = ({ onNext, status }: Props) => {
  return (
    <section>
      <header>
        <strong>Traffic Light</strong>
      </header>
      <article>
        <p>
          Current status: <span>{status}</span>
        </p>
        <ul>
          <li>
            <button onClick={onNext}>Next</button>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default TrafficLight
