import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  //Method One
  //const value = useContext(LanguageContext);
  //const buttonText = value === 'english' ? "Submit" : "إرسال"
  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          {/* Method One {buttonText} */}
          <LanguageContext.Consumer>
            {(value) => (value === "english" ? "Submit" : "إرسال")}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;
