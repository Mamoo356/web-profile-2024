import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-[#045174] h-full p-4 rounded-xl px-4 text-white">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/IMG_4937.PNG"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Nichapat Chomchoiy</h1>
        <p className="text-base">Computer Engineering and Artificial Intelligence</p>
      </div>

      <div className="py-10 text-center ">" Eye on You"</div>
      <div className="p-6 mx-1 xl:mx-6 bg-[#001F3D] 	 rounded-md">
        <p>
          <b>Age:</b> 21
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Nakhon Si Thammarat
        </p>
      </div>
    </div>
  );
};

export default Profile;