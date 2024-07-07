import React from "react";
import Image from "next/image";
import Link from "next/link";
interface HeroProps {
    bgImage: string;
}

const Hero: React.FC<HeroProps> = ({ bgImage }) => {
    const backgroundStyle = {
        backgroundImage: `url(/images/${bgImage})`, // Adjust the path accordingly
    };
    const overlayStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity (0.5) as needed
    };

    return (
        <div
            className='h-screen w-full bg-cover bg-relative bg-center bg-no-repeat  '
            style={backgroundStyle}>

            <div
                className='relative w-full h-screen  flex flex-col justify-center items-center'
                style={overlayStyle}>
                <h1 className='z-10 text-white text-center text-5xl lg:text-7xl xl:text-8xl font-bold   mt-8'>
                    FitWithHash
                </h1>
                <p className='z-10 text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mt-2'>
                    Customized Diet Plans for a Healthier You.
                </p>
                <div className="flex items-center flex-col lg:flex-row">
                    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSc2sfkbFERypWs5N3h1xxgo830XhkjvoNo9lSw8mD24ktu53A/viewform' target="_blank">
                        <button className='mx-4 font-bold text-lg mt-8  px-6 py-2 rounded-lg text-white lg:mt-8 transition duration-300 bg-red-400 hover:scale-95 cursor-pointer'>
                            Buy Now
                        </button>
                    </Link>
                    <Link href='https://online.fliphtml5.com/solrq/ptiy/' target="_blank">
                        <button className='mx-4 font-bold text-lg mt-8  px-6 py-2 rounded-lg text-white lg:mt-8 transition duration-300 border-2 border-red-400 hover:scale-95 cursor-pointer'>
                            Download Demo Plan
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;