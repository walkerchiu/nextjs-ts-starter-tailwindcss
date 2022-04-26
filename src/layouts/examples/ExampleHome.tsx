import { FC } from 'react'

interface ComponentProps {
  children: any,
}

const ExampleHome: FC<ComponentProps> = ({
  children,
}) => {
  return (
    <main
      className='container'
    >
      { children }
    </main>
  )
}

export default ExampleHome
