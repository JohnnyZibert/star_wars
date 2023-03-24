import axios from 'axios';

const baseUrl = 'https://swapi.dev/api/';

export const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});
