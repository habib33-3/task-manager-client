import Loader from "../../../components/Loader/Loader";
import Task from "../../../components/Task/Task";
import useTasks from "../../../hooks/useTasks";

const Todo = () => {
  const { tasks, isLoading } = useTasks("to-do");

  if (isLoading) {
    return <Loader />;
  }

  console.log(tasks);

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

export default Todo;
