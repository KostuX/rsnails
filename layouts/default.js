import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import { Analytics } from '@vercel/analytics/next';

import { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import ScrollContext from "./ScrollContext";
import { Providers } from "./providers";

export default function DefaultLayout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    const isBrowser = () => typeof window !== "undefined";
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Head />
      <Navbar />
      <Providers>
        <ScrollContext>
      <main className="block">{children}</main>

      <button
        className={`fixed bottom-0 right-0 bg-black bg-opacity-10 rounded-full px-4 py-2 mr-6 mb-2 z-50 items-center text-xs flex gap-2`}
        onClick={scrollToTop}
        style={{ display: isVisible ? "flex" : "none" }}
      >
        I Viršų
        <IoIosArrowRoundUp className="inline-block h-4 w-4" />
      </button>
      </ScrollContext>
      </Providers>
      <Foot />
      <Analytics/>
    </div>
    
  );
}
