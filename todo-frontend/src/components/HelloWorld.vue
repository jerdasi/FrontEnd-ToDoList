<template>
  <div>
    <h1>Selamat Datang</h1>
    <ul>
      <li v-for="item in todos" :key="item._id.toString()">
        {{ item.description }}
        <button @click="hapus(key)">Delete</button>
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
    axios.get('http://localhost:3001/todo')
      .then( (result) => {
        this.todos = result.data
      })
  },
  methods: {
    tambah : function() {
      let newItem = { description: this.myText}
      axios.post('http://localhost:3001/todo', newItem)
        .then(() => {
          this.todos.push(newItem)
        })
    },
    hapus : function(id) {
      axios.delete(`http://localhost:3001/todo/:${id}`)
        .then((result) => {
          console.log(result)
        })
    }
  }
}
</script>