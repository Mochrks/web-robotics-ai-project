import { create } from "../assets";

const Watch = ({ styles }) => (
  <img
    src={create}
    alt="btn start"
    className={`md:w-[200px] w-[120px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default Watch;
