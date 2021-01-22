import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
    const value = useContext(LanguageContext);
    const buttonText = value === 'english' ? "Submit" : "إرسال"
  return (
    <button className="ui button primary">
      {buttonText}
    </button>
  );
};

export default Button;
