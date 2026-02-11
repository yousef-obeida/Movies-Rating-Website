import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000exportconstgetUsersapigetUserinfo0,
})

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data.map(Userinfo);
}

export const createUser = (data) => api.post("/users", data)

export const updateUser = (id, data) => api.put(`/users/${id}`, data)

export const deleteUser = (id) => api.delete(`/users/${id}`)

function Userinfo (user) {
  return {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email,

  }
}
export default api
