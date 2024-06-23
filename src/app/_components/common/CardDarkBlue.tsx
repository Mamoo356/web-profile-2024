import React from "react";

type Props = {
  title: string;
};

const CardDarkBlue = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-[#001F3D] h-full p-4 rounded-xl px-4 text-white">
      <h1 className="text-xl font-bold pb-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default CardDarkBlue;
