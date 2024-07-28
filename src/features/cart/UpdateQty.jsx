import { useDispatch } from "react-redux"
import Button from "../..q/ui/Button"
import { decreaseItem, increaseItem } from "./cartSlice"
/* eslint-disable react/prop-types */

function UpdateQty({pizzaId, curQty}) {
  
  const dispatch = useDispatch()
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={dispatch(increaseItem(pizzaId))}>
        +
      </Button><span className="text-sm font-medium">{curQty}</span>
      <Button type="round" onClick={dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
    </div>
  );
}

export default UpdateQty
