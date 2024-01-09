import React from 'react'
//import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: 1,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: 2,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: 3,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'http://127.0.0.1:4000/api/products'
//'https://us-east-1.aws.data.mongodb-api.com/app/application-1-bybhq/endpoint/products2'
//
//'https://course-api.com/react-store-products'

export const single_product_url = `http://127.0.0.1:4000/api/products/byId/`
//`https://course-api.com/react-store-single-product?id=`

export const hardcodedProducts = [
  {
    id: 1,
    title: 'Product 1',
    price: 10.99,
    description: 'Description for Product 1',
    // Add other fields as needed
  },
  {
    id: 2,
    title: 'Product 2',
    price: 19.99,
    description: 'Description for Product 2',
    // Add other fields as needed
  },
  // Add more products as needed
];