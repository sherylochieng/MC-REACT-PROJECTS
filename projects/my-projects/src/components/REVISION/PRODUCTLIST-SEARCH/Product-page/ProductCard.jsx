

export default function ProductCard({product}){
    return(
        <div key={product.id} > 
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h3>{product.inStock ? "instock":'outof stock' }</h3>

        </div>
    )

}