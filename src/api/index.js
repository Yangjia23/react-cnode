import Axios from "./server";
const prefix = 'https://cnodejs.org/api/v1'

export default {
    getTopics: (data) => Axios.get(prefix + '/topics', {params: data})
}