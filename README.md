<h1 align='center'  >
  <img 
   width='100px' height='100px'
    src='./.github/shopping.png'
  >
</h1>
 <p align="center">
      <img alt="Linguagem mais usada na aplicação" src="https://img.shields.io/github/languages/top/pedrovinhas/twitter-storybook?color=1B4B66&labelColor=F7F9FA">
      <img alt="Linguagens usadas" src="https://img.shields.io/github/languages/count/pedrovinhas/twitter-storybook?color=1B4B66&labelColor=F7F9FA">
      <img alt="Último commit" src="https://img.shields.io/github/last-commit/pedrovinhas/twitter-storybook?color=1B4B66&labelColor=F7F9FA">
      <img alt="Licença" src="https://shields.io/badge/license-MIT-ff7f00&?&style=flat?&color=1B4B66&labelColor=F7F9FA">
  </p>  
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