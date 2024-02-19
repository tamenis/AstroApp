// Importa las bibliotecas necesarias
import { MongoClient } from 'mongodb';
import validator from 'validator';

// URI de conexión a MongoDB
const uri = "mongodb+srv://formUser:ybTuyL8ii7hy7HDj@ruart.hhrirls.mongodb.net/?retryWrites=true&w=majority";

// Exporta la función para manejar la solicitud POST
export async function post(req, res) {
  try {
    // Accede a los datos del formulario desde req.body
    const { nombre, apellidos, email, telefono, disponibilidadDia, disponibilidadHora, mensaje } = req.body;
    console.log("Petición procesada")
    // Realiza la validación de los datos del formulario
    const nombreEscapado = validator.escape(nombre || '');
    const apellidosEscapados = validator.escape(apellidos || '');
    const emailNormalizado = validator.normalizeEmail(email || '');
    const telefonoEscapado = validator.escape(telefono || '');
    const disponibilidadDiaEscapado = validator.escape(disponibilidadDia || '');
    const disponibilidadHoraEscapado = validator.escape(disponibilidadHora || '');
    const mensajeEscapado = validator.escape(mensaje || '');

    // Verifica si los datos del formulario son válidos
    if (!validator.isEmail(emailNormalizado) || validator.isEmpty(nombreEscapado)) {
      return res.status(400).json({ error: 'Email o nombre no válido' });
    }

    // Conecta con la base de datos MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Conexión base de datos")
    // Accede a la base de datos y la colección
    const db = client.db('Contactos');
    const collection = db.collection('Formularios');

    // Crea el documento a insertar en la base de datos
    const doc = {
      Nombre: nombreEscapado,
      Apellidos: apellidosEscapados,
      Correo: emailNormalizado,
      Telefono: telefonoEscapado,
      DisponibilidadDia: disponibilidadDiaEscapado,
      DisponibilidadHora: disponibilidadHoraEscapado,
      Mensaje: mensajeEscapado
    };

    // Inserta el documento en la colección
    const result = await collection.insertOne(doc);
    console.log('Inserción realizada');

    // Cierra la conexión con la base de datos
    await client.close();
    console.log("cliente cerrado")
    // Envía una respuesta al cliente
    return res.status(200).json({ message: 'Formulario enviado correctamente' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}