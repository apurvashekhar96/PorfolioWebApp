import HomePage from "./HomePage";
import Route from "../components/Route";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ContactMePage from "./ContactMePage";
import ProjectsPage from "./ProjectsPage";

function MainContent() {
  return (
    <div className="bg-secondary-container min-h-100">
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage></AboutPage>
      </Route>
      <Route path="/skills">
        <SkillsPage></SkillsPage>
      </Route>
      <Route path="/contact">
        <ContactMePage></ContactMePage>
      </Route>
      <Route path="/projects">
        <ProjectsPage></ProjectsPage>
      </Route>
    </div>
  );
}

export default MainContent;
