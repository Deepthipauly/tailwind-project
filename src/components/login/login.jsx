import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("enter valid email")
        .required("email is Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
          "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),

    onSubmit: async (values) => {
      dispatch(loginUser({ email: values.email, password: values.password }));
      navigate("/");
    },
  });

  return (
    <section className="bg-gray-100">
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
          <div>
            <form
              className="flex flex-col space-y-4"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label htmlFor="" className="text-cyan-300 mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="text-cyan-800 font-serif ring-1 ring-gray-200 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-white-200"
                />
              </div>
              <div className="text-red-300">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label htmlFor="" className="text-cyan-300 mb-1 font-medium">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="********"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="text-cyan-800 font-serif ring-1 ring-gray-200 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-white-200"
                />
              </div>

              <div className="text-red-300">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="ring-1 ring-gray-200 rounded p-2  text-white font-medium hover:ring-teal-200 hover:ring-2"
                >
                  Submit
                </button>
              </div>
              <div>
                <p>
                  {" "}
                  Don't have an Account?
                  <span href="">
                    <Link
                      to={"/auth/register"}
                      className="text-cyan-300 mx-1 font-medium"
                    >
                      Register here
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
