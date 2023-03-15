import { defineStore } from "pinia";

const useAuth = defineStore('auth', {
  state: () => {
    return {
      token : null,
      baseURL: 'http://salarycontrolapi.test/api'
    }
  },
  actions: {
    async register(name:string, email:string, password:string) {
      const uri = `${this.baseURL}/register`
      const rawResponse = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'email': email,
          'password': password
        })
      })

      const response = await rawResponse.json();
      if(response.status == false) {
        return false
      }else {
        this.token = response.token
        return true
      }
    },

    async login(email:string, password:string) {
      const uri = `${this.baseURL}/login`
      const rawResponse = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })
      const response = await rawResponse.json();
      if(response.status == false) {
        this.token=null
        return false
      }else {
        this.token = response.token
        return true
      }
    },

    async getUsers() {
      const uri = `${this.baseURL}/userlist`
      const rawResponse = fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization': `Bearer ${this.token}`
        },
      })
      const response = (await rawResponse).json();
      //TODO
    },

    async logout() {
      const uri = `${this.baseURL}/logout`
      const rawResponse = await fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization': `Bearer ${this.token}`
        },
      })

      const response = await rawResponse.json();
      
      if(response.status == false) {
        return false
      }else {
        this.token=null
        return true
      }
    }
  }
})

export default useAuth