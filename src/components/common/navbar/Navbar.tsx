import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./navbar.css?inline";

export const NavBar = component$(() => {
  useStyles$(styles);
  return (
    <nav className='menu'>
      <input id='menu-toggle' type='checkbox' />
      <label className='hamburger' for='menu-toggle'>
        <div className='ham-divs' />
        <div className='ham-divs' />
        <div className='ham-divs' />
      </label>
      <div id='menu-container' className='menu-container'>
        <a className='menu-container-link' href='/'>
          Home
        </a>
        <a className='menu-container-link' href='/projects'>
          Projects
        </a>
        <a className='menu-container-link' href='/skills'>
          Skills
        </a>
        <a className='menu-container-link' href='/certs'>
          Certifications
        </a>
        {/* <a id='signup' className='menu-container-link' href='/auth/signup'>
          Sign Up
        </a>
        <a id='login_logout' className='menu-container-link' href='/auth/signin'>
          Sign In
        </a> */}
      </div>
    </nav>
  );
});
