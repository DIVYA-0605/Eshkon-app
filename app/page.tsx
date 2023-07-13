"use client";

import Charts from "@/components/Charts";
import Header from "@/components/Header";
import Login from "@/components/Login";
import ProfileData from "@/components/ProfileData";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {/* Header  */}
      {!session ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="flex pl-5 pr-5 pt-10 pb-10">
            <div>
              <ProfileData />
            </div>
            <div className="flex-1 ml-20">
              <Charts />
            </div>
          </div>
        </div>
      )}

      {/* Board */}
    </main>
  );
}
