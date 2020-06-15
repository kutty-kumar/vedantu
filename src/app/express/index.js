import express from 'express'
import {join} from 'path'

import mountMiddleware from './mount-middleware'
import mountRoutes from './mount-routes'

function createExpressApp({config, env}) {
    const app = express();
    app.set('views', join(__dirname, '..'));
    app.set('view engine', 'pug');
    mountMiddleware(app, env);
    mountRoutes(app, config);
    return app
}

function createHandlers({queries}) {
    function home(req, res, next) {
        return queries.loadHomePage().then(viewData =>
            res.render('home/templates/home', viewData))
            .catch(next);
    }

    return {home}
}

function createQueries({db}) {
    function loadHomePage() {
        return db.then(client =>
            client('videos').sum('view_count as videosWatched').then(rows => rows[0]))
    }

    return {
        loadHomePage
    }
}

function createHome({db}) {
    const queries = createQueries({db});
    const handlers = createHandlers({queries});
    const router = express.Router();
    router.route('/').get(handlers.home);
    return {handlers, queries, router}
}

export default createExpressApp
export default createHome
