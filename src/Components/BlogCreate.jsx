import React from "react";

function BlogCreate() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog submitted!");
  };

  return (
    <div className="m-10 pl-7 h-auto w-auto ">
      <form onSubmit={handleSubmit}>
        <label className="font-bold italic ml-4">Heading</label>
        <div className="w-full h-16 mt-3 flex mb-5">
          <input
            className="ml-2 border-2 border-gray-600 w-full rounded-2xl pl-4 focus:outline-none"
            type="text"
            placeholder="Write Your Thoughts here..."
          />
        </div>
        <label className="font-bold italic ml-4 mt-10">Description</label>
        <div className="w-full h-60 mt-3 flex ">
          <textarea
            className="ml-2 border-2 border-gray-600 w-full rounded-2xl pl-4 pt-2 focus:outline-none"
            placeholder="Write Your Description here..."
          >
            {" "}
          </textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-2xl bg-black h-10 w-100 mt-10 text-white italic cursor-pointer"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogCreate;
