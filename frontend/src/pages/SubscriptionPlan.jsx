import React from "react";
import SubscriptionCard from "../components/SubscriptionCard";

const SubscriptionPlan = () => {
    const right_icon = "/media/icons/right.svg";
    const wrong_icon = "/media/icons/wrong.svg";
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-dvh w-screen mt-2">
                <h1 className="underline text-white text-xl sm:text-3xl">Subscription Plan</h1>
                <p className="flex text-gray-900">Choose a plan that aligns with you farm.</p>

                {/* Subscription cards */}
                <div className="flex flex-col lg:flex-row justify-between">
                    <SubscriptionCard 
                        sub_type={"Basic"}
                        sub_amount={30}
                        farm_img={right_icon}
                        vis_img={wrong_icon}
                        enq_img={wrong_icon}/>
                    
                    <SubscriptionCard 
                        sub_type={"Standard"}
                        sub_amount={1000}
                        farm_img={right_icon}
                        vis_img={right_icon}
                        enq_img={wrong_icon}/>
                    
                    <SubscriptionCard 
                        sub_type={"Premium"}
                        sub_amount={3000}
                        farm_img={right_icon}
                        vis_img={right_icon}
                        enq_img={right_icon}/>
                </div>                
            </section>
        </>
    )
}

export default SubscriptionPlan;
