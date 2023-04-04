import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    timeout: 1000,
    headers: { Authorization: 'Client-ID nEBHWMt1NaKsLv8cWMxWj1DSn6m4s3ti80icjo5zSOA' }
});
export default instance