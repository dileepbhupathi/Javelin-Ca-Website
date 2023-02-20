import { Button } from "antd";
import React from "react";
import { Achievements } from "../Achievements/Achievements";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import "./ProjectsAndAchivements.scss";

export const ProjectsAndAchivements = () => {
  return (
    <div className="projects-and-achivements-container">
      <ProjectsList />
      <div className="view-all-projects-button-container">
        <Button className="view-all-projects-button">View All Projects</Button>
      </div>
      <Achievements/>
    </div>
  );
};
