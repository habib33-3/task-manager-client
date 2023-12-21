import Lottie from "lottie-react";

import loadingAnimation from "../../assets/loading.json";

const Loader = () => {
  return (
    <div className="h-52 w-52 flex flex-col items-center justify-center my-10 mx-auto">
      <Lottie animationData={loadingAnimation} />
    </div>
  );
};

export default Loader;
