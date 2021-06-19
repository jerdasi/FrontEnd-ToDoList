<template>
    <div>
        <div>
            <label>Username</label>
            <input type="text" v-model="username"/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="password"/>
        </div>
        <button @click="simpan">Save</button>
        <button @click="hapus">Hapus</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data: function() {
        return {
            username: '',
            password: ''
        }
    },
    created: function(){
        this.username = localStorage.getItem("username")
        this.password = localStorage.getItem("password")
    },
    methods: {
        simpan: function() {
            if(this.username != null || this.password != null){
                localStorage.setItem('username', this.username)
                localStorage.setItem('password', this.password)
                axios.get('http://localhost:3001/user', {headers: {username: this.username, password: this.password}})
                    .then(res => {
                        alert("Login Anda Sudah Benar, Silahkan Lanjut")
                    })
                    .catch(err => {
                        this.hapus()
                        alert("Gagal/Kesalahan Pada Login, Mohon Ulangi dan Pastikan Input dengan Benar!")
                    }) 
            } else {
                console.log("Tidak Boleh Ada yang Kosong")
            }
        },
        
        hapus: function() {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            this.username = ''
            this.password = ''
        }
        
    }
}
</script>