import { Route, Switch } from "react-router-dom";
/* which component should be loaded for these different paths */

import AllEventsPage from "./pages/AllEvents";
import FavoritesPage from "./pages/Favorites";
import NewEventPage from "./pages/NewEvent";

// import MainNav from "./components/layouts/MainNav"; // later be organized in components/layouts
import Layout from "./components/layouts/Layout";

function App() {
  // localhost:3000/
  // domain-page.com/

  return (
    // <MainNav />

    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllEventsPage />
        </Route>
        <Route path="/new-event">
          <NewEventPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
