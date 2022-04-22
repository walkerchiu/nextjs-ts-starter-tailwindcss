import type { NextPage } from 'next'
import React, { FC } from 'react'
import styled from '@emotion/styled'

interface ComponentProps {
  className?: string
  label: string
}

const Component: FC<ComponentProps> = ({
  label,
  className
}) => <div className={className}>{label}</div>

interface StyledComponentProps {
  bgColor: string
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
    <>
      <StyledComponent0
        bgColor="red"
        label="Component 0"
      />
      <StyledComponent1
        bgColor="red"
        label="Component 1"
      />
    </>
  )
}

export default EmotionStyledComponent
