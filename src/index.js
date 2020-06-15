import createExpressApp from './app/express'
import createConfig from './config'
import { port, appName, env } from './env'

const config = createConfig({env});
const app = createExpressApp({config, env});

function start(){
    app.listen(9000, signalAppStart)
}

function signalAppStart(){
    console.log(`${appName} started`);
    console.table([['Port', port], ['Environment', env]])
}

module.exports =  {
    start,
    app,
    config
};
