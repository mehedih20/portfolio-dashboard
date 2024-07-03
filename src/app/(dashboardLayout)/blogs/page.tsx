"use client";
import AddBlog from "@/components/dashboard/Blogs/AddBlog";
import BlogsContent from "@/components/dashboard/Blogs/BlogsContent";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TiArrowBack } from "react-icons/ti";

const BlogsPage = () => {
  const [isAddBlog, setIsAddBlog] = useState(false);

  return (
    <div className="px-4 pb-[100px]">
      <div className="flex justify-between items-center pt-5 pb-10">
        <h2 className="text-3xl text-gray-600 ">Blogs</h2>
        {isAddBlog ? (
          <button
            onClick={() => setIsAddBlog(false)}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-700 transition-all duration-300 ease-in-out rounded-md font-semibold text-gray-100 py-1 px-5"
          >
            <TiArrowBack className="-mt-1" /> Return
          </button>
        ) : (
          <button
            onClick={() => setIsAddBlog(true)}
            className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 ease-in-out rounded-md font-semibold text-gray-100 py-1 px-5"
          >
            <FaPlus className="-mt-1" /> Add Blogs
          </button>
        )}
      </div>
      <div className="xl:container mx-auto">
        {isAddBlog ? <AddBlog /> : <BlogsContent />}
      </div>
    </div>
  );
};

export default BlogsPage;
