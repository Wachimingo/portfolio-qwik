import type { RequestHandler } from "@builder.io/qwik-city";
import DatabaseServer from "~/db/mongodb/dbConfig";

export const onGet: RequestHandler<any> = async () => {
  DatabaseServer.getInstance();
  const res = await DatabaseServer.getDocuments("skills", { locale: "en" }, { name: 1, description: 1, link: 1, icon: 1, level: 1 }, 3);

  const skills = res?.map((skill: any) => {
    skill.id = skill["_id"].toString();
    delete skill._id;
    return skill;
  });

  return Array.isArray(skills) ? skills : Promise.reject(skills);
};
