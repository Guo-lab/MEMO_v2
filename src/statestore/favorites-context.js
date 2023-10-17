import { createContext } from "react";
import { useState } from "react";


// initial value of app-wide state
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,

    // dummy here
    addFavorite: (favoriteEvent) => {},
    removeFavorite: (eventId) => {},
    itemIsFavorite: (eventId) => {},

}); // return a react component



// 1. providing the context to all the components that are interested in listening to.
// 2. updating the values
export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteEvent) {
        // ======== Method 1. ======== 
        // Delayed execution, react schedules the process with following code
        // setUserFavorites(userFavorites.concat(favoriteEvent));
        // ======== Method 2. ========
        // correct order
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteEvent);
        }); 
    }
    function removeFavoriteHandler(eventId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(event => event.id !== eventId);
        });
    }
    function itemIsFavoriteHandler(eventId) {
        return userFavorites.some(event => event.id === eventId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        // functions
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }; 



    return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
    );
} 

export default FavoritesContext;