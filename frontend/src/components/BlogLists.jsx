import Blogs from "./Blogs";

const BlogLists = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <Blogs key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default BlogLists;
