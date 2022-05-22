import { FC } from 'react'
import Link from "next/link";

interface ComponentProps {
  className?: string,
  title: string,
  description: string,
}

const Header: FC<ComponentProps> = ({
  title,
  description,
}) => {
  return (
    <section
      role="navigation"
      aria-label="Main"
      className="my-5 px-5 xl:px-10 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between shadow rounded"
    >
      <div
        className="mb-4 lg:w-1/2"
      >
        <p
          className="focus:outline-none text-2xl font-bold"
        >
          Example: { title }
        </p>
        <p
          className="focus:outline-none font-normal text-sm text-gray-600 dark:text-white mt-1"
        >
          { description }
        </p>
      </div>
      <div
        role="list"
        className="flex items-center"
      >
        <Link
          href="/"
        >
          <a
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer flex justify-center items-center mx-2 py-2 px-4 rounded text-gray-500 dark:text-white hover:bg-yellow-100 dark:hover:text-slate-900"
          >
            Back
          </a>
        </Link>
        <Link
          href="/"
        >
          <a
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer flex justify-center items-center mx-2 py-2 px-4 rounded text-gray-500 dark:text-white hover:bg-yellow-100 dark:hover:text-slate-900"
          >
            Home
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Header
