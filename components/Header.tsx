"use client";
import Image from "next/image";
import { MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <header>
      <div className="flex items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute
        top-0
        left-0
        w-full
        h-screen
        bg-gradient-to-br
        from-pink-400
        to-[#0055D1]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50"
        />
        <Image
          src="/echart.png"
          alt="Echarts"
          width={160}
          height={100}
          className="object-contain"
        />

        <div className="flex items-center space-x-5 w-full flex-1 justify-end">
          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-1"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Logout When user clicks on Avatar */}
          {session?.user?.image ? (
            <Avatar
              src={session.user.image}
              round
              size="50"
              onClick={() => signOut()}
              className="cursor-pointer"
            />
          ) : (
            <Avatar
              name={session?.user?.name || "Unknown"}
              round
              size="50"
              onClick={() => signOut()}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
