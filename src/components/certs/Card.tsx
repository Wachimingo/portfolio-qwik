import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Card } from "../common/card";
import styles from "./cards.css?inline";
export const CertCard = component$(({ cert, extendedClassName }: any) => {
  useStylesScoped$(styles);
  return (
    <Card extendedClassName={extendedClassName}>
      <img src={cert.icon ? cert.icon : "/assets/skills/default.webp"} alt={cert.name} width='150px' height='150px' />
      <div className='card-body'>
        <h3 className='notranslate'>{cert.name}</h3>
      </div>
      <Slot />
    </Card>
  );
});
