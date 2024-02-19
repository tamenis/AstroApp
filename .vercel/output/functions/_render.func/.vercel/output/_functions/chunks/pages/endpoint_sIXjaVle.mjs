import { MongoClient } from 'mongodb';
import validator from 'validator';

const uri = "mongodb+srv://formUser:ybTuyL8ii7hy7HDj@ruart.hhrirls.mongodb.net/?retryWrites=true&w=majority";
async function post(req, res) {
  try {
    const { nombre, apellidos, email, telefono, disponibilidadDia, disponibilidadHora, mensaje } = req.body;
    const nombreEscapado = validator.escape(nombre || "");
    const apellidosEscapados = validator.escape(apellidos || "");
    const emailNormalizado = validator.normalizeEmail(email || "");
    const telefonoEscapado = validator.escape(telefono || "");
    const disponibilidadDiaEscapado = validator.escape(disponibilidadDia || "");
    const disponibilidadHoraEscapado = validator.escape(disponibilidadHora || "");
    const mensajeEscapado = validator.escape(mensaje || "");
    if (!validator.isEmail(emailNormalizado) || validator.isEmpty(nombreEscapado)) {
      return res.status(400).json({ error: "Email o nombre no válido" });
    }
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("Contactos");
    const collection = db.collection("Formularios");
    const doc = {
      Nombre: nombreEscapado,
      Apellidos: apellidosEscapados,
      Correo: emailNormalizado,
      Telefono: telefonoEscapado,
      DisponibilidadDia: disponibilidadDiaEscapado,
      DisponibilidadHora: disponibilidadHoraEscapado,
      Mensaje: mensajeEscapado
    };
    const result = await collection.insertOne(doc);
    console.log("Inserción realizada");
    await client.close();
    return res.status(200).json({ message: "Formulario enviado correctamente" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
}

export { post };
