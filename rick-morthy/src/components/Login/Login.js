import React, {useRef, useState} from "react";
import Navi from "../Navi";
import {Link} from "react-router-dom";
import {logIn, logOut, useAuth} from "../../auth/config";
import {motion} from "framer-motion";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth()

    const handleLogIn = async () => {
        setLoading(true)
        try {
            await logIn(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!")
        }
        setLoading(false)
    }

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch {
            alert("Error!")
        }
    }

    return (
        <div className='container max-w-5xl'>
            <Navi/>
            <div
                className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary container font-sans">
                {!currentUser?.email ? (
                    <div className="max-w-sm w-full space-y-8">
                        <h1 className="text-4xl text-bold text-center">Log in</h1>
                        <form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label className="sr-only">Email address</label>
                                    <input ref={emailRef}
                                           className="appearance-none relative rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                                       text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password"
                                           ref={passwordRef}
                                           className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                                       text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                        disabled={loading}
                                        onClick={handleLogIn}
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                                text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                                focus:ring-2 focus:ring-offset-2
                                focus:ring-indigo-500">Log In!
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="flex justify-center items-center flex-col h-[150px] rounded-md p-2 leading-loose bg-white">
                        <h1 className="font-sans text-xl flex-col">
                            <p className="flex justify-center">Log in as:</p>
                            <p className="uppercase flex justify-center pb-1">{currentUser?.email}!</p></h1>
                        <Link to="/">
                            <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.05}}
                                           className="text-lg font-sans font-medium border-2 border-solid border-primary px-1 py-1 rounded-lg bg-primary">Go
                                to App!
                            </motion.button>
                        </Link>
                    </div>

                )}

            </div>
        </div>
    )
}
export default Login