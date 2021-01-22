import React, { useState } from "react";
import UserCreate from "./UserCreate";

const App = () => {

  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  }

  return (
    <div className="ui container">
      <h1 className="ui header" style={{marginTop: "20px"}}>Select a language</h1>
      <div className="content" style={{marginBottom: "50px"}}>
        <i className="canada flag" onClick={()=>onLanguageChange("english")} />
        <i className="sa flag" onClick={()=>onLanguageChange("arabic")} />
      </div>
      <UserCreate />
    </div>
  );
}

export default App;
