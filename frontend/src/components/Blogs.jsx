import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
  return (
    <>
      <div className="rounded-lg border bg-white shadow-md">
        <div className="p-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              width="40px"
              height="40px"
              className="size-10 rounded-full"
              src={`https://i.pravatar.cc/40?img=${blog.id}`}
              loading="lazy"
            />
            <div className="leading-none">
              <span className="font-bold hover:underline">User</span>
              <br />
              <small className="font-semibold text-neutral-600">
                September 08, 2024
              </small>
            </div>
          </Link>
          {blog.body && <p className="mt-2">{blog.body}</p>}
        </div>
        <figure className="bg-black">
          <img
            className="mx-auto min-h-[300px] max-h-[680px]"
            src={`https://picsum.photos/id/${blog.id}/1440`}
            loading="lazy"
          />
        </figure>
        <div className="mx-5 flex h-11 items-center justify-between px-5 py-1 text-neutral-600">
          <span>No Likes</span>
          <span>No shares</span>
        </div>
        <div className="mx-5 grid grid-cols-3 border-t py-1 text-neutral-600">
          <button>
            <span className="text-lg font-semibold">Like</span>
          </button>
          <button>
            <span className="text-lg font-semibold">Comment</span>
          </button>
          <button>
            <span className="text-lg font-semibold">Share</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
