import { Link } from "react-router-dom";
import bannerImg from "../../../assets/bannerImg.png";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-max-6xl lg:h-[70vh] mx-auto items-center justify-around bg-base-100 py-3 lg:px-5 mt-10">
      <div className="w-1/2 flex flex-col items-center justify-center space-y-5">
        <h1 className="text-center text-primary text-5xl font-bold ">
          Manage Your Task{" "}
          <span className="text-success m-1 ">Efficiently!!!</span>
        </h1>

        <Link to="/dashboard">
          <button className="btn btn-primary">Let{"'"}s Explore</button>
        </Link>
      </div>
      <div className="h-full">
        <img
          src={bannerImg}
          className="max-h-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
