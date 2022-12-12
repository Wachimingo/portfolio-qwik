import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./button.css?inline";
export const LinkButton = component$(({ link, info, error, success, extendedClass, ...props }: any): any => {
  useStyles$(styles);
  if (success) {
    return (
      <a className={`button success ${extendedClass ?? ""}`} href={link} {...props}>
        <Slot />
      </a>
    );
  }
  if (info) {
    return (
      <a className={`button info ${extendedClass ?? ""}`} href={link} {...props}>
        <Slot />
      </a>
    );
  }
  if (error) {
    return (
      <a className={`button error ${extendedClass ?? ""}`} href={link} {...props}>
        <Slot />
      </a>
    );
  }
  return (
    <a className='button' href={link}>
      <Slot />
    </a>
  );
});
