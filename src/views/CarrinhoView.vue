<template>
    <section>
      <h1 id="#tituloPrincipal" class="center">Seu Carrinho</h1>

      <ul class="listItem">
        <li v-for="Item in this.$store.state.carrinho" :key="Item.id">  

          <article class="card-item" v-if="this.$store.state.carrinho.includes(Item)">

            <img class="img-item" :src="require(`./../assets/img/${Item.imagem}`)">
            
            <h1>
            {{ Item.nome }}
            </h1>
            
            <div class="flex-item">
              <p class="preco-item">
                {{ Item.preco }}
              </p>
            </div>

            <button class="btt-carrinho" @click="rmvCarrinho(Item)">
              Remover do Carrinho
            </button>
          </article>

        </li>
      </ul>

    </section>
</template>

<script>
export default{
    name: 'CarrinhoView', 
    
    methods:{
    rmvCarrinho(obj){
        this.$store.dispatch('rmvCarrinho', obj);
    }
    }
}


</script>