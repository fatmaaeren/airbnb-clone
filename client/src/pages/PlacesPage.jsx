import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Perks from '../components/Perks';
import PhotosUploader from '../components/PhotosUploader';

function PlacesPage() {
    const { action } = useParams();

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [price, setPrice] = useState(100);
    const [redirect, setRedirect] = useState('');

    function inputHeader(header) {
        return (
            <h2 className='text-primary font-bold mb-2'>{header}</h2>
        );
    }

    function inputDescription(description) {
        return (
            <p className='text-gray-500 mb-2 text-sm'>{description}</p>
        );
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function addNewPlace(e) {
        e.preventDefault();
        const placeData = {
            title,
            address,
            addedPhotos,
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests,
            price,
        }
        await axios.post('/places', placeData);
        setRedirect('/account/places');
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>

            {action !== 'new' && (
                <div className='text-center border p-12 mt-12'>
                    <Link className='inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full' to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add New Place
                    </Link>
                </div>
            )}

            {action === 'new' && (
                <div className='border p-12 mt-12 max-w-3xl mx-auto'>

                    <form action={addNewPlace}>
                        <h2 className='text-gray-600 font-bold justify-start mb-6 text-left flex gap-3' >
                            <Link to={'/account/places'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>
                            </Link>
                            New Place
                        </h2>

                        <div className='mb-4'>
                            {preInput('Title', 'Title, Title for your place. should be short and catchy as in advertisement')}
                            <input
                                className='focus:outline-none'
                                type='text'
                                placeholder='Title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            {preInput('Address', 'Address, Address to this place')}
                            <input
                                className='focus:outline-none'
                                type='text'
                                placeholder='Address'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            {preInput('Photos', 'More photos increase the chance')}

                            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />



                        </div>

                        <div className='mb-4'>
                            {preInput('Description', 'Express your place in more words')}
                            <textarea
                                className='focus:outline-none w-full'
                                placeholder='Description'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className='mb-4'>
                            {preInput('Perks', 'Select All the perks of your place')}
                            <Perks selected={perks} onChange={setPerks} />
                        </div>

                        <div className='mb-4'>
                            {preInput('Extra Info', 'House Rules, ect...')}
                            <textarea
                                className='focus:outline-none w-full'
                                type='text'
                                placeholder='Extra Info'
                                value={extraInfo}
                                onChange={e => setExtraInfo(e.target.value)}

                            />
                        </div>

                        <div className='mb-4'>
                            {preInput('Check in&out times', 'Add check in and out times, remember to have some time window for cleaning the room between guests')}

                            <div className="grid gap-2 grid-cols-2 md:grid-cols-4 text-sm text-primary font-bold">
                                <div>
                                    <h3 className="mt-2 mb-2">Check in time</h3>
                                    <input
                                        className='focus:outline-none'
                                        type="text"
                                        placeholder="14"
                                        value={checkIn}
                                        onChange={e => setCheckIn(e.target.value)}
                                    />

                                </div>
                                <div>
                                    <h3 className="mt-2 mb-2">Check out time</h3>
                                    <input
                                        className='focus:outline-none'
                                        type="text"
                                        placeholder="11"
                                        value={checkOut}
                                        onChange={e => setCheckOut(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <h3 className="mt-2 mb-2">Max number of guests</h3>
                                    <input
                                        className='focus:outline-none'
                                        type="number"
                                        value={maxGuests}
                                        onChange={ev => setMaxGuests(ev.target.value)}
                                    />
                                </div>
                                <div>
                                    <h3 className="mt-2 mb-2">Price per night</h3>
                                    <input
                                        className='focus:outline-none'
                                        type="number"
                                        value={price}
                                        onChange={ev => setPrice(ev.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="primary my-8">Save</button>

                    </form>

                </div>
            )

            }
        </div>
    )
}

export default PlacesPage