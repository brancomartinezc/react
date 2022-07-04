import React from "react"
import PropertyCard from "../components/PropertyCard"
import CityCard from "../components/CityCard"

function Home(){
    return (
        <div>
            <div class="row mt-5">
                <div align="center" class="col-md-12 subtitle"> Latest Properties </div>
            </div>

            <div class="row mt-5">
                <div class="col-md-4"> 
                    <PropertyCard /> 
                </div>
                <div class="col-md-4"> 
                    <PropertyCard /> 
                </div>
                <div class="col-md-4"> 
                    <PropertyCard /> 
                </div>
            </div>

            <div class="row mt-5">
                <div align="center" class="col-md-12 subtitle"> Popular Cities </div>
            </div>

            <div class="row m-3">
                <div class="col-md-4"> <CityCard cityName="Los Angeles" cityImage="https://i.ibb.co/1Xpppfk/la.jpg"/> </div>
                <div class="col-md-4"> <CityCard cityName="New York" cityImage="https://i.ibb.co/7bDDxCC/nyc.jpg"/> </div>
                <div class="col-md-4"> <CityCard cityName="Buenos Aires" cityImage="https://i.ibb.co/pwFK0jq/ba.jpg"/> </div>
            </div>
        </div>
    )
}

export default Home