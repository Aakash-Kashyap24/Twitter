import fetcher from '@/libs/fetcher';
import useSwr from 'swr';

const usePosts = (userid?:string) => {

    const url=userid ? `/api/posts?userId=${userid}` :"/api/posts"

    const {
        data, error, isLoading, mutate } = useSwr(url, fetcher)

    return {
        data, error,
        isLoading,
        mutate
    }

}

export default usePosts;