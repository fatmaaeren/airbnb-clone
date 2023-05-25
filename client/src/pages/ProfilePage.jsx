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
                <div className='border p-12 mt-12'>
                    <div className='flex gap-8 mb-12 border rounded-xl p-8'>
                        <div className='w-24 h-24 rounded-full overflow-hidden bg-gray-300 text-white '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="8em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"></path></svg>
                        </div>
                        <div>
                            <div className='text-lg font-bold text-gray-600 my-'>{user.name}</div>
                            <div className='text-md text-primary my-4'>{user.email}</div>
                        </div>

                    </div>

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