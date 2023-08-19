import useSwr from 'swr';
import fetcher from '@/libs/fetcher';


const useUser=(userIds:string)=>{
   
    const { data, isLoading, error, mutate } = useSwr(userIds ? `/api/users/${userIds}` : null, fetcher);

    console.log('load',isLoading)

return {
    data,
    isLoading,
    error,
    mutate
}

}

export default useUser;

