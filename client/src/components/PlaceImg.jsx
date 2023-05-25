import Image from "./Image.jsx";

function PlaceImg({ place, index = 0 }) {
    
    if (!place.photos?.length) {
        return '';
    }

    const className = 'object-cover rounded-2xl w-[200px] h-[200px]';

    return (
        <Image classname={className} src={place.photos[index]} alt="" />
    );
}

export default PlaceImg