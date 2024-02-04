import { useState } from "preact/hooks";

const placeholder = {
    nombre: 'Introduce tu nombre',
    apellidos: 'Introduce tus apellidos',
    email: 'Introduce tu email',
    telefono: 'Introduce tu telefono',
    mensaje: 'Introduce tu mensaje'
  }

export default function Form(){
    
    const [responseMessage, setResponseMessage] = useState("");

    async function submit(e: SubmitEvent) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await fetch("api/validacion", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.message) {
        setResponseMessage(data.message);
      }
    }

    return(
        <form
        onSubmit={submit}
        slot='content'
        class='space-y-8 mt-28 lg:mr-3 lg:ml-6 lg:mt-2 xl:mr-16 mb-4 2xl:mt-20 dark:bg-[#003e74] lg:rounded-xl p-4 h-screen lg:h-auto'
      >
        <div class='space-y-2'>
          <h2 class='text-3xl font-bold dark:text-white'>Formulario de contacto</h2>
          <p class='dark:text-white'>
            Rellena el formulario y nos pondremos en contacto contigo
          </p>
        </div>
        <div class='space-y-4'>
          <div class='grid grid-cols-2 gap-4'>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white'
                for='first-name'
              >
                Nombre
              </label>
              <input
                class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='first-name'
                placeholder={placeholder.nombre}
                name='nombre'
                type='text'
              />
            </div>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white'
                for='last-name'
              >
                Apellidos
              </label>
              <input
                class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='last-name'
                type='text'
                placeholder={placeholder.apellidos}
                name='apellidos'
              />
            </div>
          </div>
          <div class='space-y-4'>
            <div class='grid grid-cols-2 gap-4'>
              <div class='space-y-2'>
                <label
                  class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white'
                  for='email'
                >
                  Email
                </label>
                <input
                  class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  id='email'
                  placeholder={placeholder.email}
                  type='email'
                  name='email'
                />
              </div>
              <div class='space-y-2'>
                <label
                  class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white'
                  for='last-name'
                >
                  Numero de telefono
                </label>
                <input
                  class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  id='last-name'
                  placeholder={placeholder.telefono}
                  name='telefono'
                  type='text'
                />
              </div>
            </div>
    
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white'
                for='availability'
              >
                Disponibilidad
              </label>
              <div class='flex items-center space-x-2'>
                <select
                  role='combobox'
                  aria-controls='radix-:r1d:'
                  aria-expanded='false'
                  aria-autocomplete='none'
                  dir='ltr'
                  data-state='closed'
                  data-placeholder=''
                  class='flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  id='availability'
                  name='disponibilidadDia'
                >
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miercoles</option>
                  <option>Jueves</option>
                  <option>Viernes</option>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='h-4 w-4 opacity-50'
                    aria-hidden='true'
                  >
                    <path d='m6 9 6 6 6-6'></path>
                  </svg>
                </select>
                <input
                  class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  type='time'
                  name='disponibilidadHora'
                />
              </div>
            </div>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white'
                for='message'
              >
                Mensaje
              </label>
              <textarea
                class='flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]'
                id='message'
                placeholder={placeholder.mensaje}
                name='mensaje'></textarea>
            </div>
            <button
              class='bg-black hover:bg-black/60 dark:bg-[#e0dddd] hover:dark:bg-[#e0dddd]/60 text-white dark:text-black inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
            >
              Enviar formulario
            </button>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      </form>
    );
}