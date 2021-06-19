<template>
  <div>
    <h1>Selamat Datang</h1>

    <h3>List User : </h3>
    <ul>
      <li v-for="item in users" :key="item._id">
        {{item.username}}        
        <button @click="hapus(item._id)">Delete</button>
      </li>
    </ul>
    &nbsp
    <div :class="center">
      <input v-model="username" placeholder="Username"/>
      <input v-model="password" placeholder="Password"/>
      <button @click="tambah">Add</button>
    </div>
    
  </div>

</template>
<style module>
  h1{
    text-align: center;
  }
  

</style>

<script>
import axios from 'axios'
export default { 
  data : () => {
    return {
      users : [],
      username : '',
      password : ''
    }
  },
  created: function(){
    this.getAll()
  },
  methods: {
    getAuth: function() {
      const username = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      if ( username != null &&  password != null){
        return {username, password}
      } else {
        return {}
      }
    },
    getAll: function() {
      axios.get('http://localhost:3001/user', {headers: this.getAuth()})
          .then(res => {
              this.users = res.data;
              console.log(res.data)
          })
          .catch(err => {
              alert("Gagal/Kesalahan Pada Login, Mohon Ulangi dan Pastikan Input dengan Benar!")
          })
    },
    tambah : function() {
      let newUser = { username: this.username, password: this.password}
      axios.post('http://localhost:3001/user', newUser, {headers: this.getAuth()})
        .then(() => {
          this.getAll()
          this.username = ''
          this.password = ''
        })
    },
    hapus : function(id) {
      axios.delete(`http://localhost:3001/user/${id}`, {headers: this.getAuth()})
        .then((result) => {
          this.getAll()
        })
    }
  }
}
</script>