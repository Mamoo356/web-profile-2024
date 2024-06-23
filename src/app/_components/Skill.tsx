import {
  faDocker,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardWaterBlue from "./common/CardwaterBlue";

type Props = {};

const Skill = (props: Props) => {
  return (
    <CardWaterBlue title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-whrite">
        <div className="text-center">
          <FontAwesomeIcon icon={faPhp} className="h-10" />
          <p>PHP</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
        <span className="icon-[file-icons--adobe-photoshop]"></span>          
        <p>PhotoShop</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDocker} className="h-10" />
          <p>Docker</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faVuejs} className="h-10" />
          <p>Vue.js</p>
        </div>
      </div>
    </CardWaterBlue>
  );
};

export default Skill;
