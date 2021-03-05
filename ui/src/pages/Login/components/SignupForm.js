import React, { useState } from "react";
import Input from "../../../components/TextInput/TextInput";
import "../Login.css";
import logo from "../../../assets/SocioBook.svg";
import Button from "../../../components/Buttons/Button";
import { Link } from "react-router-dom";
function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState([]);
  const handleChange = (e) => {
    if (!e.target.value) {
      setErr([...err, e.target.name]);
    } else {
      setErr(err.filter((i) => i !== e.target.name));
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signIn = () => {
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
    console.log({ ...formData, email: formData.email.trim().toLowerCase() });
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

      <Button type="primary" onClick={signIn}>
        {" "}
        Sign up{" "}
      </Button>
      <div className="signupctr">
        Already have an account ?
        <span className="forgotpwd">
          <Link to="/home" className="forgotpwd">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignupForm;
