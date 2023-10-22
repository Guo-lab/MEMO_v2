import { createContext } from "react";
import { useState } from "react";

const ModeContext = createContext({
    mode: "light",
    toggleMode: () => {},
});

export function ModeContextProvider(props) {
    const [appMode, setAppMode] = useState("light");

    function toggleModeHandler() {
        if (appMode === "light") {
            setAppMode("dark");
        } else {
            setAppMode("light");
        }
    }

    const modeContext = {
        mode: appMode,
        toggleMode: toggleModeHandler
    };

    return (
        <ModeContext.Provider value={modeContext}>
            {props.children}
        </ModeContext.Provider>
    );
}

export default ModeContext;