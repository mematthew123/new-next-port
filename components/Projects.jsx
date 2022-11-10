import Image from "next/image";
import Link from "next/link";
import React from "react";
import Berniceimg from '../public/assets/Bernice.jpg';

// import handShake from "../public/assets/projects/handShake.png";
import basketimg from "../public/assets/projects/basket.webp";
import shopifyGuyimg from "../public/assets/projects/shopifyGuy.jpeg";
import handShake1img from "../public/assets/projects/handShake1.jpeg";
import ProjectItem from "./ProjectItem";
import discsimg from "../public/assets/projects/discs.jpg";

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
            title="Top Dog"
            backgroundImg={Berniceimg}
            projectUrl="/topDog"
            tech="Next js"
          />
          <ProjectItem
            title="Marketplace"
            backgroundImg={handShake1img}
            projectUrl="/handShake"
            tech="WordPress"
          />
          <ProjectItem
            title="Mammoth App"
            backgroundImg={discsimg}
            projectUrl="/mammoth"
            tech="Next JS"
          />
          <ProjectItem
            title="Shopify Templates"
            backgroundImg={shopifyGuyimg}
            projectUrl="/shopifyTemp"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
