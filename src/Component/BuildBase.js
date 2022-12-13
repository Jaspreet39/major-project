import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "./ContentHeader";

function BuildBase() {
    const navigate = useNavigate()
    const countryArray = [
        {
            tite: "Places to get lost",
            Desc: "Whether it’s how-to articles, hot design ideas, or home renovation guides, our articles and blog posts provide content your clients are passionate about.",
            img: "https://soyacincau.com/wp-content/uploads/2022/08/220819-google-search-1024x576.jpg",
        },
        {
            tite: "Perfect Design",
            Desc: "Position yourself as a local interior design leader with our hyper-local content. Our interior design freelance writers can help drive the right kind of traffic to your site.",
            img: "https://media.istockphoto.com/id/1248711462/vector/blueprint-mobile-app-grid-outline-vector-template.jpg?s=612x612&w=0&k=20&c=Aczhz2dEBgaFiRd2lScVJl4Z05JX3qRbhjKU7m2NFQ8=",
        },
        {
            tite: "Happy Clients",
            Desc: "Select a content package tailored to fit your needs. Then tap our expert writers to craft engaging content that give your site the layers search engines love.",
            img: "https://img.freepik.com/premium-vector/happy-clients-giving-positive-feedback-product-quality_179970-1273.jpg?w=2000",
        },
    ];

    return (
        <div id="buildBase">
            <div className="max-w-full md:max-w-[80%] xl:max-w-[70%] mx-auto  space-y-4">
                <ContentHeader title="How to" desc="Find your match" />
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 space-x-0 md:space-x-4 xl:space-x-4 space-y-4 xl:space-y-0 md:space-y-0">
                    {countryArray.map((item) => (
                        <div className="border pb-4 space-y-4 max-w-full md:max-w-[300px] xl:max-w-[350px]">
                            <div className="h-[300px] w-full overflow-hidden cursor-pointer">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="h-full w-full object-cover transition-all duration-300 ease-in hover:scale-110"
                                />
                            </div>
                            <div className="max-w-[94%] mx-auto space-y-4">
                                <h2 className="text-3xl">{item.tite}</h2>
                                <p className="text-xl mx-auto max-w-full text-gray-400">
                                    {item.Desc}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuildBase;
