import React from "react";
import LanguageContext from "../contexts/LanguageContext"

const Field = () => {
    //Method One
    //const value = useContext(LanguageContext);
    //const text = value === "english" ? "Name" : "اسم"
    return (
        <div className="ui field">
            <label><h4>
                {/* Method One{text} */}
                <LanguageContext.Consumer>
                    {value => value === "english" ? "Name" : "اسم"}
                </LanguageContext.Consumer>
            </h4></label>
            <input className="ui input" />
        </div>

    )
}

export default Field;