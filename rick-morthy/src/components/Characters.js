import React from "react";
import {motion} from "framer-motion";

const Characters = ({character}) => {
    return (
        <motion.div layout id={character.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex flex-col m-2.5 w-48">
            <a href={`https://rickandmorty.fandom.com/wiki/${character.name}`}>
                <img className="rounded-t-lg hover:border-2 border-primary rounded-lg" src={character.image} alt=""></img>
                <div className="p-3.5 w-full rounded-b-lg bg-white">
                    <p className="font-bold font-sans">{character.name}</p>
                </div>
            </a>
        </motion.div>
    )
}

export default Characters