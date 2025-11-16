import { useMutation } from "react-query";
import {
    signIn,
    register,
    requestPasswordReset,
    resetPassword,
    resend,
    verify,
} from "../api/authApi";
import useStore from "@/stores"; 

export const useSignInMutation = () => {
    const login = useStore((state) => state.login);

    return useMutation(signIn, {
        onSuccess: (response) => {
            if (response?.isSuccessful) {
                console.log("Login successful. Setting user and token:", response);

                const { access, data } = response;
                const { user } = data || {};

                if (user) {
                    login(
                        {
                            ...user,
                            ...(user.user_type === "Brand" && { brand: user.brand }),
                            ...(user.user_type === "Shop" && { shop: user.shop }),
                        },
                        access
                    );
                } else {
                    console.error("Invalid user data:", response);
                }
            } else {
                console.error("Login failed with message:", response?.message);
                throw new Error(response?.message || "Login failed");
            }
        },
        onError: (error) => {
            console.error("Sign in failed:", error);
        },
    });
};

export const useRegisterMutation = () => {
    return useMutation(register, {
        onSuccess: (response) => {
            console.log("Registration succeeded:", response?.data || response);
        },
        onError: (error) => {
            console.error("Registration failed:", error);
        },
    });
};

export const useRequestPasswordResetMutation = () => {
    return useMutation(requestPasswordReset, {
        onSuccess: (response) => {
            const responseData = response?.data;
            if (responseData?.success === "False") {
                throw new Error(responseData.message);
            } else {
                console.log("Password reset link request succeeded:", responseData);
            }
        },
        onError: (error) => {
            console.error("Error sending password reset link:", error);
        },
    });
};

export const useResetPasswordMutation = () => {
    const login = useStore((state) => state.login);

    return useMutation(resetPassword, {
        onSuccess: (response) => {
            const responseData = response?.data;
            if (responseData?.success === "False") {
                throw new Error(responseData.detail);
            } else {
                console.log("Password reset successful. Logging in user:", responseData);

                // Log in the user after resetting the password
                login(responseData.user, responseData.token);
            }
        },
        onError: (error) => {
            console.error("Error resetting password:", error);
        },
    });
};

export const useVerifyEmailMutation = () => {
    return useMutation(verify, {
        onSuccess: (response) => {
            console.log("Email verification succeeded:", response?.data || response);
        },
        onError: (error) => {
            console.error("Email verification failed:", error);
        },
    });
};

export const useResendEmailMutation = () => {
    return useMutation(resend, {
        onSuccess: (response) => {
            console.log("Verification code resent successfully:", response?.data || response);
        },
        onError: (error) => {
            console.error("Failed to resend verification code:", error);
        },
    });
};
