"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "../lib/i18n/client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const locale = usePathname()?.split("/")[1];
  const { t } = useTranslation(locale);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    {
      title: t("nav.blog"),
      path: "https://amonxu.com/" + (locale === "en" ? "en" : "zh-CN"),
      target: "_blank",
    },
    {
      title: t("nav.about"),
      path: "#about",
    },
    {
      title: t("nav.projects"),
      path: "#projects",
    },
    {
      title: t("nav.contact"),
      path: "#contact",
    },
    {
      title: "ENGLISH",
      path: "/en",
      size: "text-xs",
    },
    {
      title: "中文",
      path: "/cn",
      size: "text-xs",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-white font-semibold text-gradient"
        >
          {t("title")}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  size={link.size}
                  target={link.target}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
