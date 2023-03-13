import React, {lazy, Suspense} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Routes/landingPage";
import Campaign from "./Routes/campaign";
import LoginAdmin from "./Routes/loginAdmin";
import RegisterAdmin from "./Routes/registerAdmin";
import AdminDashboard from "./Routes/adminDashboard";
import PageNotFound from "./Routes/PageNotFound";
import NewCampaign from "./Routes/newCampaign";
import EditCampaign from "./Routes/editCampaign";
import DonationSuccess from "./Routes/donationSuccess";
import DonationFailure from "./Routes/donationFailure";
import Footer from "./Components/footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AllCampaigns from "./Routes/allCampaigns"

const AboutUs = lazy(() => import("./Routes/aboutUs"));
const ContactUs = lazy(() => import("./Routes/contactUs"));

const App = () => {
  return (
    <>
      <div id="page-container">
        {/* <div id="content-wrap"> */}
        
          <ToastContainer />
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/all-campaigns" exact component={AllCampaigns} />
            <Route
              path="/donation/success/:id"
              exact
              component={DonationSuccess}
            />
            <Route path="/donation/failure" exact component={DonationFailure} />
            <Route path="/campaign/:id" exact component={Campaign} />
            <Route path="/admin/login" exact component={LoginAdmin} />
            <Route path="/admin/dashboard" exact component={AdminDashboard} />
            <Route path="/admin/new" exact component={RegisterAdmin} />
            <Route
              path="/admin/campaign/:id/edit"
              exact
              component={EditCampaign}
            />
            <Route path="/admin/campaign/new" exact component={NewCampaign} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/page-not-found" exact component={PageNotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/page-not-found" />
          </Switch>
          </Suspense>
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
