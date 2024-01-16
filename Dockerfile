// Descargamos la imagen de Node
FROM node:18 AS runtime
// Creamos una carpeta y la asignamos como espacio de trabajo
RUN mkdir -p /usr/app
WORKDIR /usr/app
// Copiamos todo el contenido de nuestra aplicación en el directorio que hemos establecido como espacio de trabajo
COPY . .
// Comandos de npm para instalar las dependencias y para construir un entorno de desarrollo
RUN npm install
RUN npm run build
// Variables asignadas para la configuración de red
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
// Comando para iniciar el script que pondrá en funcionamiento el servidor
CMD node ./dist/server/entry.mjs
