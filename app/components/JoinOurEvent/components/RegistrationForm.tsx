import React, { useEffect, useState } from "react";
import {
  Formik,
  Form as FormikForm,
  ErrorMessage,
  useFormikContext,
} from "formik";
import { Form } from "react-bootstrap";

import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import styles from '@/styles/Auth/signup.module.css';
import { signUpValidation } from "@/app/validations/signUpValidation";
// import RegistrationApi from "@/services/api/auth_api/signup_api";
import styles from '@/app/styles/joinOurEvent/registration.module.css'
import RegistrationApi from '@/app/services/api/general_api/registration_api'
import { showToast } from "@/app/components/ToastNotification"
import { validate } from '@/app/validations/registrationValidation';

const RegistrationForm = ({ setIsModalOpen, setIsModalLoginOpen, closeCanvas }: any) => {
  const [message, setMessage] = useState("");
  const [newValue, setNewValue] = useState<any>("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [isLoginModalShow, setIsLoginModalShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  let handleSubmit = async (values: any) => {
    try {
      const response = await RegistrationApi(values);
      console.log("response regit", response)
      // Assuming a successful response contains some specific success message
      if (response?.status === 'success') {
        setMessage("Registration successful!");
        showToast('Registration successful!!', 'success')

      } else {
        setMessage("Registration failed. Please try again.");
        showToast('Registration failed!!', 'warning')
      }

    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
      showToast('An unexpected error occurred!!', 'error')
    }
  };

  const onKeydown = (keyEvent: any) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
      handleSubmit(newValue);
    }
  };

  const FormObserver: React.FC = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      setNewValue(values);
    }, [values]);
    return null;
  };
  return (

    <div className="container">
      <div className="row m-0">
        <div className={` col-lg-12 ${styles.main_container}`}>
          <Formik
            initialValues={{
              first_name: "",
              last_name: '',
              email: '',
              contact_no: '',
              password: "",
            }}
            validate={validate}
            onSubmit={(values) => {
              handleSubmit(values);
              console.log("Form values:", values);
            }}
            className='formik'
          >
            {({ handleChange, handleBlur }) => (
              <FormikForm className={`${styles.formik}`}>
                <div className={`${styles.signup_wrapper}`}>
                  <div className="row">
                    <div className="col-lg-12 p-0 text-center">
                      {/* <p className={styles.signup_header}>
                        Sign up
                      </p> */}
                    </div>
                    <div className="col-lg-12 p-0">

                      {/* first name */}
                      <Form.Group controlId="formName">
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label className="mb-1 grey">
                              First Name
                            </label>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              name="first_name"
                              className="login_inputs w-100"
                              onKeyDown={onKeydown}
                              placeholder='Enter Your First Name'
                              required
                              autoComplete="off"
                            />
                            <div className="row">
                              <div className="col-12">
                                <div className={styles.error_msg}>
                                  <ErrorMessage name="first_name" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* last name */}
                          <div className="col-md-6">
                            <label className="mb-1 grey">
                              Last Name
                            </label>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              name="last_name"
                              className="login_inputs w-100"
                              onKeyDown={onKeydown}
                              placeholder='Enter Your Last Name'
                              required
                              autoComplete="off"
                            />
                            <div className="row">
                              <div className="col-12">
                                <div className={styles.error_msg}>
                                  <ErrorMessage name="last_name" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form.Group>

                      <Form.Group controlId="formName">
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <label className="mb-1 grey">
                              Email
                            </label>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              name="email"
                              className="login_inputs w-100"
                              onKeyDown={onKeydown}
                              placeholder='Enter Your Email'
                              required
                              autoComplete="off"
                            />
                            <div className="row">
                              <div className="col-12">
                                <div className={styles.error_msg}>
                                  <ErrorMessage name="email" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* mobile no */}

                          <div className="col-md-6">
                            <label className="mb-1 grey">
                              Mobile Number
                            </label>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              name="contact_no"
                              className="login_inputs w-100"
                              onKeyDown={onKeydown}
                              placeholder='Enter Your Mobile Number'
                              required
                              autoComplete="off"
                            />
                            <div className="row">
                              <div className="col-12">
                                <div className={styles.error_msg}>
                                  <ErrorMessage name="contact_no" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group controlId="formGender">
                        <div className="row mt-3">
                          <div className="col-md-12 mt-3 d-flex">
                            <label className="mb-1 grey">Select Gender</label>
                            <div className="form-check ms-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={handleChange}
                              />
                              <label className="form-check-label text-secondary">Male</label>
                            </div>
                            <div className="form-check ms-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleChange}
                              />
                              <label className="form-check-label text-secondary">Female</label>
                            </div>
                            <div className="form-check ms-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Others"
                                onChange={handleChange}
                              />
                              <label className="form-check-label text-secondary">Others</label>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className={styles.error_msg}>
                                  <ErrorMessage name="gender" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    {/* <div className="col-md-6 mt-4 d-flex">
                      <label className="mb-1 grey">
                        Select Gender :
                      </label>
                      <div className="form-check ms-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label text-secondary" htmlFor="flexRadioDefault1">
                          Male
                        </label>
                      </div>
                      <div className="form-check ms-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label text-secondary" htmlFor="flexRadioDefault2">
                          Female
                        </label>
                      </div>

                      <div className="form-check ms-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label text-secondary" htmlFor="flexRadioDefault3">
                          others
                        </label>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className={styles.error_msg}>
                            <ErrorMessage name="confirm_password" />
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div
                      className={`mt-5 pt-2 ${isAlertVisible === true ? "login_btn" : ""
                        } mt-3 mb-3 text-center p-0 `}
                    >
                      <button
                        type="submit"
                        className={` btn ${styles.btn_sign_up}`}
                      >
                        Register
                      </button>
                      <br />
                    </div>

                    {/* <div className="text-center">
                      <p>
                        <span className="grey fs-16 fw-400 lh-24">
                          Have an account?
                        </span>{" "}
                        <span>
                          <button

                            className={styles.forget_password}
                            onClick={() => {
                              setIsModalLoginOpen(true)
                              setIsModalOpen(false)
                            }}
                          >
                            Login Here
                          </button>
                        </span>
                      </p>
                    </div> */}
                  </div>
                </div>
                <FormObserver />
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>


  );
};

export default RegistrationForm;
