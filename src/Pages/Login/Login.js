import React, { useContext } from "react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const [error, setError] = useState('');
  const { login, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        // const user = result.user;
        navigate(from, { replace: true });
        // const currentUser = {
        //   name: user.DisplayName,
        //   email: user.email
        // }

        // // Post User Data
        // fetch(`http://localhost:5000/jwt`, {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(currentUser)
        // })
        // .then(res => res.json())
        // .then(data => {
        //   console.log(data);
        //   localStorage.setItem('secretToken', data.token)
        //   navigate(from, { replace: true })
        // });
        
      })
      .catch((error) => setError(error.message));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      navigate(from, { replace: true});
    }).catch(error => console.log(error));
  }
  return (
    <div className="py-20 bg-gray-100">
      <div className="p-8 w-10/12 md:w-9/12 lg:w-3/5 xl:w-2/5 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogin}>
          <h5 className="text-2xl text-center mb-3 font-medium text-gray-900 dark:text-white">
            Sign In
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <p className='text-red-600 mt-3'>{error}</p>

          <button
            type="submit"
            className="w-full mt-3 text-white bg-[#3f6c51] hover:bg-[#365e45] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          >
            Login
          </button>
          <div className="text-sm mt-2 font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Create an account.
            </Link>
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="text-white flex items-center justify-center mt-5 text-center w-full bg-[#9c380c] hover:bg-[#912f06] focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2 dark:focus:ring-[#1da1f2]/55"
          > <FaGoogle className="mr-2 text-2xl"/>
           <p className="text-lg"> Sign in with Google</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
