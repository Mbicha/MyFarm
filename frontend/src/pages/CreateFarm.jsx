import React from "react";

const types_farming = {
    "PlantFarming": {
      "cerealFarming": [
        "Wheat",
        "Rice",
        "Maize",
        "Barley",
        "Oats",
        "Sorghum"
      ],
      "legumeFarming": [
        "Beans",
        "Lentils",
        "Peas",
        "Chickpeas",
        "Soybeans"
      ],
      "tuberFarming": [
        "Potatoes",
        "Sweet Potatoes",
        "Yams",
        "Cassava"
      ],
      "vegetableFarming": [
        "Carrots",
        "Lettuce",
        "Tomatoes",
        "Cucumbers",
        "Onions",
        "Peppers"
      ],
      "fruitFarming": [
        "Apples",
        "Oranges",
        "Bananas",
        "Grapes",
        "Strawberries"
      ],
      "herbFarming": [
        "Basil",
        "Mint",
        "Cilantro",
        "Parsley",
        "Rosemary"
      ],
      "flowerFarming": [
        "Roses",
        "Tulips",
        "Lilies",
        "Sunflowers",
        "Orchids"
      ]
    },
    "AnimalFarming": {
        "cattleFarming": [
          "Dairy Cows",
          "Beef Cattle"
        ],
        "poultryFarming": [
          "Chickens",
          "Ducks",
          "Turkeys"
        ],
        "pigFarming": [
          "Pigs"
        ],
        "sheepFarming": [
          "Sheep"
        ],
        "goatFarming": [
          "Goats"
        ],
        "fishFarming": [
          "Salmon",
          "Tilapia",
          "Catfish"
        ],
        "shellfishFarming": [
          "Shrimp",
          "Oysters",
          "Clams"
        ],
      "beekeeping": [
        "Honey Production",
        "Pollination Services"
      ]
    }
  }

const CreateFarm = () => {
    const filterFarmingType = (types_farming, main_category) => {
        if(main_category === "AnimalFarming") {
            return types_farming.main_category
        } else {
            return types_farming.main_category
        }
      }
    
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-full w-screen">
                <form className="flex flex-col p-3 mt-2 bg-white w-auto rounded-lg">
                    <h1
                        className="flex justify-center text-2xl items-center rounded-tl-md rounded-tr-md bg-yellow-500 border-b-green-800 font-bold w-full">
                        Create Farm
                    </h1>
                    <input
                        type="text" 
                        name="farm_title" 
                        placeholder="Name of Farm" 
                        className="mt-2 border-b-gray-400 p-2"/>

                    <div className="flex flex-col mt-2 border-b-gray-400 p-2">
                        <label htmlFor="farming_category" className="mb-1">Farming Category</label>
                        <select
                            name="farming_category"
                            id="farming_category"
                            defaultValue={`PlantFarming`}>
                                <option value={"PlantFarming"}>Plant Farming</option>
                                <option value={"AnimalFarming"}>Animal Farming</option>
                        </select>
                    </div>

                    <div className="flex flex-col mt-2 border-b-gray-400 p-2">
                        <label htmlFor="farming_type" className="mb-1">Specific Farming Type</label>
                        <select
                            name="farming_type"
                            id="farming_type"
                            defaultValue={`Cereal Planting`}>
                                <option value={"Cereal Planting"}>Cereal Planting</option>
                                <option value={"Beef Farming"}>Beef Farming</option>
                        </select>
                    </div>
                    
                    <input
                        type="text" 
                        name="farming_type" 
                        placeholder="Farming Type" 
                        className="mt-2 border-b-gray-400 p-2"/>             

                    <div className="flex justify-center">
                        <input type="submit" value="Save" className="mt-2 w-1/2 rounded-md bg-green-800 text-white p-1"/>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateFarm;
