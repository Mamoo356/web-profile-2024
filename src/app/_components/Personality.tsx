import React from "react";
import CardOrange from "./common/CardOrange";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <CardOrange title="Personality">
      <div>
        <p className="text-lg">Adventurer (ENTJ)</p>
        <p className="pb-2">
        Commanders are bold, imaginative, and strong-willed,
         always finding a way – or making one.
        </p>
        <div className="flex gap-1">
          <Badge>THINKING</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>Extraverted,</Badge>
          <Badge>Judging</Badge>
        </div>
      </div>
    </CardOrange>
  );
};

export default Personality;
