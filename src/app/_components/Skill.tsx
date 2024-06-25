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
import CardWaterBlue from "./common/CardWaterBlue";

type Props = {};

const Skill = (props: Props) => {
  return (
    <CardWaterBlue title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-white">
       
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
      </div>
    </CardWaterBlue>
  );
};

export default Skill;
