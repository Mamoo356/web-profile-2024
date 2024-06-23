import React from "react";

type Props = {
  title: string;
};

const CardOrange = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-[#E87A00] h-full p-4 rounded-xl px-4 text-white">
      <h1 className="text-xl font-bold pb-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default CardOrange;
