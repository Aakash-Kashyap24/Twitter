import fetcher from "@/libs/fetcher";
import useSwr from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher);
  console.log('users',data,error,isLoading)
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
