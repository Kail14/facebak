import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
    };

    return (
    <div className="login">
        <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
        className="login__image"
        />
        <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="login__input"
        />
    <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="login__input"
    />
    <button onClick={handleLogin} className="login__button">
        Log in
    </button>
    </div>
    );
}

export default Login;
