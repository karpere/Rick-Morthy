import React from "react";
import Navi from "../Navi";

const Login = () => {
    return(
        <div className='container max-w-5xl'>
            <Navi/>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary container">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-4xl text-bold text-center">Sign In</h1>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address"
                                   name="email" type="email"
                                   autoComplete="email"
                                   required
                                   className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Email address"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password"
                                   name="password"
                                   type="password"
                                   autoComplete="current-password"
                                   required
                                   className="mt-2 appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Password"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                                text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Login