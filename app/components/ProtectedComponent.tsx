"use client";

import { useRouter } from "next/navigation";
import useStore from "@/stores";
import { useEffect } from "react";

interface ProtectedComponentProps {
    children: React.ReactNode;
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ children }) => {
    const router = useRouter();
    const token = useStore((state) => state.token);

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token, router]);

    if (!token) {
        return <div>Redirecting to login...</div>;
    }

    return <>{children}</>;
};

export default ProtectedComponent;
