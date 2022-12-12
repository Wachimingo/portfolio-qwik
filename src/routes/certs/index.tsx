import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { CertCard } from "~/components/certs";
import { Div, Main, Section } from "~/components/common/containers";
import { getCerts } from "~/controllers";

export default component$(() => {
  const certs = useStore<any>({
    docs: undefined
  });
  const certsResource = useResource$<any[]>(({ track, cleanup }) => {
    track(() => certs.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    return getCerts();
  });
  return (
    <>
      <Main>
        <h1>Certifications</h1>
      </Main>
      <Section row>
        <Div row>
          <Resource
            value={certsResource}
            onPending={() => <>Loading...</>}
            onRejected={(reason: any) => <>Error: {reason}</>}
            onResolved={(certs: any) => certs.map((cert: any) => <CertCard extendedClassName='hidden' cert={cert} />)}
          />
        </Div>
      </Section>
      <br />
    </>
  );
});

export const head: DocumentHead = {
  title: "Certifications"
};
