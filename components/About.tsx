import React from "react";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <div id="about" className='min-h-screen px-8 lg:px-12 xl:px-16 mt-16 flex flex-col xl:flex-row items-center justify-center w-full'>
            {/* Content on the left */}
            <div className='w-full '>
                <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 text-green-900'>
                    About Us
                </h2>
                <p className='text-black font-normal text-md lg:text-lg xl:text-xl mb-8 '>
                    We believe that true health and wellness begin with the right nutrition. Our mission is to empower you with the knowledge and tools to make informed dietary choices that support your unique lifestyle and health goals.
                </p>

                <p className='text-green-900 uppercase font-bold text-lg lg:text-xl xl:text-2xl mb-2 '>
                    What We Offer
                </p>
                <div className='flex items-center mt-4'>

                    <p className='text-black font-medium text-md lg:text-lg xl:text-xl '>
                        Personalized Nutrition Plans: Tailored to meet your specific needs, preferences, and health goals.
                    </p>
                </div>
                <div className='flex items-center mt-4'>

                    <p className='text-black font-medium text-md lg:text-lg xl:text-xl  '>
                        Nutritional Counseling: One-on-one sessions to guide you through every step of your wellness journey.
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
                            src='/images/weight-loss.jpg'
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