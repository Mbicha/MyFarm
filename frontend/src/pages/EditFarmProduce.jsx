import React from "react";

const unit_of_measure = {   
    "UOM": [
      {"kilogram": "kg"},
      {"gram": "g"},
      {"tonne": "t"},
      {"liter": "L"},
      {"milliliter": "mL"},
      {"cubic_meter": "m^3"},
      {"meter": "m"},
      {"centimeter": "cm"},
      {"millimeter": "mm"},
      {"square_meter": "m^2"},
      {"hectare": "ha"},
      {"unit": "unit"}   
    ] 
}

const EditFarmProduce = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-full w-screen">
                <form className="flex flex-col p-3 mt-2 bg-white w-auto rounded-lg">
                    <h1
                        className="flex justify-center text-2xl items-center rounded-tl-md rounded-tr-md bg-yellow-500 border-b-green-800 font-bold w-full">
                        Edit Farm Produce
                    </h1>
                    
                    <input
                        type="text" 
                        name="source" 
                        placeholder="Source e.g Pig" 
                        className="mt-2 border-b-gray-400 p-2"/>

                    <input
                        type="text" 
                        name="harvest" 
                        placeholder="Harvest e.g Multon" 
                        className="mt-2 border-b-gray-400 p-2"/>
                    
                    <textarea
                        className="mt-2 border-b-gray-400 p-2" 
                        cols={10}
                        placeholder="Description..."
                        name="harvest_desc"/>
                    
                    <div className="flex flex-col mt-2 border-b-gray-400 p-2">
                        <label htmlFor="image" className="mb-1">Upload Image:</label>
                        <input type="file" name="harvest_image" id="harvest_image" accept="image/*" />
                    </div>

                    <div className="flex flex-col mt-2 border-b-gray-400 p-2">
                        <label htmlFor="unit_measure" className="mb-1">Select Unit of Measure:</label>
                        <select
                            name="unit_measure"
                            id="unit_measure"
                            defaultValue={`kg`}>
                                {unit_of_measure.UOM.map((uom, index) => {
                                    const key = Object.keys(uom)[0];
                                    return (
                                        <option key={index} value={uom[key]}>
                                        {key}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>

                    <input
                        type="text" 
                        name="price" 
                        placeholder="price e.g 2300.00" 
                        className="mt-2 border-b-gray-400 p-2"/>    

                    <div className="flex justify-center">
                        <input type="submit" value="Save" className="mt-2 w-1/2 rounded-md bg-green-800 text-white p-1"/>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EditFarmProduce;
