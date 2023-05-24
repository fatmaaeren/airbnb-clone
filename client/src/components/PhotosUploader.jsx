import { useState } from 'react'
import axios from 'axios';

function PhotosUploader({ addedPhotos, onChange }) {

    const [photoLink, setPhotoLink] = useState('');

    async function addPhotoByLink(e) {
        e.preventDefault();
        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
        onChange(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');
    }
    function uploadPhoto(e) {
        const files = e.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response;
            onChange(prev => {
                return [...prev, ...filenames];
            });
        })
    }
    return (
        <div>

            <div className='flex gap-2'>
                <input
                    className='focus:outline-none'
                    type='text'
                    placeholder='Add using a link..'
                    value={photoLink}
                    onChange={e => setPhotoLink(e.target.value)}
                />
                <button
                    className='bg-gray-200 px-4 rounded-2xl text-sm text-gray-500'
                    onClick={addPhotoByLink}
                >
                    Add&nbsp;Photo
                </button>
            </div>

            <div className='grid grid-cols-3 gap-3 mt-8'>

                {addedPhotos.length > 0 && addedPhotos.map(link => (

                    <div key={link}>
                        <img className='rounded-2xl object-cover min-w-[200px] h-[200px]' src={'http://localhost:4000/uploads/' + link} alt="" />
                    </div>

                ))}

                <div>
                    <label
                        className='flex justify-center items-center border border-dashed bg-transparent rounded-2xl w-[200px] h-[200px] text-2xl text-gray-500 cursor-pointer'
                    >
                        <input
                            type="file"
                            className='hidden'
                            onChange={uploadPhoto}
                            multiple
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415L12 12.586ZM12 2a7.001 7.001 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978V17a6 6 0 0 0-11.996-.225L6 17v1.978a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2Z"></path></svg>
                    </label>
                </div>

            </div>
        </div>
    )
}

export default PhotosUploader