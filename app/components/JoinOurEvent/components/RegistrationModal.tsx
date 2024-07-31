'use client'
import { Modal } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage, useFormikContext } from 'formik';
import styles from '@/app/styles/joinOurEvent/registration.module.css';
import RegistrationApi from '@/app/services/api/general_api/registration_api';
import { showToast } from '@/app/components/ToastNotification';
import { validate } from '@/app/validations/registrationValidation';


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

    const handleSubmit = async (values: any, actions: any) => {
        try {
            const response = await RegistrationApi(values);
            console.log("response regit", response)
            // Assuming a successful response contains some specific success message
            if (response?.status === 'success') {
                setMessage("Registration successful!");
                showToast('Registration successful!!', 'success')
                actions.resetForm();
                toggleModal();
            } else {
                setMessage("Registration failed. Please try again.");
                showToast('Registration failed!!', 'warning')
            }

        } catch (error) {
            setMessage("An unexpected error occurred. Please try again.");
            showToast('An unexpected error occurred!!', 'error')
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
            <button type="button" className={`btn btn-outline-success w-50  ps-0 text-center ${styles.register_btn}`} onClick={toggleModal}>Register</button>

            <Modal show={isModalOpen} onHide={toggleModal} centered className='registration_modal_wrapper'>

                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                    <div className="container">
                        <div className="row m-0">
                            <div className={`col-lg-12 ${styles.main_container}`}>
                                <Formik
                                    initialValues={{
                                        first_name: '',
                                        last_name: '',
                                        email: '',
                                        contact_no: '',
                                        organization: '',
                                        venue: '',
                                        gender: ''
                                    }}
                                    validate={validate}
                                    onSubmit={(values, { resetForm }) => {
                                        handleSubmit(values, { resetForm });
                                        console.log("Form values:", values);
                                    }}
                                >
                                    {({ handleChange, handleBlur, values, setFieldValue }) => (
                                        <FormikForm className={`${styles.formik}`}>
                                            <div className={`${styles.signup_wrapper}`}>
                                                <div className="row">
                                                    <div className="col-lg-12 p-0 text-center">
                                                        {/* Add your header or other content here */}
                                                    </div>
                                                    <div className="col-lg-12 p-0">
                                                        {/* First Name */}
                                                        <div className="row mt-3">
                                                            <div className="col-md-6">
                                                                <label className="mb-1 grey">First Name</label>
                                                                <Field
                                                                    name="first_name"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Your First Name"
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
                                                            {/* Last Name */}
                                                            <div className="col-md-6">
                                                                <label className="mb-1 grey">Last Name</label>
                                                                <Field
                                                                    name="last_name"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Your Last Name"
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

                                                        {/* Email */}
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <label className="mb-1 grey">Email</label>
                                                                <Field
                                                                    name="email"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Your Email"
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

                                                            {/* Mobile Number */}
                                                            <div className="col-md-6">
                                                                <label className="mb-1 grey">Mobile Number</label>
                                                                <Field
                                                                    name="contact_no"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Your Mobile Number"
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

                                                        {/* Organization */}
                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <label className="mb-1 grey">Organization</label>
                                                                <Field
                                                                    name="organization"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Your Organization"
                                                                    autoComplete="off"
                                                                />
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className={styles.error_msg}>
                                                                            <ErrorMessage name="organization" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Venue */}
                                                            <div className="col-md-6">
                                                                <label className="mb-1 grey">Select Venue</label>
                                                                <Field as="select" name="venue" className="form-select" aria-label="Default select example">
                                                                    <option value="">Select</option>
                                                                    <option value="Mumbai 24 July 2024">Mumbai 24 July 2024</option>
                                                                    <option value="Pune 24 July 2024">Pune 24 July 2024</option>
                                                                    <option value="Delhi 24 July 2024">Delhi 24 July 2024</option>
                                                                </Field>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className={styles.error_msg}>
                                                                            <ErrorMessage name="venue" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Gender */}
                                                        <div className="row mt-3">
                                                            <div className="col-md-12 mt-3 d-flex">
                                                                <label className="mb-1 grey">Select Gender</label>
                                                                <div className="form-check ms-3">
                                                                    <Field
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="Others"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label text-secondary">Non Binary</label>
                                                                </div>
                                                                <div className="form-check ms-3">
                                                                    <Field
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="Female"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label text-secondary">Female</label>
                                                                </div>
                                                                <div className="form-check ms-3">
                                                                    <Field
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="Male"
                                                                        className="form-check-input"
                                                                    />
                                                                    <label className="form-check-label text-secondary">Male</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className={styles.error_msg}>
                                                                    <ErrorMessage name="gender" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`mt-5 pt-2 ${isAlertVisible ? "login_btn" : ""} mt-3 mb-3 text-center p-0`}>
                                                        <button type="submit" className={`btn ${styles.btn_sign_up}`}>
                                                            Register
                                                        </button>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
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



