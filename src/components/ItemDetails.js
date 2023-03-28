import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useParams, Outlet} from "react-router-dom";
import useFetch from "./useFetch.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState([
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
       "description":"500g pineaple",
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
   },
   {
    "description":"1kg Meat",
    "id":6,
    "image":"https://media.gq.com.mx/photos/620bcf7243f71a078a355280/16:9/w_2560%2Cc_limit/carnes-85650597.jpg",
    "name":"Meat",
    "price":34.21
 }
 ]);
  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");

  const params = useParams();

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.log("ERROR", error));
  }, );
  document.title = product.name
  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="135"
          height="135"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="" end>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "tab-active" : ""} to="nutrition">
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) => isActive ? "tab-active" : ""}
                to="storage"
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        
        <Outlet context={product} />
      </div>
    </div>
  );
}