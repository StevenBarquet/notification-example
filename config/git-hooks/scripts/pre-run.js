const fs = require('fs');
const path = require('path');
const defaultEnvs = require('../../default');
const devEnvs = require('../../development');
const prodEnvs = require('../../production');

/** Script that runs when the repo starts as prod or dev */
async function main() {
  const isProd = process?.env?.NODE_ENV === 'production';

  const currentEnvs = isProd ? { ...defaultEnvs, ...prodEnvs } : { ...defaultEnvs, ...devEnvs };
  console.log(JSON.stringify(currentEnvs, null, ' '));
  const fullFile = path.join(__dirname, '../../../src/entities/health/config/envsData.ts');

  let file = 'export const envsData= {\n';
  
  const envsKeys = Object.keys(currentEnvs);
  
  envsKeys.forEach((key) => {
    file = `${file}\t${key}: ${'`'}${currentEnvs[key]}${'`'},\n`;
  });
  file += '}';

  fs.writeFile(fullFile, file, (err) => {
    if (err) throw err;
    console.log('Archivo de version creado en ->', fullFile);
  });
}

main();
