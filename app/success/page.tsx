"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PaymentSuccess: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Redirect to home page
    localStorage.removeItem("products");
     window.dispatchEvent(new Event("Order"));

  };

  useEffect(() => {
    // Trigger handleGoHome after 5 seconds
    const timer = setTimeout(() => {
      handleGoHome();
    }, 3000);

    // Cleanup if component unmounts before 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
