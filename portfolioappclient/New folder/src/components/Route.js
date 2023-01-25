import useNavigationContext from "../hooks/useNavigation";

function Route({ path, children }) {
  const { currentPage } = useNavigationContext();
  if (currentPage === path) {
    return children;
  } else {
    return null;
  }
}

export default Route;
