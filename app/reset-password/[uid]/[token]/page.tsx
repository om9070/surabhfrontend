
// import { NewPasswordForm } from '../components/forms/newPasswordForm';

// const ForgotPasswordPage = () => {
//     return <NewPasswordForm />;
// };

// export default ForgotPasswordPage;



import { NewPasswordForm } from "@/app/components/forms/newPasswordForm";
import { notFound } from 'next/navigation';

interface Params {
  uid: string;
  token: string;
}

const ResetPasswordPage = ({ params }: { params: Params }) => {
  const { uid, token } = params;

  if (!uid || !token) {
    notFound(); 
  }

  return <NewPasswordForm uid={uid} token={token} />;
};

export default ResetPasswordPage;

