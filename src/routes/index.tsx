import { component$, Resource, useResource$, useStore, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { LinkButton } from "~/components/common/buttons";
import { Div, Main, Section } from "~/components/common/containers";
import { getCerts, getSkills } from "~/controllers";
import { CertCard } from "../components/certs";
import { SkillBubble } from "../components/skills";
import styles from "./home.css?inline";

export default component$(() => {
  useStyles$(styles);
  const certs = useStore<any>({
    docs: undefined
  });
  const skills = useStore<any>({
    docs: undefined
  });
  const certResource = useResource$<any[]>(({ track, cleanup }) => {
    track(() => certs.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    return getCerts();
  });
  const skillsResource = useResource$<any[]>(({ track, cleanup }) => {
    track(() => skills.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    return getSkills(4);
  });
  return (
    <>
      <Main extendedClassName='hidden'>
        <Div row id='welcome' className='welcome'>
          <h1>Welcome</h1>
          <br />
          <img className='profile-pic' src='/assets/profile/profile-pic.webp' alt='profile' loading='lazy' />
        </Div>
      </Main>
      <br />
      <br />
      <br />
      <br />
      <Section id='skills_section' extendedClassName='hidden'>
        <h2>Checkout some of the skills and technologies I handle:</h2>
        <br />
        <Div row>
          <Resource
            value={skillsResource}
            onPending={() => <>Loading...</>}
            onRejected={(reason: any) => <>Error: {reason}</>}
            onResolved={(skills: any) =>
              skills.map((skill: any) => (
                <div className='hidden'>
                  <SkillBubble skill={skill} />
                </div>
              ))
            }
          />
        </Div>
        <br />
        <br />
        <h2>And there a plenty more you can look at here:</h2>
        <LinkButton info id='see_more_skills' link='/skills'>
          Want to see more?
        </LinkButton>
      </Section>
      <br />
      <br />
      <br />
      <Section id='cert_section' extendedClassName='hidden'>
        <h2>This is my learning path for continuos development:</h2>
        <br />
        <Div row>
          <Resource
            value={certResource}
            onPending={() => <>Loading...</>}
            onRejected={(reason: any) => <>Error: {reason}</>}
            onResolved={(certs: any) => certs.map((cert: any) => <CertCard extendedClassName='hidden' cert={cert} />)}
          />
        </Div>
        <br />
        <h2>And there a plenty more you can look at here:</h2>
        <br />
        <LinkButton info id='see_more_skills' link='/skills'>
          Want to see more?
        </LinkButton>
      </Section>
      <br />
      <br />
      <br />
      <br />
      <script
        dangerouslySetInnerHTML={`
        const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})}),hiddenElements=document.querySelectorAll(".hidden");hiddenElements.forEach(e=>observer.observe(e));
      `}></script>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome"
};
