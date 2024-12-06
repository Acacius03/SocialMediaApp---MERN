import { useState } from "react";
import { FaImage, FaVideo, FaX } from "react-icons/fa6";

const CreatePostModal = ({ modalHide }) => {
  const [preview, setPreview] = useState("");

  return (
    <div className="fixed inset-0 grid grid-cols-1 grid-rows-1">
      <div
        onClick={() => modalHide(false)}
        className="bg-gray-400/20 row-span-full col-span-full"
      ></div>
      <div className="p-2 row-span-full col-span-full">
        <div className="m-auto border max-w-[680px] max-h-[680px] overflow-hidden rounded-lg bg-white">
          <header className="relative border-b border-neutral-200 p-5">
            <h3 className="text-center text-2xl font-bold">Create Post</h3>
            <button
              onClick={() => modalHide(false)}
              className="absolute top-[50%] translate-y-[-50%] btn-float right-5 size-10 bg-gray-100"
            >
              <FaX />
            </button>
          </header>
          <div className="flex flex-col gap-1 overflow-y-auto p-6">
            <div className="flex h-14 items-center gap-3 ml-2">
              <img
                width="56px"
                height="56px"
                className="size-14 rounded-full"
                src={`https://i.pravatar.cc/56?img=0`}
                loading="lazy"
              />
              <div className="leading-none">
                <span className="font-bold">User</span>
                <br />
                <small className="font-semibold text-neutral-600">
                  September 08, 2024
                </small>
              </div>
              {/* <div className="leading-none">
                <span className="font-bold">User</span>
                <br />
                <small>September 04, 2024</small>
              </div> */}
            </div>
            <form
              className="mt-2 flex flex-grow flex-col gap-2 px-2"
              encType="multipart/form-data"
            >
              {/* <div className="max-h-[200px]">
                    <textarea wire:model="body" id="content" name="content" placeholder="Whats's on your mind?" x-ref="textarea"
                        @input="$refs.textarea.style.height = 'auto';
                        $refs.textarea.style.height = $refs.textarea.scrollHeight + 'px'"
                        className="max-h-40 w-full resize-none bg-transparent p-2 text-2xl outline-none"></textarea>
                </div> */}
              <div className="relative mb-2 rounded-md border border-neutral-400 p-1">
                <button className="btn absolute right-3 top-3 rounded-full border bg-neutral-100 p-2 text-neutral-400 shadow-lg">
                  <FaX />
                </button>
                <figure className="">
                  <img
                    className="min-h-[200px] object-contain mx-auto rounded-sm"
                    alt="Preview Image"
                    src="https://picsum.photos/140"
                  />
                </figure>
              </div>
              <div className="flex items-center justify-between rounded border border-neutral-400 p-4">
                <input
                  className="hidden"
                  id="image"
                  name="image"
                  accept="image/jpeg, image/png"
                  type="file"
                />
                <p className="font-bold">Add to your post</p>
                <div className="flex">
                  <label
                    className="size-10 text-2xl btn rounded-full text-red-600 hover:bg-slate-600/20"
                    htmlFor="photo"
                  >
                    <FaVideo />
                  </label>
                  <label
                    className="size-10 text-2xl btn rounded-full  text-green-500 hover:bg-slate-600/20"
                    htmlFor="image"
                  >
                    <FaImage />
                  </label>
                </div>
              </div>
              <button className="w-full rounded bg-blue-700 py-2 text-xl font-bold text-white">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
