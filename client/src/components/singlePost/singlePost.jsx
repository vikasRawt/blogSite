import { useLocation } from 'react-router';
import './singlePost.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Singlepost() {

const location = useLocation()
// console.log(location)
const path = location.pathname.split("/")[2];
const [post, setPost] = useState({});

useEffect( ()=>{
  const getPost = async ()=>{
    const res= await axios.get("/posts/"+ path);
    setPost(res.data)
  };
  getPost();
})


  return (
    <div className='singlePost'>
        <div className='singlepostwrapper'>
          {post.photo &&
            <img src={post.photo} 
            className='singlePostImg' 
            alt='single-img'/>
          }
            <h1>{post.title} 
                <div className='singlePostEdit'>
                <i className=" singlePostEditIcon fa-solid fa-file-pen"></i>
                <i className="singlePostEditIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username }`} className='link'>
             <b>{post.username}</b>
            </Link>
            </span>
            
            <span className='singlePostTime'>{new Date(post.createdAt).toDateString()}</span></div>
        </div>
        <p className='singlePostDes'>{post.desc}</p>

    </div>
  );
}
