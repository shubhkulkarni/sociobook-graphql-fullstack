import React, { useState } from "react";
import Input from "../../../components/TextInput/TextInput";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "../Login.css";
import logo from "../../../assets/SocioBook.svg";
import Button from "../../../components/Buttons/Button";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { signupMutation } from "../../../graphql/mutations";
import { decodeJWT } from "./../../../utils/decodeJWT";
import { setAuth } from "./../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState([]);
  const [signupHandler, { loading }] = useMutation(signupMutation);
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

  const signUp = async () => {
    const { email, password, name, confirmPassword } = formData;
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
    if (!errList.length) {
      try {
        console.log({
          ...formData,
          email: formData.email.trim().toLowerCase(),
        });
        const resp = await signupHandler({
          variables: { email, password, confirmPassword, name },
        });
        NotificationManager.success("Signup successfull!");
        localStorage.setItem("authToken", resp.data.signup.accessToken);
        const userId = decodeJWT(resp.data.signup.accessToken).id;
        dispatch(setAuth({ authentication: true, userId }));
        history.push("/home");
      } catch (e) {
        NotificationManager.error(e.message);
      }
    }
  };

  return (
    <div className="loginForm">
      <div className="logo">
        <img src={logo} alt="logo" className="logoImg" />
      </div>

      <Input
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
        type="text"
        error={err.includes("name")}
      />
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
      <Input
        placeholder="Confirm password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
        type="password"
        error={err.includes("confirmPassword")}
      />

      <Button type="primary" onClick={signUp}>
        {loading ? "Signing up..." : "Sign up"}
      </Button>
      <div className="signupctr">
        Already have an account ?
        <span className="forgotpwd">
          <Link to="/login" className="forgotpwd">
            Login
          </Link>
        </span>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default SignupForm;
