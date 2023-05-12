import React, { useState } from 'react'
import { BlogPosts } from '../models'
import axios from 'axios'


const NewBlog: React.FC = () => {
    
    const [blogPost, setBlogPost] = useState<BlogPosts>({
        title: "",
        auth: "",
        markdown: ""
    })

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget
        setBlogPost(prevVals => {
            return {
                ...prevVals,
                [name]: value
            }
        })
    }

    const handleBlogSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            axios
            .post('http://localhost:8080/api/subjuntivo/create', blogPost)
            .then(res => console.log(res.data))
            console.log(blogPost)
        } catch (error) {
            console.error(error)
        }
        setBlogPost({
            title: "",
            auth: "",
            markdown: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleBlogSubmit} className='new-blog__form'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={handleChange} value={blogPost.title} />
                <label htmlFor="auth">Author</label>
                <input type="text" name="auth" onChange={handleChange} value={blogPost.auth} />
                <textarea name="markdown" onChange={handleChange} value={blogPost.markdown} ></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewBlog