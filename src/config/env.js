require('dotenv').config();
const { get } = require('env-var');

const envConfig = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envConfig
}