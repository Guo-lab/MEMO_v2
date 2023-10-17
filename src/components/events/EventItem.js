import classes from "./EventItem.module.css";

/* wrap card around jsx content */
import Card from "../ui/Card";

/* establish a connection between this component and the context */
import { useContext } from "react";
import FavoritesContext from "../../statestore/favorites-context";



function EventItem(props) {
  const favoritesCxt = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCxt.itemIsFavorite(props.id);


  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCxt.removeFavorite(props.id);
    } else {
        favoritesCxt.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            location: props.location,
            image: props.image,
        });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.location}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default EventItem;
