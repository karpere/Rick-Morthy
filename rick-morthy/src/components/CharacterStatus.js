import React from "react";


const CharacterStatus = ({checked,setChecked}) => {

    const handleOption = (event) => {
        setChecked(event.target.value)
    }

    return <div className="container">
        <form className="pt-6 m-0 flex justify-center md:justify-start align-items-center bg-primary">
            <div className="ml-0 md:ml-24">
                <label>
                    <input
                        type="radio"
                        value=""
                        checked={checked === ""}
                        className="form-check-input"
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
                        className="form-check-input"
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
                        className="form-check-input"
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
                        className="form-check-input"
                        onChange={handleOption}
                    />
                    Unknown
                </label>
            </div>
        </form>
    </div>
}

export default CharacterStatus