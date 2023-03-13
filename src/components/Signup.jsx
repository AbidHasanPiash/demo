import { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    // Check if either name or email field is empty
    const isDisabled = name.trim() === '' || email.trim() === '' || isChecked === false;
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Name: ${name}, Email: ${email}, Pass: ${password}, RePass: ${rePassword}, checked: ${isChecked}`);
    }
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-200'>
        <div>
            <h1 className='text-3xl p-8 text-gray-500'><span className='font-semibold'>Creative</span>HI</h1>
        </div>
        <div className='items-center justify-center w-[360px] bg-gray-50 px-5 py-5 shadow-2xl shadow-gray-500'>
            <h1 className='text-md text-gray-600 text-center pb-3'>Register a new membership</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <div className="relative border rounded-md shadow-sm">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <AiOutlineUser className="w-6 h-6 text-gray-400" />
                    </span>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="outline-none focus:ring-1 rounded-md  w-full py-2 pl-3 pr-3" />
                </div>
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
                <div className="relative border rounded-md shadow-sm">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <AiOutlineLock className="w-6 h-6 text-gray-400" />
                    </span>
                    <input 
                        type="password" 
                        placeholder="Retype Password" 
                        value={rePassword} 
                        onChange={(e) => setRePassword(e.target.value)} 
                        className="outline-none focus:ring-1 rounded-md  w-full py-2 pl-3 pr-3" />
                </div>
                {/* Submit button */}
                <div className='flex space-x-3 items-center justify-between'>
                    <div className='flex space-x-3'>
                        <input type="checkbox" name="" id="" onChange={()=>setIsChecked(!isChecked)} className='w-5'/>
                        <p className='text-gray-600'>I agree to the <Link to={'/'} className='text-blue-500 hover:text-blue-700 hover:border-b hover:underline'>terms</Link></p>
                    </div>
                    <button 
                        type="submit" 
                        disabled={isDisabled}
                        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        Submit
                    </button>
                </div>
                {/* Sign in with others */}
                <p className='text-gray-400 text-center py-1'>- OR -</p>
                <button className='relative bg-blue-500 rounded py-2 text-white hover:bg-blue-600'>
                    <span className="absolute inset-y-0 left-0 pl-10 flex items-center">
                        <BsFacebook className="w-6 h-6 text-gray-50" />
                    </span>
                    Sign up using Facebook
                </button>
                <button className='relative bg-rose-500 rounded py-2 text-white hover:bg-rose-600'>
                <span className="absolute inset-y-0 left-0 pl-10 flex items-center">
                        <BsGoogle className="w-6 h-6 text-gray-50" />
                    </span>
                    Sign up using Google
                </button>
                <Link to={'/login'} className='text-blue-600'>I already have a membership</Link>
            </form>
        </div>
    </div>
  )
}
