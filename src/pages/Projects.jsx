
import { motion } from 'framer-motion'

import Project from '../components/Project';
import useProjects from '../hooks/useProjects';
const Projects = () => {
  const { projects } = useProjects()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut' }} className='p-1 w-4/5 mx-auto grid items-center md:h-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-8 justify-items-center'>
        {
          projects.map((project, index) => <motion.div key={project._id} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: index * .4, ease: 'easeOut' }}>
            <Project project={project}></Project>
          </motion.div>)
        }
      </div>
    </motion.div>
  );
};

export default Projects;