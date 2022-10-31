import classes from "./HeaderButton.module.css";
import CartIcon from "../Icons/CartIcon";
export function HeaderButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span> {""}
      <span>3</span>
    </button>
  );
}
