import { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUserCheck } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()
    
    const from = location.state?.from?.pathname

    const notify = () => toast.success('Successfully Login', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        const notify2 = () => toast.warning('Please provide your email address to reset password', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        const notify3 = () => toast.success('Please check your email and reset your password', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    const handleLogin = event => {
        event.preventDefault()
        setErrors('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        loginUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from,{replace: true})
            notify()
            form.reset()
        })
        .catch(error => {
            console.log(error.message)
            setErrors(error.message)
        })
    }

    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if(!email){
            notify2();
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            notify3();
        })
        .catch(error =>{
            setErrors(error.message)
        } )
    }

    return (
        <div className='flex justify-center py-36 bg-sky-50'>
            <div>
            <form onSubmit={handleLogin}>
            <div className='w-1/2 ms-52 mt-20 mb-10 '>
            <div className='border border-slate-300 rounded shadow-md shadow-sky-500'>
            <h2 className='text-2xl font-serif ps-6 pt-6 pb-0 mb-2'><FaUserCheck/>Admin Login</h2>
            <input className='m-5 border-b w-72 pb-2 border-slate-400 p-2' type="email" name='email' ref={emailRef} placeholder='Admin email' required/>
            <input className='m-5 border-b w-72 pb-2 border-slate-400 p-2' type="password" name='password' placeholder='Password' required/>
            <div className='text-center p-10'>
            <p className='text-center text-red-500'>{errors}</p>
            <p onClick={handleResetPassword} className='text-start mb-3 -ms-4 text-blue-700 font-semibold underline'>Forget Password?</p>
            <button type='submit' className='bg-sky-400 text-white font-serif px-40 py-2 rounded'>Login</button>
            </div>
        </div>
        </div>
        </form>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default Login;