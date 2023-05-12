import { Blogs } from "../models"

interface Props {
    item: Blogs
}


const EditBlog: React.FC<Props> = ({ item }) => {
    return (
        <div>
            <p>Edit Blog</p>
            <form  className='new-blog__form'>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={item.title} />
                    <label htmlFor="auth">Author</label>
                    <input type="text" name="auth"  value={item.auth} />
                </div>
                <textarea name="markdown" value={item.sanitizedHtml} ></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditBlog