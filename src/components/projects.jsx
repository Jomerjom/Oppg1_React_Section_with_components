import { ProjectItem } from "./projectitem";

export const Projects = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <div className="flex">
        <ProjectItem img="../kitty2.png" title="Test Project" desc="A Vite React project component, to show of your skills on your portfolio!"></ProjectItem>
        <ProjectItem img="../kitty2.png" title="Test Project" desc="A Vite React project component, to show of your skills on your portfolio!"></ProjectItem>
      </div>
      <div className="flex">
      <ProjectItem img="../kitty2.png" title="Test Project" desc="A Vite React project component, to show of your skills on your portfolio!"></ProjectItem>
        <ProjectItem img="../kitty2.png" title="Test Project" desc="A Vite React project component, to show of your skills on your portfolio!"></ProjectItem>
      </div>
      </div>
    </>
  );
};