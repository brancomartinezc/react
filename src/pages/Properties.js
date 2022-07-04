import React, {useState, useEffect} from "react"
import PropertyCard from "../components/PropertyCard"

function Properties(){
    const unitedAPI = 'https://branco-api-iaw.herokuapp.com';
    const [propsCount, setPropsCount] = useState(0);
    const [citiesCount, setCitiesCount] = useState(0);
    const [properties, setProperties] = useState();

    const getProperties = async () => {
        const queryJson = {
            type: "*",
            sale_rent: "*",
            city_id: "*",
            min_area: "*",
            max_area: "*",
            min_price: "*",
            max_price: "*",
            min_beds: "*",
            max_beds: "*",
            min_rooms: "*",
            max_rooms: "*",
            min_baths: "*"
        }

        const response = await fetch(`${unitedAPI}/properties`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(queryJson)
        });

        setProperties(await response.json());
    }

    const getCounts = async () => {
        const responseProps = await fetch(`${unitedAPI}/properties/count`);
        setPropsCount(await responseProps.json());

        const responseCities = await fetch(`${unitedAPI}/cities/count`);
        setCitiesCount(await responseCities.json());
    }

    useEffect(() => {
        getProperties();
        getCounts();
    }, [])


    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-12 subtitle" align="center">{propsCount.count} properties in {citiesCount.count} cities</div>
            </div>

            <div className="row mt-5">
                {!properties ? 'Loading...' : properties.map((property => (
                    <div className="col-md-4"> 
                        <PropertyCard
                            id={property.id}
                            status={property.sale_rent} 
                            price={property.price} 
                            area={property.area}
                            rooms={property.rooms}
                            beds={property.beds}
                            baths={property.baths}
                            address={property.address}
                            city={property.city_id}
                        />
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Properties