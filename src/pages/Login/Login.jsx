import { useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { PiSpinner } from "react-icons/pi";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      await login(data.email, data.password);
      reset();
      setLoading(false);
      navigate("/");
      toast.success("congrats you are logged in");
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
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              autoComplete="current-password"
              placeholder="password"
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
          New Here,{" "}
          <Link
            className="link link-primary mx-1"
            to="/register"
          >
            create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
