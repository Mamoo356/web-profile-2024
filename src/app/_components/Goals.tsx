import React from "react";
import CardDarkblue from "./common/CardDarkBlue";

type Props = {};

const Goals = (props: Props) => {
  return (
    <CardDarkblue title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Learn a New Skill</li>
          <li>Practice Mindfulness</li>
          <li>Read 50 books</li>
          <li>Visit New Places</li>
        </ul>
      </div>
    </CardDarkblue>
  );
};

export default Goals;
