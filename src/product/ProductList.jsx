import {useEffect, useRef, useState} from "react";
import Product from "./Product.jsx";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const loaded = useRef(false);
    const [load, setLoad] = useState(false);

    function handleClick(){
        setLoad(true);
    }

    useEffect(() => {
        console.log("UseEffect with empty array");
    },[])

    useEffect(() => {
        console.info("Call use Effect")

        async function fetchProduct(){
            const response = await fetch("/products.json")
            const data = await response.json();
            setProducts(data)
        }

        if (load){
            fetchProduct();
        }

        return () => {
            console.info("Product list component unmounted");
        }
    },[load]);

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </>
    )
}