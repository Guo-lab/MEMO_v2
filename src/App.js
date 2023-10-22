import {Route, Routes } from "react-router-dom";

import AllEventsPage from "./pages/AllEvents";
import FavoritesPage from "./pages/Favorites";
import NewEventPage from "./pages/NewEvent";
import MemoriesPage from "./pages/Memories";

import Layout from "./components/layouts/Layout";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  return (
    <div>
      <Layout>

        <Routes>
          <Route path="/" exact={true} element={<Dashboard />} />

          <Route path="/memo-events" exact={true} element={<MemoriesPage />} />

          <Route path="/upcoming-events" exact={true} element={<AllEventsPage />} />
          <Route path="/new-event" element={<NewEventPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>

      </Layout>
    </div>
  );
}

export default App;
