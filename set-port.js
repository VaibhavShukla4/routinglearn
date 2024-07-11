/** @format */

require('dotenv').config({ path: '.env.local' });
const exec = require('child_process').exec;

const port = process.env.PORT || 1012;

console.log(`Starting server on port => http://localhost:${port}`);

exec(`next dev -p ${port}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Execution error: ${err}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});
