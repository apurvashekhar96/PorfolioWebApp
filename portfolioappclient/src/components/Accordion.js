import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function clickHandler(index) {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  }

  const renderedElements = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    const elements = (
      <div className="text-xs">
        <div className="mb-1">
          <span className="text-sm bg-primary text-on-primary px-0.5 mr-1 rounded">
            Description:{" "}
          </span>
          {item.desc}
        </div>
        <div className="mb-1">
          <span className="text-sm bg-primary text-on-primary px-0.5 mr-1 rounded">
            Skills:{" "}
          </span>
          {item.skills}
        </div>
        <div>
          <span className="text-sm bg-primary text-on-primary px-0.5 mr-1 rounded">
            Source Code:{" "}
          </span>
          <a href={item.repoLink} target="blank">
            {item.repoLink}
          </a>
        </div>
      </div>
    );
    return (
      <div key={item.label} className=" ">
        <div
          className="flex p-0.5 bg-primary opacity-80 text-on-primary border-b items-center cursor-pointer"
          onClick={() => {
            clickHandler(index);
          }}
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && (
          <div className="border-b p-3 text-primary bg-primary-container">
            {elements}{" "}
          </div>
        )}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedElements}</div>;
}

export default Accordion;
