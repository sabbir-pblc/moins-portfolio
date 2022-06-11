
import { useParams } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
const ProjectExplore = () => {
  const { name } = useParams()
  const project = useProjects(name)
  if (!project) return
  return (
    <div>
      <h2>{project.name}</h2>
    </div>
  );
};

export default ProjectExplore;