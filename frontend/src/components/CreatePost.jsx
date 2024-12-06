import { useState } from "react";
import { Link } from "react-router-dom";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex gap-2 rounded-lg border bg-white lg:mx-5 my-2 p-4 shadow-md">
        <Link to="/">
          <img
            width="40px"
            height="40px"
            className="size-10 rounded-full"
            src={`https://i.pravatar.cc/40?img=0`}
            loading="lazy"
          />
        </Link>
        <button
          onClick={() => setShow(!show)}
          className="flex-grow rounded-full border border-gray-200 bg-gray-100 px-6 text-start text-lg text-gray-600 outline-none hover:bg-gray-200"
        >
          What's on your mind, F.E?
        </button>
      </div>
      {show && <CreatePostModal modalHide={() => setShow(false)} />}
    </>
  );
};

export default CreatePost;
