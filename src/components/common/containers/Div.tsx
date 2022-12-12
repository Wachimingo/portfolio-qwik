import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./containers.css?inline";

export const Div = component$(({ row, extendedClassName, ...props }: any) => {
  useStylesScoped$(style);
  return (
    <div className={`container-flex ${row ? "container-row" : "container-column"} ${extendedClassName ?? ""}`} {...props}>
      <Slot />
    </div>
  );
});
