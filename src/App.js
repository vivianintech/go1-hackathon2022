// test
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import AboutPage from "./pages/AboutPage";
import GroupPage from "./pages/GroupsPage";
import NotFound from "./pages/NotFoundPage";
import ExplorePage from "./pages/ExplorePage";
import ExpertPage from "./pages/ExpertPage/index";
import ExpertsPage from "./pages/ExpertsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Nav/Footer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/explore" exact>
            <Nav />
            <ExplorePage />
          </Route>
          <Route path="/groups">
            <Nav />
            <GroupPage />
          </Route>
          <Route path="/experts/:id">
            <Nav afterSignedIn={true} />
            <ExpertPage />
          </Route>
          <Route path="/experts">
            <Nav afterSignedIn={true} />
            <ExpertsPage />
          </Route>
          <Route path="/signup">
            <Nav />
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <Nav />
            <SignInPage />
          </Route>
          <Route path="/" exact>
            <Nav />
            <HomePage />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
