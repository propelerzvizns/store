// const productsList = [
//     {
       
//         id: 1,
//         title: 'beer',
//         quantity: 10
//     },
    
//     {
//         id: 2,
//         title: 'whiskey',
//         quantity: 2
//     },
//     {
//         id: 3,
//         title: 'wine',
//         quantity: 1
//     }
//     ]
class ProductsService{
   incrementItem(product){
    product.quantity++
   }
   decrementItem(product){
    product.quantity > 0 && product.quantity--
   }
}

export const productsService = new ProductsService();