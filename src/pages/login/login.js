import React from "react";
import Card from "../../components/card/card";
import Input from "../../components/UI/Input/Input";

const Login = (props) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    props.onLogin(true);
  };

  return (
    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <Card>
            <div className="card-body p-4">
              <div className="text-center py-4">
                <a href="index.html" className="app-brand-link gap-2">
                  {/* ICON */}
                  <span className="app-brand-text demo text-body fw-bolder">
                    MY PROJECT
                  </span>
                </a>
              </div>

              <form
                onSubmit={onSubmitHandle}
                id="formAuthentication"
                className="mb-3"
                action="index.html"
                method="POST"
              >
                <Input label="email" type="email" placeholder="sss" />
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    {/* <a href="auth-forgot-password-basic.html">
                                            <small>Forgot Password?</small>
                                        </a> */}
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                {/* <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="remember-me" />
                                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                                    </div>
                                </div> */}
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              {/* <p className="text-center">
                                <span>New on our platform?</span>
                                <a href="auth-register-basic.html">
                                    <span>Create an account</span>
                                </a>
                            </p> */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
