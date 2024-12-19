import React, { useState } from "react";

function SignIn() {
    const [ login, setLogin ] = useState(true)

  return (
    <>
    <div className="signin-part">
        <div>
        <img
          className="logo"
          src={require("../assests/logo.png")}
          alt="group_Image"
        />
        <h1>Welcome to CodeAnt AI</h1>

        <div className="btn">
            <button className= {login ? "button" : ""} onClick={login}>SAAS</button>
            <button className= {!login ? "button" : ""} onClick={setLogin}> Self Hosted</button>
        </div>

      </div>
    </div>
      
    </>
  );
}

export default SignIn;
