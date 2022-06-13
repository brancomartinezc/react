import React, { useState } from "react"
import { Carousel } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import world from "../assets/world2.png"
import address from "../assets/address1.png"

function PropertyCard() {
    return (
        <div class="max-w-lg overflow-hidden rounded bg-gray-800 text-gray-200 shadow-lg">
            <Carousel slide={false}>
                <img src="https://i.ibb.co/HqyXrmq/img1.webp" alt="..." />
                <img src="https://i.ibb.co/kKChfG9/img2.webp" alt="..." />
            </Carousel>
            <div className="px-6 py-4">
                
                <div className="mb-2 text-xl font-bold">685 S New Hampshire Ave</div>
                <div className="text-l mb-2 font-bold">Los Angeles, California, US</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-100">92 mt2</span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-100"> 5 Rooms</span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-100">2 Beds</span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-100">2 Baths</span>
            </div>
        </div>
    )
}

export default PropertyCard