import { useContext} from 'react'
import { UserContext } from '../context/UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';

function AccountPage() {

    const { user, ready } = useContext(UserContext);

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />
    }

    let {subpage} = useParams();

    if (subpage === undefined) {
        subpage = 'profile';
    }

    function linkClasses (type=null) {
        let classes = 'py-2 px-6';

        if(type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }

        return classes;
    }

    return (
        <div>
            <hr className='mt-4' />
            <nav className='w-full flex mt-4 gap-2'>
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My Acommadations</Link>
            </nav>
        </div>
    )
}

export default AccountPage