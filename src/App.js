import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotesPage from "./pages/admin";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" component={NotesPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
