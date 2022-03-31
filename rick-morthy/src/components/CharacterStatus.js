import React from "react";


const CharacterStatus = ({checked,setChecked,placeholder, handleFilter}) => {

    const handleOption = (event) => {
        setChecked(event.target.value)
    }

    return <div className="container d-block text-center sm:flex sm:justify-between sm:align-center bg-primary pt-4">
        <form className="pt-4 m-0 flex justify-center sm:justify-start align-center text-lg">
            <p className="ml-0 sm:ml-4 md:ml-20 lg:ml-24">Character status:</p>
            <div className="ml-2.5 md: ml-3" >
                <label>
                    <input
                        type="radio"
                        value=""
                        checked={checked === ""}
                        className="form-check-input mr-1"
                        onChange={handleOption}
                    />
                    Any
                </label>
            </div>
            <div className="ml-2.5 md: ml-3">
                <label>
                    <input
                        type="radio"
                        value="alive"
                        checked={checked === "alive"}
                        className="form-check-input mr-1"
                        onChange={handleOption}
                    />
                    Alive
                </label>
            </div>

            <div className="ml-2.5 md: ml-3">
                <label>
                    <input
                        type="radio"
                        value="dead"
                        checked={checked === "dead"}
                        className="form-check-input mr-1"
                        onChange={handleOption}
                    />
                    Dead
                </label>
            </div>
            <div className="ml-2.5 md: ml-3">
                <label>
                    <input
                        type="radio"
                        value="unknown"
                        checked={checked === "unknown"}
                        className="form-check-input mr-1"
                        onChange={handleOption}
                    />
                    Unknown
                </label>
            </div>
        </form>
        <input type="text" placeholder={placeholder} className="h-[40px] w-[250px] md:w-[250px] pl-1  mr-4 md:mr-20 lg:mr-24 rounded border-2 border-gray-300 font-sans" onChange={handleFilter}/>
    </div>
}

export default CharacterStatus