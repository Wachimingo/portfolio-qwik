import { component$ } from "@builder.io/qwik";
import { SkillCard as Card } from "./card/Card";

export const SkillListByCategory = component$(({ skills, categories }: any) => {
  const List = categories.map((cat: any) => {
    if (cat.relatedTo === "skills") {
      return (
        <section key={cat.name}>
          <h2 className='notranslate'>{cat.name}</h2>
          {skills
            .filter((skill: any) => skill.category === cat._id)
            .map((skill: any) => {
              return <Card skill={skill} key={skill.name} />;
            })}
        </section>
      );
    } else return undefined;
  });
  return List;
});
