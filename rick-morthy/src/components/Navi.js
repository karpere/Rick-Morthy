import React from "react";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Navi = () => {
    return (
        <div className="container  flex justify-between items-center">
            <Link to="/"><Logo/></Link>
            <div>
                <Link to="/register"><motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className="text-lg text-sans text-bold mr-2 border-2 border-solid border-primary px-4 py-2 rounded-lg bg-primary">Register</motion.button></Link>
                <Link to="/login"><motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className="text-lg text-sans text-bold md:mr-24 border-2 border-solid border-primary px-4 py-2 rounded-lg bg-primary">Sign In</motion.button></Link>
            </div>

        </div>
    )
}

export default Navi