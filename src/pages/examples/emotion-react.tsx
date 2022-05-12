/** @jsxRuntime classic */
/** @jsx jsx */

import type { NextPage } from 'next';
import { jsx, css } from '@emotion/react';
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

const color = 'white';

const style1 = css`
  background-color: hotpink;
  padding: 32px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: ${color};
  }
`

const style2 = css({
  backgroundColor: 'hotpink',
  padding: '32px',
  cursor: 'pointer',
  '&:hover': {
    fontWeight: 'bold',
    color: color,
  }
})


const EmotionReact: NextPage = () => {
  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header />
      <main
        className="mb-auto px-10"
      >
        <div
          css={ style1 }
        >
          Hover to change color.
        </div>
        <div
          css={ style2 }
        >
          Hover to change color.
        </div>
        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            cursor: pointer;
            &:hover {
              font-weight: bold;
              color: ${color};
            }
          `}
        >
          Hover to change color.
        </div>
        <div
          css={{
            backgroundColor: 'hotpink',
            padding: '32px',
            cursor: 'pointer',
            '&:hover': {
              fontWeight: 'bold',
              color: color,
            }
          }
        }>
          Hover to change color.
        </div>
      </main>
      <Footer>
        <ol
          style={{ listStyleType: "number" }}
        >
          <li>
            Emotion:<br />
            <a
              href="https://emotion.sh/docs/css-prop"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://emotion.sh/docs/css-prop
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}

export default EmotionReact
