import { envConfig } from './config/env.js';
import { startServer } from './server/server.js';

const main = ()=> {
  startServer({
      port: envConfig.PORT,
      public_path: envConfig.PUBLIC_PATH
    })
}

(async () => {
  main()
})()