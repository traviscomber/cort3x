import type { FeasibilityAudit } from "./types"

const projects: FeasibilityAudit[] = [] // Empty array of FeasibilityAudit objects

const validProjects = (projects || []).map((p: FeasibilityAudit) => {
  // Process each project here
  return p
})

const ProjectsPage = () => {
  return (
    <div>
      {validProjects.length > 0 ? (
        validProjects.map((project, index) => (
          <div key={index}>
            {/* Render project details here */}
            <h2>{project.project_name}</h2>
            <p>{project.project_description}</p>
          </div>
        ))
      ) : (
        <p>No projects found</p>
      )}
    </div>
  )
}

export default ProjectsPage
