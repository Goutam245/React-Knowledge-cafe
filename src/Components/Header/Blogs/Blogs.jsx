import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
      fetch('Blogs.json')
      .then(res => res.json())
      .then(data=> setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
             <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;