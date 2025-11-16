import { useMutation } from 'react-query';
import { signIn, register, requestPasswordReset, resetPassword, resend, verify } from '../api/authApi';
import { useAuthStore } from './useAuthStore';



export const useSignInMutation = () => {

    const setToken = useAuthStore((state) => state.setToken);
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation(signIn, {
        onSuccess: (response) => {
            if (response?.isSuccessful) {
                console.log('Setting token:', response?.access);
                setToken(response?.access);

                const user = response?.data?.user;
                if (user?.user_type === "Brand") {
                    console.log('Setting Brand user:', user);
                    setUser({ ...user, brand: user.brand });
                } else if (user?.user_type === "Shop") {
                    console.log('Setting Shop user:', user);
                    setUser({ ...user, shop: user.shop });
                } else if (user?.user_type === "Consumer") {
                    console.log('Setting Consumer user:', user);
                    setUser(user);
                }
            } else {
                throw new Error(response.message);
            }
        },
        onError: (error) => {
            console.error('Sign in failed:', error);
        },
    });
};


export const useRegisterMutation = () => {

    return useMutation(register, {
        onSuccess: (response) => {
            const responseData = response.data;
            console.log('Registration succeeded:', responseData);
        },
        onError: (error: any) => {
            console.error("An error occurred during registration:", error);
        },
    });
};



export const useRequestPasswordResetMutation = () => {
    return useMutation(requestPasswordReset, {
        onSuccess: (response) => {
            const responseData = response.data;
            if (responseData.success === "False") {
                throw new Error(responseData.message);
            } else {
                console.log('Request succeeded:', responseData);
            }
        },
        onError: (error) => {
            console.error("Error sending password reset link:", error);
        },
    });
};

export const useResetPasswordMutation = () => {
    const setToken = useAuthStore((state) => state.setToken);

    return useMutation(resetPassword, {
        onSuccess: (response) => {
            if (response?.data?.isSuccessful) {
                console.log('Password reset successful');
                setToken(response.data.token); 
            } else {
                console.error('Unexpected response:', response);
                throw new Error(response?.data?.message || 'Password reset failed.');
            }
        },
        onError: (error) => {
            console.error('Error resetting password:', error);
        },
    });
};


export const useVerifyEmailMutation = () => {

    return useMutation(verify, {
        onSuccess: (response) => {
            const responseData = response.data;
            console.log('Email Verification succeeded:', responseData);
        },
        onError: (error: any) => {
            console.error("Unable to verify:", error);
        },
    });
};

export const useResendEmailMutation = () => {

    return useMutation(resend, {
        onSuccess: (response) => {
            const responseData = response.data;
            console.log('Code sent to your email successfully:', responseData);
        },
        onError: (error: any) => {
            console.error("Unable to send code:", error);
        },
    });
};


