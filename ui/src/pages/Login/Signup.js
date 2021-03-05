import React from "react";
import LoginForm from "./components/LoginForm";
import SideImage from "./components/SideImage";
import "./Login.css";
import Page from "../../components/Page/Page";
import Footer from "../../components/Footer/Footer";
import SignupForm from "./components/SignupForm";

function Signup() {
  return (
    <Page title="Signup" className="loginPage">
      <div className="loginCtr">
        <SideImage />

        {/* <LoginForm /> */}
        <SignupForm />
      </div>
      <div className="ftr">
        <Footer />
      </div>
    </Page>
  );
}

export default Signup;
