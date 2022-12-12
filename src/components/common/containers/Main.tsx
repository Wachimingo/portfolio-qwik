import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./containers.css?inline";
export const Main = component$(({ children, extendedClassName, row, ...props }: any) => {
  useStylesScoped$(styles);
  return (
    <main className={`container-flex ${row ? "container-row" : "container-column"} ${extendedClassName ?? ""}`} {...props}>
      <Slot />
    </main>
  );
});
