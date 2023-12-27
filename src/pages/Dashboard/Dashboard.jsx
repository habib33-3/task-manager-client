import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../hooks/useAuth";
import useTasks from "../../hooks/useTasks";
import Completed from "./Completed/Completed";
import Ongoing from "./Ongoing/Ongoing";
import Todo from "./Todo/Todo";

const Dashboard = () => {
  const { isLoading } = useTasks();
  const { user } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" p-1">
      <div className="flex justify-end items-center gap-5 px-3">
        <p className="text-md fond-medium">{user.displayName}</p>
        <img
          src={user.photoURL}
          className="size-10 rounded-full"
          alt=""
        />
      </div>
      <h1 className="text-center text-5xl text-primary my-5">Dashboard</h1>
      <div className="flex flex-col items-center justify-center my-3">
        <Link to="/addTask"><button className="btn btn-success text-black text-xl font-bold">
          Create New Task
        </button></Link>
      </div>

      <div className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:max-w-6xl mx-auto bg-stone-100 gap-10 lg:px-10 px-2 py-10 rounded-xl shadow-xl">
        <Todo />

        <Ongoing />

        <Completed />
      </div>
    </div>
  );
};

export default Dashboard;
