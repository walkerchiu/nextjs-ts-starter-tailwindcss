/** @jsxRuntime classic */
/** @jsx jsx */

import type { NextPage } from 'next';
import React from 'react';
import { jsx, css } from '@emotion/react';

const color = 'white'

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
    <React.Fragment>
      <div css={ style1 }>
        Hover to change color.
      </div>
      <div css={ style2 }>
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
      <div css={{
        backgroundColor: 'hotpink',
        padding: '32px',
        cursor: 'pointer',
        '&:hover': {
          fontWeight: 'bold',
          color: color,
        }
      }}>
        Hover to change color.
      </div>
    </React.Fragment>
  );
}

export default EmotionReact
