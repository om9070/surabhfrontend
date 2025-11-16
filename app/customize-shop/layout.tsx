"use client"

import CustomSidebar from "../components/menus/shopbuilder/sidebar";
import CustomNavbar from "../components/menus/shopbuilder/navbar";
import Footer from "../components/Footer";
import ShopSidebar from "../components/menus/shopbuilder/shop-sidebar";
import { usePathname } from "next/navigation";


export default function CustomizeShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  // Check if the route starts with '/custom'
  const isCustomizeRoute = pathname.startsWith('/customize-shop/customize');


  return (
    <html lang="en">
      <body>
        <div className="flex flex-col overflow-x-hidden">
          <div className="self-start hidden md:block">
          {isCustomizeRoute ? <CustomSidebar /> : <ShopSidebar />}
          </div>
          <div className="flex flex-col ml-0 md:ml-[244px]">
            <CustomNavbar />
            <div>{children}</div>
          </div>
        </div>
        <div className="ml-0 md:ml-[122px]">
        <Footer/>
        </div>
      </body>
    </html>
  );
}