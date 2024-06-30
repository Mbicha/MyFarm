import React from "react";
import { Link } from "react-router-dom";

const ShowFarm = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-full w-screen">
                <div className="flex flex-wrap p-3 justify-center items-center">
                    {/* Product Card */}
                        <Link className="flex flex-row p-1 m-1 bg-white w-full md:w-1/2 sm:w-4/5 lg:w-1/4 shadow-lg">
                            <img 
                                src="/media/products/download.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-col p-1">
                                <h1 className="underline text-2xl font-semibold">
                                    Beef
                                </h1>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Source:</span>
                                    <span className="pl-1">Bull</span>
                                </div>
                                <p className="font-thin overflow-scroll text-justify h-20 w-full pr-2">
                                    Beef is the meat obtained from cattle and is one of the most widely consumed meats globally. It is a rich source of protein, iron, and other essential nutrients. Beef can be prepared in numerous ways, including grilling, roasting, and stewing, and is used in a variety of dishes such as steaks, burgers, and pot roasts. The quality and flavor of beef can vary depending on the breed of cattle and the feeding practices used.
                                </p>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Price:</span>
                                    <span className="pl-1">Ksh. <span className="text-yellow-500">560/kg</span></span>
                                </div>
                            </div>
                        </Link>
                    {/* End Product Card */}
                    {/* Product Card */}
                    <Link className="flex flex-row p-1 m-1 bg-white w-full md:w-1/2 sm:w-4/5 lg:w-1/4 shadow-lg">
                            <img 
                                src="/media/products/pig.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-col p-1">
                                <h1 className="underline text-2xl font-semibold">
                                    Pig
                                </h1>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Source:</span>
                                    <span className="pl-1">Pig</span>
                                </div>
                                <p className="font-thin overflow-scroll text-justify h-20 w-full">
                                    Pigs are domesticated animals raised primarily for their meat, which includes pork, bacon, ham, and sausages. They are omnivores and are known for their high intelligence and social nature. In addition to their meat, pigs also produce valuable by-products such as lard, leather, and gelatin. Pig farming is a significant part of the agricultural industry worldwide.
                                </p>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Price:</span>
                                    <span className="pl-1">Ksh. <span className="text-yellow-500">3700</span></span>
                                </div>
                            </div>
                    </Link>
                    {/* End Product Card */}

                    <Link className="flex flex-row p-1 m-1 bg-white w-full md:w-1/2 sm:w-4/5 lg:w-1/4 shadow-lg">
                            <img 
                                src="/media/products/eggs.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-col p-1">
                                <h1 className="underline text-2xl font-semibold">
                                    Eggs
                                </h1>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Source:</span>
                                    <span className="pl-1">Hen</span>
                                </div>
                                <p className="font-thin overflow-scroll text-justify h-20 w-full">
                                    Eggs are a common food source, rich in protein and essential nutrients such as vitamins B12, D, and riboflavin. They are produced by various bird species, with chicken eggs being the most commonly consumed. Eggs can be used in a wide variety of dishes, from breakfast items to baked goods, and are valued for their versatility and nutritional benefits.
                                </p>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Price:</span>
                                    <span className="pl-1">Ksh. <span className="text-yellow-500">10/Egg</span></span>
                                </div>
                            </div>
                        </Link>
                    {/* End Product Card */}
                    <Link className="flex flex-row p-1 m-1 bg-white w-full md:w-1/2 sm:w-4/5 lg:w-1/4 shadow-lg">
                            <img 
                                src="/media/products/beans.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-col p-1">
                                <h1 className="underline text-2xl font-semibold">
                                    Beans
                                </h1>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Source:</span>
                                    <span className="pl-1">Beans Plantation</span>
                                </div>
                                <p className="font-thin overflow-scroll text-justify h-20 w-full">
                                    Beans are a type of legume that are grown for their edible seeds. They come in various varieties, including kidney beans, black beans, and soybeans. Beans are a staple food in many cultures due to their high protein content, fiber, and essential vitamins and minerals. They are often used in soups, stews, salads, and as side dishes.
                                </p>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Price:</span>
                                    <span className="pl-1">Ksh. <span className="text-yellow-500">180/Kg</span></span>
                                </div>
                            </div>
                    </Link>
                    {/* End Product Card */}
                    <Link className="flex flex-row p-1 m-1 bg-white w-full md:w-1/2 sm:w-4/5 lg:w-1/4 shadow-lg">
                            <img 
                                src="/media/products/maize.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-col p-1">
                                <h1 className="underline text-2xl font-semibold">
                                    Maize
                                </h1>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Source:</span>
                                    <span className="pl-1">Maize</span>
                                </div>
                                <p className="font-thin overflow-scroll text-justify h-20 w-full">
                                    Beans are a type of legume that are grown for their edible seeds. They come in various varieties, including kidney beans, black beans, and soybeans. Beans are a staple food in many cultures due to their high protein content, fiber, and essential vitamins and minerals. They are often used in soups, stews, salads, and as side dishes.
                                </p>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Price:</span>
                                    <span className="pl-1">Ksh. <span className="text-yellow-500">65/Kg</span></span>
                                </div>
                            </div>
                    </Link>
                    {/* End Product Card */}
                </div>
            </section>
        </>
    )
}

export default ShowFarm;
