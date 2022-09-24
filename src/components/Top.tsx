import { Loader } from '@mantine/core';
import React from 'react';
import useSWR from 'swr';
// import fetcher from '../libs/fetcher';
// import { useGetPosts } from '../hooks/useGetPosts.hooks';

type Props = {
	posts: void | undefined;
	error: Error;
	isError: boolean;
};

export const Top = () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';

	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data: posts, error } = useSWR(url, fetcher);

	// const { posts, error } = useGetPosts(url);

	if (error) return <div>failed to load</div>;
	if (!posts)
		return (
			<div className="text-center mx-auto my-auto">
				<Loader />
			</div>
		);

	return (
		<>
			<h1>一覧</h1>
			<ul>
				{/* {posts} */}
				{posts.map((post: { id: number; title: string }) => {
					return (
						<li key={post.id}>
							{post.id} | {post.title}
						</li>
					);
				})}
			</ul>
		</>
	);
};
