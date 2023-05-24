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

    function removePhoto(e, filename) {
        e.preventDefault();
        onChange([...addedPhotos.filter(photo => photo !== filename)]);
    }

    function selectAsMainPhoto(e, filename) {
        e.preventDefault();
        onChange([filename, ...addedPhotos.filter(photo => photo !== filename)]);
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

                    <div key={link} className='relative'>
                        <img className='rounded-2xl object-cover min-w-[200px] h-[200px]' src={'http://localhost:4000/uploads/' + link} alt="" />
                        <button onClick={e => removePhoto(e, link)} className='absolute bg-primary text-white p-1 rounded-md bottom-2 right-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z" /></svg>
                        </button>
                        <button onClick={e => selectAsMainPhoto(e, link)} className='absolute bg-yellow-400 text-white p-1 rounded-md bottom-10 right-2'>
                            {link === addedPhotos[0] && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35l.82 3.5Z"></path></svg>
                            )}

                            {link !== addedPhotos[0] && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m3.05-5l-3.08-1.85L8.9 16l.81-3.5L7 10.16l3.58-.31l1.39-3.3l1.4 3.29l3.58.31l-2.72 2.35l.82 3.5"></path></svg>
                            )}
                        </button>
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