import useSWR from 'swr';
import { useFetcher } from '../libs/fetcher';

export const useGetPosts = (url?: string) => {
	const { data, error } = useSWR(url, useFetcher);

	return { posts: data, error, isLoading: !data && !error };
};
