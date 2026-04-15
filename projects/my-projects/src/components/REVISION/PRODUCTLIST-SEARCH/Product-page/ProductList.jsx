import { useState } from "react";

import {products} from "../Product";
import ProductCard from "./ProductCard";

export default function ProductList(){

    const [query,setQuery]=useState('')
    const [inStock,SetInStock]=useState(false)

    const filteredProducts=products
    .filter((product) => !inStock || product.inStock === true)
    .filter((product)=>product.title.toLowerCase().includes(query.toLowerCase()))

   return (
  <div>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="search product name"
    />

    <label>
      <input
        type="checkbox"
        checked={inStock}
        onChange={(e) => SetInStock(e.target.checked)}
      />
      In Stock Only
    </label>

    {filteredProducts.length === 0 ? (
    <p>No products found</p>
    ) : (
  filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
    ))
    )}



  </div>
)
    

}