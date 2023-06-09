import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Blogs } from './models';
import NewBlog from './components/NewBlog';
import BlogCard from './components/BlogCard';


const App: React.FC = () => {
  
  const URL = 'http://localhost:8080/api/subjuntivo/read'
  const [blogs, setBlogs] = useState<Blogs[]>([])
  const [showForm, setShowForm] = useState<boolean>(false)

  // Get the current blogs
  const getBlogs = async () => {
    try {
      await axios.get(URL).then(res => setBlogs(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])



  return (
    <div className="App">
      <div className="container">
        <h1>Subjuntivo Admin</h1>

        {showForm && <NewBlog />}

        <button className='new-btn' onClick={() => {setShowForm(value => !value)}}>{showForm ? "Close" : "New"}</button>

        {blogs.map(blog => {
          return (
            <BlogCard key={blog._id} item={blog} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
