import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { FaPen, FaTrash } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import useTasks from "../../hooks/useTasks";

const Task = ({ task }) => {
  const { _id, title, deadline, status, description, priority } = task;

  const { register, handleSubmit } = useForm();

  const axios = useAxios();

  const { refetch } = useTasks();

  const handleUpdateStatus = async (data) => {
    const status = {
      status: data.status,
    };
    const res = await axios.put(`/task/updateStatus/${_id}`, status);
    if (res.data.modifiedCount) {
      toast.success("Status Updated");
      refetch();
    }
  };

  const handleDeleteTask = async () => {
    const res = await axios.delete(`/task/delete/${_id}`);

    if (res.data.deletedCount) {
      toast.success("Task deleted");
      refetch();
    }
  };

  return (
    <div>
      <div
        title="Click to view Details"
        className={`w-full cursor-pointer px-2 py-3 m-1 text-2xl  border-2 ${
          status === "to-do"
            ? "border-yellow-500"
            : status === "ongoing"
            ? "border-blue-500"
            : "border-green-500"
        }`}
        onClick={() => document.getElementById(`modal-${_id}`).showModal()}
      >
        <h2 className="text-center">{title}</h2>
      </div>
      <dialog
        id={`modal-${_id}`}
        className="modal"
      >
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <IoIosCloseCircle size={20} />
            </button>
          </form>
          <div className=" card p-3">
            <h2 className="text-center text-lg font-bold">{title}</h2>
            <p className="text-right text-sm capitalize">
              Priority: {priority}
            </p>
            <p className="text-justify text-md">{description}</p>
            <p className="text-blue-800 text-md ">Deadline: {deadline}</p>
            <div className="flex justify-around items-center">
              <div className="flex">
                <form
                  className="flex flex-col justify-center items-center gap-2"
                  onSubmit={handleSubmit(handleUpdateStatus)}
                >
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Update Status</span>
                    </div>
                    <select
                      {...register("status")}
                      className="select select-bordered select-sm"
                    >
                      <option
                        disabled
                        defaultValue={status}
                      >
                        Pick one
                      </option>
                      <option>to-do</option>
                      <option>ongoing</option>
                      <option>completed</option>
                    </select>
                  </label>
                  <button className="btn btn-primary btn-sm">update</button>
                </form>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Link to={`/update/${_id}`}>
                  <button className="btn btn-square btn-sm btn-success">
                    <FaPen />
                  </button>
                </Link>
                <button
                  onClick={handleDeleteTask}
                  className="btn btn-outline btn-square btn-sm btn-error"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
