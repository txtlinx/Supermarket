import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Welcome to Supermarket</h1>
        {document.title ="Home"}
        <p>consectetur adipiscing elit. Praesent quis porta justo, pharetra venenatis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut laoreet dapibus erat, et congue nunc tincidunt vel. Ut a nulla consectetur, venenatis leo et, lacinia metus. Phasellus dolor magna, faucibus quis magna at, vulputate lacinia dui. Maecenas enim odio, convallis id venenatis et, ultricies eu ex. Curabitur eu libero hendrerit, porta massa vel, tristique odio. Nunc ut nibh ut nunc sagittis laoreet quis at velit. Sed viverra pretium fringilla. Praesent hendrerit felis quis rhoncus rutrum. Quisque quis erat vel dolor molestie eleifend eu non enim. Maecenas ullamcorper sem arcu, vel porta mauris consectetur id.        </p>
        <Link to="/products" className="boton">
          Start here!
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dd9xjpotu/image/upload/c_scale,h_1.00,w_1.00/cld-sample-4.jpg"
        width="450"
        height="330"
        className="rounded home-image"
        alt=""
      />
     
    </div>
  );
}
