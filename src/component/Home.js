import React, { useState } from "react";
function Home() {
  const [message, setmessage] = useState("Not login");
  const [forget, setforget] = useState("");
  const [mail, setsent] = useState("");

  const clickforget = (e) => {
    e.preventDefault();
    setforget(true);
  };
  const clicksent = () => {
    setsent("Reset link has be sent to your mail");
  };
  const clicklogin = () => {
    setmessage("welcome you have successfull loged in ");
  };

  const Reset = () => {
    setmessage("Not logged in");
    setforget(false);
    setsent("");
  };

  return (
    <>
      <h1>Website</h1>
      <input type="text" placeholder="Enter Id" className="Id" />
      <br />
      <input type="text" placeholder="Password" className="Password" />
      <br />
      <a href="URL" className="Frg" onClick={clickforget}>
        Forget-Password
      </a>
      {forget && (
        <div>
          <input type="text" className="fog2" placeholder="Enter the Gmail" />
          <button onClick={clicksent} className="but2">
            Resent
          </button>
          <p>{mail}</p>
        </div>
      )}
      <button onClick={clicklogin} className="but">
        login
      </button>
      <button onClick={Reset} className="but">
        Reset
      </button>

      <p>{message}</p>
    </>
  );
}
export default Home;
