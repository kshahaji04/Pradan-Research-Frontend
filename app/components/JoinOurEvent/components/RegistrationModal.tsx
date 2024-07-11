'use client'
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';
import styles from '@/app/styles/joinOurEvent/registration.module.css'
import { useRouter } from 'next/navigation';
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

import { signUpValidation } from "@/app/validations/signUpValidation";




const RegistrationModal = () => {

    const [message, setMessage] = useState("");
    const [newValue, setNewValue] = useState<any>("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loginAlert, setLoginAlert] = useState(false);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    let handleSubmit = async (values: any) => {

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
        <>
            <button type="button" className={`ps-0 text-start ${styles.register_btn}`} onClick={toggleModal}>Register</button>

            <Modal show={isModalOpen} onHide={toggleModal} centered className='registration_modal_wrapper'>

                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                    <div className="container">
                        {/* <p className={styles.register_btn}>subscribe</p> */}
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
                                    validationSchema={signUpValidation}
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
                                                        <p className={styles.signup_header}>
                                                            Registration Form
                                                        </p>

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
                                                            <div className="row mt-3">
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
                                                        <Form.Group controlId="formPassword">
                                                            <div className="row mt-3">
                                                                <div className="col-md-6">
                                                                    <label className="mb-1 grey">
                                                                        Password
                                                                    </label>
                                                                    <TextField
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        type={showPassword ? "text" : "password"} // Toggle password visibility
                                                                        name="password"
                                                                        className="login_inputs w-100"
                                                                        onKeyDown={onKeydown}
                                                                        placeholder='Enter Your Password'
                                                                        required
                                                                        autoComplete="off"
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                    <IconButton
                                                                                        onClick={togglePasswordVisibility}
                                                                                    >
                                                                                        {showPassword ? (
                                                                                            <VisibilityIcon />
                                                                                        ) : (
                                                                                            <VisibilityOffIcon />
                                                                                        )}
                                                                                    </IconButton>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                    />
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className={styles.error_msg}>
                                                                                <ErrorMessage name="password" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* confirm pass */}
                                                                <div className="col-md-6">
                                                                    <label className="mb-1 grey">
                                                                        Confirm Password
                                                                    </label>
                                                                    <TextField
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
                                                                        name="confirm_password"
                                                                        className="login_inputs w-100"
                                                                        onKeyDown={onKeydown}
                                                                        placeholder='Confirm Your Password'
                                                                        required
                                                                        autoComplete="off"
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                    <IconButton
                                                                                        onClick={toggleConfirmPasswordVisibility}
                                                                                    >
                                                                                        {showConfirmPassword ? (
                                                                                            <VisibilityIcon />
                                                                                        ) : (
                                                                                            <VisibilityOffIcon />
                                                                                        )}
                                                                                    </IconButton>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                    />
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className={styles.error_msg}>
                                                                                <ErrorMessage name="confirm_password" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* gender */}
                                                                <div className="col-md-6 mt-3">
                                                                    <label className="mb-1 grey">
                                                                        Select Gender
                                                                    </label>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                            Male
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                            Female
                                                                        </label>
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className={styles.error_msg}>
                                                                                <ErrorMessage name="confirm_password" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Form.Group>




                                                    </div>

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

                                                </div>
                                            </div>
                                            <FormObserver />
                                        </FormikForm>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>

    );
};

export default RegistrationModal;
