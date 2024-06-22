import Image from "next/image";
import "./about.css";
import { experiences } from "@/Data/experiencesDatas";
export default function About() {
  if (experiences.length === 0) {
    return <div className="aboutContainer">No experience available.</div>;
  }
  return (
    <div className="aboutContainer">
      <h2>About me</h2>
      <div className="xps">
        {experiences.map((xp) => (
            
          <div className="xp" key={xp.id}>
            {xp.bool ? 
            <div className="meImage">
              <Image  src="/moi.png" alt={xp.title} width={100} height={100} /> </div>
            
           : 
           ( <div className="xpDetails">
            <p>{xp.date}</p>
              <h3>{xp.title}</h3>
              <p>{xp.description}</p>
              </div>)
        }
            
            {/* <Image
              className="xpImage"
              src={xp.image}
              alt={xp.title}
              width={250}
              height={250}
            /> */}
            <img className="xpImage" src={xp.image} alt={xp.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
