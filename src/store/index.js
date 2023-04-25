import { createStore } from 'vuex'
export default createStore({
  state: {
    
    itens: [

      {
        id: 1,
        nome: 'Maçã',
        preco: 4.50,
        imagem: 'maçã.jpg',
        quantidade: 0
      },
      {
        id: 2,
        nome: 'Banana',
        preco: 1.00,
        imagem: 'Banana.jpg',
        quantidade: 0
      },
      {
        id: 3,
        nome: 'Melancia',
        preco: 10.00,
        imagem: 'melancia.jpg',
        quantidade: 0
      },
      {
        id: 4,
        nome: 'Cereja',
        preco: 2.00,
        imagem: 'cereja.jpg',
        quantidade: 0
      },
      {
        id: 5,
        nome: 'Uva',
        preco: 7.00,
        imagem: 'uva.jpg',
        quantidade: 0
      },
      {
        id: 6,
        nome: 'Abacaxi',
        preco: 15.00,
        imagem: 'abacaxi.jpeg',
        quantidade: 0
      },
      {
        id: 7,
        nome: 'Romã',
        preco: 3.00,
        imagem: 'Romã.jpg',
        quantidade: 0
      }

    ],

    carrinho: [],

    dinheiro: 25.00

  },
  getters: {
  },
  mutations: {


    addCarrinho(state, obj){

        if(state.carrinho.includes(obj)){
          let i = state.carrinho.indexOf(obj);
          state.carrinho[i].quantidade+=obj.quantidade;
        }else{
          state.carrinho.push(obj);
        }      

    },
   
    rmvCarrinho(state, obj){
      let i = state.carrinho.indexOf(obj);
      const x = state.carrinho.splice(i, 1);
      console.log(x)
    }
  },
  actions: {


    addCarrinho(context, obj){
        context.commit('addCarrinho', obj);
    },

    rmvCarrinho(context, obj){
        context.commit('rmvCarrinho', obj);
    }
  },
  modules: {
  }
})
