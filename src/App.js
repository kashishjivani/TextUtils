import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

import ReactDOM from "react-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
          setAlert(null);
      },1500)
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled!", "success ");
      document.title = "TextUtils Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success ");
      document.title = "TextUtils Light Mode";
    }

  }
  return (
    <>
    {/* <BrowserRouter>  */}
    <Navbar title="TextUtil" aboutText="About TextUtil" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter Your Text Here!"/>
    {/* <Routes>
        <Route  exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter Your Text Here!"/>}></Route>
        <Route  exact path="/about" element={<About/>}/>
       
    </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;