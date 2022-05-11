type Props = {
  onToggle: () => void,
  active: boolean
};

const Toggle = ({ onToggle, active }: Props) => {
  return (
    <section>
      <header>
        <strong>Toogle Status</strong>
      </header>
      <article>
        <p>
          Current status: <span>{active ? 'ON' : 'OFF'}</span>
        </p>
        <ul>
          <li>
            <button onClick={onToggle}>Toggle</button>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Toggle
