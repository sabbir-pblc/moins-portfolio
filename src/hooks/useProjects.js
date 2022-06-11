import { useEffect, useState } from 'react'
import axios from 'axios'

const useProjects = (name) => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    axios('/projects.json').then((res) => setProjects(res.data))
  }, [])

  if (name) {
    return projects?.find((project) => project.name === name)
  }
  return { projects }
}

export default useProjects
