import { onValue, ref } from "firebase/database";
import { db } from "../firebaseconfig";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

function Blog() {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Blog 1",
  //     content: "This is blog 1 content",
  //     CreatedAt: "about 30 mins ago",
  //   },
  //   {
  //     id: 2,
  //     title: "Blog 2",
  //     content: "This is blog 2 content",
  //     CreatedAt: "about 30 mins ago",
  //   },
  //   {
  //     id: 3,
  //     title: "Blog 3",
  //     content:
  //       "This is blog 3 content",
  //     CreatedAt: "about 30 mins ago",
  //   },
  //   {
  //     id: 4,
  //     title: "Blog 4",
  //     content: "This is blog 4 content",
  //     CreatedAt: "about 30 mins ago",
  //   },
  //   {
  //     id: 5,
  //     title: "Blog 5",
  //     content: "This is blog 5 content",
  //     CreatedAt: "about 30 mins ago",
  //   },
  //   {
  //     id: 6,
  //     title: "Blog 6",
  //     content: "This is blog 6 content",
  //     CreatedAt: "about 30 mins ago",
  //   },
  // ];
  const [finalBlog, setFinalBlog] = useState([]);

  const getBlogs = ()=>{
    const userId = JSON.parse(localStorage.getItem("user")).uid;
    const blogRef = ref (db, `users/${userId}/blogs/`); //const blogRef = ref (db, 'blogs/');
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
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        className="my-8"
      >
        {finalBlog.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="p-4 border rounded-lg shadow-md h-60 hover:shadow-lg transition flex flex-col bg-gray-200">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

              <p className="text-gray-600 break-words line-clamp-3 flex-grow">
                {blog.content}
              </p>

              <p className="text-gray-500 text-sm mt-auto">{blog.CreatedAt}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blog;
