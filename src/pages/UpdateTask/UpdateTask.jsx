import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";

const UpdateTask = () => {
  const { data: task } = useLoaderData();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axios = useAxios();

  const handleUpdateTask = async (data) => {
    try {
      setLoading(true);

      const updatedTask = {
        title: data.title,
        description: data.description,
        deadline: new Date(data.deadline).toLocaleDateString("en-UK"),
        priority: data.priority,
      };

      const res = await axios.put(`/task/updateTask/${task._id}`, updatedTask);

      if (res.data.modifiedCount) {
        reset();
        setLoading(false);
        toast.success("Task Updated");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="card shrink-0 w-full lg:w-3/5 mx-auto shadow-2xl bg-gray-100">
      <form
        className="card-body"
        onSubmit={handleSubmit(handleUpdateTask)}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Task Name</span>
          </div>
          <input
            type="text"
            placeholder="Task Title"
            defaultValue={task.title}
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
            defaultValue={task.description}
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
            defaultValue={task.deadline}
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
            defaultValue={task.priority}
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

export default UpdateTask;
