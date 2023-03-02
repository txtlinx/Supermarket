import { useState, useEffect } from "react";
import Product from "./Item.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
  const [products, setProducts] = useState([
    {
       "description":"200g cheese block",
       "id":1,
       "image":"https://media.istockphoto.com/id/1127471287/es/foto/queso-blanco.jpg?s=612x612&w=0&k=20&c=o5PvkTyLvn7c0hcu1EOnmnSrvTv8h2Vhg8jyI-4aq0s=",
       "name":"Cheese",
       "price":10
    },
    {
       "description":"200ml milk bottle",
       "id":2,
       "image":"https://www.eltiempo.com/uploads/2021/06/08/60bfd6dad5269.jpeg",
       "name":"Milk",
       "price":8
    },
    {
       "description":"1 piece of tomato",
       "id":3,
       "image":"https://s2.glbimg.com/JTFA920LbTAUeTN1JF00ql7oH7Y=/0x0:4032x3024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/y/w/lwZf9ETcWr2Oslxcx3Ng/eddie-pipocas-gk6jpxwk5ze-unsplash.jpg",
       "name":"Tomato",
       "price":6.25
    },
    {
       "description":"500g pineapple",
       "id":4,
       "image":"https://actualfruveg.com/wp-content/uploads/2022/02/bea-pina-c.jpg",
       "name":"Pineapple",
       "price":3.25
    },
    {
      "description":"1kg Pear",
      "id":5,
      "image":"https://conteudo.imguol.com.br/c/entretenimento/4e/2020/03/23/pera-1584989626321_v2_4x3.jpg",
      "name":"Pear",
      "price":4.21
   }
 ]);
  // const { get, loading } = useFetch(
  //   "https://react-tutorial-demo.firebaseio.com/"
  // );

  // useEffect(() => {
  //   get("supermarket.json")
  //     .then((data) => {
  //       setProducts(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log("Could not load product", error));
  // }, []);
 let loading = false;
  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Our products</p>
      <div className="products-grid">
        {loading && <Loader />}

        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}