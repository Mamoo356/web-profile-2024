import React from "react";
import CardOrange from "./common/CardOrange";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <CardOrange title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://nichapat-ch-wu.w3spaces.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500"
            >
              profile-2024 - Resume
            </a>
          </li>
        </ul>
      </div>
    </CardOrange>
  );
};

export default Portfolio;
