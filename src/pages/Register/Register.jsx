import { useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { PiSpinner } from "react-icons/pi";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { uploadImg } from "../../utils/uploadImg.js";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin.jsx";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateUsers, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleRegister = async (data) => {
    try {
      setLoading(true);
      await createUser(data.email, data.password);

      const img = await uploadImg(data.img[0]);

      await updateUsers(data.name, img?.data?.display_url);

      reset();
      setLoading(false);
      navigate(`${location?.state || "/"}`);
      toast.success("congrats,you are welcome");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-center text-primary text-5xl font-bold my-10">
        Register now
      </h2>

      <div className="card shrink-0 w-full lg:w-2/5 mx-auto shadow-2xl bg-gray-50 mb-10 pb-3">
        <form
          className="card-body"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              autoComplete="username"
              placeholder="Full Name"
              className="input input-bordered"
              {...register("name", {
                required: "name is required",

                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-700 font-bold text-lg">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              autoComplete="email"
              className="input input-bordered"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && (
              <p className="text-red-700 font-bold text-lg">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              autoComplete="current-password"
              className="input input-bordered"
              {...register("password", {
                required: "password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-700 font-medium text-sm">
                {errors.password.message}
              </p>
            )}

            <span
              role="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 bottom-[20%] cursor-pointer"
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              placeholder="photo"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
              {...register("img")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              {loading ? (
                <PiSpinner className="animate-spin mx-auto" />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
        <p className="text-md text-center text-gray-700 ">
          Already have an account,{" "}
          <Link
            className="link link-primary mx-1"
            to="/login"
          >
            Login Now
          </Link>
        </p>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;
