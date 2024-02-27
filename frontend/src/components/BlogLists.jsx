import { useState, useEffect } from "react";
import axios from "axios";
import Blogs from "./Blogs";
const BlogLists = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("/api/api/blogs");
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="container mx-auto p-2 space-y-2">
      {blogs.map((blog) => (
        <Blogs key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogLists;
