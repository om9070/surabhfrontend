"use client"
import { EmailVerificationForm } from '../components/forms/emailVerificationForm';
import { useAuthStore } from '@/hooks/useAuthStore';



const EmailVerificationPage = () => {
    const user = useAuthStore((state: any) => state);
    console.log(user);

    return <EmailVerificationForm />;
};

export default EmailVerificationPage;
