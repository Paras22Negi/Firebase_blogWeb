import { onValue, ref } from "firebase/database";
import { db } from "../firebaseconfig";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "This is blog 1 content",
      CreatedAt: "about 30 mins ago",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "This is blog 2 content",
      CreatedAt: "about 30 mins ago",
    },
    {
      id: 3,
      title: "Blog 3",
      content:
        "This is blog 3 content",
      CreatedAt: "about 30 mins ago",
    },
    {
      id: 4,
      title: "Blog 4",
      content: "This is blog 4 content",
      CreatedAt: "about 30 mins ago",
    },
    {
      id: 5,
      title: "Blog 5",
      content: "This is blog 5 content",
      CreatedAt: "about 30 mins ago",
    },
    {
      id: 6,
      title: "Blog 6",
      content: "This is blog 6 content",
      CreatedAt: "about 30 mins ago",
    },
  ];
  const [finalBlog, setFinalBlog] = useState([]);

  const getBlogs = ()=>{
    const blogRef = ref (db, 'blogs/');
    onValue(blogRef, (items)=>{
      const data = items.val()
      console.log(data)
      const finalArray=[]
      for (let key in data){
        console.log(key)
        finalArray.push(data[key])
      }
      setFinalBlog(finalArray)
    })
  }

  useEffect(()=>{
    getBlogs()
  },[])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Blogs</h2>

      {/* Grid with 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {finalBlog.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border rounded-lg shadow-md h-60 hover:shadow-lg transition flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

            {/* content that wraps but does not overflow */}
            <p className="text-gray-600 break-words line-clamp-3 flex-grow">
              {blog.content}
            </p>

            {/* timestamp fixed at bottom */}
            <p className="text-gray-500 text-sm mt-auto">{blog.CreatedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
