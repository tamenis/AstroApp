/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_TmZg0bPE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Contacto_zJtAwgZx.mjs';
import 'clsx';
/* empty css                                */

const $$Astro$2 = createAstro();
const $$ParrafosImagenes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ParrafosImagenes;
  const { img1 } = Astro2.props;
  const { img2 } = Astro2.props;
  const { texto } = Astro2.props;
  const { titulo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-[#18191d] dark:text-[#e0dddd]"> <span class="font-bold">${titulo}</span>${texto} </p> <div class="grid grid-flow-col my-4"> <img${addAttribute(img1, "src")} alt="Blog post image" width="400" height="200" class="aspect-video object-cover"> <img${addAttribute(img2, "src")} alt="Blog post image" width="400" height="200" class="aspect-video object-cover"> </div>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/parrafosImagenes.astro", void 0);

const $$Astro$1 = createAstro();
const $$ArticulosRelacionados = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticulosRelacionados;
  const { enlace, imagen, nombre, descripcion, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(enlace, "href")} class="flex items-center space-x-4"> <img${addAttribute(imagen, "src")}${addAttribute(alt, "alt")} width="80" height="80" class="aspect-square object-cover"> <div class="flex-1"> <h3 class="text-sm font-semibold text-[#18191d] dark:text-[#e0dddd]">${nombre}</h3> <p class="text-sm text-[#18191d] dark:text-[#e0dddd] ">${descripcion}</p> </div> </a>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/articulosRelacionados.astro", void 0);

const $$Astro = createAstro();
const $$Informacion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Informacion;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Informacion", "data-astro-cid-i7ly45fz": true }, { "content": ($$result2) => renderTemplate`${maybeRenderHead()}<article class="flex items-center justify-center max-w-screen xl:mt-0 mt-40 sm:mb-4 lg:mb-4 mx-4 inset-0 bg-[#e0dddd] dark:bg-[#18191d] relative" data-astro-cid-i7ly45fz> <div class="flex flex-col bg-[#e0dddd] dark:bg-[#18191d] lg:mt-8" data-astro-cid-i7ly45fz> <main class="flex flex-col md:flex-row sm:flex-row flex-1 overflow-hidden" data-astro-cid-i7ly45fz> <article class="prose prose-gray mx-auto p-6 max-w-screen md:w-3/4 dark:prose-invert" data-astro-cid-i7ly45fz> <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] dark:text-white" data-astro-cid-i7ly45fz>
Personalización
</h1> <p class="text-[#18191d] dark:text-[#e0dddd]" data-astro-cid-i7ly45fz>En ruART hacemos, con la construcción industrializada, relidad los proyectos constructivos de cualquier tipología y uso.</p> <br data-astro-cid-i7ly45fz> ${renderComponent($$result2, "ParrafosImagenes", $$ParrafosImagenes, { "titulo": "Residencial: ", "texto": "Conformando cualquier tama\xF1o o tipo de edificio residencial, individual o colectivo. Anexos a construcciones ya existentes, ampliaciones o edificios de servicios en viviendas ya construidas ( gimnasios, apartamentos de invitados, garajes, trasteros,...).", "img1": "./src/assets/galeria/img-1.jpg", "img2": "./src/assets/galeria/img-2.jpg", "data-astro-cid-i7ly45fz": true })} ${renderComponent($$result2, "ParrafosImagenes", $$ParrafosImagenes, { "titulo": "Dotacional: ", "texto": "Con la construcci\xF3n individualizada podemos abarcar todo tipo de soluciones para servicios p\xFAlblicos, (edificios para parques, colegios, salas de cultura, exposiciones), adaptamos la construcci\xF3n al edificio demandado.", "img1": "./src/assets/galeria/img-3.jpg", "img2": "./src/assets/galeria/img-4.jpg", "data-astro-cid-i7ly45fz": true })} ${renderComponent($$result2, "ParrafosImagenes", $$ParrafosImagenes, { "titulo": "Comercial: ", "texto": "Podemos fabricar edificios con uso comercial, tales como bares, restaurantes, hoteles, apartamentos vacacionales...", "img1": "./src/assets/galeria/img-5.jpg", "img2": "./src/assets/galeria/img-6.jpg", "data-astro-cid-i7ly45fz": true })} <p class="text-[#18191d] dark:text-[#e0dddd]" data-astro-cid-i7ly45fz>
En definitiva, desde ruART, partiendo desde tu idea y con la colaboración de nuestro gabinete técnico formado por ARQUITECTOS e INGENIEROS de reconocido valor profesional, podemos dar forma al proyecto con construcción industrializada y modular, partiendo de nuestras instalaciones para cualquier punto del globo.
</p> </article> <aside class="w-full h-screen-2xl md:w-1/5 p-6 border-l border-black dark:border-white" data-astro-cid-i7ly45fz> <div class="mb-6" data-astro-cid-i7ly45fz> <h2 class="text-lg font-semibold dark:text-white" data-astro-cid-i7ly45fz>Articulos relacionados</h2> <div class="mt-4 space-y-4" data-astro-cid-i7ly45fz> ${renderComponent($$result2, "ArticulosRelacionados", $$ArticulosRelacionados, { "nombre": "Personalizaci\xF3n", "descripcion": "Breve descripcion del articulo", "alt": "", "imagen": "./src/assets/galeria/img-7.jpg", "enlace": "/Personalizacion", "data-astro-cid-i7ly45fz": true })} ${renderComponent($$result2, "ArticulosRelacionados", $$ArticulosRelacionados, { "nombre": "Nombre articulo", "descripcion": "Breve descripcion del articulo", "alt": "", "imagen": "./src/assets/galeria/img-8.jpg", "enlace": "/Informacion", "data-astro-cid-i7ly45fz": true })} ${renderComponent($$result2, "ArticulosRelacionados", $$ArticulosRelacionados, { "nombre": "Nombre articulo", "descripcion": "Breve descripcion del articulo", "alt": "", "imagen": "./src/assets/galeria/img-10.jpg", "enlace": "/QuienesSomos", "data-astro-cid-i7ly45fz": true })} </div> </div> </aside></main></div> </article>` })} `;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Informacion.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Informacion.astro";
const $$url = "/Informacion";

const Informacion = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Informacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ParrafosImagenes as $, Informacion as I, $$ArticulosRelacionados as a };
