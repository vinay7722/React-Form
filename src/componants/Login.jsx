import React from "react";
import { Formik, Form, Field } from "formik";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componants/Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        if (values.email === "admin@gmail.com" && values.password === "admin") {
          history.push("/homepage");
        } else {
          alert("please enter a validate username and password");
        }
      }}
    >
      <Form>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: 1 }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <Field
                          //className=""
                          id="email"
                          name="email"
                          placeholder="jane@acme.com"
                          type="email"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <Field
                          //className=""
                          id="password"
                          name="password"
                          placeholder="enter password"
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Form>
    </Formik>
  );
};

export default Login;
