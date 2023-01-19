import { useFetchLinksQuery } from "../store";

function SkillsPage() {
  const { data, isLoading } = useFetchLinksQuery();

  let skillsArray, renderedItems;

  if (!isLoading) {
    skillsArray = data?.sections
      .filter((section) => {
        return section.label.toLowerCase() === "skills";
      })[0]
      .content.split(",");

    renderedItems = skillsArray.map((item) => {
      return (
        <div
          key={item}
          className="border rounded p-3 shadow bg-primary text-on-primary w-40 text-center opacity-60"
        >
          {item}
        </div>
      );
    });
  }

  return (
    <div className="center ">
      <div className="w-3/5 ">
        <p className="text-5xl pt-28 mb-7 text-center text-primary">Skills</p>
        <div className="flex flex-row flex-wrap">{renderedItems || ""}</div>
      </div>
    </div>
  );
}

export default SkillsPage;
