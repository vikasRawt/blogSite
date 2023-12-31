import { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register(){
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError]=useState(false);
  
const  handleSubmit = async (e)=>{
e.preventDefault();
setError(false);
try{
    const res = await axios.post('/auth/register',{
        username,
        email,
        password
    });
    res.data && window.location.replace('/login');   //after registering data redirecting to login page::-
}catch(err){
setError(true);
}
}

    return(
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                 <label>UserName</label>
                <input className='registerInput'
                type='text' 
                placeholder='Enter your Email...'
                onChange={(e)=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input className='registerInput'
                 type='text' 
                 placeholder='Enter your Email...'
                 onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input className='registerInput' type='password'
                 placeholder='ENter your password...'
                 onChange={(e)=>setPassword(e.target.value)} />
                <button className='registerButton'>Register</button>
            </form>
            <button className='registerRegisterButton'>
                <Link className="link" to="/login">Login</Link>
                </button>
{    error && <span style={{color:'red'}}>Something went wrong!!</span>} 
       </div>
    )
};


export default Register;