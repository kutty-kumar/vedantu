import createKnexClient from './knex-client'
import createHomeApp from './app/home'

function createConfig({env}){
    const db = createKnexClient({
        connectionString: env.databaseUrl
    });
    const homeApp = createHomeApp({db});
    return {
        env,
        homeApp
    }
}

export default createConfig
