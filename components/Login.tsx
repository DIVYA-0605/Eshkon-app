"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="bg-[#f8f8f8] h-screen grid place-content-center">
      <div className="bg-white shadow-xl p-28 text-center rounded-2xl">
        <Image
          src="/echart.png"
          alt="Echarts"
          width={300}
          height={100}
          className="object-contain mb-10"
        />
        <h1 className="text-3xl font-bold ">Sign in to the Eshkon App</h1>
        <p className="text-lg">eshkon.echarts.com</p>
        <button
          type="submit"
          className="mt-12 bg-[#F72C5B] text-white font-semibold pt-2 pb-2 pl-3 pr-3 rounded-md"
          onClick={() => signIn()}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
