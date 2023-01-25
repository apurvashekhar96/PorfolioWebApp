import Link from "../components/Link";
import { useFetchLinksQuery } from "../store";
import useScreenSizeContext from "../hooks/useScreenSizeDetector";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import { useState } from "react";

function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSizeContext();
  const { data, isLoading } = useFetchLinksQuery();
  let renderedLinks, finalRenderedLinks;

  //const processedData = data?.sections || [];

  // for screen sizes > 750 px------------------------------------------------------------------

  if (!isLoading) {
    const navFields = data?.sections || [""];

    const links = navFields.map((field) => {
      return { label: field.label, path: field.link };
    });

    if (links) {
      renderedLinks = links.map((link) => {
        return (
          <Link
            className="mb-5 bg-primary w-4/5  py-3 pl-1 sm:pl-2 rounded text-xs"
            activeClassName="font-semiBold border-l-4 border-tertiary l-1 sm:pl-3"
            key={link.label}
            to={link.path}
          >
            {link.label}
          </Link>
        );
      });
    }
  }
  finalRenderedLinks = renderedLinks || "";
  // for screen sizes < 750 px------------------------------------------------------------------
  const handleClickOpen1 = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOpen2 = () => {
    setIsOpen(!isOpen);
  };

  if (screenSize < 750) {
    if (!isOpen) {
      finalRenderedLinks = (
        <div onClick={handleClickOpen1} className=" text-3xl ">
          <RiMenuUnfoldFill className="cursor-pointer" />
        </div>
      );
    } else {
      finalRenderedLinks = (
        <>
          <div className=" text-3xl pb-5">
            <RiMenuFoldFill
              className="cursor-pointer"
              onClick={handleClickOpen2}
            />
          </div>
          {renderedLinks}
        </>
      );
    }
  }

  return <div className={`flex flex-col `}>{finalRenderedLinks || ""}</div>;
}

export default SideNavigation;
