const winston = require('winston');
const logger = winston.createLogger({
 level: 'info',
 format: winston.format.json(),
 defaultMeta: { service: 'arthmetic operations' },
 transports: [
 new winston.transports.Console({
 format: winston.format.simple(),
 }),
 new winston.transports.File({ filename: 'logs/error.log', level:
'error' }),
 new winston.transports.File({ filename: 'logs/combined.log' }),
 ],
})

module.exports = logger