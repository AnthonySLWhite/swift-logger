import fs from 'fs';
function logger(file) {
  if (!file.match(/\..{3}/g)) {
    file = file.concat('.log');
  }

  fs.appendFile(file, `\n\n${new Date()} \n`, err => {
    err
      ? console.error('Error creating logger!')
      : console.log('Logger created!');
  });

  return function log(data) {
    fs.appendFile(file, JSON.stringify(data).concat('\n'), err => {
      err ? console.error('Error saving log!') : console.log('Log added!');
    });
  };
}

export default logger;
