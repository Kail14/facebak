import React, { useState } from "react";
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
    const [active, setActive] = useState("login");

    const toggleForm = () => {
    setActive(active === "login" ? "signup" : "login");
    };

    return (
    <div className="authenticate">
        <div className="auth__content auth__left">
        <img
            src="https://i.imgur.com/P3Vm1Kq.png"
            alt="Instagram Screenshots"
            className="auth__image"
        />
        </div>
        <div className="auth__content auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
            <span>
            {active === "login" ? (
                <>
                Don't have an account?{" "}
                <button onClick={toggleForm}>Sign Up</button>
                </>
            ) : (
                <>
                Have an account? <button onClick={toggleForm}>Log in</button>
                </>
            )}
            </span>
        </div>
        </div>
    </div>
    );
}

export default Authenticate;
