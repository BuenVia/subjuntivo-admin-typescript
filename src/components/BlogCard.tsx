import React, { useState } from "react"
import { Blogs } from "../models";
import { AiOutlineEdit } from 'react-icons/ai'
import EditBlog from "./EditBlog";

interface Props {
    item: Blogs
}

const BlogCard: React.FC<Props> = ({ item }) => {

    const [showEdit, setShowEdit] = useState<boolean>(false)

    const handleClick = () => {
        console.log(item._id);
        setShowEdit(value => !value)
    }

    return (
        <div>
            <span>{item.createdAt}</span>
            <span>{item.title}</span>
            <AiOutlineEdit className="edit-btn" onClick={e => handleClick()} />
            {showEdit && <EditBlog item={item} />}
        </div>
    )
}

export default BlogCard