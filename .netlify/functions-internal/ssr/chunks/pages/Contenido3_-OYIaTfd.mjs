/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_TmZg0bPE.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Contacto_DZJS9ufd.mjs';

const $$Astro = createAstro();
const $$Contenido3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contenido3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "content": ($$result2) => renderTemplate`${maybeRenderHead()}<article class="flex items-center justify-center h-screen mr-16 m-8 my-8"> <!-- Elemento con fondo rojo (borde) --> <div class="bg-yellow-300 p-2 rounded-md flex items-center justify-center w-full h-full"> <!-- Cuadrado con fondo blanco (contenido) --> <div class="bg-white dark:bg-black p-8 rounded-md relative w-full h-full"> <h1 class="text-center text-7xl tracking-widest underline antialiased dark:text-white">
Titulo
</h1> </div> </div> </article>` })}`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contenido3.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contenido3.astro";
const $$url = "/Contenido3";

export { $$Contenido3 as default, $$file as file, $$url as url };
