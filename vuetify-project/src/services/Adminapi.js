import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
})

export const getStats = async () => {
  const [users, posts] = await Promise.all([
    api.get('/users'),
    api.get('/posts')
  ]);

  return [
    { title: 'Total Users', value: users.data.length.toString() },
    { title: 'Total Posts', value: posts.data.length.toString() },
    { title: 'Active Users', value: (Math.round(users.data.length * 0.8)).toString() }, // Example derived stat
  ];
}

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
    firstname: user.name.split(' ')[0],
    lastname: user.name.split(' ')[1] || '',
    name: user.name,
    username: user.username,
    email: user.email,
    picture: `https://i.pravatar.cc/150?u=${user.id}`,
    phone: user.phone,
    website: user.website,

  }
}
export default api
