import react from "react";

const SubscriptionCard = ({sub_type, sub_amount, farm_img, vis_img, enq_img}) => {
    

    return(
        <>
            {/* Start Subsription Card */}
            <div className="flex flex-col items-center h-auto bg-white rounded-lg p-1 shadow-lg m-1 w-full sm:w-4/5 md:w-4/5 lg:w-1/3">
                <h2 className="flex justify-center text-2xl font-bold text-gray-900">{sub_type}</h2>
                <p className="flex text-gray-900">Ksh. {sub_amount}/Month</p>
                <div className="w-full border-b"></div>           
                <div className="flex flex-row items-center w-auto p-1">
                    <img src={farm_img} alt="" className="w-9 h-9" />
                    <p className="text-gray-900 ml-1">Farm Management</p>
                </div>
                <div className="flex flex-row items-center w-auto p-1">
                    <img src={vis_img} alt="" className="w-9 h-9" />
                    <p className="text-gray-900 ml-1">Visualization</p>
                </div>
                <div className="flex flex-row items-center w-auto p-1">
                    <img src={enq_img} alt="" className="w-9 h-9" />
                    <p className="text-gray-900 ml-1">Enquiries</p>
                </div>
                <div className="w-full border-b"></div>
                <button className="flex w-2/3 justify-center bg-yellow-500 text-green-800 p-1 rounded-md m-1">Purchase</button>
            </div>
                    {/* End of Subscriprion Card */}
        </>
    )

}

export default SubscriptionCard;
