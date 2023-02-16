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
