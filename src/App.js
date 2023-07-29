import React, { useState } from 'react'
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("gaura"); //we are making alert as object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')

  }

  const togglebtn = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " Install TextUtils ";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
        // <Router>
    <div>
      {/* <Navbar title="TextUtils" AboutTextUtils="Govinda" /> */}
      {/* <Navbar /> */}

      <Navbar title="TextUtils" mode={mode} togglebtn={togglebtn} />

      <Alert alert={alert} />
      <div className="container my-3" >

        <TextForm showAlert={showAlert} heading="Gaur Hari" mode={mode} />
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
      </div>

      {/* <About /> */}

    </div>
        // </Router>
  );
}

export default App;
