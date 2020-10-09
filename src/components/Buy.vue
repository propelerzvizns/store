<template>
    <div>
        <!-- tranici prikazati informacije o proizvodu i select box preko kojeg se bira kupac -->
<table>
    <tr>
        <th>title</th>
        <th>quantity</th>
    </tr>
    <tr>
        <td>{{product.title}}</td>
        <td>{{product.quantity}}</td>
      
    </tr>
</table>
    </div>
</template>

<script>
 import { productsService } from '../services/ProductsService'
export default {
    data(){
        return {
            product: {
                title: '',
                quantity: ''
            }
        }
    },
    created() {
       
        this.product = productsService.getProduct(this.$route.params.id);
    }
    
}
</script>

<style scoped>

</style>