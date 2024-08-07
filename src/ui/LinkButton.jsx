import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classname = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <button className={classname} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}

export default LinkButton;
