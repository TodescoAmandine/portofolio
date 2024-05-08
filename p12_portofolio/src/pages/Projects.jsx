import React, { useContext } from 'react';
import { ProjectsContext } from '../pages/Projectcontext';
import Navigation from '../components/Navigation';


// ...

const Projects = () => {
  const { id } = useParams();
  const projectsData = useContext(ProjectsContext);
  const project = projectsData.find(project => project.id === id);

  return (
    <div >
      <Navigation />
      <ProjectDetails project={project} />
    </div>
  );
};

export default Projects;