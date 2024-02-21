import type { APIRoute } from "astro"
import { MongoClient} from 'mongodb'
import validator from 'validator'

const link ="/formularioExitoso"

const usuarioDB = ( process.env.USUARIO_DB || import.meta.env.USUARIO_DB )
const baseDatos = (process.env.BASE_DATOS || import.meta.env.BASE_DATOS)
const coleccion = (process.env.COLECCION || import.meta.env.COLECCION)
const uri = (process.env.MONGODB_URI||import.meta.env.MONGODB_URI)


//const usuarioDB = import.meta.env.USUARIO_DB
//const baseDatos = import.meta.env.BASE_DATOS
//const coleccion = import.meta.env.COLECCION
//const uri = import.meta.env.MONGODB_URI
export const GET:APIRoute = async ({request,redirect}) => {
  return new Response(JSON.stringify({ error: 'Email o nombre no válido' }), {
    status: 400
  })
}

export const POST:APIRoute = async ({request,redirect}) => {
  const data = await request.formData(); // Here's the data sent by the form
  let nombre = validator.escape(data.get('nombre') || '') // Sanitizar el nombre
  let apellidos = validator.escape(data.get('apellidos') || '') // Sanitizar los apellidos
  let email = validator.normalizeEmail(data.get('email') || '') // Sanitizar y normalizar el correo electrónico
  let telefono = validator.escape(data.get('telefono') || '') // Sanitizar el teléfono
  let disponibilidadDia = validator.escape(data.get('disponibilidadDia') || '') // Sanitizar la disponibilidad del día
  let disponibilidadHora = validator.escape(data.get('disponibilidadHora') || ''
  ) // Sanitizar la disponibilidad de la hora
  let mensaje = validator.escape(data.get('mensaje') || '') // Sanitizar el mensaje

  if (!validator.isEmail(email) || validator.isEmpty(nombre)) {
    return new Response(JSON.stringify({ error: 'Email o nombre no válido' }), {
      status: 400
    })
  }
  const client = new MongoClient(uri)
  console.log("Cliente base de datos")
  const doc = {
    Nombre: `${nombre}`,
    Apellidos: `${apellidos}`,
    Correo: `${email}`,
    Telefono: `${telefono}`,
    DisponibilidadDia: `${disponibilidadDia}`,
    DisponibilidadHora: `${disponibilidadHora}`,
    Mensaje: `${mensaje}`
  }
  async function run() {
    try {
      client.connect()
      await client.db(usuarioDB).command({ ping: 1 })
      console.log('Conexión realizada con la base de datos')
      const db = client.db(baseDatos)
      const collection = db.collection(coleccion)
      const result = await collection.insertOne(doc)
      console.log('Inserción realizada')
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
    } finally {
      await client.close()
      return new Response(JSON.stringify({}), {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      })
    }
  }
  run().catch(console.dir)
  return redirect(link, 307)
}
