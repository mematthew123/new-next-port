import Image from "next/image";
import Link from "next/link";
import React from "react";
import Berniceimg from '../public/assets/Bernice.jpg';

// import handShake from "../public/assets/projects/handShake.png";
import basketimg from "../public/assets/projects/basket.webp";
import shopifyimg from "../public/assets/projects/shopify.png";
import teamimg from "../public/assets/projects/team.jpg";
import ProjectItem from "./ProjectItem";
import mammothimg from "../public/assets/projects/mammoth.jpg";
import puzzleimg from "../public/assets/projects/puzzle.jpg";


const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pup of the year"
            backgroundImg={Berniceimg}
            projectUrl="/topDog"
            tech="Next js"
          />
          <ProjectItem
            title="Marketplace"
            backgroundImg={teamimg}
            projectUrl="/handShake"
            tech="WordPress"
            height="500px"
          />
          <ProjectItem
            title="Mammoth App"
            backgroundImg={mammothimg}
            projectUrl="/mammoth"
            tech="Next JS"
          />
          <ProjectItem
            title="Shopify Templates"
            backgroundImg={puzzleimg}
            projectUrl="/shopifyTemp"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
