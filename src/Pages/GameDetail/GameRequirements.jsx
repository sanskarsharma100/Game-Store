import { PropTypes } from "prop-types";
import { specs } from "../../Utils/constants";

function GameRequirements({ req }) {
  const requirements = Object.keys(req).map((item, i) => {
    {
      return (
        req[item] && (
          <li key={item}>
            <span className="text-base font-bold xs:text-lg">{specs[i]}: </span>
            {req[item]}
          </li>
        )
      );
    }
  });

  return <ul className="text-sm xs:text-base">{requirements}</ul>;
}

GameRequirements.propTypes = {
  req: PropTypes.object,
};

export default GameRequirements;
