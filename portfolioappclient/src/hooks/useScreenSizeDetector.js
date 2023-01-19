import { useContext } from "react";
import ScreenSizeContext from "../contexts/ScreenSize";

function useScreenSizeContext() {
  return useContext(ScreenSizeContext);
}

export default useScreenSizeContext;
