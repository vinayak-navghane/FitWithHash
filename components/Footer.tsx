
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { IoFitness } from "react-icons/io5";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-red-400 p-7">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Logo and Company Name on the left */}
                <div className="flex items-center mb-4 lg:mb-0 cursor-pointer">
                    <Link href='/'>
                        <p className='text-black text-xl lg:text-3xl font-bold tracking-wide'>
                            FitWithHash
                        </p>
                    </Link>
                    <IoFitness size={38} color="black" />
                </div>

                {/* Contact information on the right */}
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:mr-8">
                        <p className="text-xl font-bold text-black">Contact Us</p>

                        <div className="flex items-center mt-2">
                            <div>
                                <FiMail size={20} />
                            </div>
                            <p className="ml-2">harshada.navghane@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
