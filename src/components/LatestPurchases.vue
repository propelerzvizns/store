<template>
<div>
    <h1>Latest Purchases</h1>
        <table>
        <tr>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>latest purchases</th>
          
        </tr>
        <tr>
         
            <td>{{getCustomer.firstName}}</td>
            <td>{{getCustomer.lastName}}</td>
            <td>{{getCustomer.email}}</td>
            
            <td v-if="getCustomer.productsList.length">
                <tr v-for="(product, index) in getCustomer.productsList" :key="index">
                    <td>{{product.title}}</td>
                    <td>{{product.quantity}}</td>
                   
                </tr>
            </td>
            <td v-else>no products in cart</td>
            <td>
       
             
                <!-- <router-link :to="{ name: 'latest-purchases', params:{id: customer.id} }">Latest Purchases</router-link> -->
                </td>
            <td>
                <!-- <button @click="deleteCustomer(index)">Delete Customer</button>  -->
            </td>
        </tr>
    </table>
</div>

</template>

<script>
import {customerService} from '../services/CustomerServices';
export default {
    data(){
    return {
        customerData: {}
     }
     },
     computed: {
         getCustomer: function(){
             return customerService.getCustomerById(this.$route.params.id);
         }
     },
     created(){
       console.log(this.$route.params.id);
       
          
            
            
       
     },
    methods: {

    }
}

// Dodati “Latest Purchases” link pored svakog kupca koje otvara posebnu stranicu
// Dodati posebnu komponentu za ovu stranicu
// Dodati posebnu route-u za ovu stranicu: /customers/:id
// Na stranici prikazati osnovne informacije o kupcu kao i listu njegovih proizvoda
// U komponenti kreirati computed property koji će na osnovu id-ja iz URL-a, vratiti objekat kupca
</script>



<style scoped>

</style>