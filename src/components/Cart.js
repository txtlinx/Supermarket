import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "./Input.js";
import Button from "./Button.js";
import { Link ,useOutletContext} from "react-router-dom";

export default function Cart({ cart }) {
  document.title ="Cart"

  // if (cart.quantity <0){
  //   return {
  //     ...product,
  //     quantity: product.quantity = 1
  //  }
  // }
  
  
  
  const totalPrice = cart.reduce((total, product) => {
    if (product.quantity > 0) {
      return total + product.price * product.quantity;
    }
    return total;
  }, 0);


  const [email, setEmail] = useState("");
  const product = useOutletContext();
  function handleFormSubmit(event) {
    event.preventDefault();
    
  
   
   
 
  }

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
       
        {cart.length === 0 && (
          
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          
          <>
        
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="55%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
            
                      
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="120"
                          height="120"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>

                      {product.quantity < 1 ? <td>{product.quantity = 0}  (removed)</td>:<td>{product.quantity}</td>}
                      
                      <td>
                      { product.price * product.quantity > 0 ? <strong>${product.price * product.quantity}</strong>:""}
                      </td>
                    </tr>
                    
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna sapien, lacinia vitae tempus ullamcorper, tristique at neque. Ut orci lacus, accumsan aliquet placerat eu, blandit viverra nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ornare est pretium interdum euismod. Pellentesque at cursus arcu. In hac habitasse platea dictumst. Aenean et lorem et felis imperdiet tincidunt non eget dolor. Etiam ut placerat nisl. Curabitur feugiat erat et congue tincidunt. Curabitur id nisl metus. Cras neque sem, luctus a hendrerit nec, posuere ac orci.
              </p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
              />
              <Link type="" to="/" className="boton">
              pay your purchase
        </Link> 
            </form>
          </>
        )}
      </div>
    </div>
  );
}
