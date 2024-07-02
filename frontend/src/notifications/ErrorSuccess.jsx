import React from "react";

const ErroSuccess = ({imageSrc, title, message}) => {
    return(
        <>
            <section className="flex flex-col items-center z-50 bg-green-900 h-dvh w-screen mt-2">
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 md:w-1/2 sm:w-4/5">
                    <img src={imageSrc} alt="" className="flex border-b border-green-900 rounded-full h-24 w-24 p-1" />
                    <div className="flex flex-col justify-center border-b border-t">
                        <h1 className="text-2xl text-green-900 mt-2 p-1">{title}</h1>
                        <p className="text-white font-thin">{message}</p>
                    </div>
                    <button className="">
                        Ok
                    </button>
                </div>
            </section>
        </>
    )
}

export default ErroSuccess
