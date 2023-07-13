import React from "react";
import { useSession } from "next-auth/react";
import Avatar from "react-avatar";

function ProfileData() {
  const { data: session } = useSession();

  return (
    <div className="bg-white sticky top-8 mr-10 p-8 rounded-xl flex flex-col items-center">
      <div >
        {session?.user?.image ? (
          <Avatar src={session.user.image} round size="75" />
        ) : (
          <Avatar name={session?.user?.name || "Unknown"} round size="50" />
        )}
      </div>
      <div className="text-center mt-5">
        <h1 className="font-bold text-lg">{session?.user?.name}</h1>
        <p className="text-xs font-semibold text-gray-600">{session?.user?.email}</p>
      </div>
    </div>
  );
}

export default ProfileData;
