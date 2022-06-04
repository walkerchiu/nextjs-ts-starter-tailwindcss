import type { NextPage } from 'next';
import tw from "tailwind-styled-components"

import Footer from '../../modules/examples/Footer';
import Header from '../../modules/examples/Header';
import ThemeSwitch from '../../modules/examples/providers/ThemeSwitch';


interface ButtonProps {
  $primary: boolean
}

const StyledComponent0 = tw.div`
  flex
  items-center
  justify-center
  w-full
  p-10
`
const StyledComponent1 = tw(StyledComponent0)`
  bg-green-200
`

const Button = tw.button<ButtonProps>`
  h-10
  m-2
  px-5
  transition-colors
  duration-150
  rounded-lg
  focus:shadow-outline
  ${(p: { $primary: boolean; }) => (
    p.$primary
    ?
      "text-blue-100 bg-blue-400 hover:bg-blue-600 active:bg-blue-800"
    :
      "text-pink-100 bg-pink-400 hover:bg-pink-600 active:bg-pink-800"
  )}
`

const LinkButton = tw.button`
  inline-flex
  items-center
  m-2
  p-2
  transition-colors
  duration-150
  rounded-lg
  focus:shadow-outline
  text-purple-100
  bg-purple-400
  hover:bg-purple-600
  active:bg-purple-800
`

const TailwindStyledComponentPage: NextPage = () => {
  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header
        title="Tailwind-Styled-Component"
        description="styled is a way to create React components that have styles attached to them."
      />
      <main
        className="mb-auto px-10"
      >
        <div
          className="w-full flex justify-end mb-5"
        >
          <ThemeSwitch />
        </div>

        <StyledComponent0>
          StyledComponent
        </StyledComponent0>
        <StyledComponent1>
          <Button
            $primary={true}
          >
            Button 1
          </Button>
          <Button
            $primary={false}
          >
            Button 2
          </Button>
          <LinkButton
            $as="a"
            href="#"
          >
            Link Button
          </LinkButton>
        </StyledComponent1>
      </main>
      <Footer>
        <ol
          style={{
            listStyleType: "number"
          }}
          className="pl-6"
        >
          <li>
            Tailwind CSS:<br />
            <a
              href="https://tailwindcss.com/docs/utility-first"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://tailwindcss.com/docs/utility-first
            </a>
          </li>
          <li>
            Tailwind-Styled-Component:<br />
            <a
              href="https://github.com/MathiasGilson/tailwind-styled-component"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/MathiasGilson/tailwind-styled-component
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  )
}

export default TailwindStyledComponentPage
