import './register.css';
import { Link } from 'react-router-dom';

function Register(){

    return(
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm'>
                 <label>UserName</label>
                <input className='registerInput' type='text' placeholder='Enter your Email...'/>
                <label>Email</label>
                <input className='registerInput' type='text' placeholder='Enter your Email...'/>
                <label>Password</label>
                <input className='registerInput' type='password' placeholder='ENter your password...' />
                <button className='registerButton'>Register</button>
            </form>
            <button className='registerRegisterButton'>
                <Link className="link" to="/login">Login</Link>
                </button>
        </div>
    )
};


export default Register;