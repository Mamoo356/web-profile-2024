import React from "react";
import Card from "./common/Card";
import CardDarkBlue from "./common/CardDarkBlue";

type Props = {};

const Bio = (props: Props) => {
  return (
    <CardDarkBlue title="Bio" >
      <div>
      Nichapat Chomchoiy is currently pursuing a Bachelor of Engineering Program 
      in Computer Engineering and Artificial Intelligence
       Walailak University 222 Thaiburi, Thasala District Nakhon Si Thammarat, 80160, Thailand
      </div>
    </CardDarkBlue>
  );
};

export default Bio;
