const { spawn } = require('child_process');

console.log('Starting build without linting...');

const build = spawn('npx', ['next', 'build', '--no-lint'], {
  stdio: 'inherit',
  shell: true
});

build.on('close', (code) => {
  console.log(`Build process exited with code ${code}`);
  process.exit(code);
}); 