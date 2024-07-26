import * as Yup from 'yup';
export const signUpValidation = Yup.object().shape({
  first_name: Yup.string()
    .required('Name is a required field')
    .min(5, 'Name must be atleast 5 characters'),
  last_name: Yup.string()
    .required('Name is a required field')
    .min(5, 'Name must be atleast 5 characters'),
  email: Yup.string().email().required('Please enter valid email'),
  contact_no: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .min(10)
    .max(10)
    .required('A phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string()
    .required('gender is a required field')
    
});
