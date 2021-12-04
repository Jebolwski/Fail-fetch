<template>
    <div id="#app">
       <router-link :to="users/name"><div v-for="person in persons" v-bind:key="person.id"><h2>{{person.username}}</h2></div></router-link>
       <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        name:"Profiles",
        data(){
            return{ 
                persons : []
            }
           
        },
        mounted(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{return res.json()})
            .then(persons => this.persons=persons)
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>