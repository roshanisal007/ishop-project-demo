import { useEffect, useState } from "react";

export default function ProductsComponent()
{
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(()=>{
        fetch('http://fakestoreapi.com/products')
        .then(response=> response.json())
        .then(data=> {
            setProducts(data)
        })
    },[])
    return(
        <div>
            <h3>Products List</h3>
            <ol>
                {
                    products.map(product=>
                        <li>{product.title}</li>
                        )
                }
            </ol>
        </div>
    )
}