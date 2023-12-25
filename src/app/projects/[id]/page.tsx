import { projects } from "@/Data/projectsDatas";
import "./project.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Projetnon trouvé</div>;
  }

  return (
    <main className="main flex min-h-screen flex-col items-center justify-between py-32">
      <div className="projectMain">
        <h2>{project.title}</h2>
        <div className="projectImages">
          <Image
            src={project.images[1]}
            alt={project.title}
            width={500}
            height={1000}
          />
          {project.images[2] && (<Image
            src={project.images[2]}
            alt={project.title}
            width={500}
            height={1000}
          />)}
          
        </div>
        <p>{project.description}</p>
        <p>{project.comment}</p>
        <p>{project.login}</p>
        {project.link && <Link className="projectLinks" href={project.link}>Link to website</Link>}
        {project.githubLink1 && (
          <Link className="projectLinks" href={project.githubLink1}>Link to github</Link>
        )}
        {project.githubLink2 && (
          <Link className="projectLinks" href={project.githubLink2}>Link to github Back-end</Link>
        )}
        <Link  href="/"><button className="backButton">Back</button></Link>
      </div>
    </main>
  );
}
