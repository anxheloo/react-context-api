import image from "../assets/mocha-overcoat.jpg";
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

const Product = ({ ...element }) => {
  const cartContext = useContext(CartContext);

  return (
    <div
      style={{
        // maxWidth: "32%",
        height: "100%",
        backgroundColor: "#4c3a24",
        borderRadius: "5px",
        overflow: "hidden",
        marginBottom: "1rem",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxHeight: "55%",
        }}
      >
        <img
          src={element.image}
          style={{
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
          alt="product jacket"
        ></img>
      </div>

      <div
        style={{
          padding: 10,
          maxHeight: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div>
          <div>{element.title}</div>
          <span>{element.price}</span>
        </div>

        <p>{element.description}</p>

        <div
          style={{
            textAlign: "end",
          }}
        >
          <button
            style={{
              padding: "5px 15px",
              backgroundColor: "#f3a40c",
              borderRadius: "3px",
              borderStyle: "none",
            }}
            onClick={() => cartContext.addItemToCart(element.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
