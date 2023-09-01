import './post.css'

function Post(){


    return(
        <div className='post'>
            <img src='/img6.jpg' className='postImg' alt='my-img-post'/>
            <div className='postInfo'>
                <div className='postCategory'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Sport</span>
                </div>
                <span className='postTitle'>Lorem ipsum dolor, sit amet </span>
                <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est laborum 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias molestiae
             ut recusandae sunt repudiandae perferendis, eum rem nesciunt iure! Voluptas voluptatibus
             magnam illum odit provident assumenda. Dolor, accusamus voluptatem.
            et fugit quisquam asperiores similique dolorum eaque culpa, ipsam consectetur officiis provident hic iusto unde architecto impedit vel id.</p>
        </div>
    )
};

export default Post;