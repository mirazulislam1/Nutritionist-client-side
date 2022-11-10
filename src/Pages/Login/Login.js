import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const {logIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useTitle('Login')
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
    }
    // google signIn

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            
        })
        .catch(error =>console.error(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div onClick={handleGoogleSignIn} className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignIn with Google" />
                        </div>
                    </form>
                    <p className='text-center font-bold mb-2'>Create a new account <Link className='text-orange-600 text-bold' to='/register'>Sign Up</Link></p>
                </div>
            </div>
     
    );
};

export default Login;