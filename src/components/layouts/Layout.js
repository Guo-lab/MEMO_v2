import classes from "./Layout.module.css";
import MainNav from "./MainNav";

import ModeContext from "../../statestore/mode-context";
import { useContext } from "react";

function Layout(props) {
  const modeCtx = useContext(ModeContext);

  if (modeCtx.mode === "light") {
    document.body.className = classes.body;
  } else {
    document.body.className = classes.body_dark;
  }

  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
