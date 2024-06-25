import React from "react";

const services = [
    {
      "name": "Farm Produce Tracking",
      "description": "Helps farmers to record and manage all their farm produce, including plants and animals, ensuring accurate and up-to-date inventory."
    },
    {
      "name": "Plant Classification",
      "description": "Categorizes plants into cereals, legumes, tubers, vegetables, and fruits, allowing farmers to organize and monitor their crops efficiently."
    },
    {
      "name": "Animal Classification",
      "description": "Categorizes animals into livestock, aquaculture, and beekeeping, providing a clear overview of all animal-related produce."
    },
    {
      "name": "Yield Forecasting",
      "description": "Predicts the potential yield of crops and animals based on historical data and current conditions, helping farmers plan better."
    },
    {
      "name": "Market Price Updates",
      "description": "Provides real-time updates on market prices for various farm produce, enabling farmers to make informed selling decisions."
    },
    {
      "name": "Farm Management Insights",
      "description": "Offers insights and recommendations on best farming practices, resource management, and productivity enhancement."
    },
    {
      "name": "Sales and Distribution Tracking",
      "description": "Tracks the sales and distribution of farm produce, ensuring transparency and efficiency in the supply chain."
    },
    {
      "name": "Pest and Disease Management",
      "description": "Helps farmers identify, manage, and prevent pests and diseases that can affect their crops and animals."
    },
    {
      "name": "Sustainability and Compliance",
      "description": "Ensures that farming practices comply with sustainability standards and regulations, promoting environmentally friendly farming."
    }
  ]

const Services = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-800 h-full w-screen">
                <div className="flex flex-col mt-4 bg-white items-center p-2 sm:w-1/2 lg:w-2/3">
                    <h1 className="flex justify-center text-2xl items-center bg-yellow-500 border-b-green-800 font-bold w-full">Services</h1>
                    {
                        services.map(service => 
                            <div className="flex flex-col border rounded-sm shadow-sm bg-white p-2 mt-2 sm:w-2/3 lg:w-4/5 md:w-4/5">
                                <span className="text-yellow-500 italic text-xl border-b border-green-800">{service.name}</span>
                                <article className="font-thin">
                                    {service.description}
                                </article>
                            </div>
                        )
                    } 
                </div>
            </section>
        </>
    )
}

export default Services;
