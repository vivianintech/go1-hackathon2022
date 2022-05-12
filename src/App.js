// test
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import NotFound from "./pages/NotFoundPage";
import EventsPage from "./pages/EventsPage";
import KeynoteEventsPage from "./pages/KeynoteEventsPage";
import FacilitatorEventsPage from "./pages/FacilitatorEventsPage";
import MentorEventsPage from "./pages/MentorEventsPage";
import ExpertEventsPage from "./pages/ExpertEventsPage";
import EnthusiastEventsPage from "./pages/EnthusiastEventsPage";
import IntimateEventsPage from "./pages/IntimateEventsPage";
import SmallEventsPage from "./pages/SmallEventsPage";
import MediumEventsPage from "./pages/MediumEventsPage";
import LargeEventsPage from "./pages/LargeEventsPage";
import VeryLargeEventsPage from "./pages/VeryLargeEventsPage";
import HugeEventsPage from "./pages/HugeEventsPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";
import ExpertPage from "./pages/ExpertPage";
import ExpertsPage from "./pages/ExpertsPage";
import HostPage from "./pages/HostPage";
import HostsPage from "./pages/HostsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import SignOutPage from "./pages/SignOutPage";
import BecomeHeroPage from "./pages/BecomeHeroPage";
import BecomeHostPage from "./pages/BecomeHostPage";
import NewEventPage from "./pages/NewEventPage";
import UnauthPage from "./pages/UnauthPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Nav/Footer";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationPage from "./pages/ApplicationPage";
import NewApplicationForm from "./components/Forms/NewApplicationForm";
import AssessApplForm from "./components/Forms/AssessApplForm";
import ConfirmApplicationPage from "./pages/ConfirmApplicationPage";
import NewReviewEventPage from "./pages/NewReviewEventPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/events/:id">
            <EventPage />
          </Route>
          <Route path="/events" exact>
            <EventsPage />
          </Route>
          <Route path="/keynote">
            <KeynoteEventsPage />
          </Route>
          <Route path="/facilitator">
            <FacilitatorEventsPage />
          </Route>
          <Route path="/mentor">
            <MentorEventsPage />
          </Route>
          <Route path="/expert">
            <ExpertEventsPage />
          </Route>
          <Route path="/enthusiast">
            <EnthusiastEventsPage />
          </Route>
          <Route path="/intimate">
            <IntimateEventsPage />
          </Route>
          <Route path="/small">
            <SmallEventsPage />
          </Route>
          <Route path="/medium">
            <MediumEventsPage />
          </Route>
          <Route path="/large">
            <LargeEventsPage />
          </Route>
          <Route path="/verylarge">
            <VeryLargeEventsPage />
          </Route>
          <Route path="/huge">
            <HugeEventsPage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/experts/:id">
            <ExpertPage />
          </Route>
          <Route path="/experts">
            <Nav afterSignedIn={true} />
            <ExpertsPage />
          </Route>
          <Route path="/host/:id">
            <HostPage />
          </Route>
          <Route path="/hosts">
            <HostsPage />
          </Route>
          <Route path="/becomehero">
            <BecomeHeroPage />
          </Route>
          <Route path="/becomehost">
            <BecomeHostPage />
          </Route>
          <Route path="/signup">
            <Nav />
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <Nav />
            <SignInPage />
          </Route>
          <Route path="/signout">
            <SignOutPage />
          </Route>
          <Route path="/newevent">
            <NewEventPage />
          </Route>
          <Route path="/newreviewevent">
            <NewReviewEventPage />
          </Route>
          <Route path="/unauthorised">
            <UnauthPage />
          </Route>
          <Route path="/assess">
            <AssessApplForm />
          </Route>
          <Route path="/applications" exact>
            <ApplicationsPage />
          </Route>
          <Route path="/applications/:id">
            <ApplicationPage />
          </Route>
          <Route path="/apply">
            <NewApplicationForm />
          </Route>
          <Route path="/confirmapplication">
            <ConfirmApplicationPage />
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

// comment for commit
