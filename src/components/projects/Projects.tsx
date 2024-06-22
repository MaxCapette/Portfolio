import Image from "next/image";
import {projects} from "@/Data/projectsDatas";
import './projects.css'
import Link from "next/link";
export default function Projects() {
    
    if (projects.length === 0) {
        return <div className="projectContainer">No projects available.</div>;
      }
      const reversedProjects = [...projects].reverse();
  return (
    <div className="projectContainer" >
      <h2>Projects</h2>
      <p className="projectsIntro">Here is a selection of diverse projects I&apos;ve undertaken..</p>
      <div className="projects">
      {reversedProjects.map(project => (
        
          <div key={project.id} >
            <Link className="project" href={`projects/${project.id}`}>
            {/* <Image className="projectImage" src={project.images[0]} alt={project.title} width={1000} height={500} /> */}
<img src={project.images[0]} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
         
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
