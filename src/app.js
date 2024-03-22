const { envConfig } = require('./config/env.js');
const { startServer } = require('./server/server.js');

const main = ()=> {
  startServer({
      port: envConfig.PORT,
      public_path: envConfig.PUBLIC_PATH
    })
}

(async () => {
  main()
})()