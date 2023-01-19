import { useFetchLinksQuery } from "../store";
import Panel from "../components/Panel";

function AboutPage() {
  const { data, isLoading } = useFetchLinksQuery();

  let aboutField;

  if (!isLoading) {
    aboutField = data?.sections.filter((section) => {
      return section.label.toLowerCase() === "about";
    })[0];
  }

  return (
    <div className="center">
      <h2 className=" text-5xl pt-20 text-primary">
        {aboutField ? aboutField?.header || "" : "About"}
      </h2>

      <Panel
        className={
          "opacity-80 w-1/2 mt-5 text-on-primary bg-primary-container border-none"
        }
      >
        {aboutField ? aboutField?.content || "" : "Not Loaded"}
      </Panel>
    </div>
  );
}

export default AboutPage;
