import React from "react";
import Logo from "./Logo";

const Navi = ({placeholder, handleFilter}) => {
    return (
        <div className="nav_class">
            <Logo/>
            <input type="text" placeholder={placeholder} className="nav_search" onChange={handleFilter}/>
        </div>
    )
}

export default Navi