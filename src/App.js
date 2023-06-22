import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const darkToggleMode = () => {
    if (mode === 'light' || mode === 'success') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const greenToggleMode = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('success');
      document.body.style.backgroundColor = '#20ac6b';
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils - Green Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
      <Navbar title="TextUtils" column1="Home" mode={mode} darkToggleMode={darkToggleMode} greenToggleMode={greenToggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextBox showAlert={showAlert} heading="Enter the text you want to analyze:-" mode={mode} />} />
          <Route path="login" element={<Login mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </Router>
    </>

  );
}


export default App;
