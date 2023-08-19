import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  //Function to control Signup Button
  const collectData = async () => {
    console.warn(name, email, password);
    if (!name || !email || !password) {
      alert("Plz Fill the form");
    } else {
      let result = await fetch(`${BASE_URL}/register`, {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      result = await result.json();
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        navigate("/");
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <center>
        <input
          className="inputBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
        />
      </center>
      <center>
        <input
          className="inputBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />
      </center>
      <center>
        <input
          className="inputBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
      </center>
      <button className="signup" onClick={collectData} type="button">
        SignUp
      </button>
    </div>
  );
};
export default SignUp;
