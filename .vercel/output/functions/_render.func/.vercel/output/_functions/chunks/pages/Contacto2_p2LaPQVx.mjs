/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_1jGxs8Bd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Contacto_V4MT-Md_.mjs';
import { MongoClient } from 'mongodb';
import validator from 'validator';

const $$Astro = createAstro();
const prerender = false;
const $$Contacto2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto2;
  const uri = "mongodb+srv://formUser:ybTuyL8ii7hy7HDj@ruart.hhrirls.mongodb.net/?retryWrites=true&w=majority";
  const placeholder = {
    nombre: "Introduce tu nombre",
    apellidos: "Introduce tus apellidos",
    email: "Introduce tu email",
    telefono: "Introduce tu telefono",
    mensaje: "Introduce tu mensaje"
  };
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    let nombre = validator.escape(data.get("nombre") || "");
    let apellidos = validator.escape(data.get("apellidos") || "");
    let email = validator.normalizeEmail(data.get("email") || "");
    let telefono = validator.escape(data.get("telefono") || "");
    let disponibilidadDia = validator.escape(data.get("disponibilidadDia") || "");
    let disponibilidadHora = validator.escape(
      data.get("disponibilidadHora") || ""
    );
    let mensaje = validator.escape(data.get("mensaje") || "");
    if (!validator.isEmail(email) || validator.isEmpty(nombre)) {
      return new Response(JSON.stringify({ error: "Email o nombre no v\xE1lido" }), {
        status: 400
      });
    }
    const client = new MongoClient(uri);
    async function run() {
      try {
        client.connect();
        await client.db("formUser").command({ ping: 1 });
        console.log("Conexi\xF3n realizada con la base de datos");
        const db = client.db("Contactos");
        const collection = db.collection("Formularios");
        const doc = {
          Nombre: `${nombre}`,
          Apellidos: `${apellidos}`,
          Correo: `${email}`,
          Telefono: `${telefono}`,
          DisponibilidadDia: `${disponibilidadDia}`,
          DisponibilidadHora: `${disponibilidadHora}`,
          Mensaje: `${mensaje}`
        };
        const result = await collection.insertOne(doc);
        console.log("Inserci\xF3n realizada");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      } finally {
        await client.close();
        return new Response(JSON.stringify({}), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    }
    run().catch(console.dir);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "content": ($$result2) => renderTemplate`${maybeRenderHead()}<form method="post" class="space-y-8 mt-32 lg:mr-3 lg:ml-6 lg:mt-20 xl:mr-16 mb-4 2xl:mt-20 dark:bg-[#003e74] lg:rounded-xl p-4 h-screen lg:h-auto"> <div class="space-y-2"> <h2 class="text-3xl font-bold dark:text-white">
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
}, "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto2.astro", void 0);

const $$file = "C:/Users/tamenis/Documents/Uned/AstroApp/src/pages/Contacto2.astro";
const $$url = "/Contacto2";

export { $$Contacto2 as default, $$file as file, prerender, $$url as url };
