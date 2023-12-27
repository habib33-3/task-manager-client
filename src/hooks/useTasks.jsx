import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useTasks = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task",  user.email],
    queryFn: async () => {
      const { data } = await axios.get(`/tasks/${user.email}`);

      return data;
    },
  });

  return { tasks, refetch, isLoading };
};

export default useTasks;
