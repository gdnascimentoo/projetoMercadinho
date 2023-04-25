<template>
    <section>
      <h1 id="#tituloPrincipal" class="center">Nossos Itens</h1>

      <ul class="listItem">
        <li v-for="Item in this.$store.state.itens" :key="Item.id">  

          <article class="card-item" v-if="!this.$store.state.carrinho.includes(Item)">

            <img class="img-item" :src="require(`./../assets/img/${Item.imagem}`)">
            
            <h1>
            {{ Item.nome }}
            </h1>
            
            <div class="flex-item">
              <p class="preco-item">
                R${{ Item.preco }}
              </p>
            </div>
            
            <button class="btt-carrinho" @click="addCarrinho(Item)">
              Adicionar ao Carrinho
            </button>

          </article>

        </li>
      </ul>

      <h2 class="fimItens center" v-if="this.$store.state.carrinho.length == 7">Não há nada aqui! Você já adicionou tudo ao carrinho.</h2>

    </section>

</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },  
  
  setup(){

  },

  methods:{

    addCarrinho(obj){
        this.$store.dispatch('addCarrinho', obj);
    },

    rmvQtd(obj){
        this.$store.dispatch('rmvQtd', obj)
    },

    addQtd(obj){
        this.$store.dispatch('addQtd', obj)
    }

  }

}


</script>


<style>

    body{
      background-color: rgb(233, 230, 230);
    }

    ul{
      list-style-type: none;
    }

    section{
      min-height: 76.3vh;
      margin-bottom: 100px;
    }

    .center{
      text-align: center;
      margin: 50px;
    }

    .fimItens{
      color: gray;
      opacity: 1;
    }

    .btts-qtt{
      width: 16px;
      cursor: pointer;
    }

    .desabilitado{
      opacity: 0.3;
      cursor: default;
    }

    .display-qtt{
      cursor: default;
    }

    .listItem{
      display: flex;
      justify-content: center;
      gap: 100px;
      flex-wrap: wrap;
    }

    .img-item{
      width: 200px;
      height: 200px;
      border: gray 2px;
      border-radius: 20px;
    }
    
    .card-item{
      background-color: rgb(226, 63, 63);
      width: 300px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 20px;
    }

    .btt-carrinho{
      border: none;
      padding: 2px;
      cursor: pointer;
    }

    .preco-item{
      color: rgb(4, 255, 4);
    }

    
    .btt-carrinho:hover{
      border: none;
      padding: 2px;
      cursor: pointer;
      transform: scale(110%);
    }

    .rodape{
      width: 100%;
      height: 4%;
      background-color: rgb(226, 63, 63);
    }

</style>