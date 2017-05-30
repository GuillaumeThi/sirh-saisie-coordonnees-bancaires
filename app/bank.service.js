const API_URL_1 = 'http://localhost:8080/sgp/api/departements'
const API_URL_2 = 'http://localhost:8080/sgp/api/collaborateurs'

export class BankService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }


  getDepartements () {
    return this.$http.get(API_URL_1)
      .then(response => response.data)
  }

  getCollaborateurs () {
    return this.$http.get(API_URL_2)
      .then(response => response.data)
  }

  /*getBurgers () {
    return this.$http.get(API_URL)
    .then(response => response.data)
  }

  getBurger (id) {
    if (!id) {
      return this.$q.resolve({
        name: '',
        toppings: [],
        creator: ''
      })
    }
    return this.$http.get(`${API_URL}/${id}`)
    .then(response => response.data)
  }

  save (burger) {
    return burger.id
      ? this.update(burger)
      : this.create(burger)
  }

  update (burger) {
    return this.$http.put(`${API_URL}/${burger.id}`, burger)
    .then(response => response.data)
  }

  create (burger) {
    return this.$http.post(API_URL, burger)
    .then(response => response.data)    
  }

  remove (burger) {
    return this.$http.delete(`${API_URL}/${burger.id}`)
    .then(response => response.data)
  }*/

}