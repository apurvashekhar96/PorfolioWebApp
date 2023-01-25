import useNavigationContext from "../hooks/useNavigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPage } = useNavigationContext();
  const classes = classNames(
    "text-on-primary",
    className,
    currentPage === to && activeClassName
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
