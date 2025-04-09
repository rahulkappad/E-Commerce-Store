import { Product } from '@/sanity.types';
import React from 'react'

type ProductItemProps = {
    product: Product;
}

const ProductItem = ({product}:ProductItemProps) => {
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem