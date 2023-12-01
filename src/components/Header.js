import { useRef, useContext } from "react";
import logo from "../logo192.png";
import { CartContext } from "../store/shopping-cart-context";

const Header = () => {
  const cartContext = useContext(CartContext);
  const dialogRef = useRef();

  // Calculate the total amount , WAY 1 - without useContext
  // const cartTotal = shoppingCart.items.reduce(
  //   (total, item) => total + item.quantity * item.price,
  //   0
  // );

  // Calculate the total amount , WAY 2 - with useContext
  const cartTotal = cartContext.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // console.log("THIS IS SHOPPING CART AFTER QUANTITY CHANGE:", shoppingCart);

  return (
    <>
      <dialog ref={dialogRef} style={styles.dialog}>
        <h2>YOUR CART</h2>
        {/* WAY 1: Without useContext */}
        {/* <div>
          {shoppingCart.items.length > 0 ? (
            shoppingCart.items.map((item) => (
              <div key={item.id} style={styles.dialogCart}>
                <div>
                  <div>{item.title}</div>
                  <div>(${item.price})</div>
                </div>
                <div style={styles.cartQuantityContainer}>
                  <button
                    style={styles.minusBtn}
                    onClick={() => decreaseItemFromCart(item.id)}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    style={styles.plusBtn}
                    onClick={() => addItemToCart(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No items in the cart!</div>
          )}
        </div> */}

        {/* WAY 2: WITH USE CONTEXT */}
        <div>
          {cartContext.items.length > 0 ? (
            cartContext.items.map((item) => (
              <div key={item.id} style={styles.dialogCart}>
                <div>
                  <div>{item.title}</div>
                  <div>(${item.price})</div>
                </div>
                <div style={styles.cartQuantityContainer}>
                  <button
                    style={styles.minusBtn}
                    onClick={() => cartContext.decreaseItemFromCart(item.id)}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    style={styles.plusBtn}
                    onClick={() => cartContext.addItemToCart(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No items in the cart!</div>
          )}
        </div>

        <div style={{ textAlign: "end" }}>
          Cart Total: ${cartTotal.toFixed(2)}
        </div>

        <div style={{ textAlign: "end" }}>
          <button onClick={() => dialogRef.current.close()}>Close</button>
          <button>Checkout</button>
        </div>
      </dialog>

      <div style={styles.headerContainer}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logo} style={{ width: "4rem" }}></img>
          <h2
            style={{
              textTransform: "uppercase",
              color: "#eeb659",
              fontSize: "2rem",
            }}
          >
            ELEGANT CONTEXT
          </h2>
        </div>

        <div>
          <button
            style={{
              backgroundColor: "#eeb659",
              padding: "5px 15px",
              borderRadius: "3px",
              borderStyle: "none",
            }}
            onClick={() => {
              dialogRef.current.showModal();
            }}
          >
            Cart ({cartContext.items.length})
          </button>
        </div>
      </div>
    </>
  );
};

const styles = {
  dialog: {
    backgroundColor: "#d1a36b",
    padding: 10,
    borderStyle: "none",
    borderRadius: "10px",
    // maxWidth: "400px",
    width: "30%",
  },

  dialogCart: {
    backgroundColor: "#da930b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: "5px 10px",
    borderRadius: 10,
  },

  cartQuantityContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    // justifyContent: "center",
  },

  minusBtn: {
    backgroundColor: "transparent",
    borderStyle: "none",
    fontSize: "1rem",
    padding: 10,
  },

  plusBtn: {
    backgroundColor: "transparent",
    borderStyle: "none",
    fontSize: "1rem",
    padding: 10,
  },

  headerContainer: {
    marginBottom: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Header;
