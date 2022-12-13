import React, { useEffect } from "react";
import ContentHeader from "./ContentHeader";

function WhyUs() {


    const whyArray = [
        {
            number: '480+',
            title: 'Completed Designs',
        },
        {

            number: '40+',
            title: 'hour turnaround',

        },
        {

            number: '9000+',
            title: 'Easy-to-use system',

        },
        {

            number: '140+',
            title: 'Devices',

        },
    ]


    return (
        <div className="bg-gray-100 py-6 xl:py-14">
            <div className="max-w-full md:max-w-3xl xl:max-w-[80%] mx-auto space-y-14">
                <ContentHeader title="Why MyStore ?" desc="Experience With Comfort" />
                <div data-aos='fade-up' className="grid grid-cols-2 space-y-6 xl:space-y-0 md:space-y-0 md:grid-cols-4 xl:grid-cols-4 space-x-2">
                    {whyArray.map((item) => (
                        <div className="flex-col flex items-center justify-center space-y-3">
                            <h1 className="text-6xl font-semibold">{item.number}</h1>
                            <p className="text-md text-gray-400">{item.title}</p></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
