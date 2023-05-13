import { useState } from "react"
import { BlogPosts, Blogs } from "../models"
import axios from "axios"

interface Props {
    item: Blogs
}


const EditBlog: React.FC<Props> = ({ item }) => {

    const [editBlog, setEditBlog] = useState<BlogPosts>({
        title: item.title,
        auth: item.auth,
        markdown: item.markdown
    })

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget
        setEditBlog(prevVals => {
            return {
                ...prevVals,
                [name]: value
            }
        })
    }

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            axios
            .post(`http://localhost:8080/api/subjuntivo/update/${item._id}`, editBlog)
            .then(res => console.log(res.data))
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = () => {
        try {
            axios.post(`http://localhost:8080/api/subjuntivo/delete/${item._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <p>Edit Blog</p>
            <form  className='new-blog__form' onSubmit={e => handleEditSubmit(e)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={handleChange} value={editBlog.title} />
                    <label htmlFor="auth">Author</label>
                    <input type="text" name="auth" onChange={handleChange} value={editBlog.auth} />
                </div>
                <textarea name="markdown" onChange={handleChange} value={editBlog.markdown}></textarea>
                <button type='submit'>Submit</button>
            </form>
            <div>
                <button className="delete-btn" onClick={handleDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default EditBlog