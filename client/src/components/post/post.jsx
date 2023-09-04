import './post.css'
import {Link} from "react-router-dom";

function Post({post}){


    return(
        <div className='post'>
           {post.photo&&(
               <img src={post.photo} className='postImg' alt='my-img-post'/>
            )}
            <div className='postInfo'>
                <div className='postCategory'>
                    {post.categories.map((c)=>(
                        <span className='postCat'>{c.name}</span>)

                    )}
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                <span className='postTitle'>{post.title} </span>
                 </Link>
                <hr/>
                <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDes'>{post.desc}</p>
        </div>
    )
};

export default Post;