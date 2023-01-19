import { useFetchLinksQuery } from "../store";
import Accordion from "../components/Accordion";

function ProjectsPage() {
  const { data, isLoading } = useFetchLinksQuery();
  let items, content;
  const processedData = data?.projects || [];

  if (!isLoading) {
    items = processedData;
    //   data?.projects.filter((section) => {
    //   return section.label.toLowerCase() === "projects";
    // })[0].content;
    content = <Accordion items={items}></Accordion>;
  }

  return <div className="w-4/5 mx-auto">{content || ""}</div>;
}

export default ProjectsPage;
