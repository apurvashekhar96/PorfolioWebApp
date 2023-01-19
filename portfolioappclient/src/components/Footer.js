import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useFetchLinksQuery } from "../store";

function Footer() {
  const { data, isLoading } = useFetchLinksQuery();
  const processedData = data?.configLinks || [];

  let gitLink, linkdinLink;
  if (!isLoading) {
    processedData
      ? (gitLink = processedData?.github || "")
      : (gitLink = "https://wwww.github.com");
    processedData
      ? (linkdinLink = processedData?.linkdin || "")
      : (linkdinLink = "https://linkdin.com");
  }
  return (
    <div className="pt-9 ">
      <div className="flex flex-row justify-center text-tertiary text-sm md:text-lg">
        <a className="" href={gitLink} target="blank">
          <div className="flex flex-row cursor-pointer hover:scale-110 transform transition duration-500">
            <BsGithub />
            <span className="ml-2 leading-5">View Repositories</span>
          </div>
        </a>
        <a href={linkdinLink} target="blank">
          <div className="flex flex-row ml-9 cursor-pointer hover:scale-110 transform transition duration-500">
            <BsLinkedin />{" "}
            <span className="ml-2 leading-5 ">Go to LinkdIn</span>
          </div>
        </a>
      </div>
      <p className="flex flex-row justify-center text-primary mt-3">
        <>&#169;</> <span>2023 Apurva Shekhar</span>
      </p>
    </div>
  );
}

export default Footer;
