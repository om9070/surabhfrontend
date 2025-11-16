"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { usePathname } from "next/navigation";
import {
  AiOutlineMenuFold,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";

function Navbar() {
  const pathname = usePathname();

  let [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const[count,setCount]=useState(0)

  const handleLinkClick = () => {
    setOpen(false);
  };

 
  const checkUser = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setActive(!!user?.token);
    } catch {
      setActive(false);
    }
  };

  useEffect(() => {
    // Initial check
    checkUser();

    // Listen for "auth" event
    const handleAuth = () => checkUser();
    window.addEventListener("auth", handleAuth);

    // Cleanup
    return () => window.removeEventListener("auth", handleAuth);
  }, []);





    const checkOrder = () => {
    try {
      const user: any[] = JSON.parse(localStorage.getItem("products") || "[]");
      console.log(user,"useruser")
      setCount(user.length);

    } catch {
      setCount(0);
    }
  };

  useEffect(() => {
    // Initial check
    checkOrder();

    // Listen for "auth" event
    const handleAuth = () => checkOrder();
    window.addEventListener("Order", handleAuth);

    // Cleanup
    return () => window.removeEventListener("Order", handleAuth);
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <div className="flex  items-center bg-lightGray top-0 h-[100px] md:gap-20 justify-between w-full pl-20">
          <Search />

          <div className="flex">
            <div className="flex justify-center items-center font-din text-[15px] gap-[63px] md:gap-[30px]">
              <Link href="/">
                <div
                  className={`${
                    pathname === "/"
                      ? "line-through decoration-blue decoration-[3px]"
                      : ""
                  } cursor-pointer`}
                >
                  HOME
                </div>
              </Link>
              <Link href="/forbrands">
                <div
                  className={`${
                    pathname === "/forbrands"
                      ? "line-through decoration-blue decoration-[3px]"
                      : ""
                  } cursor-pointer`}
                >
                  FOR BRANDS
                </div>
              </Link>
              <Link href="/categories">
                <div
                  className={`${
                    pathname === "/categories"
                      ? "line-through decoration-blue decoration-[3px]"
                      : ""
                  } cursor-pointer`}
                >
                  CATEGORIES
                </div>
              </Link>
              <Link href="/brands">
                <div
                  className={`${
                    pathname === "/brands"
                      ? "line-through decoration-blue decoration-[3px]"
                      : ""
                  } cursor-pointer`}
                >
                  BRANDS
                </div>
              </Link>
              <Link href="/stores">
                <div
                  className={`${
                    pathname === "/stores"
                      ? "line-through decoration-blue decoration-[3px]"
                      : ""
                  } cursor-pointer`}
                >
                  STORES
                </div>
              </Link>
              <Link href="/contacts">
                <div
                  className={`${
                    pathname === "/contacts"
                      ? "line-through decoration-blue decoration-[3px]"
                      : ""
                  } cursor-pointer`}
                >
                  CONTACTS
                </div>
              </Link>
              {active ? (
                <Link href="/order">
                  <div
                    className={`${
                      pathname === "/order"
                        ? "line-through decoration-blue decoration-[3px]"
                        : ""
                    } cursor-pointer`}
                  >
                    ORDER
                  </div>
                </Link>
              ) : (
                <Link href="/join">
                  <div
                    className={`${
                      pathname === "/join"
                        ? "line-through decoration-blue decoration-[3px]"
                        : ""
                    } cursor-pointer`}
                  >
                    JOIN
                  </div>
                </Link>
              )}
              <Link href="/bag">
                <div className="flex bg-blue w-[100px] h-[100px] max-w-[100px] max-h-[100px] items-center justify-center">
                  <Image
                    src="/images/icons/bag.png"
                    alt="Logo"
                    width={27}
                    height={32}
                  />
                 {!!count&&<span className="border rounded-xl p-1 bg-red-400 text-cyan-200 mx-2">{count}</span>} 
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-2 w-full justify-between p-5 h-[100px] m-0 md:hidden">
        <div>
          <Image
            src="/images/icons/logo.svg"
            alt="Logo"
            width={52}
            height={42}
          />
        </div>
        <div className="flex gap-4" onClick={() => setOpen(!open)}>
          {open ? (
            <AiOutlineClose
              style={{ width: "32px", height: "32px", fontWeight: "bold" }}
            />
          ) : (
            <>
              <AiOutlineSearch
                style={{ color: "grey", width: "32px", height: "32px" }}
              />
              <AiOutlineMenuFold style={{ width: "52px", height: "42px" }} />
            </>
          )}
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-5 font-din text-center justify-center text-[28px] md:hidden">
          <Link href="/" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              HOME
            </div>
          </Link>
          <Link href="/forbrands" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/forbrands"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              FOR BRANDS
            </div>
          </Link>
          <Link href="/categories" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/categories"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              CATEGORIES
            </div>
          </Link>
          <Link href="/brands" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/brands"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              BRANDS
            </div>
          </Link>
          <Link href="/stores" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/stores"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              STORES
            </div>
          </Link>
          <Link href="/contacts" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/contacts"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              CONTACTS
            </div>
          </Link>
          <Link href="/join" onClick={handleLinkClick}>
            <div
              className={`${
                pathname === "/join"
                  ? "line-through decoration-blue decoration-[3px]"
                  : ""
              } cursor-pointer`}
            >
              JOIN
            </div>
          </Link>

          <div className="flex gap-5 items-center justify-center bg-blue h-[100px] w-full">
            <div>
              <Image
                src="/images/icons/bag.png"
                alt="Logo"
                width={32}
                height={38}
              />
            </div>
            <p className="font-din text-white pt-2">YOUR BAG (0)</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
