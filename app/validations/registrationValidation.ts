export const validate = (values: any) => {
    const errors: any = {};

    if (!values.first_name) {
        errors.first_name = "First name is required";
    } else if (values.first_name.length < 2) {
        errors.first_name = "First name must be at least 2 characters";
    }

    if (!values.last_name) {
        errors.last_name = "Last name is required";
    } else if (values.last_name.length < 2) {
        errors.last_name = "Last name must be at least 2 characters";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!/^\d{10}$/.test(values.mobile_no)) {
        errors.mobile_no = "Contact number must be 10 digits";
    }

    if (!values.gender) {
        errors.gender = "Gender is required";
    }
    // if (!values.vanue) {
    //     errors.vanue = "Venue is required";
    // }

    return errors;
};