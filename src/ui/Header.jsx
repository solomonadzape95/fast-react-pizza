import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-400 px-4 py-3 uppercase border-b border-stone-200 flex justify-between items-center">
      <Link to="/" className="tracking-widests">
        Fast React Pizza and Co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
