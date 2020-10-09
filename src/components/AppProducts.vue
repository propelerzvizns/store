<template>
<div>
    <h1>products</h1>
    <input v-model="searchTerm" type="text">
<table>
    <tr>
        <th>title</th>
        <th>quantity</th>
        <th></th>
    </tr>

    <tr v-for="product in filterProducts" :key="product.id">
        <td>{{product.title}}</td>
        <td>
            {{product.quantity}} 
            <button @click="increment(product)">+</button>
            <button @click="decrement(product)">-</button>
            
        </td>
        <td>
            <router-link :to="{ name: 'app-buy', params: { id: product.id}}">buy</router-link>
        </td>
    </tr>
</table>


</div>
</template>

<script>
 import { productsService } from '../services/ProductsService'
export default {

    data(){

        return {
            searchTerm: '',

            productsList: [
                {
                   
                    id: 1,
                    title: 'beer',
                    quantity: 10
                },
                
                {
                    id: 2,
                    title: 'whiskey',
                    quantity: 2
                },
                {
                    id: 3,
                    title: 'wine',
                    quantity: 1
                }
                ]
        }
    },
    computed: {
        filterProducts: function(){
          return this.productsList.filter( (product) => {
              return  product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
            })
        }
    },
    methods: {
        increment(product){
           productsService.incrementItem(product)
        },
        decrement(product){
            productsService.decrementItem(product)
        }
    }
}
</script>


<style scoped>

</style>