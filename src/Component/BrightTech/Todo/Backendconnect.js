import axios from "axios"

const apiClient=axios.create(
    {
        baseURL:'http://localhost:2020'
    }
);


export const retriveHelloworldBean=
() => apiClient.get('hello-world')