/* empty css                             */
import 'html-escaper';
import 'cssesc';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as createTransitionScope, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_IjqYFCN6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
/* empty css                             */

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav> <div id="Logo" class="flex items-center justify-start"> <a href="/" class="flex ml-4 md:mr-24"> <img src="/Logo.svg" class="h-16 w-16 mr-3" alt="Empresa Logo"> <div class="flex flex-col"> <span class="text-3xl font-semibold sm:text-4xl whitespace-nowrap dark:text-white">ruART</span> <span class="self-center dark:text-white">Construcciones industrializadas</span> </div> </a> </div> <div class="flex items-center mr-4"> <a href="https://github.com/tamenis/AstroApp" class="LogoGithub"> <svg height="36" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="36" data-view-component="true" class="dark:bg-white dark:rounded flex fill-current rounded-full"> <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path> </svg> </a> </div>  </nav>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  var { path } = Astro2.props;
  const { url } = Astro2.props;
  const { placeholder } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#e0dddd] dark:hover:text-black dark:bg-[#18191d] group shadow-sm border-2 border-black dark:shadow-white dark:hover:shadow-black dark:border-white shadow-black" id="Boton"> <img${addAttribute(path, "src")} alt="Icono"> <span class="flex-1 ml-3 whitespace-nowrap">${placeholder}</span> </a>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/Button.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${maybeRenderHead()}<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full border-r sm:translate-x-0 dark:text-white" aria-label="Sidebar"${addAttribute(createTransitionScope($$result, "rwzhb66i"), "data-astro-transition-persist")}> <div class="h-full px-2 overflow-y-auto bg-slate-white border-r-2 border-black dark:bg-[#18191d] py-6 dark:border-white dark:border-2"> <ul class="space-y-4 font-medium mt-4"> <li> ${renderComponent($$result, "Button", $$Button, { "path": "/Inicio.svg", "url": "/", "placeholder": "Inicio" })} </li> <li> ${renderComponent($$result, "Button", $$Button, { "path": "/Informacion.svg", "url": "/Informacion", "placeholder": "Informacion" })} </li> <li> ${renderComponent($$result, "Button", $$Button, { "path": "/Galeria.svg", "url": "/Galeria", "placeholder": "Galeria" })} </li> <li> ${renderComponent($$result, "Button", $$Button, { "path": "/QuienesSomos.svg", "url": "/QuienesSomos", "placeholder": "Quienes Somos" })} </li> <li> ${renderComponent($$result, "Button", $$Button, { "placeholder": "Contacto", "url": "/Contacto", "path": "/Contacto.svg" })} </li> </ul> </div> </aside>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/Sidebar.astro", "self");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body class="h-screen w-screen"> <div class="[grid-area:Header]"> ${renderComponent($$result, "Header", $$Header, {})} </div> <div id="sidebar" class="[grid-area:Sidebar]"> ${renderComponent($$result, "Sidebar", $$Sidebar, {})} </div> <div id="slot" class="[grid-area:Slot]"> ${renderSlot($$result, $$slots["content"])} </div>  </body> </html>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Formulario", null, { "slot": "content", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/Formulario.tsx", "client:component-export": "default" })}` })}`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto.astro";
const $$url = "/Contacto";

const Contacto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, Contacto as C, $$Header as a, $$Layout as b };
