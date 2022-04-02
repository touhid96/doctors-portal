import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const appointments = localStorage.getItem("appointments");
    !appointments && localStorage.setItem("appointments", JSON.stringify([]));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
