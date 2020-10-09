<template>
<div>
    <h1>products</h1>
<table>
    <tr>
        <th>title</th>
        <th>quantity</th>
    </tr>

    <tr v-for="product in productsList" :key="product.id">
        <td>{{product.title}}</td>
        <td>{{product.quantity}}</td>
    </tr>
</table>
</div>
</template>

<script>
export default {

    data(){

        return {

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
    }
}
</script>


<style scoped>

</style>