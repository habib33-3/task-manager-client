import Loader from "../../../components/Loader/Loader";
import Task from "../../../components/Task/Task";
import useTasks from "../../../hooks/useTasks";

const Ongoing = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) {
    return <Loader />;
  }

  const ongoingTasks = tasks.filter((task) => task.status === "ongoing");

  return (
    <div>
      <h1 className="text-center text-blue-500 text-4xl my-10">Ongoing</h1>

      <div className="space-y-3 min-h-[70vh] flex flex-col w-full">
        {ongoingTasks.map((task) => (
          <Task
            key={task._id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default Ongoing;
