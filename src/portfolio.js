import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {/* Render multiple Project components */}
        <Project title="Project 1" imageSrc="/path/to/image1.jpg" deployedLink="https://example.com/project1" githubLink="https://github.com/project1" />
        <Project title="Project 2" imageSrc="/path/to/image2.jpg" deployedLink="https://example.com/project2" githubLink="https://github.com/project2" />
        {/* TODO add more projects*/}
      </div>
    </section>
  );
};

export default Portfolio;
