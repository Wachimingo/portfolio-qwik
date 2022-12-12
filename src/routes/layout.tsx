import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Footer, NavBar } from "~/components";
export default component$(() => {
  return (
    <>
      <NavBar />
      <Slot />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "theme-color",
      key: "light",
      content: "light"
    }
  ]
};
