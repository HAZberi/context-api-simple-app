import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const App = () => {
  const [language, setLanguage] = useState("english");
  const [color, setColor] = useState("primary");

  const onLanguageChange = (language, color) => {
    setLanguage(language);
    setColor(color);
  };

  return (
    <div className="ui container">
      <h1 className="ui header" style={{ marginTop: "20px" }}>
        Select a language
      </h1>
      <div className="content" style={{ marginBottom: "50px" }}>
        <i
          className="canada flag"
          onClick={() => onLanguageChange("english", "primary")}
        />
        <i
          className="sa flag"
          onClick={() => onLanguageChange("arabic", "red")}
        />
      </div>
      <ColorContext.Provider value={color}>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
