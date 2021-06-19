<template>
  <div>
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in todos" :key="item._id">
        {{ item.description }}
        <button @click="hapus(item._id)">Delete</button>
      </li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambah">Add</button>
  </div>

</template>

<script>
import axios from 'axios'
export default { 
  data : () => {
    return {
      todos : [],
      myText : ''
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
      axios.get('http://localhost:3001/todo', {headers: this.getAuth()} )
          .then(res => {
              this.todos = res.data;
          })
          .catch(err => {
              alert("Gagal/Kesalahan Pada Login, Mohon Ulangi dan Pastikan Input dengan Benar!")
          })
    },
    tambah : function() {
      let newItem = { description: this.myText}
      axios.post('http://localhost:3001/todo', newItem, {headers: this.getAuth()})
        .then((res) => {
          this.todos.push(res.data)
          this.myText = ''
        })
    },
    hapus : function(id) {
      let newTodos = this.todos.filter(el => el._id !== id)
      axios.delete(`http://localhost:3001/todo/${id}`, {headers: this.getAuth()})
        .then((result) => {
          this.todos = [...newTodos]
        })
    }
  }
}
</script>