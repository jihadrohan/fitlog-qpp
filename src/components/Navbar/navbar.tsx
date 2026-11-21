
"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { fitContext } from "@/context/fitCardContext";

const Navbar = () => {

    const context = useContext(fitContext);
    const pathname = usePathname();

    const addFit = context?.addFit || [];
    const saveFit = context?.saveFit || [];

    return (
        <nav className="bg-[#0b0d10] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 container bg-[#0b0d10] border-b border-[#252830]">
              <div className="navbar min-h-20 bg-[#0b0d10] border-b border-[#252830]">
                    <div className="navbar-start gap-2">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle lg:hidden text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow-xl bg-[#15171d] border border-[#292d36] rounded-xl w-52 text-white"
                            >
                                <li><Link href="/">Workouts</Link></li>
                                <li><Link href="/myplan">My Plans</Link></li>
                            </ul>
                        </div>
                        <Link href="/" className="flex items-center gap-2">

                            <Image
                                src={Logo}
                                alt="Fitlog Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />

                            <span className="text-white text-xl font-extrabold tracking-tight">
                                FITLOG
                            </span>

                        </Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">

                        <ul className="flex items-center gap-2">

                            <li>
                                <Link
                                    href="/"
                                    className={`px-5 py-2 rounded-full text-sm transition ${
                                        pathname === "/"
                                            ? "bg-[#1c2910] text-lime-400 font-bold"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/myplan"
                                    className={`px-5 py-2 rounded-full text-sm transition ${
                                        pathname === "/myplan"
                                            ? "bg-[#1c2910] text-lime-400 font-bold"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    My Plan
                                </Link>
                            </li>

                        </ul>

                    </div>
                    <div className="navbar-end gap-5">

                        <Link
                            href="/myplan"
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                        >
                            <span>Plan</span>

                            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-lime-400 text-black text-xs font-bold">
                                {addFit.length}
                            </span>

                        </Link>

                        <Link
                            href="/myplan"
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                        >
                            <span>Saved</span>

                            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-[#353943] text-gray-300 text-xs font-medium">
                                {saveFit.length}
                            </span>

                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;
