import DatabaseServer from "~/db/mongodb/dbConfig";

export async function getSkills(limit = 0): Promise<any> {
  try {
    await DatabaseServer.getInstance();
    const res = await DatabaseServer.getDocuments("skills", { locale: "en" }, { name: 1, description: 1, link: 1, icon: 1, level: 1 }, limit);

    const skills = res?.map((skill: any) => {
      skill.id = skill["_id"].toString();
      delete skill._id;
      return skill;
    });
    return Array.isArray(skills) ? skills : Promise.reject(skills);
  } catch (error) {
    return Promise.reject(error);
  }
}
