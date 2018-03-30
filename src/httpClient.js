import axios from 'axios'
// allows us to make requests
const httpClient = axios.create({
  baseURL: "https://cute-little-api.herokuapp.com/api"
})

httpClient.getUsers = function() {
    return this({method: 'get', url: 'users'})
}

httpClient.addUser = function(fields) {
  return this({method:'post', url: '/users', data: fields})
}

httpClient.destroyUser = function(id) {
  return this({method:'delete', url: `/users/${id}`})
}

// httpClient({method: 'get', url: '/users'}).then((serverResponse) => {
//   console.log(serverResponse.data.users)
// }) 

export default httpClient 