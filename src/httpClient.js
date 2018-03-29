import axios from 'axios'
// allows us to make requests
const httpClient = axios.create({
  baseURL: "https://cute-little-api.herokuapp.com/api"
})

httpClient.getUsers = function() {
    return this({method: 'get', url: 'users'})
}

export default httpClient 