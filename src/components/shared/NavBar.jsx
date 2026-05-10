"use client";
import Image from "next/image";
import avatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { use } from "react";

const NavBar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  console.log(session, isPending, error, refetch, "use Session");
  const user = session?.user;
  // console.log(session?.user)
  return (
    <div className="flex  items-center justify-between mt-7">
      <div></div>
      <div>
        <ul className="flex justify-center text-center gap-3 items-center mx-auto lg:ml-40">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink href="/career" className="text-yellow-300">
              Career
            </NavLink>
          </li>
        </ul>
      </div>

      {isPending ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : user ? (
        <div className="flex items-center justify-center gap-3">
            <h2 className="text-gray-500">Welcome,<br />{user.name}</h2>
          <Image src={user.image || avatar} alt="User" width={60} height={60} className="rounded-full"/>
          <button className="px-10 py-4 bg-black/50 text-white cursor-pointer font-semibold" onClick={async() =>await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <Link href="/login">
            <button className="px-10 py-4 bg-black/50 text-white cursor-pointer font-semibold">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
