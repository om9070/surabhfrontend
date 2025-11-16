import * as Yup from 'yup'
export const shopDataValidationSchema = Yup.object({
    shop_images: Yup.array()
    .of(
        Yup.mixed()
            .test("fileType", "Invalid file type", (value) =>
                value instanceof File
            )
            .required("An image file is required")
    )
    .min(1, "At least one image is required"),

    shop_name: Yup.string()
        .max(255, 'Shop name cannot exceed 255 characters')
        .required(),
        

    shop_type: Yup.string()
        .required()
        .oneOf(['Public', 'Private'], 'Invalid shop type'),

    shop_description: Yup.string()
        .required(),

    shop_address: Yup.string().required(),

    shop_country: Yup.string()
        .max(255, 'Country cannot exceed 255 characters')
        .required(),

    shop_state: Yup.string()
        .max(255, 'State cannot exceed 255 characters')
        .required(),

    shop_city: Yup.string()
        .max(255, 'City cannot exceed 255 characters')
        .required(),

    shop_zip_code: Yup.string()
        .max(100, 'Zip code cannot exceed 100 characters')
        .required(),

    shop_brand: Yup.number()
        .integer('Shop brand ID must be an integer')
        .nullable(),
})