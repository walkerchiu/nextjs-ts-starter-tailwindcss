import type { NextPage } from 'next';
import { FC } from 'react';
import styled from '@emotion/styled';
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

interface ComponentProps {
  className?: string,
  label: string,
}

const Component: FC<ComponentProps> = ({
  className,
  label,
}) => <div className={className}>{label}</div>

interface StyledComponentProps {
  bgColor: string,
}

const StyledComponent0 = styled(Component)<StyledComponentProps>`
  color: white;
  background: ${props => props.label ? props.bgColor : 'white'};
  cursor: pointer;
  &:hover {
    font-size: large;
  }
`
const StyledComponent1 = styled(Component)<StyledComponentProps>(
  props => ({
    color: 'white',
    background: props.label ? props.bgColor : 'white',
    cursor: 'pointer',
    '&:hover': {
        fontSize: 'large',
    },
  })
)

const EmotionStyledComponent: NextPage = () => {
  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header />
      <main
        className="mb-auto px-10"
      >
        <StyledComponent0
          bgColor="red"
          label="Component 0"
        />
        <StyledComponent1
          bgColor="red"
          label="Component 1"
        />
      </main>
      <Footer>
        <ol
          style={{ listStyleType: "number" }}
        >
          <li>
            Emotion:<br />
            <a
              href="https://emotion.sh/docs/styled"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://emotion.sh/docs/styled
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  )
}

export default EmotionStyledComponent
