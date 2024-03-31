import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ProductCard from "./ProductCard";
import shirt from "../assets/shirt.jpeg";
import tshirt from "../assets/tshirt.jpeg"
import denim from "../assets/denim.jpeg";
import jacket from "../assets/jacket.jpeg";
import pant from "../assets/pant.jpeg";

export default function ProductList() {
    let productDetails = [
        {id:1, type:"TShirt", brand: "US Polo", price: 400, image:tshirt },
        {id:2, type:"Shirt", brand: "Zudio", price: 600, image:shirt },
        {id:3, type:"Pant", brand: "Kumar", price: 400, image:pant },
        {id:4, type:"Denim", brand: "Gucci", price: 8000, image:denim },
        {id:5, type:"Jacket", brand: "Levis", price: 1000, image:jacket },
        {id:6, type:"pant", brand: "US Polo", price: 400, image:pant }
    ]

    const [productDetails1,setProductDetails] = useState([])
    const [products, setProducts] = useState([])

    

    return (
        <>

            <div style={{ margin: "30px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="search" onChange={(event) => {

                        let prods = productDetails.filter((product) => {
                            return product.brand.toLowerCase().startsWith(event.target.value.toLowerCase());
                        })

                        setProducts(prods);

                    }} />
                </Form.Group>
            </div>

            <div className='App' style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

                {/* {
          isLoggedId ?  <Home /> : <Login/>
        } */}

                {/* <Home details={details} roll={roll}/> */}
                {/* <Login/> */}
                {/* <Register  details={details}  /> */}


                {/* <Counter /> */}
                {/* <CounterClass /> */}

                {
                    products.map((product) => {
                        return <ProductCard productDetails={product} />
                    })
                }

            </div>

        </>
    )
}