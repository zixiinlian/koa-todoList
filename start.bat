scho "start..."
if not exist node_modules (npm install)
node --harmony app.js
webpack
scho "end!"

