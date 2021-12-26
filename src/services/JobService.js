import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getJobs() {
        return apiClient.get('/posts')
    },
    getJob(id) {
        return apiClient.get('/posts' +id)
    }
}