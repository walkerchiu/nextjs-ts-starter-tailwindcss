import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faBell, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { far, faCircle, faHeart } from '@fortawesome/free-regular-svg-icons'
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

const FontAwesomeIndividuallyPage: NextPage = () => {

  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header
        title="Font Awesome (Individually)"
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
              Allows icons to be subsetted, optimizing your final bundle. Only the icons you import are included in the bundle.
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
              Explicitly importing icons into each of many components in your project can become tedious.
            </p>
          </section>
        </div>
        <p>
          <FontAwesomeIcon
            icon={fas.faLeaf}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={fas.faGlobe}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={faQuestion}
          />
        </p>
        <p>
          <FontAwesomeIcon
            icon={far.faComment}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={far.faSquare}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={faCircle}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={faHeart}
          />
        </p>
        <p>
          <FontAwesomeIcon
            icon={fab.faJs}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={fab.faPhp}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-2"
          />
          <FontAwesomeIcon
            icon={faGoogle}
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
            Font Awesome (Use React with...):<br />
            <a
              href="https://fontawesome.com/docs/web/use-with/react/use-with"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://fontawesome.com/docs/web/use-with/react/use-with
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  )
}

export default FontAwesomeIndividuallyPage
