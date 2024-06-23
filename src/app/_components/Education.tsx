import React from "react";
import CardDarkBlue from "./common/CardDarkBlue";

type Props = {};

const Education = (props: Props) => {
  return (
    <CardDarkBlue title="Education">
      <div className="relative border-l-4 border-blue-500">
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500 text-black"></div>
          <div className="rounded-lg bg-orange-700 p-2 shadow-md">
            <time className="text-sm font-semibold text-black-500">
              NOW
            </time>
            <h2 className="mb-2 text-sm font-semibold">Walailak University</h2>
          </div>
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-black bg-blue-500"></div>
          <div className="rounded-lg bg-orange-700 p-2 shadow-md">
            <time className="text-sm font-semibold text-black-500">
              2022
            </time>
            <h2 className="mb-2 text-sm font-semibold">Kanlayanee School</h2>
          </div>
        </div>
      </div>
    </CardDarkBlue>
  );
};

export default Education;
