import Loader from "../../../components/Loader/Loader";
import Task from "../../../components/Task/Task";
import useTasks from "../../../hooks/useTasks";

const Todo = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) {
    return <Loader />;
  }

  const todoTasks = tasks.filter((task) => task.status === "to-do");

  return (
    <div>
      <h1 className="text-center text-yellow-500 text-4xl my-10">To Do</h1>

      <div className="space-y-3 min-h-[70vh] flex flex-col  w-full">
        {todoTasks.map((task) => (
          <Task
            key={task._id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
