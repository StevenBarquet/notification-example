const fs = require('fs');
const path = require('path');

/** Script that runs when the repo starts as prod or dev */
async function main() {
  const NODE_ENV = process?.env?.NODE_ENV

  const fullFile = path.join(__dirname, '../../../src/entities/health/config/envsData.ts');

  let file = 'export const envsData= {\n';
  file += `\tNODE_ENV: ${'`'}${NODE_ENV}${'`'},\n`;
  file += '}';

  fs.writeFile(fullFile, file, (err) => {
    if (err) throw err;
    console.log('Archivo de version creado en ->', fullFile);
  });
}

main();
