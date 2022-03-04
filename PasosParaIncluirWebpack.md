# Pasos para incluir webpack en su proyecto

1. Ejecutar en consola esto: "npm install webpack webpack-cli --save-dev"
2. Crear un archivo en el root de su proyecto llamado "webpack.config.js"
3. Quitar del archivo "package.json" la línea "type": "module",
4. Quitar el atributo "type = module" del index.html
5. Cambiar la ruta del archivo js según el archivo exportado por webpack
