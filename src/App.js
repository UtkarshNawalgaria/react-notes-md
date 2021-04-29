import { Route, Switch } from "react-router-dom";
import NotesPage from "./pages/admin";
import HomePage from "./pages/home";


function App() {
  return (
    <div className="w-full">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin">
          <NotesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
