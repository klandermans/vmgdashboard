const fs = require('fs');
const vm = require('vm');
const path = require('path');
const dir = path.join(__dirname, '..');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
let ok = true;
for (const f of files) {
  try {
    const code = fs.readFileSync(path.join(dir, f), 'utf8');
    new vm.Script(code);
  } catch (e) {
    console.error('Syntax error in', f, e.message);
    ok = false;
  }
}
if (!ok) {
  process.exitCode = 1;
} else {
  console.log('lint_js passed');
}
