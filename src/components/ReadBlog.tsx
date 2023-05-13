import React from 'react'
import { Blogs } from '../models'

interface Props {
    item: Blogs
}

const ReadBlog: React.FC<Props> = ({ item }) => {
    return (
        <div>
            <h1>Read Blog</h1>
            <h4>{item.title}</h4>
            <p>By {item.auth}</p>
            {`${item.markdown}`}
        </div>
    )
}

export default ReadBlog