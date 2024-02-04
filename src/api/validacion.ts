import type { APIRoute } from "astro"
import { Db,MongoClient } from "mongodb"
const uri = import.meta.env.MONGODB_URI

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const nombre = data.get('nombre')
  const apellidos = data.get('apellidos')
  const email = data.get('email')
  const telefono = data.get('telefono')
  const disponibilidadDia = data.get('disponibilidadDia')
  const disponibilidadHora = data.get('disponibilidadHora')
  const mensaje = data.get('mensaje')
  // Valida los datos - probablemente querrás hacer más que esto
  if (!nombre || !email) {
    return new Response(
    );
  }
  const client = new MongoClient(uri)
  async function run() {
    try {
      await client.db().command({ ping: 1 })
      console.log('Conexión realizada con la base de datos')
      const db = client.db('Contactos')
      const collection = db.collection('Formularios')
      const doc = {
        Nombre: `${nombre}`,
        Apellidos: `${apellidos}`,
        Correo: `${email}`,
        Telefono: `${telefono}`,
        DisponibilidadDia: `${disponibilidadDia}`,
        DisponibilidadHora: `${disponibilidadHora}`,
        Mensaje: `${mensaje}`
      }
      const result = await collection.insertOne(doc)
      console.log('Inserción realizada')
    }catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
    }
     finally {
      await client.close()
    }
  }run().catch(console.dir)
  // Haz algo con los datos, luego devuelve una respuesta de éxito
  return new Response(
  
);
};