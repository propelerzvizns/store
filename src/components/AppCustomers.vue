<template>
<div>
    <h1>add customer</h1>
    <form @submit.prevent="addCustomer">
        <input v-model="newFirstName">
        <input v-model="newLastName">
        <input v-model="newEmail">
        <button>add customer</button>
    </form>
    <h1>customers</h1>
    <table>
        <tr>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th></th>
            <th></th>
        </tr>
        <tr v-for="customer in customers" :key="customer.id">
            <td>{{customer.firstName}}</td>
            <td>{{customer.lastName}}</td>
            <td>{{customer.email}}</td>
            

            <td>
             
             
                <router-link :to="{ name: 'latest-purchases', params:{id: customer.id} }">Latest Purchases</router-link>
                </td>
            <td>
                <button @click="deleteCustomer(index)">Delete Customer</button> 
            </td>
        </tr>
    </table>

</div>
</template>

<script>
export default {
    name: 'AppCustomers',
    
    data(){

       
        return {
            
            newFirstName: '',
            newLastName: '',
            newEmail: '',

            customers: [
                {
                    id: 1,
                    firstName: 'pera',
                    lastName: 'peric',
                    email: 'pera@pera.com',
                    productsList: ['1item', '2item', '3item']
                },
                {
                    id: 2,
                    firstName: 'comi',
                    lastName: 'comic',
                    email: 'comi@comi.com',
                    productsList: []
                },
                {
                    id: 3,
                    firstName: 'somi',
                    lastName: 'somic',
                    email: 'somi@somi.com',
                    productsList: []
                },
            ]
        }
    },

    methods: {
        deleteCustomer(id){
            this.customers.splice(id, 1);
        },
        
        addCustomer(){
            const newCustomer = {
                id: new Date().getTime(),
                firstName: this.newFirstName,
                lastName: this.newLastName,
                email: this.newEmail
            }
            this.customers.push(newCustomer)
        }
    }
}




</script>


<style scoped>

</style>