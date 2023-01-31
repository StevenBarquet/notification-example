const fs = require('fs');
const path = require('path');
const git = require('git-last-commit');
const { exec } = require('child_process');

/** */
async function main() {
  await updateVersion();
  await getGitInfo();
}

main();

/** Extrae info del autor, hora, id y comentario del ultimo commit realizado en el repo */
function getGitInfo() {
  try {
    git.getLastCommit(function (er, commit) {
      const fullFile = path.join(
        __dirname,
        '../../../src/entities/health/config/appVersion.ts',
      );
      // read commit object properties
      const commitID = commit?.hash;

      const commitMssg = commit?.subject;

      const commitDate = new Date().toString();

      const commitAuthor = commit?.author?.name;

      const commitBranch = commit?.branch;

      const file = `export const commitID = ${'`'}${commitID}${'`'};
    
  export const commitMssg = ${'`'}${commitMssg}${'`'};
  
  export const commitDate = ${'`'}${commitDate}${'`'};
  
  export const commitAuthor = ${'`'}${commitAuthor}${'`'};
  
  export const commitBranch = ${'`'}${commitBranch}${'`'};
    `;

      fs.writeFile(fullFile, file, (err) => {
        if (err) throw err;
        console.log('Archivo de version creado en ->', fullFile);
      });
    });
  } catch (err) {
    console.log('Error extrallendo info the git o creando el archivo :C');
    console.log(err);
  }
}

/** Execute the update version command */
async function updateVersion() {
  const { stdout, stderr } = await sh('npm version patch -no-git-tag-version'); // the default is 'buffer'
  console.log('Commando ejecutado:\n', stdout || stderr);
}

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, { encoding: 'utf8' }, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
