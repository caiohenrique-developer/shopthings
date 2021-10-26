import axios from 'axios';

export const { fakeStoreApi, hostEnv } = {
  fakeStoreApi: axios.create({
    baseURL: 'https://fakestoreapi.com',
  }),
  hostEnv: axios.create({
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? '/api' // development
        : '/api', // production
  }),
};
