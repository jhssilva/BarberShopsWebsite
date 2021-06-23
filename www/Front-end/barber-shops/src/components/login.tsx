import React, { Component } from "react";
import "./css/login.css";
import NavBar from "./common/navbar";
import Footer from "./common/footer";

const renderTags = () => {
  return (
    <body className="text-center bg-white">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </body>
  );
};

export interface LoginProps {}

export interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  state = { teste: "" };
  render() {
    return (
      <div>
        <NavBar />
        {renderTags()}
        <Footer />
      </div>
    );
  }
}

export default Login;
