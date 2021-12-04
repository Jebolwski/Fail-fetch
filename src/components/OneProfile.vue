<template>
    <div>
        User {{userData.name}}
    </div>
</template>

<script>
    export default {
        name:"OneProfile",
        
        data(){
          return{
              userData:{}
          }
        },

        created(){
            fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
            .then((res)=>{return res.json()})
            .then(persons => this.userData=persons)
        }
    }
</script>

<style lang="scss" scoped>

</style>