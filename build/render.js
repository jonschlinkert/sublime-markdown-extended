const fs = require('fs');
const path = require('path');
const argv = process.argv.slice(2);

const date = () => {
  let d = new Date();
  let mo = d.getUTCMonth() + 1;
  let dd = d.getUTCDate();
  let yr = d.getUTCFullYear();
  var hrs = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  return `${yr}${mo}${dd}${hrs}${min}${sec}`;
};

const renderFences = (filepath, context) => {
  let str = fs.readFileSync(path.join(__dirname, filepath), 'utf8');
  let re = /{{([^}]+?)}}/g;
  let definitions = [];

  for (let definition of context.definitions) {
    definitions.push('', `# fenced markdown: ${definition.name.replace(/^(text|source)\./, '')}`);
    let val = str.replace(re, (m, $1) => definition[$1]);
    if (definition.append) val += '\n' + definition.append;
    definitions.push(val);
  }

  let res = definitions.join('\n');
  return res.replace(/^/gm, '    ');
};

function backupFenzes() {
  let existing = path.join(__dirname, 'output/fences.yaml');
  let newFile = path.join(__dirname, `backups/fences-${date()}.yaml`);
  fs.copyFileSync(existing, newFile);
}

function writeFences() {
  let res = renderFences('templates/fences.hbs', require('./data/context.js'));
  if (argv.includes('--write')) {
    let dest = path.join(__dirname, 'output/fences.yaml');
    fs.writeFileSync(dest, res);
  } else {
    console.log(res);
  }
}

function renderSyntax(filepath) {
  let str = fs.readFileSync(path.join(__dirname, filepath), 'utf8');
  let fences = renderFences('templates/fences.hbs', require('./data/context.js'));
  return str.replace('{{fences}}', fences);
}

function backupSyntax() {
  let existing = path.join(__dirname, '../Syntaxes/Markdown Extended.sublime-syntax');
  let newFile = path.join(__dirname, `backups/Markdown Extended-${date()}.sublime-syntax`);
  fs.copyFileSync(existing, newFile);
}

function writeSyntax() {
  const res = renderSyntax('templates/syntax.hbs');
  if (argv.includes('--write')) {
    fs.writeFileSync(path.join(__dirname, '../Syntaxes/Markdown Extended.sublime-syntax'), res);
    console.log('updated syntax file');
  } else {
    console.log(res);
  }
}

if (argv.includes('syntax')) {
  backupSyntax();
  writeSyntax();
}

if (argv.includes('fences')) {
  backupFenzes();
  writeFences();
}
