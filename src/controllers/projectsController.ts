import DatabaseServer from "~/db/mongodb/dbConfig";

export async function getProjects(): Promise<any> {
  // if (controller?.signal) return Promise.reject("Aborted");
  try {
    await DatabaseServer.getInstance();
    const res = await DatabaseServer.getDocuments("projects", { locale: "en" }, { name: 1, description: 1, link: 1, image: 1 }, 0);

    const projects = res?.map((project: any) => {
      project.id = project["_id"].toString();
      delete project._id;
      return project;
    });
    return Array.isArray(projects) ? projects : Promise.reject(projects);
  } catch (error) {
    return Promise.reject(error);
  }
}
