import axios, { AxiosResponse } from 'axios';
import { UserDataProps } from '../../interfaces';

const instance = axios.create({
	baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	getPosts: (): Promise<UserDataProps[]> => requests.get('users'),
	getAPost: (id: number): Promise<UserDataProps> => requests.get(`users/${id}`),
	createPost: (post: UserDataProps): Promise<UserDataProps> =>
		requests.post('users', post),
	updatePost: (post: UserDataProps, id: number): Promise<UserDataProps> =>
		requests.put(`users/${id}`, post),
	deletePost: (id: number): Promise<void> => requests.delete(`users/${id}`),
};