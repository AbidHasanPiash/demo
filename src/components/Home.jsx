import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//Authentication
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase'

export default function Home() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        setAuthUser(user);
      } else {
        // User is signed out
        // ...
        setAuthUser(null);
        navigate('/login');
      }
    });
  },[]);
  const Logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/login');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-10'>
        <h1>Home page</h1>
        <h1>{authUser ? <p>Welcome {authUser.email}</p> : <p>Please Login</p> }</h1>
        <button
        onClick={Logout}
          className='rounded-md py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white'>
          Log Out
        </button>
        
    </div>
  )
}
