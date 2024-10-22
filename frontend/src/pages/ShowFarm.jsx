import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http-common";

const ShowFarm = () => {
    const [farmProduces, setFarmProduces] = useState([]);

    useEffect(() => {
        const getFarmProducesById = async () => {
            const id = "66fb8498150af0399b1467d7"
            try {
                const response = await http.get(`/myfarm/produce/farm-produce/${id}`);
                setFarmProduces(response.data.farmProduce)
            } catch (error) {
                console.log(error);                
            }
        }
        getFarmProducesById();
    }, [])
    // eslint-disable-next-line array-callback-return
    farmProduces.map(farmProduce => {
        console.log(farmProduce.harvest);
    })

    
    
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-full w-screen">
                <div className="flex flex-wrap p-3 justify-center items-center">
                    {/* Product Card */}
                    {farmProduces.map(farmProduce=>
                    // full md:w-1/2 sm:w-4/5 lg:w-1/4
                        <Link id={farmProduce._id} className="flex flex-row p-1 m-1 bg-white w-auto shadow-lg">
                            <img 
                                src="/media/products/milk.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-col p-1">
                                <h1 className="underline text-2xl font-semibold">
                                    {farmProduce.harvest}
                                </h1>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Source:</span>
                                    <span className="pl-1">{farmProduce.source}</span>
                                </div>
                                <p className="font-thin overflow-scroll text-justify h-20 w-full pr-2">
                                    {farmProduce.description}
                                </p>
                                <div className="flex-row justify-between">
                                    <span className="text-green-800">Price:</span>
                                    <span className="pl-1">Ksh. <span className="text-yellow-500">{farmProduce.price}/{farmProduce.unit_of_measure}</span></span>
                                </div>
                            </div>
                        </Link>
                    )}
                    {/* End Product Card */}
                </div>
            </section>
        </>
    )
}

export default ShowFarm;
