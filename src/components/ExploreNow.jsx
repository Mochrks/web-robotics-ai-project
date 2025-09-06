import PropTypes from "prop-types";
import { exploreNow } from "../assets";

const ExploreNow = ({ styles }) => (
  <img
    src={exploreNow}
    alt="btn start"
    className={`md:w-[200px] w-[120px] h-[180px]  object-contain cursor-pointer ${styles}`}
  />
);

ExploreNow.prototype = {
  styles: PropTypes.string,
};

export default ExploreNow;
