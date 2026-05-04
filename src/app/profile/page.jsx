"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiUser } from "react-icons/ci";
const Profile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);
 
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="card flex bg-base-100 w-96 shadow-sm">
        <div className="flex items-center justify-center ">
          <CiUser  className="rounded-full border text-5xl p-3"/>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.name}</h2>
          <p>{user?.image}</p>
          <div className="card-actions">
            <Link href="/updateProfile">Update Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
