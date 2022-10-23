import axios, {AxiosResponse} from 'axios';
import {LotListItemApiModel} from '../interfaces/lot-list-item-api-model';

const instance = axios.create({
  baseURL: 'http://date.jsontest.com/',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const LotsService = {
  getLots: (): Promise<LotListItemApiModel[]> => requests.get(''),
};