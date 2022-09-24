// import axios from 'axios';

export const useFetcher = (url: string) => {
	fetch(url).then((res) => res.json());
};
