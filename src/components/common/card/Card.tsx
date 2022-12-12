import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./card.css?inline";

export const Card = component$(({ extendedClassName }: any) => {
  useStylesScoped$(styles);
  return (
    <div className={`card ${extendedClassName}`}>
      <div className='card-container'>
        <Slot />
      </div>
    </div>
  );
});
