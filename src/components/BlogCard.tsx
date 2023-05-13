import React, { useState } from "react"
import { Blogs } from "../models";
import { AiOutlineEdit, AiFillRead } from 'react-icons/ai'
import EditBlog from "./EditBlog";
import ReadBlog from "./ReadBlog";

interface Props {
    item: Blogs
}

const BlogCard: React.FC<Props> = ({ item }) => {

    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [showRead, setShowRead] = useState<boolean>(false)

    const handleEditClick = () => {
        setShowEdit(value => !value)
    }

    const handleReadClick = () => {
        setShowRead(value => !value)
    }

    return (
        <div className="blog-card">
            <span>{item.createdAt}</span>
            <span>{item.title}</span>
            <AiOutlineEdit className="edit-btn" onClick={handleEditClick} />
            <AiFillRead className="edit-btn" onClick={handleReadClick} />
            {showEdit && <EditBlog item={item} />}
            {showRead && <ReadBlog item={item} />}
        </div>
    )
}

export default BlogCard