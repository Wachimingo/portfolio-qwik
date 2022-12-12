import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Main, Section } from "~/components/common/containers";
import { SkillCard } from "~/components/skills";
import { getSkills } from "~/controllers";

export default component$(() => {
  const skills = useStore<any>({
    docs: undefined
  });
  const skillsResource = useResource$<any[]>(({ track, cleanup }) => {
    track(() => skills.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    return getSkills();
  });
  return (
    <>
      <Main>
        <h1>Skills</h1>
      </Main>
      <Section row>
        <Resource
          value={skillsResource}
          onPending={() => <>Loading...</>}
          onRejected={(reason: any) => <>Error: {reason}</>}
          onResolved={(skills: any) => skills.map((skill: any) => <SkillCard skill={skill} />)}
        />
      </Section>
      <br />
    </>
  );
});

export const head: DocumentHead = {
  title: "Skills"
};
