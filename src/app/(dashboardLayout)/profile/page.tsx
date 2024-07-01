"use client";
import LargeSpinner from "@/components/Spinner/LargeSpinner";
import { useGetUserProfileQuery } from "@/redux/features/user/userApi";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TProfile = {
  name: string;
  age: string;
  description: string;
  designation: string;
  userPhoto: string;
  contactNumber: string;
  facebookLink: string;
  githubLink: string;
  linkedinLink: string;
  location: string;
};

const ProfilePage = () => {
  const { data: userData, isLoading: profileLoading } =
    useGetUserProfileQuery(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const profile = userData?.data?.UserProfile;

  const { register, handleSubmit, reset } = useForm<TProfile>();

  const profileData = {
    name: "John Doe",
    age: "30",
    description: "Software Developer",
    designation: "Senior Developer",
    userPhoto: "http://example.com/photo.jpg",
    contactNumber: "1234567890",
    facebookLink: "http://facebook.com/johndoe",
    githubLink: "http://github.com/johndoe",
    linkedinLink: "http://linkedin.com/in/johndoe",
    location: "New York",
  };

  useEffect(() => {
    // Prefill form values
    reset(profileData);
  }, []);

  const onSubmit: SubmitHandler<TProfile> = (data) => {
    console.log(data);
  };

  return (
    <div className="px-4">
      <h2 className="text-3xl text-gray-600 pt-5 pb-10">Profile</h2>
      <div className="xl:container mx-auto">
        <div className={`${isEditing && "hidden"}`}>
          {profileLoading && <LargeSpinner />}
          {userData && (
            <>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Name: <span className="font-normal ml-2">{profile?.name}</span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Age: <span className="font-normal ml-2">{profile?.age}</span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Description:{" "}
                <span className="font-normal ml-2">{profile?.description}</span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Designation:{" "}
                <span className="font-normal ml-2">{profile?.designation}</span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Photo:{" "}
                <span className="font-normal ml-2">{profile?.userPhoto}</span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Contact number:{" "}
                <span className="font-normal ml-2">
                  {profile?.contactNumber}
                </span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Facebook link:{" "}
                <span className="font-normal ml-2">
                  {profile?.facebookLink}
                </span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                Github link:{" "}
                <span className="font-normal ml-2">{profile?.githubLink}</span>
              </p>
              <p className="text-gray-700 text-xl mb-3 font-semibold">
                LinkedIn link:{" "}
                <span className="font-normal ml-2">
                  {profile?.linkedinLink}
                </span>
              </p>
              <p className="text-gray-700 text-xl mb-10 font-semibold">
                Location:{" "}
                <span className="font-normal ml-2">{profile?.location}</span>
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-teal-600 hover:bg-teal-800 transition-all duration-300 ease-in-out rounded-md font-semibold text-gray-100 py-2 w-[200px]"
              >
                Edit
              </button>
            </>
          )}
        </div>

        {/* Form */}
        <form
          className={`max-w-[600px] pb-[100px] ${!isEditing && "hidden"}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label>Name</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("name")}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("age")}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              {...register("description")}
            />
          </div>
          <div>
            <label>Designation</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("designation")}
            />
          </div>
          <div>
            <label>User Photo</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("userPhoto")}
            />
          </div>
          <div>
            <label>Contact Number</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("contactNumber")}
            />
          </div>
          <div>
            <label>Facebook Link</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("facebookLink")}
            />
          </div>
          <div>
            <label>Github Link</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("githubLink")}
            />
          </div>
          <div>
            <label>LinkedIn Link</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("linkedinLink")}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              className="border w-full block py-2 px-2 mb-5 shadow-sm"
              type="text"
              {...register("location")}
            />
          </div>
          <div className="flex items-center gap-5">
            <button
              className="bg-teal-600 hover:bg-teal-800 transition-all duration-300 ease-in-out rounded-md font-semibold text-gray-100 py-2 w-[150px]"
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-red-600 hover:bg-red-800 transition-all duration-300 ease-in-out rounded-md font-semibold text-gray-100 py-2 w-[150px]"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
