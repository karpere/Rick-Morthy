import React from "react";
import Logo from "./Logo";

const Navi = ({placeholder, handleFilter}) => {
    return (
        <div className="container  flex justify-between items-center">
            <Logo/>
            <input type="text" placeholder={placeholder} className="h-[40px] w-[100px] md:w-[250px] pl-1 mr-4 md:mr-20 lg:mr-24 rounded border-2 border-gray-300 font-sans" onChange={handleFilter}/>
        </div>
    )
}

export default Navi