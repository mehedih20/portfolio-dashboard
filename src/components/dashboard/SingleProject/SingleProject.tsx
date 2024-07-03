"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDeleteProjectMutation } from "@/redux/features/projects/projectsApi";
import { toast } from "sonner";
import SmallSpinner from "@/components/Spinner/SmallSpinner";
import EditProjectModal from "../Modal/EditProjectModal";

const SingleProject = ({ item }: { item: any }) => {
  const [isEditProject, setIsEditProject] = useState(false);
  const [deleteProject, { isLoading }] = useDeleteProjectMutation();

  const handleDeleteProject = async () => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!deleteConfirmation) {
      return;
    }

    try {
      const result = await deleteProject(item.id).unwrap();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <>
      <div key={item.id} className="mb-5 shadow-sm shadow-cyan-600 rounded-md">
        <Image
          src={item.imageLinks[0]}
          alt={item.name}
          width={500}
          height={200}
        />
        <div className="p-4">
          <h3 className="mb-5 text-xl font-semibold text-gray-700">
            {item.name}
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={() => setIsEditProject(true)}
              className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 ease-in-out rounded-md py-2 text-gray-100 font-semibold"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteProject}
              className="flex justify-center items-center bg-red-500 hover:bg-red-700 transition-all duration-300 ease-in-out rounded-md py-2 text-gray-100 font-semibold"
            >
              {isLoading && <SmallSpinner />} Delete
            </button>
          </div>
        </div>
      </div>
      <EditProjectModal
        isEditProject={isEditProject}
        setIsEditProject={setIsEditProject}
        item={item}
      />
    </>
  );
};

export default SingleProject;
