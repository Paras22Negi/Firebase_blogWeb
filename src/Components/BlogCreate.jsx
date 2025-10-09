import React from "react";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { BlogWeb } from "../firebaseconfig";

function BlogCreate() {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
  });
  const getSetValue=(event)=>{
    const inputName = event.target.name
    const inputValue = event.target.value
    const obj = {...formData}
    obj[inputName] = inputValue
    setFormData(obj)
  }
  
  const saveBlog =(event)=>{
    event.preventDefault();
    const blogId = new Date().getTime();
    const db = getDatabase(BlogWeb);
    const payload = {
      id: blogId,
      title: formData.heading,
      content: formData.description,
      CreatedAt: new Date().toLocaleString(),
    };
    const userId = JSON.parse(localStorage.getItem("user")).uid;
    set(ref(db, `users/${userId}/blogs/` + blogId), payload)
      .then(() => {
        // optionally clear form after successful save
        setFormData({ heading: "", description: "" });
      })
      .catch((err) => {
        console.error("Failed to save blog", err);
      });
  }

  return (
    <div className="m-10 pl-7 h-auto w-auto ">
      <form onSubmit={saveBlog}>
        <label className="font-bold italic ml-4">Heading</label>
        <div className="w-full h-16 mt-3 flex mb-5">
          <input
            className="ml-2 border-2 border-gray-600 w-full rounded-2xl pl-4 focus:outline-none"
            type="text"
            value={formData.heading}
            name="heading"
            onChange={getSetValue}
            placeholder="Write Your Thoughts here..."
          />
        </div>
        <label className="font-bold italic ml-4 mt-10">Description</label>
        <div className="w-full h-60 mt-3 flex ">
          <textarea
            className="ml-2 border-2 border-gray-600 w-full rounded-2xl pl-4 pt-2 focus:outline-none"
            placeholder="Write Your Description here..."
            name="description"
            value={formData.description}
            onChange={getSetValue}
          />
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
