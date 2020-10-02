<template>
<div>
    <h1>add customer</h1>
    <form @submit.prevent="addCustomer">
        <input v-model="firstName">
        <input v-model="lastName">
        <input v-model="email">
        <button>add customer    </button>
    </form>
    <h1>customers</h1>

    <ul v-for="(customer, index) in customers" :key="index">
        <li><button @click="deleteCustomer(index)">delete customer</button></li>
        <li>{{customer.firstName}}</li>
        <li>{{customer.lastName}}</li>
        <li>{{customer.email}}</li>
        <li>
            <ul  v-for="(product, index) in customer.productsList" :key="index">
                <li>{{product}}</li>
            </ul>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'AppCustomers',
    
    data(){

       
        return {
                    firstName: '',
        lastName: '',
        email: '',
            customers: [
                {
                    firstName: 'pera',
                    lastName: 'peric',
                    email: 'pera@pera.com',
                    productsList: ['1item', '2item', '3item']
                },
                {
                    firstName: 'comi',
                    lastName: 'comic',
                    email: 'comi@comi.com',
                    productsList: []
                },
                                {
                    firstName: 'somi',
                    lastName: 'somic',
                    email: 'somi@somi.com',
                    productsList: []
                },
            ]
        }
    },

    methods: {
        deleteCustomer(index){
            this.customers.splice(index, 1);
        },
        
        addCustomer(){
            const newCustomer = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            }
            this.customers.push(newCustomer)
        }
    }
}
// Implementirati formu koja dodaje novog kupca u listu
// Komitovati urađeno





</script>


<style scoped>

</style>