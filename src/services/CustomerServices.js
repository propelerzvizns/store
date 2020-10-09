const customers = [
    {
        id: 1,
        firstName: 'pera',
        lastName: 'peric',
        email: 'pera@pera.com',
        productsList: [{id: 1, title: 'beer', quantity: 10}, {id: 2, title: 'whiskey', quantity: 2}, {id: 3, title: 'wine', quantity: 1}]
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
    }
];

class CustomerServices {
    
    constructor() {
        console.log('servis se instancira')
    }
    
    getCustomerById(id){
      return  customers.find((customer) => {
          return customer.id == id
        });
 
       
        }
}

export const customerService = new CustomerServices();


