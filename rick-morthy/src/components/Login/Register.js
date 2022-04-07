import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import {signup} from "../../auth/config";
import Navi from "../Navi";
import {useAuth} from "../../auth/config";
import {motion} from "framer-motion";

const Register = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const currentUser = useAuth()

    const handleSignUp = async () => {
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return alert("Passwords are not the same")
        }
        setLoading(true)
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!")
        }
        setLoading(false)

    }

    return (
        <div className='container max-w-5xl'>
            <Navi/>
            <div
                className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary container font-sans">
                {!currentUser?.email ? (
                    <div className="max-w-sm w-full space-y-8">
                        <h1 className="text-4xl text-bold text-center">Sign Up!</h1>
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
                                           placeholder="Password"
                                           className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                                       text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password"
                                           ref={passwordConfirmRef}
                                           placeholder="Confirm password"
                                           className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                                       text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                        disabled={loading}
                                        onClick={handleSignUp}
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                                    text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign Up!
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="flex justify-center text-center flex-col h-[150px] rounded-md p-2 leading-loose bg-white">
                        <h1 className="font-sans text-xl flex-col">
                            <p className="text-center">Welcome,</p>
                            <p className="uppercase text-center pb-1">{currentUser?.email}!</p></h1>
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
export default Register