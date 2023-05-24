import { Link, } from 'react-router-dom'
import AccountNav from '../components/AccountNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceImg from '../components/PlaceImg';


function PlacesPage() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/places').then(({ data }) => {
            setPlaces(data);
        });
    }, []);

    return (
        <div>
            <AccountNav />
            <div className='border p-12 mt-12'>
                <Link className='inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full' to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add New Place
                </Link>

                <div className='mt-8'>
                    {places.length > 0 && places.map(place => (
                        <Link key={place._id} to={'/account/places/' + place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
                            <div className="flex  bg-gray-100 grow shrink-0">
                                <PlaceImg place={place} />
                            </div>
                            <div className="grow-0 shrink">
                                <h2 className="text-xl font-bold text-gray-700">{place.title}</h2>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-6">{place.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PlacesPage