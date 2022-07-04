import React, { useEffect, useState } from "react"

function PropertyCard(props) {
    const propId = props.id;
    const status = props.status;
    const price = props.price;
    const area = props.area;
    const rooms = props.rooms;
    const beds = props.beds;
    const baths = props.baths;
    const address = props.address;
    const cityId = props.city;

    const unitedAPI = 'https://branco-api-iaw.herokuapp.com';
    const [city, setCity] = useState("");
    const [cityPhoto, setCityPhoto] = useState("");

    const getCity = async () => {
        const response = await fetch(`${unitedAPI}/cities/${cityId}`);
        setCity(await response.json());
    }

    const getCityPhoto = async () => {
        const response = await fetch(`${unitedAPI}/properties/photos/${propId}`);
        setCityPhoto(await response.json());
    }

    useEffect(() => {
        getCity();
        getCityPhoto();
    }, [])

    return (
        <div className="card mb-3 rounded-0">
            <img src={!cityPhoto ? "" : cityPhoto[0].path}/>
            <div className="sale-rent-label">for {status}</div>
            <div className="price-label">$ {price}</div>
            <div className="card-body">
                <div className="row justify-content-left mt-4">
                    <div className="col-md-6"><img id="area-icon" src="@/assets/icons/area1.png" alt="..."/>{area} mt2</div>
                    <div className="col-md-6"><img src="@/assets/icons/room1.png" alt="..."/>{rooms} Rooms</div>
                </div>
                <div className="row justify-content-left">
                    <div className="col-md-6"><img src="@/assets/icons/bed1.png" alt="..."/>{beds} Bedrooms</div>
                    <div className="col-md-6"><img src="@/assets/icons/bath1.png" alt="..."/>{baths} Baths</div>
                </div>
                <div className="row justify-content-left mt-4">
                    <div className="col-md-12"><img id="address-icon" src="@/assets/icons/address1.png" alt="..."/>{address}</div>
                </div>
                <div className="row justify-content-left mt-2">
                    <div className="col-md-12"><img id="address-icon" src="@/assets/icons/world2.png" alt="..."/>{city.name}, {city.state}, {city.country_code}</div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard