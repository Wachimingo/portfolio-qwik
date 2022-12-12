import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Card } from "../../common/card";
import styles from "./cards.css?inline";
export const SkillCard = component$(({ skill }: any) => {
  useStylesScoped$(styles);
  return (
    <Card key={skill.name}>
      <img className='card-image' loading='lazy' src={skill.icon ? skill.icon : "/assets/skills/default.webp"} alt={skill.name} width='100%' height='100%' />
      <div className='card-body'>
        <h1 className='notranslate'>{skill.name}</h1>
        <p>{skill.description}</p>
        <progress value={skill.level} max='100' />
      </div>
      <Slot />
    </Card>
  );
});

export default SkillCard;
