import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

import Footer from '../../modules/examples/Footer';
import Header from '../../modules/examples/Header';


type UserSubmitForm = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  groupType: number;
  note: string;
  acceptTerms: boolean;
};

const ReactHookFormPage: NextPage = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().trim()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: yup.string().trim()
      .required('Email is required')
      .email('Email is invalid'),
    password: yup.string().trim()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    passwordConfirm: yup.string().trim()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
    groupType: yup.number()
      .typeError('Group Type must be a number')
      .integer('Group Type must be an integer')
      .positive('Group Type must be a positive number')
      .required('Group Type is required')
      .oneOf([1, 2, 3], 'Group Type is invalid'),
    note: yup.string().trim()
      .required('Note is required')
      .max(255, 'Note must not exceed 255 characters'),
    acceptTerms: yup.bool()
      .oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header
        title="React Hook Form"
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <main
        className="mb-auto px-10"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <p
            className="text-2xl mb-5 font-bold dark:text-white"
          >
            Register
          </p>
          <div
            className="mb-6"
          >
            <label
              className="block mb-2 font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register('username')}
              className={`border rounded-lg block w-full p-2.5 ${
                errors.username ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : ''
              }`}
            />
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.username?.message}
            </div>
          </div>
          <div
            className="mb-6"
          >
            <label
              className="block mb-2 font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register('email')}
              className={`border rounded-lg block w-full p-2.5 ${
                errors.email ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : ''
              }`}
            />
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.email?.message}
            </div>
          </div>
          <div
            className="mb-6"
          >
            <label
              className="block mb-2 font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className={`border rounded-lg block w-full p-2.5 ${
                errors.password ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : ''
              }`}
            />
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.password?.message}
            </div>
          </div>
          <div
            className="mb-6"
          >
            <label
              className="block mb-2 font-medium"
              htmlFor="passwordConfirm"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              {...register('passwordConfirm')}
              className={`border rounded-lg block w-full p-2.5 ${
                errors.passwordConfirm ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : ''
              }`}
            />
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.passwordConfirm?.message}
            </div>
          </div>
          <div
            className="mb-6"
          >
            <label
              className="block mb-2 font-medium"
            >
              Group Type
            </label>
            <input
                type="radio"
                id="groupType-1"
                {...register("groupType")}
                value="1"
            />
            <label
              className={`ml-2 mr-4 text-gray-900 dark:text-gray-300 ${
                errors.groupType ? 'bg-red-50' : ''
              }`}
              htmlFor="groupType-1"
            >
              Group 1
            </label>
            <input
                type="radio"
                id="groupType-2"
                {...register("groupType")}
                value="2"
            />
            <label
              className={`ml-2 text-gray-900 dark:text-gray-300 ${
                errors.groupType ? 'bg-red-50' : ''
              }`}
              htmlFor="groupType-2"
            >
              Group 2
            </label>
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.groupType?.message}
            </div>
          </div>
          <div
            className="mb-6"
          >
            <label
              className="block mb-2 font-medium"
              htmlFor="note"
            >
              Note
            </label>
            <textarea
              id="note"
              {...register("note")}
              className={`
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                ${
                  errors.note ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : ''
                }
              `}
              rows={3}
              placeholder="Note"
            >
            </textarea>
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.note?.message}
            </div>
          </div>
          <div
            className="my-8"
          >
            <input
              type="checkbox"
              id="acceptTerms"
              {...register('acceptTerms')}
              className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                errors.acceptTerms ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : ''
              }`}
            />
            <label
              className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              htmlFor="acceptTerms"
            >
              I agree to the
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="ml-1 text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>.
            </label>
            <div
              className="mt-2 text-red-600 dark:text-red-500"
            >
              {errors.acceptTerms?.message}
            </div>
          </div>
          <div
            className="mb-6"
          >
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="ml-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </form>
      </main>
      <Footer>
        <ol
          style={{
            listStyleType: "number"
          }}
          className="pl-6"
        >
          <li>
            react-hook-form:<br />
            <a
              href="https://react-hook-form.com/get-started"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://react-hook-form.com/get-started
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}

export default ReactHookFormPage
