import { useState } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link, useNavigate} from 'react-router-dom';

//Authentication
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [loginError, setLoginError] = useState(null);
    // Check if either name or email field is empty
    const isDisabled = password.trim() === '' || email.trim() === '';

    const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Email: ${email}, Pass: ${password}, checked: ${isChecked}`);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('code :', errorCode);
            console.log('msge :', errorMessage);
            if (error.code === 'auth/user-not-found') {
                setLoginError("User not found !!");
            }
            else if (error.code === 'auth/internal-error') {
                setLoginError('Connection Error !!')
            }
            else {
                setLoginError(null);
            }
        });
    }
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-200'>
        <div>
            <h1 className='text-3xl p-8 text-gray-500'><span className='font-semibold'>Creative</span>HI</h1>
        </div>
        <div className='items-center justify-center w-[360px] bg-gray-50 px-5 py-5 shadow-2xl shadow-gray-500'>
            <h1 className='text-md text-gray-600 text-center pb-3'>Sign in to start your session</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <div className="relative border rounded-md shadow-sm">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <AiOutlineMail className="w-6 h-6 text-gray-400" />
                    </span>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="outline-none focus:ring-1 rounded-md  w-full py-2 pl-3 pr-3" />
                </div>
                <div className="relative border rounded-md shadow-sm">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <AiOutlineLock className="w-6 h-6 text-gray-400" />
                    </span>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="outline-none focus:ring-1 rounded-md  w-full py-2 pl-3 pr-3" />
                </div>
                {/* Error message */}
                <div>
                    {loginError && !isDisabled && <p className='text-gray-600 text-center ring ring-yellow-500 rounded'>{loginError}</p>}
                </div>
                {/* Submit button */}
                <div className='flex space-x-3 items-center justify-between'>
                    <div className='flex space-x-3'>
                        <input type="checkbox" name="" id="" onChange={()=>setIsChecked(!isChecked)} className='w-5'/>
                        <p className='text-gray-500 font-semibold'>Remember Me</p>
                    </div>
                    <button 
                        type="submit" 
                        disabled={isDisabled}
                        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        Submit
                    </button>
                </div>
                <Link to={'/forgotPassword'} className='text-blue-600'>I forgot my password</Link>
            </form>
        </div>
    </div>
  )
}
