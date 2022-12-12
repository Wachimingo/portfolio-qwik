import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/common/card";
import { Main, Section } from "~/components/common/containers";
import { ProjectCard } from "~/components/projects/ProjectsCard";
import { getProjects } from "~/controllers";

export default component$(() => {
  const skills = useStore<any>({
    docs: undefined
  });
  const projectsResource = useResource$<any[]>(({ track, cleanup }) => {
    track(() => skills.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    return getProjects();
  });
  return (
    <>
      <Main>
        <h1>Projects</h1>
      </Main>
      <Section row>
        <Resource
          value={projectsResource}
          onPending={() => <>Loading...</>}
          onRejected={(reason: any) => <>Error: {reason}</>}
          onResolved={(projects: any) => projects.map((project: any) => <ProjectCard project={project} />)}
        />
      </Section>
      <br />
    </>
  );
});

export const head: DocumentHead = {
  title: "Projects"
};
