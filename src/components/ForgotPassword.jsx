import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    // Check if either name or email field is empty
    const isDisabled = email.trim() === '';

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    }
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-200'>
        <div>
            <h1 className='text-3xl p-8 text-gray-500'><span className='font-semibold'>Creative</span>HI</h1>
        </div>
        <div className='items-center justify-center w-[360px] bg-gray-50 px-5 py-5 shadow-2xl shadow-gray-500'>
            <h1 className='text-md text-gray-600 text-center pb-3'>You forgot your password? Here you can easily retrieve a new password.</h1>
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
                {/* Submit button */}
                <button 
                    type="submit" 
                    disabled={isDisabled}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Submit
                </button>
                {/* Other options */}
                <Link to={'/login'} className='text-blue-600'>Login</Link>
            </form>
        </div>
    </div>
  )
}
