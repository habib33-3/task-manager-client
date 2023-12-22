import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const Task = ({ task }) => {
  const { _id, title, deadline, status, description, priority } = task;

  const { register, handleSubmit } = useForm();

  const axios = useAxios();

  const handleUpdateStatus = async (data) => {
    const status = {
      status: data.status,
    };
    const res = await axios.put(`/task/updateStatus/${_id}`, status);
    if(res.data.modifiedCount){
        toast.succes("Status Updated")
    }
  };

  return (
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input
        type="radio"
        name="my-accordion-4"
        checked="checked"
        readOnly
      />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content card p-3">
        <p className="text-right text-sm">Priority: {priority}</p>
        <p className="text-justify">{description}</p>
        <p>{deadline}</p>
        <div className="flex">
          <div className="flex">
            <form onSubmit={handleSubmit(handleUpdateStatus)}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Update Status</span>
                </div>
                <select
                  {...register("status")}
                  className="select select-bordered"
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
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
