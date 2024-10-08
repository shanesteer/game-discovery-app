import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dcf580945c7c4a0abbf1c16ebefe5a5f'
    }
})