import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Login = () => {
  return (
    <>
    <section className="bg-white">
    <div className="flex justify-center min-h-screen container m-auto">
        <div className="hidden bg-cover lg:block lg:w-2/5">



    <DotLottieReact
      src="https://lottie.host/4e471c8c-5069-4e7e-a211-50b3212d8a56/hn6ytHRMRd.json"
      loop
      autoplay
    />
        </div>

        <div className="flex items-center w-[500] max-w-3xl p-8 mx-auto">
            <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                Login to your E-Learning Account
                </h1>

                <p className="mt-4 text-gray-500">
                Sign in to access courses, track your learning progress, and start your journey towards mastering new skills.
                </p>
                <form className="grid gap-6 mt-8">

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Password</label>
                        <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <a href='/home' className="flex items-center justify-between w-[120] px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Login</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    
                    <a href='/register' className="flex items-center justify-between w-[220] px-6 py-3 text-sm tracking-wide text-orange-400 capitalize transition-colors duration-300 transform border-orange-500 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Create New Account</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </form>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Login