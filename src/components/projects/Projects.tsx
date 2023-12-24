import Image from "next/image";
import {projects} from "@/Data/projectsDatas";
import './projects.css'
import Link from "next/link";
export default function Projects() {
    
    if (projects.length === 0) {
        return <div className="projectContainer">No projects available.</div>;
      }
  return (
    <div className="projectContainer" >
      <h2>Projects</h2>
      <p className="projectsIntro">Here are different projects that I have carried out.</p>
      <div className="projects">
      {projects.map(project => (
        
          <div key={project.id} className="project">
            <Link href={`projects/${project.id}`}>
            <Image src={project.images[0]} alt={project.title} width={1000} height={500} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
