"use client";
import "./globals.css";

import { usePathname } from "next/navigation";
import Sidebar from "./components/menus/Sidebar";
import Navbar from "./components/menus/navbar/Navbar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "@/app/components/ui/toaster";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isCustomRoute = pathname.startsWith("/custom");

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col overflow-x-hidden">
            {!isCustomRoute && (
              <div className="self-start hidden md:block">
                <Sidebar />
              </div>
            )}
            <div
              className={`flex flex-col ${
                !isCustomRoute ? "ml-0 md:ml-[122px]" : ""
              }`}
            >
              {!isCustomRoute && <Navbar />}
              {children}
              {!isCustomRoute && <Footer />}
            </div>
          </div>
          <Toaster />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </QueryClientProvider>
      </body>
    </html>
  );
}
