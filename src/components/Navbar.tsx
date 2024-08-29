"use client";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Navbar() {
  // State to check if the navbar is active
  const [isActive, setIsActive] = useState(false);

  // useEffect to handle scroll event on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsActive(window.scrollY > 100);
      };

      // Event listener to check if the window is scrolled
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`flex content-center justify-center sticky top-0 w-full h-20 ${
        isActive ? "active" : "bg-transparent"
      } items-center px-5`}
    >
      {/* left logo and links container */}
      <div className="flex space-x-5 text-white items-center w-3/4 justify-around">
        <h1 className="text-4xl px-5 uppercase">Logo</h1>
        <NavLinks />
      </div>
      {/* Right button */}
      <div className="flex items-center w-1/4">
        <Button
          buttonStyle="btn--nav"
          buttonSize="btn--medium"
          type="button"
          onClick={() => console.log("Contact button clicked")}
          text="Contact"
        />
      </div>
    </nav>
  );
}
