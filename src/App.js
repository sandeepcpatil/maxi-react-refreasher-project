import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage></AllMeetUpsPage>
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>

        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
