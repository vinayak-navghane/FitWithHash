"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoFitness } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu";


const Navbar: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-white px-4 py-6 border-b-current'>
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
                <div className='flex w-full items-center justify-between'>
                    {/* Logo on the left */}
                    <div className="flex  items-start justify-center">
                        <Link href='/'>
                            <p className='text-black text-xl lg:text-3xl font-bold tracking-wide'>
                                FitWithHash
                            </p>
                        </Link>

                        <IoFitness size={38} color="black" />


                    </div>
                    {/* Hamburger menu for small screens */}
                    <div className='lg:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-gray-800 focus:outline-none'>
                            {isMenuOpen ? (
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'></path>
                                </svg>
                            ) : (
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16m-7 6h7'></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {/* Use ResponsiveMenu component for the responsive menu */}
                <ResponsiveMenu isMenuOpen={isMenuOpen} />
            </div>
        </nav>
    );
};

export default Navbar;