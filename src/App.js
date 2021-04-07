import { BrowserRouter as Router, Switch } from "react-router-dom";
import MyRoute from "./components/MyRoute";
import NotesPage from "./pages/admin";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <MyRoute exact={true} path="/">
            <div className="grid h-screen place-content-center">
              <HomePage />
            </div>
          </MyRoute>
          <MyRoute path="/admin">
            <NotesPage />
          </MyRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
