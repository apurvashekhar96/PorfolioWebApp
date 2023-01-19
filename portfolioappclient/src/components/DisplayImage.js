import { useFetchLinksQuery } from "../store";

function DisplayImage({ height, width }) {
  const { data, isLoading, error } = useFetchLinksQuery();

  const processedData = data?.configLinks || [];

  let content;
  if (isLoading) {
    content = "Loading";
  } else if (error) {
    content = "Opps Something is wrong with my face...";
  } else if (data) {
    content = (
      <img
        className={`${height} ${width} rounded-full  outline outline-2 ouline-primary outline-offset-2`}
        src={processedData ? processedData?.profilePic || "" : "error"}
        alt="profilePic"
      ></img>
    );
  }

  return <>{content ? content : ""}</>;
}

export default DisplayImage;
