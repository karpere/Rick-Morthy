import React from "react";


const CharacterStatus = ({checked,setChecked}) => {

    const handleOption = (event) => {
        setChecked(event.target.value)
    }

    return <div className="container">
        <form className="status">
            <div className="check">
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
            <div className="check">
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

            <div className="check">
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
            <div className="check">
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