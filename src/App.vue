<template>

  <nav>
    <router-link to="/" class="bordaDireita">Loja</router-link>
    <router-link to="/carrinho" class="bordaEsquerda">Carrinho</router-link>
  </nav>
  <router-view/>
  <rodape/>
</template>

<script>
  import rodape from './components/Rodape.vue'
  export default{
  components:{
    rodape
  }



  }
  

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap');

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }

  nav{
    width: 300px;
    height: 60px;
    border-radius: 0px 0px 50px 50px;
    margin: auto;
    background-color: rgb(247, 69, 69);
    display: flex;
    overflow: hidden;
  }

  nav > a{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: #020202;
  }

  nav > a:hover{
    background-color: rgb(226, 63, 63);
  }

  .bordaMeio{
    border-right: black 1px solid;
    border-left: black 1px solid;
  }

</style>
