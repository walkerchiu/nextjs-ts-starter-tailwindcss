import type { NextPage } from 'next'

import Footer from '../../modules/examples/Footer';
import Header from '../../modules/examples/Header';
import ThemeSwitch from '../../modules/examples/providers/ThemeSwitch';


const TailwindCSSPage: NextPage = () => {
  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header
        title="TailwindCSS"
        description="TailwindCSS is a framework like no other. Rather than constraining you to a set design, it gives you the tools and the standardization to build exactly what you want."
      />
      <main
        className="flex w-full flex-1 flex-col items-center justify-center mt-5 mb-10 px-20 text-center"
      >
        <div
          className="w-full flex justify-end mb-5"
        >
          <ThemeSwitch />
        </div>

        <h1
          className="text-6xl font-bold"
        >
          Welcome to TailwindCSS
        </h1>

        <p
          className="mt-3 text-2xl"
        >
          A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
        </p>

        <div
          className="mt-6 flex max-w-4xl flex-wrap justify-around sm:w-full"
        >
          <a
            href="https://tailwindcss.com/docs/installation"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
          >
            <h3
              className="text-2xl font-bold"
            >
              Documentation &rarr;
            </h3>
            <p
              className="mt-4 text-xl"
            >
              Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
            </p>
          </a>

          <a
            href="https://tailwindui.com"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
          >
            <h3
              className="text-2xl font-bold"
            >
              Components &rarr;
            </h3>
            <p
              className="mt-4 text-xl"
            >
              Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.
            </p>
          </a>

          <a
            href="https://play.tailwindcss.com"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
          >
            <h3
              className="text-2xl font-bold"
            >
              Playground &rarr;
            </h3>
            <p
              className="mt-4 text-xl"
            >
              An advanced online playground for Tailwind CSS. Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.
            </p>
          </a>

          <a
            href="https://tailwindcss.com/resources"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
          >
            <h3
              className="text-2xl font-bold"
            >
              Resources &rarr;
            </h3>
            <p
              className="mt-4 text-xl"
            >
              Everything else you need to build awesome Tailwind CSS websites. We think Tailwind is an amazing CSS framework, but you need more than just a CSS framework to produce visually awesome work..
            </p>
          </a>
        </div>
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
        </ol>
      </Footer>
    </div>
  )
}

export default TailwindCSSPage
