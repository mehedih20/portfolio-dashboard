"use client";
import { authKey } from "@/constants/auth-key";
import { loginUser } from "@/services/actions/loginUser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { toast } from "sonner";

type TFormInput = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    setLoading(true);
    try {
      const userInfo: any = await loginUser(data);
      console.log(userInfo);

      if (userInfo.success) {
        toast.success(userInfo.message);
        localStorage.setItem(authKey, JSON.stringify(userInfo.data.token));
      }
      setLoading(false);
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-700 px-4 py-10">
      <div className="bg-teal-100 w-[500px] min-h-[600px] rounded-lg pb-5 overflow-hidden flex flex-col">
        <h2 className="text-center text-2xl font-semibold text-gray-700 bg-teal-300 py-5">
          Portfolio Dashboard
        </h2>
        <div className="mt-16">
          <h3 className="flex items-center justify-center text-center text-3xl text-gray-700 mb-5">
            <FaUser className="text-2xl -mt-0.5 mr-1" /> Login
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 px-7"
          >
            <input
              className="px-2 bg-gray-100 text-center py-3 rounded-md font-semibold text-gray-600 shadow-sm shadow-teal-600/50"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="px-2 bg-gray-100 text-center py-3 rounded-md font-semibold text-gray-600 shadow-sm shadow-teal-600/50"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <button
              className="bg-teal-600 py-3 font-semibold text-gray-100 rounded-md hover:bg-teal-800 transition-all duration-300 ease-in-out flex items-center justify-center gap-1"
              type="submit"
            >
              {loading && (
                <span className=" animate-spin w-5 h-5 border-l-2 border-t-2 -mt-1 inline-block rounded-full"></span>
              )}
              Submit
            </button>
          </form>
        </div>
        <p className="text-center text-sm font-medium text-gray-500 mt-auto">
          Dashboard Management by Mehedi Hasan
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
