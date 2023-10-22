import { Link } from "react-router-dom"; /* click then it parsing the url */
import { useContext } from "react";

import classes from "./MainNav.module.css"; /* css style has been scoped to one component */

import FavoritesContext from "../../statestore/favorites-context";
import ModeContext from "../../statestore/mode-context";
import memoTimeContext from "../../statestore/memotime-context";



function MainNav() {
  const favoritesCxt = useContext(FavoritesContext);
  const modeCxt = useContext(ModeContext);
  const memoTimeCxt = useContext(memoTimeContext);

  function Switch2FutureHandler() {
    memoTimeCxt.memoTimeSwitch('toFuture');
  }
  function Switch2PastHandler() {
    memoTimeCxt.memoTimeSwitch('toPast');
  }
  function Switch2CurrentHandler() {
    memoTimeCxt.memoTimeSwitch('toCurrent');
  }

  if (memoTimeCxt.memoTime === 'current') {
    return (
      <header className={modeCxt.mode === 'light' ? classes.header : classes.header_dark}>
        <div className={modeCxt.mode === 'light' ? classes.logo : classes.logo_dark}> Dashboard </div>
        <nav>
          <ul>
            <li> <Link to="/upcoming-events" onClick={Switch2FutureHandler} >Upcoming Events</Link> </li>
            <li> <Link to="/memo-events" onClick={Switch2PastHandler}>Memories</Link> </li>
            <li> <div className={modeCxt.mode === 'light' ? classes.actions : classes.actions_dark}>
              <button onClick={modeCxt.toggleMode}>
                Toggle Mode to {modeCxt.mode === 'light' ? 'Dark' : 'Light'}
              </button>
            </div> </li>
          </ul>
        </nav>
      </header>
    );
  } else if (memoTimeCxt.memoTime === 'future') {
    return (
      <header className={modeCxt.mode === 'light' ? classes.header : classes.header_dark}>
        <div className={modeCxt.mode === 'light' ? classes.logo : classes.logo_dark}> Upcoming Events </div>
        <nav>
          <ul>
            <li> <Link to="/upcoming-events">All Events</Link> </li>
            <li> <Link to="/new-event">Add New Event</Link> </li>
            <li> <Link to="/favorites">
              My Favorites
              <span className={modeCxt.mode === 'light' ? classes.badge : classes.badge_dark}>
                {favoritesCxt.totalFavorites}
              </span>
            </Link> </li>
            <li> <Link to="/" onClick={Switch2CurrentHandler}>Back to Home</Link> </li>
          </ul>
        </nav>
      </header>
    );
  } else if (memoTimeCxt.memoTime === 'past') {
    return (
      <header className={modeCxt.mode === 'light' ? classes.header : classes.header_dark}>
        <div className={modeCxt.mode === 'light' ? classes.logo : classes.logo_dark}> Memories </div>
        <nav>
          <ul>
            <li> <Link to="/" onClick={Switch2CurrentHandler}>Back to Home</Link> </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MainNav;
