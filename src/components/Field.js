import React, {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext"

const Field = () => {
    const value = useContext(LanguageContext);
    const text = value === "english" ? "Name" : "اسم"
    return (
        <div className="ui field">
            <label><h4>{text}</h4></label>
            <input className="ui input" />
        </div>

    )
}

export default Field;