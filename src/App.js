import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotesPage from "./pages/admin";
import HomePage from "./pages/home";
import AuthProvider from './hooks/auth'


function App() {
  return (
    <AuthProvider>
      <Router>
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
      </Router>
    </AuthProvider>
  );
}

export default App;
