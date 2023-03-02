import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useParams, Outlet} from "react-router-dom";
import useFetch from "./useFetch.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState([
    {
       "description":"200g cheese block",
       "id":1,
       "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/…07769454/react-tutorial/products/final/cheese.png",
       "name":"Cheese",
       "price":10
    },
    {
       "description":"200ml milk bottle",
       "id":2,
       "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/…1607769454/react-tutorial/products/final/milk.png",
       "name":"Milk",
       "price":5
    },
    {
       "description":"1 piece of tomato",
       "id":3,
       "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/…07769454/react-tutorial/products/final/tomato.png",
       "name":"Tomato",
       "price":2.75
    },
    {
       "description":"500g pineapple",
       "id":4,
       "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/…69454/react-tutorial/products/final/pineapple.png",
       "name":"Pineapple",
       "price":3.25
    }
 ]);
  // const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");
  const params = useParams();

  // useEffect(() => {
  //   get(`productinfo/id${params.id}.json`)
  //     .then((data) => {
  //       setProduct(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log("Could not loadd product details", error));
  // }, );

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
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