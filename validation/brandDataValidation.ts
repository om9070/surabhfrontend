import * as Yup from "yup";

export const brandDataValidationSchema = Yup.object({
  brand_name: Yup.string()
    .max(255, "Brand name cannot exceed 255 characters")
    .required("Brand name is required"),

  brand_city: Yup.string()
    .max(255, "City cannot exceed 255 characters")
    .nullable(),

  brand_zip_code: Yup.string()
    .max(100, "Zip code cannot exceed 100 characters")
    .nullable(),

  brand_pic: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Picture name is required"),
      })
    )
    .nullable(),

  brand_description: Yup.string()
  .max(255, " brand description cannot exceed 255 characters")
  .nullable(),

  brand_address: Yup.string()
  .max(255, "address cannot exceed 255 characters")
  .nullable(),

  brand_state: Yup.string()
    .max(255, "State cannot exceed 255 characters")
    .nullable(),
  brand_country: Yup.string()
    .max(255, "Country cannot exceed 255 characters")
    .nullable(),

  brand_logo: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Logo name is required"),
      })
    )
    .nullable(),

  // email: Yup.string()
  //   .email("Invalid email format")
  //   .max(255, "Email cannot exceed 255 characters")
  //   .required("Email is required"),
});
