import type { RequestHandler } from "@builder.io/qwik-city";
import DatabaseServer from "~/db/mongodb/dbConfig";

export const onGet: RequestHandler<any> = async () => {
  DatabaseServer.getInstance();
  const res = await DatabaseServer.getDocuments("certifications", { locale: "en" }, { name: 1, description: 1, link: 1, icon: 1 }, 0);

  const certs = res?.map((cert: any) => {
    cert.id = cert["_id"].toString();
    delete cert._id;
    return cert;
  });

  return certs;
};
