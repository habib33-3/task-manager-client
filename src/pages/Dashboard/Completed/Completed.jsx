import Loader from "../../../components/Loader/Loader";
import Task from "../../../components/Task/Task";
import useTasks from "../../../hooks/useTasks";

const Completed = () => {
  const { tasks, isLoading } = useTasks("completed");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="join join-vertical w-full">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default Completed;
