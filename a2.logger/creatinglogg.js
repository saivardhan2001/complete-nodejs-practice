// const winston = require('winston');
// const logger = winston.createLogger({
//     level:'debug',
//     format:winston.format.simple(),
//     transports:[new winston.transports.Console()],
// });
// module.exports=logger;

// Adding Timestamp.

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
     myFormat
  ),
  transports: [new transports.Console()]
});
module.exports=logger;


