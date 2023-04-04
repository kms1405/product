product: Product api
Author: Meenakshisundaram
setup:
1.Install all package.json packages
2.To run server - npm start


API to add products to the database
URL [POST]: /products/create

API to list products
URL [GET] : /products   

API to delete products
URL [DELETE] : /products/:id

API to update quantity of a product (can be incremented or decremented)
URL [POST] : /products/:id/update_quantity/?number=10