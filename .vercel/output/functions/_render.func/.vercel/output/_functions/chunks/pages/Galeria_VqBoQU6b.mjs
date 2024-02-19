/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_1jGxs8Bd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Contacto_dQcTEq1k.mjs';
/* empty css                            */

const $$Astro = createAstro();
const prerendeer = false;
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galeria" }, { "content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid lg:grid-cols-4 grid-cols-2 gap-4 mx-8 lg:mt-24 sm:mt-16 md:mt-32 mt-32 2xl:mt-20 2xl:mr-16 mb-4 max-w-screen h-auto dark:bg-[#18191d] relative" id="galeria"> ${Array.from({ length: 12 }).map((_, i) => renderTemplate`<a${addAttribute(`/img-${i + 1}.webp`, "href")} data-pswp-width="1280" data-pswp-height="720" target="_blank"> <img${addAttribute(`/img-${i + 1}.webp`, "src")} class="rounded-md" alt="Imagen de demostración"> </a>`)} </div>` })} `;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Galeria.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Galeria.astro";
const $$url = "/Galeria";

export { $$Galeria as default, $$file as file, prerendeer, $$url as url };
