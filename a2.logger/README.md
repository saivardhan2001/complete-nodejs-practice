# Creating logs
# Winston 
 
 In the context of Node.js, "Winston" refers to the open-source logging library for JavaScript and Node.js applications. It is designed to be simple, easy to use, and flexible, with support for multiple transports (i.e., logging methods) such as console logs, file logs, and syslog, among others.

Winston provides a unified logging interface that can be used across an entire Node.js application, making it easy to standardize and manage logs. It also includes support for log levels, metadata, and log filtering, allowing you to fine-tune your logging configuration to your specific needs.

If you're building a Node.js application and need to implement logging, Winston is a great option to consider.

## Logging

Logging levels in winston conform to the severity ordering specified by RFC5424: severity of all levels is assumed to be numerically ascending from most important to least important.

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

### Basic approach to create logger
create a file name creatinglogg.js

const winston = require('winston');
const logger = winston.createLogger({
    level:'debug',
    format:winston.format.simple(),
    transports:[new winston.transports.Console()],
});
module.exports=logger;

we need to set level according to our need.

### To use this module
create a file name usingmod.js

const logger=require('./creatinglogg');
logger.error('error');
logger.warn('warn');
logger.info('info');
logger.debug('debug');

### output                                                                                                                                           
c:\Users\kvardha\secondnode\a2.logger>node usingmod                                                                                         
error: error                                                                                                                                
warn: warn                                                                                                                                  
info: info                                                                                                                                  
debug: debug 

## creating our own logger
### adding timestamp and level

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp({format:'YYYY-MM-DD'}),
     myFormat
  ),
  transports: [new transports.Console()]
});
module.exports=logger;

### output
c:\Users\kvardha\secondnode\a2.logger>node usingmod                                                                                         
2023-02-10 [right meow!] error: error                                                                                                       
2023-02-10 [right meow!] warn: warn                                                                                                         
2023-02-10 [right meow!] info: info      

## winston-daily-rotate-file 

Winston-daily-rotate-file is a transport for the Winston logging library in Node.js that rotates logs on a daily basis. It means that every day, a new log file will be created, and logs will be written to that file. When the file reaches a certain size, the logging will switch to a new file. This makes it easier to manage logs and prevents log files from becoming too large, which can cause performance issues.

The winston-daily-rotate-file module provides the ability to specify the filename pattern for log files, the log directory, and other options such as the date pattern and maximum file size. By using this transport, you can ensure that your logs are rotated daily and you can easily access the logs for a specific day when needed.

### creating daily-rotate-file

const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const rotateFileTransport = new DailyRotateFile({
  filename: './logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  transports: [rotateFileTransport]
});

module.exports = logger;

In this example, the logs will be stored in the logs directory and will have the format application-YYYY-MM-DD.log. The logs will be rotated daily, and the archive will be compressed. The size of each log file is limited to 20 MB, and logs older than 14 days will be automatically deleted.
### using daily-rotate-file
You can use this logger in your application by importing it and calling its log method:

const logger = require('./logger');

logger.log('info', 'Hello, this is a test log message.');
### output
This will log the message 'Hello, this is a test log message.' with the level 'info' to the daily rotated log file.




