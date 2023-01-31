const fs = require('fs');
const path = require('path');
const os = require('os');

function installPostCommit() {
  const hook = scriptPathSelector();
  const destinyPath = path.join(__dirname, '../../.git/hooks/post-commit');
  fs.copyFileSync(hook, destinyPath);
}

/** Select the correct script path acording to the OS */
function scriptPathSelector() {
  const isMac = os.type() === 'Darwin';
  const hookFolder = isMac ? 'post-comit-mac' : 'post-commit-others';
  return path.join(__dirname, `./hooks/${hookFolder}/post-commit`);
}

function main() {
  installPostCommit();
  console.log(`
  '+-----------+'
  '| H O O K S |'
  '+-----------+'
  `);
}

main();
