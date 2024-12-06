import { useState, useEffect } from "react";
import axios from "axios";

import BlogLists from "../components/BlogLists";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("/api/api/blogs");
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex">
        <aside className="sticky top-[0px] -mt-16 hidden h-screen w-full max-w-[360px] pt-[66px] xl:block"></aside>
        <main className="flex-grow px-2 lg:flex-shrink-0">
          <div className="mx-auto w-full max-w-[680px]">
            <CreatePost />
            <BlogLists blogs={blogs} />
          </div>
        </main>
        <aside className="sticky top-[0px] -mt-16 hidden h-screen w-full max-w-[360px] pt-[66px] xl:block"></aside>
      </div>
    </div>
  );
};

export default Home;
