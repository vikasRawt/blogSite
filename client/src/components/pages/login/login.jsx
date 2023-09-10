import { Link } from 'react-router-dom';
import './login.css';
import { useRef, useContext } from 'react';
import { Context } from '../../../context/Context';
import axios from "axios";


function Login(){

const userRef = useRef();
const passwordRef = useRef();
const { dispatch, isFetching}= useContext(Context);



const handleSubmit= async (e)=>{
e.preventDefault();
dispatch({type:"LOGIN_START"});
try{

const res = await axios.post("/auth/login",{
    username:userRef.current.value,
    password:passwordRef.current.value
});
dispatch({type:"LOGIN_SUCCESS", payload:res.data});

}
catch(err){
    dispatch({type:"LOGIN_FAILURE"});

}

}

    return(
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                 <label>Username</label>
                <input className='loginInput'
                 type='text' 
                placeholder='Enter your Username...'
                ref={userRef}
                />
                <label>Password</label>
                <input className='loginInput' type='password' 
                placeholder='ENter your password...' 
                ref = {passwordRef}
                />
                <button className='loginButton' type='submit' disabled={isFetching}>Login</button>
            </form>
            <button className='loginRegisterButton' type='submit'>
                <Link  className= 'link' to='/register'>Register</Link>
            </button>
        </div>
    )
};


export default Login;