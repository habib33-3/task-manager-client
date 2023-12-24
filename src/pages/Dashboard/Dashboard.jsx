import Loader from "../../components/Loader/Loader";
import useTasks from "../../hooks/useTasks";
import Completed from "./Completed/Completed";
import Ongoing from "./Ongoing/Ongoing";
import Todo from "./Todo/Todo";

const Dashboard = () => {
  const { isLoading } = useTasks();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:max-w-6xl mx-auto">
      <Todo />
      <Ongoing />
      <Completed />
    </div>
  );
};

export default Dashboard;
