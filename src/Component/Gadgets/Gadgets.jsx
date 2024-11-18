import { useState, useEffect } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data));

        // Fetch categories from categories.json
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    // Filtered gadgets based on selected category
    const filteredGadgets = selectedCategory === "All Products"
        ? gadgets
        : gadgets.filter(gadget => gadget.category === selectedCategory);

    return (
        <div className="bg-gray-200 pb-8 pt-72">
            <div className="w-4/5 mx-auto">
                <h2 className="text-4xl font-bold text-center pb-8">Explore Cutting-Edge Gadgets</h2>
                <div className="flex gap-6">
                    {/* Sidebar */}
                    <div className="w-1/5 bg-white rounded-2xl p-4 h-max">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`w-full text-center font-semibold py-2 px-4 mb-2 rounded-full transition duration-300
                                    ${selectedCategory === category.name ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white'}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Gadgets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
                        {filteredGadgets.length > 0 ? (
                            filteredGadgets.map(gadget => (
                                <Gadget gadget={gadget} key={gadget.product_id} />
                            ))
                        ) : (
                            <div className="flex col-span-full justify-center items-center text-4xl font-semibold text-gray-500">
                                No Data Found
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
