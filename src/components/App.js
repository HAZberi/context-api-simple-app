import React, { useState } from "react";

const App = () => {

  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  }

  return (
    <div className="ui container">

    </div>
  );
}

export default App;
