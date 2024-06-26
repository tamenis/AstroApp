/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead } from '../astro_TmZg0bPE.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */
/* empty css                        */

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav> <div id="Logo" class="flex items-center justify-start"> <a href="/" class="flex ml-4 md:mr-24"> <img src="/Logo.svg" class="h-16 w-16 mr-3" alt="Empresa Logo"> <div class="flex flex-col"> <span class="text-3xl font-semibold sm:text-4xl whitespace-nowrap dark:text-white">ruART</span> <span class="self-center dark:text-white">Construcciones industrializadas</span> </div> </a> </div> <div class="flex items-center mr-4"> <a href="https://github.com/tamenis/AstroApp" class="LogoGithub"> <svg height="36" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="36" data-view-component="true" class="dark:bg-white dark:rounded flex fill-current rounded-full"> <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path> </svg> </a> </div>  </nav>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="es" data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-zetdm5md": true })}<title>Error 404</title>${renderHead()}</head> <body data-astro-cid-zetdm5md> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-zetdm5md": true })} <article class="flex items-center justify-center max-h-screen mt-32" data-astro-cid-zetdm5md> <div class="p-2 rounded-md flex items-center justify-center w-full" data-astro-cid-zetdm5md> <div class="p-8 rounded-md relative w-full" data-astro-cid-zetdm5md> <div class="flex flex-col items-center justify-center" data-astro-cid-zetdm5md> <div class="space-y-4" data-astro-cid-zetdm5md> <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="#a6311d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zetdm5md> <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" data-astro-cid-zetdm5md></path> <path d="M12 9v4" data-astro-cid-zetdm5md></path> <path d="M12 17h.01" data-astro-cid-zetdm5md></path> </svg> <h1 class="lg:text-7xl text-4xl font-bold text-black dark:text-white" data-astro-cid-zetdm5md>
Página no encontrada
</h1> <p class="lg:text-3xl text-xl text-black dark:text-white justify-center" data-astro-cid-zetdm5md>
Error 404
</p> <div class="mt-6" data-astro-cid-zetdm5md> <a class="bg-[#a6311d] inline-flex p-2 items-center justify-center h-10 font-medium rounded-md" href="/" data-astro-cid-zetdm5md>
Página principal
</a> </div> </div> </div> </div> </div> </article>  </body> </html>`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/404.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, _404 as _, $$Header as a };
