import { MongoClient } from 'mongodb';
import validator from 'validator';

const uri = encodeURI("mongodb+srv://formUser:ybTuyL8ii7hy7HDj@ruart.hhrirls.mongodb.net/?retryWrites=true&w=majority");
const prerender = false;
const POST = async ({
  request
}) => {
  const data = await request.formData();
  let nombre = validator.escape(data.get("nombre") || "");
  let apellidos = validator.escape(data.get("apellidos") || "");
  let email = validator.normalizeEmail(data.get("email") || "");
  let telefono = validator.escape(data.get("telefono") || "");
  let disponibilidadDia = validator.escape(data.get("disponibilidadDia") || "");
  let disponibilidadHora = validator.escape(data.get("disponibilidadHora") || "");
  let mensaje = validator.escape(data.get("mensaje") || "");
  if (!validator.isEmail(email) || validator.isEmpty(nombre)) {
    return new Response(JSON.stringify({
      error: "Email o nombre no válido"
    }), {
      status: 400
    });
  }
  const client = new MongoClient(uri);
  async function run() {
    try {
      await client.connect();
      await client.db("formUser").command({
        ping: 1
      });
      console.log("Conexión realizada con la base de datos");
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
      console.log("Inserción realizada");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      await client.close();
      return new Response(JSON.stringify({
        error: "Formulario enviado"
      }), {
        status: 200
      });
    }
  }
  run().catch(console.dir);
};

export { POST, prerender };
