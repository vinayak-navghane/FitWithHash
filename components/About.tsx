import React from "react";
import Image from "next/image";
import { GiMeal } from "react-icons/gi";
import { LiaFontAwesomeAlt } from "react-icons/lia";
import { LuListTodo } from "react-icons/lu";

const About: React.FC = () => {
    return (
        <div id="about" className='min-h-screen px-8 lg:px-12 xl:px-16 mt-16 flex flex-col xl:flex-row items-center justify-center w-full'>
            {/* Content on the left */}
            <div className='w-full '>
                <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 text-red-400'>
                    About Us
                </h2>
                <p className='text-gray-600 font-extralight text-md lg:text-lg xl:text-xl mb-8  '>
                    We believe that true health and wellness begin with the right nutrition. Our mission is to empower you with the knowledge and tools to make informed dietary choices that support your unique lifestyle and health goals.
                </p>

                <p className='text-black font-bold text-lg lg:text-xl xl:text-2xl mb-2 '>
                    What We Offer:
                </p>
                <div className='flex items-center mt-4'>
                    <div>
                        <GiMeal size={28} />
                    </div>
                    <p className='text-red-400 font-bold text-md lg:text-lg xl:text-xl '>
                        &nbsp;   Customized Diet Plans: Tailored to your goals
                    </p>
                </div>
                <div className='flex items-center mt-4'>
                    <div>
                        <LuListTodo size={28} />
                    </div>
                    <p className='text-red-400 font-bold text-md lg:text-lg xl:text-xl  '>
                        &nbsp;   Meal Planning: Easy-to-follow meal plans
                    </p>
                </div>
                <div className='flex items-center mt-4'>
                    <div>
                        <LiaFontAwesomeAlt size={28} />
                    </div>
                    <p className='text-red-400 font-bold text-md lg:text-lg xl:text-xl  '>
                        &nbsp;   Ongoing Support: Continuous guidance from expert
                    </p>
                </div>

            </div>

            {/* Photo grid on the right */}
            <div className='lg:w-full relative flex justify-center items-center  w-full'>
                <div className='flex flex-col justify-around'>
                    {/* First photo */}
                    <div className='relative mb-4'>
                        <Image
                            src='/images/diet-plan.jpg'
                            objectFit='cover'
                            alt='Photo 1'
                            className='rounded-md shadow-lg'
                            width={600}
                            height={600}
                        />
                    </div>

                    {/* Second photo */}
                    <div className='relative mt-4'>
                        <Image
                            src='/images/fat-loss.jpg'
                            objectFit='cover'
                            alt='Photo 2'
                            className='rounded-md shadow-lg'
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;