import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Product(props) {
  const { details } = props;

  const productFromCart = props.cart.find(
    (product) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  const validation =(q,details)=>{
    if(q > 0) {
     return ` +`
       } else {
       return `Add this product only for: ${details.price} USD`
      
    }
   }
  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            width="100"
            height="100"
            className="product-image"
            alt={details.name}
            
          />
        </Link>
          {quantity > 0 && (
            <div className="product-quantity-container">
              ${details.price}
              <div className="product-quantity">{quantity}</div>
            </div>
          )}
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
            {quantity > 0 && (
            <Button outline onClick={() => props.onProductDelete(details)} className="product-delete">-</Button>
          )}
        </div>
        <Button outline onClick={() => props.onProductAdd(details)}>
        
        {validation(quantity,details)}
        </Button>
      </div>
    </div>
  );
}

 