import * as Yup from "yup";

export const userDataValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .max(255, "Email cannot exceed 255 characters")
    .required("Email is required"),

  first_name: Yup.string()
    .max(255, "First name cannot exceed 255 characters")
    .required("First name is required"),

  last_name: Yup.string()
    .max(255, "Last name cannot exceed 255 characters")
    .required("Last name is required"),

  country: Yup.string()
    .max(255, "Country cannot exceed 255 characters")
    .required("Shop country is required"),

  state: Yup.string()
    .max(255, "State cannot exceed 255 characters")
    .required("Shop state is required"),

  city: Yup.string()
    .max(255, "City cannot exceed 255 characters")
    .required("Shop city is required"),

  dob: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Date of birth must be in YYYY-MM-DD format"
    )
    .required("Date of birth is required"),
});
