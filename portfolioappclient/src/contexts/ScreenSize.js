import { createContext, useEffect, useState } from "react";

const ScreenSizeContext = createContext();

function ScreenSizeContextProvider({ children }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [screenSize]);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export default ScreenSizeContext;
export { ScreenSizeContextProvider };
