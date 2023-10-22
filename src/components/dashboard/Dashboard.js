import React from "react";

import classes from "./Dashboard.module.css";

import ModeContext from "../../statestore/mode-context";
import { useContext } from "react";

export default function Dashboard() {
    const modeCtx = useContext(ModeContext);

    if (modeCtx.mode === "light") {
        document.body.className = classes.body;
    } else {
        document.body.className = classes.body_dark;
    }
    return (
        <div>
            <h1>MEMO APPLICATION</h1>
            <h2>Here is the demo of my memo application based on React.</h2> 
            <h2>With it, people could check their schedule of all kinds of upcoming events in the future. People also could use it to record their past events as a memo. </h2>
            <h2>To switch the theme mode, please return the homepage (dashboard). </h2>
        </div>
    );
}