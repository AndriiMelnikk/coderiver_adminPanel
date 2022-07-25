import axios from 'axios';
import {User } from '../ts/users';

const url = 'https://jsonplaceholder.typicode.com/users';

export const Folders_api = {
    getUsers() {
        return axios.get<User[]>(url).then((res) => {
            return res.data;
        });
    }
};
