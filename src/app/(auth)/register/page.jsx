"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(watch("email"))

  const handleRegisSubmit = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photo, // optional
      callbackURL: "http://localhost:3000/login",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if(res){
      alert("Register Successful");
      redirect("/login")
    }
  
  };
  return (
    <div className="md:min-h-[70vh] my-20 bg-white max-w-3xl mx-5 md:mx-auto flex flex-col justify-center p-8 md:p-20 shadow rounded-lg">
      <h2 className="text-3xl font-semibold">Register your account </h2>
      <form
        className="flex flex-col gap-5 mt-4"
        onSubmit={handleSubmit(handleRegisSubmit)}
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Name</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter your name"
            {...register("name", { required: "Name Field is Required !!" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type your photo URL"
            {...register("photo", { required: "Photo Field is Required !!" })}
          />
          {errors.photo && (
            <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
          )}
        </fieldset>
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
            {...register("password", {
              required: "Password Field is Required !!",
            })}
          />
        </fieldset>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      
        <button className="btn w-full bg-slate-800 text-white">Register</button> 
      </form>
    </div>
  );
};

export default RegisterPage;
