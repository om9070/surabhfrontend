import * as Yup from 'yup';


export const signInValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});




export const registerValidationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required."),
    last_name: Yup.string().required("Last name is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
    user_type: Yup.string()
      .oneOf(["Consumer", "Shop", "Brand"], "Invalid user type")
      .required("User type is required."),
    profile_pic: Yup.mixed().nullable(),
    brand_name: Yup.string().when("user_type", {
      is: "Brand", // Only apply validation if user_type is "Brand"
      then: (schema) => schema.required("Brand name is required."),
      otherwise: (schema) => schema.strip(), // Remove `brand_name` for non-`Brand`
    }),
  });
  



export const newPasswordValidationSchema = Yup.object({
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters long').required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
});


export const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

export const emailVerificationValidationSchema = Yup.object({
    code: Yup.string().required('Password is required'),
}); 
