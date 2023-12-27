import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  const handleGoogleLogin = async () => {
    await googleLogin();
    toast.success("logged in");
    navigate(`${location?.state || "/"}`);
  };

  return (
    <div className="w-full lg:w-4/5 mx-auto mt-3">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-success btn-block"
      >
        or, continue with
        <FcGoogle className="size-10" />
      </button>
    </div>
  );
};

export default GoogleLogin;
