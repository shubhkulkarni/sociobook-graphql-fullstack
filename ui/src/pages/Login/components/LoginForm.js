import React, { useState } from "react";
import Input from "../../../components/TextInput/TextInput";
import "../Login.css";
import logo from "../../../assets/SocioBook.svg";
import Button from "../../../components/Buttons/Button";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { loginMutation } from "../../../graphql/mutations";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useDispatch } from "react-redux";
import { setAuth } from "./../../../redux/actions/userActions";
import { decodeJWT } from "./../../../utils/decodeJWT";
function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [err, setErr] = useState([]);
  const [loginHandler, { loading, error }] = useMutation(loginMutation);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (!e.target.value) {
      setErr([...err, e.target.name]);
    } else {
      setErr(err.filter((i) => i !== e.target.name));
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signIn = async () => {
    const { email, password } = formData;
    const dataList = Object.entries(formData);
    const errList = dataList
      .map((item) => {
        if (!item[1].trim()) {
          return item[0];
        }
        return null;
      })
      .filter(Boolean);

    setErr([...errList]);

    try {
      if (!errList.length) {
        const resp = await loginHandler({ variables: { email, password } });

        NotificationManager.success("Login successfull!");
        localStorage.setItem("authToken", resp.data.login.accessToken);
        const userId = decodeJWT(resp.data.login.accessToken).id;
        dispatch(setAuth({ authentication: true, userId }));
        history.push("/home");
      }
    } catch (e) {
      NotificationManager.error(e.message);
    }
  };

  return (
    <div className="loginForm">
      <div className="logo">
        <img src={logo} alt="logo" className="logoImg" />
      </div>

      <Input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        type="email"
        error={err.includes("email")}
      />

      <Input
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        type="password"
        error={err.includes("password")}
      />
      <div className="forgotpwd">Forgot password ?</div>
      <Button type="primary" onClick={signIn}>
        {loading ? "Siging in ..." : "Sign in"}
      </Button>
      <div className="signupctr">
        Don't have an account ?
        <span>
          <Link className="forgotpwd" to="/signup">
            Sign up
          </Link>
        </span>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default LoginForm;
