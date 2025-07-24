import { useDispatch, useSelector } from "react-redux";
import { ShowCartList } from "./ShowCartList";
import { clearCart } from "../utils/cartSlice";

const AddCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <p>
          <button
            onClick={handleClearCart}
            className="normal-link m-2.5 p-1  bg-black text-white border-4 rounded-2xl cursor-pointer"
          >
            Clear Cart
          </button>
        </p>
      )}
      <ShowCartList item={cartItems} />
    </div>
  );
};
export default AddCart;
