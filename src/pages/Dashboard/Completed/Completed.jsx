import Loader from "../../../components/Loader/Loader";
import Task from "../../../components/Task/Task";
import useTasks from "../../../hooks/useTasks";

const Completed = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) {
    return <Loader />;
  }

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div>
      <h1 className="text-center text-green-500 text-4xl my-10">Completed</h1>
      <div className="space-y-3 min-h-[70vh] flex flex-col  w-full">
        {completedTasks.map((task) => (
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
