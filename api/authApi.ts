import { UserRegistration } from "../types/auth";
import { apiRequest } from "@/lib/utils";

// Sign In API
export const signIn = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  return await apiRequest("POST", "/api/token/", data);
};

// // Register API
// export const register = async (data: UserRegistration) => {
//     return await apiRequest('POST', '/api/account/create/', data);
// };

export const register = async (data: UserRegistration): Promise<any> => {
  // const formData = new FormData();

  // // Always append required fields
  // formData.append('firstName', data.first_name);
  // formData.append('lastName', data.last_name);
  // formData.append('email', data.email);
  // formData.append('password', data.password);
  // formData.append('password', data.user_type);
  // formData.append('role', "user");

  const bodyData = {
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    password: data.password,
    userType: data.user_type, // ✅ fixed: you were appending this under 'password'
    role: "user",
  };

  // // Append optional fields only for "Brand"
  // if (data.user_type === "Brand") {
  //   if (data.brand_name) {
  //     formData.append("brand_name", data.brand_name);
  //   }
  //   if (data.profile_pic) {
  //     formData.append("profile_pic", data.profile_pic);
  //   }
  // }

  // Make the API request
  return await apiRequest("POST", "/v1/register", JSON.stringify(bodyData));
};

// Request Password Reset API
export const requestPasswordReset = async (email: string) => {
  return await apiRequest("POST", "/api/account/forget-password/", { email });
};

// Reset Password API
export const resetPassword = async (data: {
  newPassword: string;
  confirmPassword: string;
  uid: string;
  token: string;
}) => {
  const transformedData = {
    new_password: data.newPassword,
    confirm_password: data.confirmPassword,
    token: data.token,
    uid: data.uid,
  };

  return await apiRequest(
    "POST",
    "/api/account/reset-password/",
    transformedData
  );
};

// Verify Code API
export const verify = async (code: string) => {
  return await apiRequest("POST", "/api/account/verify-email/", { code });
};

// Resend Email
export const resend = async (email: string) => {
  return await apiRequest("POST", "/api/account/resend-email/", { email });
};
