import React from "react";

type Props = {
  title: string;
};

const CardWaterBlue = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-[#045174] h-full p-4 rounded-xl px-4">
      <h1 className="text-xl font-bold pb-4 text-white">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default CardWaterBlue;



