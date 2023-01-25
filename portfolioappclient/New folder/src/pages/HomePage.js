import DisplayImage from "../components/DisplayImage";
import Panel from "../components/Panel";
import Button from "../components/Button";
import { BsCloudDownloadFill } from "react-icons/bs";
import { useFetchLinksQuery } from "../store";
import { useState, useEffect } from "react";
import useScreenSizeContext from "../hooks/useScreenSizeDetector";

function HomePage() {
  const screenSize = useScreenSizeContext();
  const [duration, setDuration] = useState(0);
  const { data, isLoading } = useFetchLinksQuery();

  const processedData = data ? data?.configLinks || "" : "";
  let renderedName;

  const firstLetters1 = <span>I'm</span>;
  const firstLetters2 = <span>Let's</span>;
  const changingLetters = ["Innovate", "Develop", "Create"];

  useEffect(() => {
    if (duration === 0) {
      setTimeout(() => {
        setDuration(duration + 1);
      }, 4100);
    } else if (duration === 1) {
      setTimeout(() => {
        setDuration(duration + 1);
      }, 4500);
    } else if (duration === 2) {
      setTimeout(() => {
        setDuration(duration + 1);
      }, 4200);
    } else if (duration === 3) {
      setTimeout(() => {
        setDuration(0);
      }, 4100);
    }
  }, [duration]);

  if (!isLoading && duration === 0) {
    const nameLetters = processedData?.fullName.split(" ")[0].split("") || [""];

    renderedName = nameLetters.map((letter, index) => {
      return (
        <span key={index} style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
          {letter}
        </span>
      );
    });
  } else if (duration === 1) {
    const nameLetters = changingLetters[0].split("");
    renderedName = nameLetters.map((letter, index) => {
      return (
        <span key={index} style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
          {letter}
        </span>
      );
    });
  } else if (duration === 2) {
    const nameLetters = changingLetters[1].split("");
    renderedName = nameLetters.map((letter, index) => {
      return (
        <span key={index} style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
          {letter}
        </span>
      );
    });
  } else if (duration === 3) {
    const nameLetters = changingLetters[2].split("");
    renderedName = nameLetters.map((letter, index) => {
      return (
        <span key={index} style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
          {letter}
        </span>
      );
    });
  }

  return (
    <div className="flex flex-row ">
      <div className="m-3 sm:m-5 md:m-10 flex flex-col min-h-60 justify-around md:justify-between">
        <div className="mt-5">
          <DisplayImage
            height={`${screenSize < 650 ? "h-20" : " h-40"}`}
            width={`${screenSize < 650 ? "w-20" : "w-40"}`}
          />
        </div>
        <div className="">
          <Button
            primary
            rounded
            className={`hover:scale-110 transform transform transition duration-500 text-sm md:text-xl`}
          >
            <BsCloudDownloadFill className="text-primary text-md sm:text-lg md:text-xl mr-1" />{" "}
            <a href={processedData?.resumeLink || ""}>Resume.</a>
          </Button>
        </div>
      </div>
      <div className="text-lg sm:text-2xl md:text-5xl xl:text-7xl lg:text-6xl mt-20 font-semibold text-primary ">
        <Panel className={`bg-primary-container shadow-md border-0`}>
          <p className="text-primary text-2xl sm:2xl md:5xl xl:text-7xl lg:text-6xl">
            <span className="partA">Hi</span>
            <>&#44;</>
          </p>
          <p className="mt-3 wavy">
            <span className="mr-2 md:mr-7 text-xl sm:text-xl md:text-4xl xl:text-6xl lg:text-5xl ">
              {/* I<>&#39;</>m */}{" "}
              {duration === 0 ? firstLetters1 : firstLetters2}
            </span>
            {renderedName || ""}
            {/* <span> A</span>
            <span>p</span>
            <span>u</span>
            <span>r</span>
            <span>v</span>
            <span>a</span>. */}
          </p>
          <p className="mt-8 md:mt-16 sinosodal">
            <span>Full </span>
            <span>Stack </span>
            <span>Developer </span>
            <span>.</span>
          </p>
        </Panel>
      </div>
    </div>
  );
}

export default HomePage;
