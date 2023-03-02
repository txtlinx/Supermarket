import {useContext,useState} from "react";
import {useOutletContext} from "react-router-dom";
import Button from "./Button.js";
import {NavLink } from "react-router-dom";


export default function ProductDetailInfo({onProductAdd,onProductDelete}) {
  
  const product = useOutletContext();

  
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong><br/> Etiam volutpat ultricies lorem. Aenean quis dictum ipsum. Vestibulum tincidunt fringilla tortor, et eleifend ligula aliquet ornare. Integer sodales est sed ante sollicitudin lobortis. Suspendisse nec vehicula enim. Aliquam mattis mauris non odio bibendum, at dignissim diam suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris tempus dolor lacus, eu consectetur enim congue nec. Aliquam pretium nisi eget nisl convallis
  
      </p>
      
      <Button className="btn-outline" onClick={() => onProductAdd(product)}>+</Button>
      
      <Button  onClick={() => onProductDelete(product)  }  className="product-delete2">-</Button>
      <NavLink to="/cart" className="product-delete">look shopping cart</NavLink> 
    </>
  );
}