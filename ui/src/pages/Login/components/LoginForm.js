import React, { useState } from "react";
import Input from "../../../components/TextInput/TextInput";
import "../Login.css";
import logo from "../../../assets/SocioBook.svg";
import Button from "../../../components/Buttons/Button";
function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
        {" "}
        Sign in{" "}
      </Button>
      <div className="signupctr">
        Don't have an account ?<span className="forgotpwd">Sign up</span>
      </div>
    </div>
  );
}

export default LoginForm;
