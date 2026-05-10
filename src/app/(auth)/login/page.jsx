"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
// export const metadata = {
//   title: "Dragon News - Login",
//   description: "This is Dragon news login Page",
// };

const LoginPage = () => {
  const { register,
       handleSubmit,
       formState: {errors}
     } = useForm();
   const handleLoginSubmit = async (data) => {
      console.log(data);
      const { data: res, error } = await authClient.signIn.email({
        email: data.email, // required
        password: data.password, // required
        rememberMe: true,
        callbackURL: "http://localhost:3000",
      });
      console.log(res, error);
      if (error) {
        alert(error.message);
      }
      if(res){
        alert("Login Successful");
        redirect('/')
      } 
    };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target);
  //     console.log(formData)
  //     const email = e.target.email.value;
  // };
  return (
    <div className="md:min-h-[70vh] mt-20 bg-white max-w-3xl mx-5 md:mx-auto flex flex-col justify-center p-8 md:p-40 shadow rounded-lg">
      <h2 className="text-3xl font-semibold">Login your account </h2>
      <form
        className="flex flex-col gap-5 mt-4"
        onSubmit={handleSubmit(handleLoginSubmit)}
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email address</legend>
          <input
            type="email"
            className="input w-full"
            placeholder="Enter your email address"
            {...register("email", { required: "Email Field is Required !!" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input w-full"
            placeholder="Enter your password"
             {...register("password", { required: "Password Field is Required !!" })}
          />
        </fieldset>
         {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}

        <button className="btn w-full bg-slate-800 text-white">Login</button>
      </form>
      <p className="text-center my-4 text-sm">
        Dont’t Have An Account ?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
