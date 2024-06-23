import React from "react";
import CardDarkblue from "./common/CardDarkBlue";

type Props = {};

const Goals = (props: Props) => {
  return (
    <CardDarkblue title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Travel around the world</li>
          <li>Learn a new coding skill</li>
          <li>Read 50 books</li>
          <li>Improve communication skills</li>
        </ul>
      </div>
    </CardDarkblue>
  );
};

export default Goals;
