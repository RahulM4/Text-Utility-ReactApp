import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");// Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#1B4F72";
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  };
  return (
    <>
      <Navbar title="Text Utils" home="Home"  mode={mode} toggleMode={toggleMode} />
      
      <Alert alert={alert} />
      
      <div className="container my-3"> <Textform showAlert={showAlert} heading="Enter the heading messsage" mode={mode} /></div>
    </>
  );
}

export default App;
