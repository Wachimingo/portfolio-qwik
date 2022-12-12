import { component$, useStyles$ } from "@builder.io/qwik";
import { LinkButton } from "../common/buttons";
import styles from "./project.css?inline";
export const ProjectCard = component$(({ project }: any) => {
  useStyles$(styles);
  return (
    <div key={project.name} className='project-card'>
      <img className='project-card-image' src={project.image} alt={project.name} width='auto' height='auto' />
      <div className='project-card-data'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      {project.link.includes("http" || "https") ? (
        <LinkButton success link={project.link} extendedClass='project-card-footer' target='_blank' rel='noreferrer' role='button'>
          Checkout
        </LinkButton>
      ) : (
        <LinkButton success link={project.link} extendedClass='project-card-footer'>
          Checkout
        </LinkButton>
      )}
    </div>
  );
});
