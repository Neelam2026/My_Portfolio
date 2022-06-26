import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import project0 from "./Myntra_2.jpg"
import project1 from "./beardo-1.jpg"
import project2 from "./Nykaa.webp"
import project3 from "./beardo_inner.png"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={project0}
                    alt="Myntra-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Myntra Clone</h2>
                <p>

                Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, 
                India.Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a
                 variety of footwear, Clothing, Accessories and lifestyle products.
                </p>
                <div>
                  <FaReact />
                  <SiJavascript/>
                  <SiMaterialui />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://myntra-clone-react-xi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Neelam2026/MyntraClone_react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
         
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={project1}
                    alt="Beardo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Beardo Clone</h2>
                <p>

               Beardo is an Ahmedabad-based company that owns the brand — Beardo.Beardo is not just a beard care expert that only focusses on beard grooming products, they have also forayed into men's skincare range that includes scrub, facewash etc.
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://beardoproject.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Neelam2026/Beardo_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={project3}
                    alt="Beardo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Beardo Clone</h2>
                <p>

               Beardo is an Ahmedabad-based company that owns the brand — Beardo.Beardo is not just a beard care expert that only focusses on beard grooming products, they have also forayed into men's skincare range that includes scrub, facewash etc.
                  cloned their website.
                </p>
                <div>
                  
                  <IoLogoJavascript/>
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://beardoproject.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Neelam2026/beardo_project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={project2}
                    alt="Nykaa-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Nykaa Clone</h2>
                <p>
                  Nykaa is an E-commerce web application for online Buying
                  cosmetics & beauty products .Nykaa has stood as one of the most competent players in the beauty and fashion space due to its robust marketing strategy.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://nykaawebsite.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Neelam2026/Nykaa_Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

         


        </div>
      </div>
      
    </>
  );
};