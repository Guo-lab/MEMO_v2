/* wrap link text */
/* click then it parsing the url */
import { Link } from "react-router-dom";

/* css style has been scoped to one component */
import classes from "./MainNav.module.css";

import FavoritesContext from "../../statestore/favorites-context";
import { useContext } from "react";

function MainNav() {
  const favoritesCxt = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Upcoming Event</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Events</Link>
          </li>

          <li>
            <Link to="/new-event">Add New Event</Link>
          </li>

          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCxt.totalFavorites}
              </span>
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default MainNav;
