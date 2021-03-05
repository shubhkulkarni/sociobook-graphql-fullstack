import React from "react";
import LoginForm from "./components/LoginForm";
import SideImage from "./components/SideImage";
import "./Login.css";
import Page from "../../components/Page/Page";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <Page title="Login" className="loginPage">
      <div className="loginCtr">
        <SideImage />

        <LoginForm />
      </div>
      <div className="ftr">
        <Footer />
      </div>
    </Page>
  );
}

export default Login;