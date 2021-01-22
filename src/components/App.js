import React, { useState } from "react";

const App = () => {

  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  }

  return (
    <div className="ui container large header">
      Select a language: 
      <i className="canada flag" onClick={()=>onLanguageChange("english")} />
      <i className="sa flag" onClick={()=>onLanguageChange("arabic")} />
      {language}
    </div>
  );
}

export default App;
