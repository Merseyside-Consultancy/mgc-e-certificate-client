import { useContext, useState } from 'react';
import {  FaUserPlus } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [errors,setErrors] = useState('')
    const notify = () => toast.success('Successfully Register', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const handleRegister = event => {
        event.preventDefault()
        setErrors('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        if(password.length < 6){
            setErrors('Your password is less then 6 characters')
            return
        }
        
        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            notify()
            form.reset()
        })
        .catch(error => {
            console.log(error.message)
            setErrors(error.message)
        })
    }

    return (
        <div className='py-36 bg-sky-50'>
            <div className='flex justify-center'>
            <form onSubmit={handleRegister}>
            <div className='w-1/2 ms-60 mt-20 mb-10 '>
            <div className='border border-slate-300 rounded shadow-md shadow-sky-500'>
            <h2 className='text-2xl font-bold ps-6 pt-6 pb-0 mb-2'><FaUserPlus/> Register</h2>
            <input className='m-5 border-b w-3/4 pb-2 border-slate-400 p-2' type="text" name='name' placeholder='Your Name' />
            <input className='m-5 border-b w-3/4 pb-2 border-slate-400 p-2' type="email" name='email' placeholder='Username or email' required/>
            <input className='m-5 border-b w-3/4 pb-2 border-slate-400 p-2' type="password" name='password' placeholder='Password' required/>
            <div className='text-center px-5'>
            <p className='text-red-500 text-center'>{errors}</p>
            <button type='submit' className='bg-sky-400 text-white font-serif px-28 py-2 rounded mb-10 mt-5'>Register</button>
            </div>
        </div>
        </div>
        </form>
        </div>
        <ToastContainer/>
        </div>
        
    );
};

export default Register;