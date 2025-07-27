const { execSync } = require('child_process');

console.log('Starting build without linting...');

try {
  // Set environment variable to skip linting
  process.env.SKIP_LINT = 'true';
  
  // Run the build command directly
  execSync('npx next build --no-lint', { 
    stdio: 'inherit',
    env: { ...process.env, SKIP_LINT: 'true' }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 