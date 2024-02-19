/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as createTransitionScope, f as renderComponent, g as renderHead, i as renderSlot } from '../astro_1jGxs8Bd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, a as $$Header } from './404_eqtkJKUf.mjs';
import 'clsx';
/* empty css                             */
import validator from 'validator';

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
async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const nombre = formData.get("nombre");
  const apellidos = formData.get("apellidos");
  const email = formData.get("email");
  const telefono = formData.get("telefono");
  const disponibilidadDia = formData.get("disponibilidadDia");
  const disponibilidadHora = formData.get("disponibilidadHora");
  const mensaje = formData.get("mensaje");
  const nombreEscapado = validator.escape(nombre || "");
  const apellidosEscapados = validator.escape(apellidos || "");
  const emailNormalizado = validator.normalizeEmail(email || "");
  const telefonoEscapado = validator.escape(telefono || "");
  const disponibilidadDiaEscapado = validator.escape(disponibilidadDia || "");
  const disponibilidadHoraEscapado = validator.escape(disponibilidadHora || "");
  const mensajeEscapado = validator.escape(mensaje || "");
  if (!validator.isEmail(emailNormalizado) || validator.isEmpty(nombreEscapado)) {
    console.error("Email o nombre no v\xE1lido");
    return;
  }
  try {
    const response = await fetch("/api/endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: nombreEscapado,
        apellidos: apellidosEscapados,
        email: emailNormalizado,
        telefono: telefonoEscapado,
        disponibilidadDia: disponibilidadDiaEscapado,
        disponibilidadHora: disponibilidadHoraEscapado,
        mensaje: mensajeEscapado
      })
    });
    if (response.ok) {
      console.log("Formulario enviado con \xE9xito");
    } else {
      console.error("Error al enviar el formulario");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  const placeholder = {
    nombre: "Introduce tu nombre",
    apellidos: "Introduce tus apellidos",
    email: "Introduce tu email",
    telefono: "Introduce tu telefono",
    mensaje: "Introduce tu mensaje"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "content": ($$result2) => renderTemplate`${maybeRenderHead()}<form onsubmit="handleSubmit" class="space-y-8 mt-32 lg:mr-3 lg:ml-6 lg:mt-20 xl:mr-16 mb-4 2xl:mt-20 dark:bg-[#003e74] lg:rounded-xl p-4 h-screen lg:h-auto"> <div class="space-y-2"> <h2 class="text-3xl font-bold dark:text-white">
Formulario de contacto
</h2> <p class="dark:text-white">
Rellena el formulario y nos pondremos en contacto contigo
</p> </div> <div class="space-y-4"> <div class="grid grid-cols-2 gap-4"> <div class="space-y-2"> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for="first-name">
Nombre
</label> <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="first-name"${addAttribute(placeholder.nombre, "placeholder")} name="nombre" type="text"> </div> <div class="space-y-2"> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for="last-name">
Apellidos
</label> <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name" type="text"${addAttribute(placeholder.apellidos, "placeholder")} name="apellidos"> </div> </div> <div class="space-y-4"> <div class="grid grid-cols-2 gap-4"> <div class="space-y-2"> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for="email">
Email
</label> <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email"${addAttribute(placeholder.email, "placeholder")} type="email" name="email"> </div> <div class="space-y-2"> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for="last-name">
Numero de telefono
</label> <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name"${addAttribute(placeholder.telefono, "placeholder")} name="telefono" type="text"> </div> </div> <div class="space-y-2"> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for="availability">
Disponibilidad
</label> <div class="flex items-center space-x-2"> <select role="combobox" aria-controls="radix-:r1d:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="availability" name="disponibilidadDia"> <option>Lunes</option> <option>Martes</option> <option>Miercoles</option> <option>Jueves</option> <option>Viernes</option> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-50" aria-hidden="true"> <path d="m6 9 6 6 6-6"></path> </svg> </select> <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="time" name="disponibilidadHora"> </div> </div> <div class="space-y-2"> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for="message">
Mensaje
</label> <textarea class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]" id="message"${addAttribute(placeholder.mensaje, "placeholder")} name="mensaje"></textarea> </div> <button class="bg-black hover:bg-black/60 dark:bg-[#e0dddd] hover:dark:bg-[#e0dddd]/60 text-white dark:text-black inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
Enviar formulario
</button> </div> </div> </form>` })}`;
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto.astro";
const $$url = "/Contacto";

const Contacto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  handleSubmit,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Contacto as C };
