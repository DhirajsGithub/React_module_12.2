import React from 'react'
import { useParams } from 'react-router-dom'
// Extracting dynamic value from the url 

const ProductsDetails = () => {
    const params = useParams();
    console.log(params)
    console.log(params.productId);
  return (
    <div>ProductsDetails
    <h1>{params.productId}</h1>
    </div>
    
  )
}

export default ProductsDetails