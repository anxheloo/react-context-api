import Product from "./Product";
import { DUMMY_PRODUCTS } from "../dummy-products";

const Shop = ({ children }) => {
  return (
    <div>
      <h2>ELEGANT CLOTHING FOR EVERYONE</h2>

      <div
        style={{
          //WAY 1:
          // display: "flex",
          // flexWrap: "wrap",
          // justifyContent: "space-between",

          //WAY 2:
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          gap: "1rem",
        }}
      >
        {/* {children} */}
        {DUMMY_PRODUCTS.map((element) => (
          <div key={element.id}>
            <Product {...element}></Product>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
