import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const {setUser} = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      setUser(response.data);
      setRedirect(true);
    }
    catch (e) {
      alert('Login Failed')
    }
  }

  if(redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className=' grow flex items-center justify-around'>
      <div className=''>
        <h1 className='text-3xl text-center'>Login</h1>
        <form className='max-w-md mx-auto p-3' onSubmit={handleLogin}>

          <input
            className='focus:outline-none'
            type='email'
            placeholder="Your E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            className='focus:outline-none'
            type='password'
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className='primary'>Login</button>
          <div className='text-center py-4 text-gray-500'>
            Dont hav an account yet?
            <Link className='underline text-black' to={'/register'}>Register Now</Link></div>
        </form>
      </div>

    </div>
  )
}

export default LoginPage