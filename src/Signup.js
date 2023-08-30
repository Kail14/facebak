import React, { useState } from "react";
import "./Signup.css";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSignUp = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
            signInWithEmailAndPassword(auth, email, password).then(() => {
            updateProfile(auth.currentUser, {
                displayName: username,
            });
            });
        })
        .catch((err) => {
            alert(err);
        });
    } else {
        setPasswordsMatch(false);
    }
    };

    return (
    <div className="signup">
        <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
        className="signup__image"
        />
        <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="signup__input"
        />
        <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
        className="signup__input"
        />
        <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
        className="signup__input"
        />
        <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        className="signup__input"
        />
        {passwordsMatch ? null : <p>Passwords do not match</p>}
        <button onClick={handleSignUp} className="signup__button">
        Sign up
        </button>
    </div>
    );
}

export default Signup;
