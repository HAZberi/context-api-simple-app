import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
    //Method One
    //const value = useContext(LanguageContext);
    //const buttonText = value === 'english' ? "Submit" : "إرسال"
  return (
    <button className="ui button primary">
        {/* Method One {buttonText} */}
        <LanguageContext.Consumer>
            {value => value === 'english' ? "Submit" : "إرسال"}
        </LanguageContext.Consumer>
    </button>
  );
};

export default Button;
