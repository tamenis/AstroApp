
export async function handleSubmit(event) {
  event.preventDefault();
  console.log("Función handleSubmit")
  const formData = new FormData(event.target);
  console.log("Realizado fetch de formulario")
  const nombre = formData.get('nombre');
  console.log("Nombre"+{nombre})
  const apellidos = formData.get('apellidos');
  const email = formData.get('email');
  console.log("Email"+{email})
  const telefono = formData.get('telefono');
  const disponibilidadDia = formData.get('disponibilidadDia');
  const disponibilidadHora = formData.get('disponibilidadHora');
  const mensaje = formData.get('mensaje');
  try {
    const response = await fetch('/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        disponibilidadDia: disponibilidadDia,
        disponibilidadHora: disponibilidadHora,
        mensaje: mensaje,
      }),
    });

    if (response.ok) {
      console.log('Formulario enviado con éxito');
    } else {
      console.error('Error al enviar el formulario');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
