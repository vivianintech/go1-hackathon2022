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
import EmailMatch from "./pages/EmailMatch";
import EmailReview from "./pages/EmailReview";
import LearnerToMentor from "./pages/LearnerToMentor";
import ProfileUpdated from "./pages/ProfileUpdated";
import UpdateProfile from "./pages/UpdateProfile";
import UploadVideo from "./pages/UploadVideo";
import VideoUploadedSuccess from "./pages/VideoUploadedSuccess";
import RecordYourIntro from "./pages/RecordYourIntro";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/explore" exact>
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
            <Footer />
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
          <Route path="/recordyourintro" exact>
            <RecordYourIntro />
          </Route>
          <Route path="/uploadvideo" exact>
            <UploadVideo />
          </Route>
          <Route path="/videouploadedsuccess" exact>
            <VideoUploadedSuccess />
          </Route>
          <Route path="/updateprofile" exact>
            <UpdateProfile />
          </Route>
          <Route path="/profileupdated" exact>
            <ProfileUpdated />
          </Route>
          <Route path="/emailmatch" exact>
            <EmailMatch />
          </Route>
          <Route path="/emailreview" exact>
            <EmailReview />
          </Route>
          <Route path="/learnertomentor" exact>
            <LearnerToMentor />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
