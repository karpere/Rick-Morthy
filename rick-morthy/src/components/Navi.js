import React, {useState} from "react";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {logOut} from "../auth/config";
import {useAuth} from "../auth/config";


const Navi = () => {

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch {
            alert("Error!")
        }
    }
    const currentUser = useAuth()


    return (
        <div className="container  flex justify-between items-center">
            <Link to="/"><Logo/></Link>
            {!currentUser?.email ? (
                <div>
                    <Link to="/login">
                        <button className="text-lg font-medium font-sans mr-4 hover:underline">Log in</button>
                    </Link>
                    <Link to="/register">
                        <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.05}}
                                       className="text-lg font-sans font-medium mr-4 md:mr-24  border-2 border-solid border-primary px-1 py-1 rounded-lg bg-primary">Sign
                            Up
                        </motion.button>
                    </Link>
                </div>
            ) : (
                <div className="flex items-center">
                    <h1 className="bg-primary">{currentUser?.email}</h1>
                    <motion.button onClick={handleLogOut} whileTap={{scale: 0.9}} whileHover={{scale: 1.05}}
                                   className="text-lg font-sans font-medium md:mr-24 border-2
                                   border-solid border-primary px-1 py-1
                                   rounded-lg bg-primary">Log Out
                    </motion.button>
                </div>

            )}


        </div>
    )
}

export default Navi