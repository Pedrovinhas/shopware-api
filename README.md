<h1 align='center'  >
  <img 
   width='100px' height='100px'
    src='./.github/shopping.png'
  >
</h1>

## Shopware-API 🛍
- Esse é o back-end usado para armazenar as informações de estoque dos produtos e disponibilizado para o front-end consumir os dados.

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