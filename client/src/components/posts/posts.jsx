import Post from "../post/post";
import "./posts.css";

function Posts({posts}){

return(
    <div className="posts">
    {posts.map( (p) =>(
    <Post post = {p}/>
    ))}
    </div>
)

}

export default Posts;