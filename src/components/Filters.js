import React, {useState} from "react";

function Filters(){
    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8">
            <div className="">
                <label for="countries" class="block mb-2 text-lg font-medium text-gray-200">City</label>
                <select id="countries" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="US">New York, New York, US</option>
                    <option value="CA">Los Angeles, California, US</option>
                    <option value="FR">Buenos Aires, Buenos Aires, AR</option>
                </select>
            </div>
            
            <div>
                <label for="countries" class="block mb-2 text-lg font-medium text-gray-200">Type</label>
                <select id="countries" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="US">All</option>
                    <option value="CA">House</option>
                    <option value="FR">Apartment</option>
                </select>
            </div>
            
            <div>
                <label for="countries" class="block mb-2 text-lg font-medium text-gray-200">Status</label>
                <select id="countries" class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="US">All</option>
                    <option value="CA">For Sale</option>
                    <option value="FR">For Rent</option>
                </select>
            </div>
            
        </div>
    )
}

export default Filters