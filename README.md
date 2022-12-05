## Shopware-API 🛍
- Esse é o back-end usado para armazenar as informações de estoque dos produtos e disponibilizado para o front-end consumir os dados.


### Mongo User
- Usar .env

- mongo
- y6mkzuCTVKWrQ61C

## 📔 Models

| Entity   |
| :---------- |
| Product | 
| Category |   
|  Orders | 

### Product Diagram
| Name   | Type       |
| :---------- | :--------- |
|  _id | `string` | 
|  model | `string` | 
|  name | `string` | 
|  price | `number` | 
|  imagePath | `string` | 
|  imageUrl | `string` | 
|  rating | `Number` | 
|  productAttributes | `Array` | 
|  category | `Schema.Types.ObjectId` | 

#### Formato aceito no campo ProductAttributes
`` [{"size":"1 metro", "brand": "Chanel", "color":"pink"}]`` 
``[{"size":"2 metros", "brand": "D&C", "color":"black"}]`` 

### Category Diagram
| Name   | Type       |
| :---------- | :--------- |
|  _id | `string` | 
|  name | `string` | 

### Orders Diagram
| Name   | Type       |
| :---------- | :--------- |
|  _id | `string` | 
|  status | `string` | 
|  createdAt | `Date` | 
|  products | `[ {Schema.Types.ObjectId} ]` | 

## Endpoints

| Collection   | URL       | METHOD |
| :---------- | :--------- |:--------- |
|  List producs by category | `/categories/:categoryId/products` | `GET` |
|  List one product by category | `/categories/:categoryId/products/:productId` | `GET` |
|  List categories | `/categories` | `GET` |
|  Create categories | `/categories` | `POST` |
|  List products | `/products` | `GET` |
|  List one product | `/products/:productId` | `GET` |
|  List one product | `/products` | `POST` |
|  Create order | `/orders` | `POST` |
|  List orders | `/orders` | `GET` |
|  Change order status | `/orders/:orderId` | `PATCH` |
|  Cancel order | `/orders/:orderId` | `DELETE` |


---
<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>