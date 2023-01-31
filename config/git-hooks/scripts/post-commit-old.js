const fs = require('fs');
const path = require('path');

const fullFile = path.join(__dirname, '../../../src/configs/appVersion.ts');
const versionString = require('child_process')
  .execSync('git rev-list --format="%s" --max-count=1 HEAD')
  .toString()
  .substring(7);

const commitID = versionString?.trim()?.split('\n')[0];

const commitMssgArray = versionString?.split(`${commitID}\n`);

const commitMssg = commitMssgArray?.join(' ').trim();

const file = `export const commitID = '${commitID}';

export const commitMssg = '${commitMssg}';
`;

fs.writeFile(fullFile, file, (err) => {
  if (err) throw err;
  console.log('Archivo de version creado en ->', fullFile);
});
