import axios from "axios";


export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes',
        responsetype: 'json',
        method: 'get',
        timeout: 6000,
    }
)