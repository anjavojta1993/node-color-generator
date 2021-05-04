const randomColor = require('randomcolor');

const chalk = require('chalk');

const userInputOne = process.argv[2];
const userInputTwo = process.argv[3];

const color = randomColor({
  luminosity: userInputTwo,
  hue: userInputOne,
});

const str = `##############################
##############################
##############################
#####                    #####
#####     ${color}        #####
#####                    #####
##############################
##############################
##############################`;

console.log(chalk.hex(color)(str));
