import React from "react";
import Image from "next/image";
interface DietPlansProps {
    bgImage: string;
}

const DietPlans: React.FC<DietPlansProps> = ({ bgImage }) => {
    // Placeholder data for plans
    const plansData = [
        {
            id: 1,
            name: "Weight Loss",
            price: "2000",
            imageUrl: "/images/weight-loss-plan.jpg",
        },
        {
            id: 2,
            name: "Muscle Gain",
            price: "2000",
            imageUrl: "/images/muscle-gain-plan.jpg",
        },
    ];
    const backgroundStyle = {
        backgroundImage: `url(/images/${bgImage})`, // Adjust the path accordingly
    };
    const overlayStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the opacity (0.5) as needed
    };
    return (
        <div
            id='dietplans'
            className='min-h-screen w-full bg-cover mt-12 bg-fixed bg-center bg-no-repeat  '
            style={backgroundStyle}>
            <div
                className=' w-full min-h-screen flex flex-col lg:flex-col justify-center items-center'
                style={overlayStyle}>
                <h2 className='z-10  text-white text-center text-5xl lg:text-7xl xl:text-8xl font-bold  mt-8'>
                    Diet Plans
                </h2>
                <div className='flex flex-col lg:flex-row justify-center items-center mt-12'>
                    {plansData.map((plan) => (
                        <div
                            key={plan.id}
                            className='m-8 bg-white rounded-md overflow-hidden shadow-lg'>
                            <Image
                                src={plan.imageUrl}
                                alt={plan.name}
                                width={500}
                                height={700}
                                className='w-full object-cover object-center'
                            />
                            <div className='p-7'>
                                <h3 className='text-3xl  font-bold mb-2'>
                                    {plan.name}
                                </h3>
                                <p className='text-black font-semibold text-xl'>
                                    Starts from {plan.price}/- INR (Inc. All Taxes)
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DietPlans;