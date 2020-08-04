import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [otp, setOtp] = useState("wait for it...");
  useEffect(() => {
    if (!window.OTPCredential) {
      alert("OTP autofill not supported!");
      return;
    }
    alert("OTP autofill supported!");
    navigator.credentials
      .get({
        otp: {
          transport: ["sms"]
        }
      })
      .then(({ code }) => {
        alert(`Your code is ${code}`);
        setOtp(code);
      })
      .catch(e => {
        alert("Error!");
        alert(e.message);
      });
  }, []);
  return (
    <div className="App">
      <h1>OTP Code Demo</h1>
      <p>{otp}</p>
    </div>
  );
}

export default App;
