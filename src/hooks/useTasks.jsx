import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useTasks = (status) => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task", status, user.email],
    queryFn: async () => {
      const { data } = await axios.get(`/tasks/${user.email}/${status}`);
      console.log(data);

      return data;
    },
  });

  return { tasks, refetch, isLoading };
};

export default useTasks;
