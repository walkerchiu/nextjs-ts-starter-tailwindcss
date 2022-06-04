import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

import Footer from '../../modules/examples/Footer';
import Header from '../../modules/examples/Header';


const FontAwesomeDynamicallyPage: NextPage = () => {

  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header
        title="Font Awesome (Dynamically)"
        description="Font Awesome is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators."
      />
      <main
        className="flex w-full flex-1 flex-col items-center justify-center mt-5 mb-10 px-20 text-center"
      >
        <div
          className="m-4 p-2"
        >
          <section
            className="text-left"
          >
            <p
              className="font-bold"
            >
              Benefits
            </p>
            <p>
              Automatically includes just the icons you&apos;re using in your components, optimizing your final bundle. Only the icons you use are included in the bundle.
            </p>
          </section>
          <section
            className="text-left"
          >
            <p
              className="font-bold"
            >
              Drawbacks
            </p>
            <p>
              You need to add and configure babel macros.
            </p>
          </section>
        </div>
        <p>
          <FontAwesomeIcon
            icon={solid('user-secret')}
          />
        </p>
        <p>
          <FontAwesomeIcon
            icon={regular('message')}
          />
        </p>
        <p>
          <FontAwesomeIcon
            icon={brands('twitter')}
          />
        </p>
      </main>
      <Footer>
        <ol
          style={{
            listStyleType: "number"
          }}
          className="pl-6"
        >
          <li>
            Font Awesome:<br />
            <a
              href="https://fontawesome.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com
            </a>
          </li>
          <li>
            Font Awesome (Add Icons with React):<br />
            <a
              href="https://fontawesome.com/docs/web/use-with/react/add-icons"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com/docs/web/use-with/react/add-icons
            </a>
          </li>
          <li>
            Font Awesome (Import Icons):<br />
            <a
              href="https://fontawesome.com/docs/apis/javascript/import-icons"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com/docs/apis/javascript/import-icons
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  )
}

export default FontAwesomeDynamicallyPage
