import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";

const AddTask = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddTask = async (data) => {
    try {
      setLoading(true);

      const task = {
        title: data.title,
        description: data.description,
        deadline: new Date(data.deadline).toLocaleDateString("en-UK"),
        priority: data.priority,
        status: "to-do",
        userEmail: user.email,
      };

      const res = await axios.post("/addTask", task);

      if (res.data.insertedId) {
        setLoading(true);
        toast.success("Task Added");
        reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="card shrink-0 w-full lg:w-3/5 mx-auto shadow-2xl bg-gray-100">
      <form
        className="card-body"
        onSubmit={handleSubmit(handleAddTask)}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Task Name</span>
          </div>
          <input
            type="text"
            placeholder="Task Title"
            className="input input-bordered w-full "
            {...register("title", { required: "Task Title is required" })}
          />
          {errors.title && (
            <p className="text-error font-bold text-lg">
              {errors.title.message}
            </p>
          )}
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Task Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Task Description"
            {...register("description", {
              required: "Task Description is required",
            })}
          />
          {errors.description && (
            <p className="text-error font-bold text-lg">
              {errors.description.message}
            </p>
          )}
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Task Deadline</span>
          </div>
          <input
            type="date"
            placeholder="Task Deadline"
            className="input input-bordered w-full "
            {...register("deadline", { required: "Task Deadline is required" })}
          />
          {errors.deadline && (
            <p className="text-error font-bold text-lg">
              {errors.deadline.message}
            </p>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Set Task Priority</span>
          </div>
          <select
            {...register("priority", { required: "Priority is required" })}
            className="select select-bordered"
          >
            <option
              disabled
              defaultValue=""
            >
              Priority
            </option>
            <option>low</option>
            <option>moderate</option>
            <option>high</option>
          </select>
          {errors.priority && (
            <p className="text-error font-bold text-lg">
              {errors.priority.message}
            </p>
          )}
        </label>
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
    </div>
  );
};

export default AddTask;
