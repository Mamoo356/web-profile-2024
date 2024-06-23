import React from "react";
import CardOrange from "./common/CardOrange";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <CardOrange title="Personality">
      <div>
        <p className="text-lg">Adventurer (ISFP)</p>
        <p className="pb-2">
          Adventurers are flexible and charming, always ready to explore and
          experience something new.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </CardOrange>
  );
};

export default Personality;
