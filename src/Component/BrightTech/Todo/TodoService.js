import axios from "axios"

const apiClient=axios.create(
    {
        baseURL:'http://localhost:2020'
    }
);


export const retriveAllTodosForUserName =
(username) => apiClient.get(`/users/${username}/todos`)



export const deleteUserByIdApi=
(username, id) => apiClient.delete(`users/${username}/todos/${id}`)



export const retriveTodoApi=
(username, id) => apiClient.get(`users/${username}/todos/${id}`)



export const updateTodoApi=
(username,id, todo) => apiClient.put(`users/${username}/todos/${id}`,todo)



export const createTodoApi=
(username, todo) => apiClient.post(`users/${username}/todos`,todo)
