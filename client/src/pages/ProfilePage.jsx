import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from '../components/AccountNav';

function ProfilePage() {

    const [redirect, setRedirect] = useState(null);

    const { user, ready, setUser } = useContext(UserContext);
    let { subpage } = useParams();

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (subpage === undefined) {
        subpage = 'profile';
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }



    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div>

            <AccountNav />

            {subpage === 'profile' && (
                <div className='text-center border p-12 mt-12'>
                    <div>{user.name}({user.email})</div>
                    <button onClick={logout} className='primary max-w-sm' >Logout</button>
                </div>
            )}

            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}

export default ProfilePage