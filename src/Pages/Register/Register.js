import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    useTitle('Register')
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}  className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="name" className="input input-bordered" />
                </div>
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
            </form>
            <p className='text-center font-bold mb-2'>Already have an account <Link className='text-orange-600 text-bold' to='/login'>Login</Link></p>
        </div>
    </div>
    );
};

export default Register;