import React, { useState } from "react"
import { Carousel } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import world from "../assets/world2.png"
import address from "../assets/address1.png"

function CityCard() {
    return (
        <div class="card mt-2">
            <div class="card-body">
                <img src="" alt="..." class="city-img"/>
                <div align="center" class="centered city-data">city</div>
            </div>
        </div>
    )
}

export default CityCard