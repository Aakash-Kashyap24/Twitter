import useSwr from 'swr';
import fetcher from '@/libs/fetcher';


const useUser=(userIds:string)=>{
   
    const { data, isLoading, error, mutate } = useSwr(userIds ? `/api/users/${userIds}` : null, fetcher);


return {
    data,
    isLoading,
    error,
    mutate
}

}

export default useUser;

