import { MongoClient } from 'mongodb';
import validator from 'validator';

const link = "/formularioExitoso";
const usuarioDB = process.env.USUARIO_DB || "formUser";
const baseDatos = process.env.BASE_DATOS || "Contactos";
const coleccion = process.env.COLECCION || "Formularios";
const uri = process.env.MONGODB_URI || "mongodb+srv://formUser:ybTuyL8ii7hy7HDj@ruart.hhrirls.mongodb.net/?retryWrites=true&w=majority";
const GET = async ({ request, redirect }) => {
  return new Response(JSON.stringify({ error: "Email o nombre no válido" }), {
    status: 400
  });
};
const POST = async ({ request, redirect }) => {
  const data = await request.formData();
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
    return new Response(JSON.stringify({ error: "Email o nombre no válido" }), {
      status: 400
    });
  }
  const client = new MongoClient(uri);
  console.log("Cliente base de datos");
  const doc = {
    Nombre: `${nombre}`,
    Apellidos: `${apellidos}`,
    Correo: `${email}`,
    Telefono: `${telefono}`,
    DisponibilidadDia: `${disponibilidadDia}`,
    DisponibilidadHora: `${disponibilidadHora}`,
    Mensaje: `${mensaje}`
  };
  async function run() {
    try {
      client.connect();
      await client.db(usuarioDB).command({ ping: 1 });
      console.log("Conexión realizada con la base de datos");
      const db = client.db(baseDatos);
      const collection = db.collection(coleccion);
      const result = await collection.insertOne(doc);
      console.log("Inserción realizada");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      await client.close();
      return new Response(JSON.stringify({}), {
        status: 201,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  }
  run().catch(console.dir);
  return redirect(link, 307);
};

export { GET, POST };
