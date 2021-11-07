import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(url);
  return request.then(res => res.data);
};

const createNew = (name, number, id) => {
  return axios.post(url, {
    name: name,
    number: number,
    id: id
  }).catch(err => console.log(err))
};

const updatePerson = (id, foundPerson) => {
  const request = axios.put(`${url}/${foundPerson.id}`, foundPerson)
  return request.then(res => res.data)
}

const deletePerson = (id) => {
   return axios.delete(`${url}/${id}`)
  .catch(err => console.log(err))
};

export default { getAll, createNew, updatePerson, deletePerson }