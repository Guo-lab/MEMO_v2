import { useContext } from "react";
import FavoritesContext from "../statestore/favorites-context";

import EventList from "../components/upcomingEvents/EventList";

function FavoritesPage() {
  const favoritesCxt = useContext(FavoritesContext);

  
  // Render some fallback message for this case
  let content;
  if (favoritesCxt.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <EventList events={favoritesCxt.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
