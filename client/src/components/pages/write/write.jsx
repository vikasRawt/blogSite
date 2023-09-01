import './write.css'

function Write(){

return(
    <div className='write'>
        <img src='/img5.jpg' className='writeImg' alt='img-5 write'/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput'style={{display:"none"}}></input>
                <input type='text' placeholder='Title'className='writeInput' autoFocus={true}></input>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
)

}

export default Write;