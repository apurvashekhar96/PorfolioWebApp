import { useContext } from "react";
import NavigationContext from "../contexts/Navigation";

function useNavigationContext() {
  return useContext(NavigationContext);
}

export default useNavigationContext;
