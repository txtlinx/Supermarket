import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Welcome to Supermarket</h1>
        <p>
          Order your product from <em>supermarket</em> app test 
        </p>
        <Link to="/products" className="boton">
          Start shopping 
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dd9xjpotu/image/upload/c_scale,h_1.00,w_1.00/cld-sample-4.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
