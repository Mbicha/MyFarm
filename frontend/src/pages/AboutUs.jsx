import React from "react";

const AboutUs = () => {
    return(
        <>
            <section className="flex flex-col justify-center bg-green-800 h-full w-screen">
                <div className="mt-4 bg-white sm:w-1/2 lg:w-2/3">
                    <h1 className="text-2xl bg-yellow-500 border-b-green-800 font-bold pl-2">About Us</h1>
                    <article className="font-thin">
                        MyFarm is a dedicated platform designed to support farmers in efficiently managing their farm produce. Whether you are growing crops or raising animals, MyFarm provides comprehensive tools to track, organize, and optimize your farming activities. We classify plants into categories such as cereals, legumes, tubers, vegetables, and fruits, and animals into livestock, aquaculture, and beekeeping. Our mission is to empower farmers with accurate data, insightful analytics, and practical advice to enhance productivity and sustainability. Join us at MyFarm, where farming meets technology for a brighter agricultural future.
                    </article>
                </div>
            </section>
        </>
    )
}

export default AboutUs;
