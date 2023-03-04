import axios, { AxiosResponse } from 'axios';
import { UserDataProps } from '../utils/interfaces';

const instance = axios.create({
	baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};

export const Post = {
	getPosts: (): Promise<UserDataProps[]> => requests.get('users'),
	getAPost: (id: number): Promise<UserDataProps> => requests.get(`users/${id}`),
};