import DatabaseServer from "~/db/mongodb/dbConfig";

export async function getCerts(): Promise<any> {
  // if (controller?.signal) return Promise.reject("Aborted");
  try {
    await DatabaseServer.getInstance();
    const res = await DatabaseServer.getDocuments("certifications", { locale: "en" }, { name: 1, description: 1, link: 1, icon: 1 }, 0);

    const certs = res?.map((cert: any) => {
      cert.id = cert["_id"].toString();
      delete cert._id;
      return cert;
    });
    return Array.isArray(certs) ? certs : Promise.reject(certs);
  } catch (error) {
    return Promise.reject(error);
  }
}
