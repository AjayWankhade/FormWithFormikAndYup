import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

function Registration() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, touched,errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  console.log(errors);

  return (
    <div>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ "border-radius": "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="name">
                          Your Name
                        </label>
                        {errors.name && touched.name? (
                        <p className="form-error">{errors.name}</p>):null}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="email">
                          Your Email
                        </label>
                        {errors.email && touched.email? (
                        <p className="form-error">{errors.email}</p>):null}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="password">
                          Password
                        </label>
                        {errors.password && touched.password? (
                        <p className="form-error">{errors.password}</p>):null}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="confirmPassword">
                          confirmPassword
                        </label>
                        {errors.confirmPassword && touched.confirmPassword? (
                        <p className="form-error">{errors.confirmPassword}</p>):null}
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          name="checkbox"
                          value={values.checkbox}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="checkbox"
                        />
                        <label className="form-check-label" for="checkbox">
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
