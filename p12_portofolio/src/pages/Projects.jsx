import React, { useContext } from 'react';
import { ProjectsContext } from '../pages/Projectcontext';

// ...

const Projects = () => {
  const { id } = useParams();
  const projectsData = useContext(ProjectsContext);
  const project = projectsData.find(project => project.id === id);

  return (
    <div id='Projets__page'>
      <Navigation />
      <ProjectDetails project={project} />
      <Footer/>
    </div>
  );
};

export default Projects;