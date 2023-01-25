import { useFetchLinksQuery } from "../store";
import useNavigationContext from "../hooks/useNavigation";
import classNames from "classnames";
import DisplayImage from "./DisplayImage";
import useScreenSizeContext from "../hooks/useScreenSizeDetector";

function HeaderSection() {
  const screenSize = useScreenSizeContext();
  const { data, isFetching } = useFetchLinksQuery();
  const { currentPage } = useNavigationContext();

  const processedData = data?.configLinks || [];

  let source, element, extraClass;
  if (isFetching) {
    source = "";
  } else {
    source = `${processedData?.headerPic || ""}`;
  }

  if (!isFetching && currentPage !== "/") {
    extraClass = classNames(`opacity-40`);

    element = (
      <div className="flex flex-row justify-center">
        <div className="mr-9 pt-2">
          <DisplayImage
            height={`${screenSize > 650 ? "h-28" : "h-20"}`}
            width={`${screenSize > 650 ? "w-28" : "w-20"}`}
          />
        </div>
        <div
          className={`  mt-5 font-semibold text-primary flex justify-center items-center`}
        >
          {/* <p className="">
            <span className="partA">Hey!</span>
            <>&#44;</>
          </p> */}
          <p
            className={`mt-1 wavy  ${
              screenSize < 500 ? "text-4xl" : "text-7xl"
            }`}
          >
            <span className="mr-3 text-white text-3xl">
              It<>&#39;</>s
            </span>
            <span> A</span>
            <span>p</span>
            <span>u</span>
            <span>r</span>
            <span>v</span>
            <span>a</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={` relative `}>
      <div
        className={`min-h-25 ${extraClass || ""}`}
        style={{
          backgroundImage: `url("${source || ""}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-0">{element || <></>}</div>
    </div>
  );
}

export default HeaderSection;
