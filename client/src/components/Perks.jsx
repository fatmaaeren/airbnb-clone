import React from 'react'

function Perks({ selected, onChange }) {

    function handleChecked(ev) {
        const { checked, name } = ev.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <div className='text-gray-500 text-sm mt-4 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('kitchen')} name="kitchen" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.1 13.5q.2-.25.3-.613T5.5 12q0-.75-.5-1.9t-.5-1.725q0-.3.063-.625T4.9 7h1.5q-.275.425-.338.75T6 8.375q0 .575.5 1.725T7 12q0 .525-.1.863t-.3.637H5.1Zm6.5 0q.2-.25.3-.613T12 12q0-.75-.5-1.9T11 8.375q0-.3.063-.625T11.4 7h1.5q-.275.425-.337.75t-.063.625q0 .575.5 1.725t.5 1.9q0 .525-.1.863t-.3.637h-1.5Zm-3.25 0q.2-.25.3-.613t.1-.887q0-.75-.5-1.9t-.5-1.725q0-.3.063-.625T8.15 7h1.5q-.275.425-.337.75t-.063.625q0 .575.5 1.725t.5 1.9q0 .525-.1.863t-.3.637h-1.5Zm1.4 8.5q-2.525 0-4.437-1.688T3 16.125q-.05-.45.25-.788T4 15h10.525l1.1-10.35q.125-1.125.963-1.888T18.6 2q1.25 0 2.125.875T21.6 5q0 .35-.063.925l-.062.575l-1.975-.25l.05-.513q.05-.512.05-.737q0-.425-.288-.713T18.6 4q-.4 0-.675.263T17.6 4.9l-1.15 10.875q-.275 2.65-2.175 4.438T9.75 22Z"></path></svg>
                <span>Kitchen</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.463-3.013T12 7Q9.1 7 6.562 8.088T2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063T12 16q-1.05 0-1.95.388T8.475 17.45L12 21Z"></path></svg>
                <span>Wifi</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M16 19a1 1 0 0 1 .117 1.993L16 21H8a1 1 0 0 1-.117-1.993L8 19h8Zm4-15a2 2 0 0 1 1.995 1.85L22 6v10a2 2 0 0 1-1.85 1.995L20 18H4a2 2 0 0 1-1.995-1.85L2 16V6a2 2 0 0 1 1.85-1.995L4 4h16Z"></path></g></svg>
                <span>TV</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('washer')} name="washer" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22h16a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v16a1 1 0 0 0 1 1zM18 3.924a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2zM12 7c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"></path><path fill="currentColor" d="M12.766 16.929c1.399-.261 2.571-1.315 3.023-2.665a3.853 3.853 0 0 0-.153-2.893a.482.482 0 0 0-.544-.266c-.604.149-1.019.448-1.5.801c-.786.577-1.765 1.294-3.592 1.294c-.813 0-1.45-.146-1.984-.354l-.013.009a4.006 4.006 0 0 0 4.763 4.074z"></path></svg>
                <span>Washer</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('airConditioning')} name="airConditioning" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.75 8.65q-.675.675-1.55 1.025t-1.75.35q-.875 0-1.725-.338T12.2 8.65l-1.875-1.875q-.375-.375-.85-.563T8.5 6.026q-.5 0-.975.188t-.85.562l-1.15 1.15q-.3.3-.713.3t-.712-.3q-.3-.3-.3-.712t.3-.713l1.15-1.15q.675-.675 1.525-1.012T8.5 4q.875 0 1.713.337t1.512 1.013L13.6 7.225q.4.4.875.588T15.45 8q.5 0 .988-.188t.887-.587L18.5 6.05q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712L18.75 8.65Zm0 5q-.675.675-1.538 1.012T15.475 15q-.875 0-1.737-.338T12.2 13.65l-1.875-1.875q-.375-.375-.85-.563t-.975-.187q-.5 0-.975.188t-.85.562L5.5 12.95q-.275.275-.7.275t-.725-.275q-.275-.3-.275-.725t.275-.7L5.25 10.35q.675-.675 1.525-1.012T8.5 9q.875 0 1.713.338t1.512 1.012l1.875 1.875q.4.4.875.588t.975.187q.5 0 .988-.187t.887-.588L18.5 11.05q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712L18.75 13.65Zm-.025 5q-.675.675-1.525 1.012T15.475 20q-.875 0-1.737-.338T12.2 18.65l-1.9-1.875q-.375-.375-.85-.562t-.975-.188q-.5 0-.975.188t-.85.562l-1.15 1.15q-.3.3-.713.3t-.712-.3q-.275-.275-.275-.7t.275-.7L5.25 15.35q.675-.675 1.525-1.012T8.5 14q.875 0 1.713.338t1.512 1.012l1.875 1.875q.4.4.888.588t.987.187q.5 0 .975-.188t.875-.587L18.5 16.05q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.712l-1.175 1.175Z"></path></svg>
                <span>Air Conditioning</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('hairDryer')} name="hairDryer" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><mask id="ipSHairDryerOne0"><g fill="none" stroke="#fff" strokeWidth="4"><path d="M11 12.138c0-.079.059-.146.137-.156L32.082 9.28C37.342 8.6 42 12.697 42 18c0 5.303-4.659 9.399-9.918 8.72l-20.945-2.702a.157.157 0 0 1-.137-.156V12.138Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M11 12L4 8v20l7-4"></path><path d="m38 25l-6.694 15.898A5.07 5.07 0 0 1 26.634 44c-3.625 0-6.078-3.695-4.672-7.036L27 25"></path><circle cx="35" cy="18" r="9" fill="#fff"></circle></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHairDryerOne0)"></path></svg>
                <span>Hair Dryer</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('petsAllowed')} name="petsAllowed" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.36 1.77-.29 3.35-1.47 3.53c-1.17.18-2.43-1.11-2.8-2.89c-.37-1.77.3-3.35 1.48-3.54m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73c-1.13.49-2.67-.39-3.46-1.96C1.62 9.75 1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72c-.79 1.57-2.33 2.45-3.46 1.96c-1.13-.49-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6m-1.67 10.78c.04.94-.68 1.98-1.54 2.37c-1.79.82-3.91-.88-5.9-.88c-1.99 0-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c1.41-1.41 2.41-4.06 4.42-4.06c2 0 3.06 2.61 4.41 4.06c1.11 1.22 2.96 2.25 3.03 3.88Z"></path></svg>
                <span>Pets Allowed</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('freePark')} name="freePark" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>
                <span>Free Park</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('iron')} name="iron" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><mask id="ipSIronTwo0"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="M4 40h40l-2-16H20c-8.837 0-16 7.163-16 16Z"></path><path stroke="#fff" d="M16 8h24l2 16"></path><path stroke="#000" d="M17 32h2"></path></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSIronTwo0)"></path></svg>
                <span>Iron</span>
            </label>
            <label className='border p-4 flex rounded-2xl items-center gap-2 cursor-pointer'>
                <input type="checkbox" checked={selected.includes('securityCameras')} name="securityCameras" onChange={handleChecked} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.25A3.25 3.25 0 0 1 5.25 3h8.5A3.25 3.25 0 0 1 17 6.25v6.5A3.25 3.25 0 0 1 13.75 16h-8.5A3.25 3.25 0 0 1 2 12.75v-6.5Zm19.62-2.653a.75.75 0 0 1 .38.653v10.5a.75.75 0 0 1-1.136.643L18 13.675v-8.35l2.864-1.718a.75.75 0 0 1 .755-.01ZM8.135 17a2.501 2.501 0 0 1-2.386 1.75h-2a.75.75 0 0 0-.75.75v1.6a.9.9 0 0 0 .9.9h1.944a6.158 6.158 0 0 0 6.048-5H8.136Z"></path></svg>
                <span>Security Cameras</span>
            </label>

        </div>
    )
}

export default Perks