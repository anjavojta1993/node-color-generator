const randomColor = require('randomcolor');
const color = randomColor();

const chalk = require('chalk');

const str = `##############################
##############################
##############################
#####                    #####
#####     ${color}        #####
#####                    #####
##############################
##############################
##############################`;

if (!process.argv[2]) {
  console.log(chalk.hex(color)(str));
} else if (process.argv[2]) {
  console.log(chalk.keyword(process.argv[2])(str));
} else if (process.argv[3] === 'dark') {
  randomColor({
    luminosity: 'dark',
    hue: process.argv[2],
  });
  console.log(chalk.keyword(process.argv[2][3])(str));
} else if (process.argv[3] === 'light') {
  randomColor({
    luminosity: 'light',
    hue: process.argv[2],
  });
  console.log(chalk.keyword(process.argv[2][3])(str));
}
