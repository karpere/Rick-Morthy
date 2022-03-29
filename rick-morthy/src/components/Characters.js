import React from "react";
import {motion} from "framer-motion";
import "../App.css"

const Characters = ({character}) => {
    return (
        <motion.div layout className="single_character">
            <img src={character.image} alt=""></img>
            <div className="characters_name">
                <p className="name">{character.name}</p>
            </div>
        </motion.div>
    )
}

export default Characters