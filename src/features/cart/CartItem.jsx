/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import { formatCurrency } from "../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQty from "./UpdateQty";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
// const curQty = useSelector(getCurQty);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="ytext-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQty pizzaId={pizzaId} curQty={quantity}/>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
