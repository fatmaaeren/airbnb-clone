import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../components/Image.jsx";

export default function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        });
    }, []);

    const photoClassName = 'rounded-2xl object-cover aspect-square'

    return (
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {places.length > 0 && places.map(place => (
                <Link key={place._id} to={'/place/' + place._id}>
                    <div className="mb-4 flex">
                        {place.photos?.[0] && (
                            <Image classname={photoClassName} src={place.photos?.[0]} alt="" />
                        )}
                    </div>
                    <h2 className="font-bold text-gray-700 mb-1">{place.address}</h2>
                    <h3 className="text-sm text-gray-500 line-clamp-1">{place.title}</h3>
                    <div className="mt-1">
                        <span className="font-bold text-xl">${place.price}</span> per night
                    </div>
                </Link>
            ))}
        </div>
    );
}