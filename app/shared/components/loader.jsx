"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Loader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  useEffect(() => {
    const loader = document.querySelector(".loader");
    const showLoader = () => {
      setIsRouteChanging(true);
      loader.classList.add("load");
      setTimeout(() => {
        hideLoader();
      }, 1500);
    };
    const hideLoader = () => {
      loader.classList.remove("load");
      setIsRouteChanging(false);
    };

    showLoader();
  }, [searchParams, pathname]);

  return (
    <>
      <div className="h-[3px] fixed w-full top-0 left-0 z-[9999]">
        <div className="loader w-0 h-full bg-blue-600"></div>
      </div>
      {isRouteChanging && (
        <div className="fixed inset-0 backdrop-blur-sm cursor-wait z-[999]"></div>
      )}
    </>
  );
}
