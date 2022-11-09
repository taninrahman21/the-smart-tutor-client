import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div class="p-4 w-2/5 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form>
          <h5 class="text-2xl text-center mb-3 font-medium text-gray-900 dark:text-white">
            Sign In
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="your email"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          
          <button
            type="submit"
            class="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link to='/signup' className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Create an account.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
