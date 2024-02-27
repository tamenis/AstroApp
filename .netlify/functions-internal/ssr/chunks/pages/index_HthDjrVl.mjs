/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead } from '../astro_TmZg0bPE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, a as $$Header } from './404_a8bejn4U.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$BentoItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { titulo, estilo, contenido, enlace } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(enlace, "href")}${addAttribute(estilo, "class")}> <p class="transition-transform transform group-hover:[display:none] relative lg:text-2xl text-md group-hover:scale-75 mb-4"> ${titulo} </p> <p class="absolute transition-transform transform translate-y-full text-elipsis m-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 lg:text-base"> ${contenido} </p> </a>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/BentoItem.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>ruART</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <article slot="content" class="max-w-screen lg:mt-32 mt-40 sm:mb-4 lg:mb-4 mx-4 inset-0 bg-[#e0dddd] dark:bg-[#18191d] relative"> <div class="grid grid-cols-7 mb-4 gap-4 h-32 lg:h-36 2xl:h-40"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "enlace": "/Personalizacion", "estilo": "col-span-3 flex items-center justify-center h-full rounded bg-[#a6311d] duration-700 group relative hover:scale-90", "titulo": "Personalizaci\xF3n", "contenido": "Descubre las posibilidades que ofrecemos para tu proyecto" })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "enlace": "/Tecnicas", "estilo": "col-span-4 flex items-center justify-center h-full rounded bg-[#18191d] text-white dark:text-black dark:bg-[#e0dddd] duration-700 group relative hover:scale-90", "titulo": "Tecnicas", "contenido": "Comprueba la calidad de nuestros proyectos" })} </div> ${renderComponent($$result, "BentoItem", $$BentoItem, { "enlace": "/Galeria", "estilo": "flex items-center h-32 lg:h-40 2xl:h-56 justify-center mb-4 rounded bg-[#003e74] duration-700 group relative hover:scale-90", "titulo": "Galeria", "contenido": "Muestras del dise\xF1o de nuestros proyectos" })} <div class="grid grid-cols-2 gap-4 grid-rows-2"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "enlace": "/Informacion", "estilo": "h-28 lg:h-32 2xl:h-36 flex items-center justify-center rounded bg-[#18191d] dark:bg-[#e0dddd] text-white dark:text-black duration-700 group relative hover:scale-90", "titulo": "Informacion", "contenido": "Descubre los beneficios de la construcci\xF3n modular" })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "enlace": "/Contacto", "estilo": "row-span-2 flex items-center justify-center rounded bg-[#a6311d] duration-700 group relative hover:scale-90", "titulo": "Contacto", "contenido": "Ponte en contacto con nosotros" })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "enlace": "/QuienesSomos", "estilo": "h-28 lg:h-32 2xl:h-36 flex items-center justify-center rounded bg-[#ecbd4f] duration-700 group relative hover:scale-90", "titulo": "Quienes somos", "contenido": "Informaci\xF3n sobre quienes somos" })} </div> </article>  </body> </html>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/index.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
